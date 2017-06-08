import _ from 'underscore'
import Backbone from 'backbone'
import HeaderView from '../HeaderView'
import IndexView from './IndexView'
import ShowView from './ShowView'
import Products from '../../collections/Products'

export default class RootView extends Backbone.Marionette.View {
    constructor(options = {}) {
        super(
            _.defaults({}, options, {
                template: _.template(`
                    <div id="header-region"></div>
                    <div id="main-region"></div>
                `),
                regions: {
                    headerRegion: '#header-region',
                    mainRegion  : '#main-region'
                },
            })
        )
        this.brandId = options.brandId
        this.productId = options.productId
    }
    onRender() {
        this.renderHeader()
        this.productId ? this.renderShow() : this.renderIndex()
    }
    renderHeader() {
        this.getRegion('headerRegion').show(new HeaderView())
    }
    renderIndex() {
        this.getRegion('mainRegion').show(new IndexView({ collection: new Products([], { brandId: this.brandId }) }))
    }
    renderShow() {
        const products = new Products([], { brandId: this.brandId })
        this.getRegion('mainRegion').show(new ShowView({ model: products.findWhere({ id: Number(this.productId) }) }))
    }
}

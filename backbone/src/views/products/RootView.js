import _ from 'underscore'
import Backbone from 'backbone'
import HeaderView from '../HeaderView'
import IndexView from './IndexView'
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
    }
    onRender() {
        this.renderHeader()
        this.renderMain()
    }
    renderHeader() {
        this.getRegion('headerRegion').show(new HeaderView())
    }
    renderMain() {
        const products = new Products()
        this.getRegion('mainRegion').show(new IndexView({ collections: products }))
    }
}

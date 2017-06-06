import _ from 'underscore'
import Backbone from 'backbone'
import BrandsView from './BrandsView'

export default class IndexView extends Backbone.Marionette.View {
    constructor(options = {}) {
        super(
            _.defaults({}, options, {
                className: 'container',
                template: _.template(`
                    <div class="row"  id="brands-region"></div>
                `),
                regions: {
                    brandsRegion: '#brands-region',
                }
            })
        )
    }
    onRender() {
        this.renderBrands()
    }
    renderBrands() {
        this.getRegion('brandsRegion').show(new BrandsView({ collection: this.collection }))
    }
}

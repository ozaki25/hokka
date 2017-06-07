import _ from 'underscore'
import Backbone from 'backbone'

export default class IndexView extends Backbone.Marionette.View {
    constructor(options = {}) {
        super(
            _.defaults({}, options, {
                className: 'container',
                template: _.template(`
                    <div class="row"  id="products-region"></div>
                `),
                regions: {
                    productsRegion: '#products-region',
                }
            })
        )
    }
    onRender() {
        this.renderProducts()
    }
    renderProducts() {
        // this.getRegion('productsRegion').show(new ProductsView({ collection: this.collection }))
    }
}

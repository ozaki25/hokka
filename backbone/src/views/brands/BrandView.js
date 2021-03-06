import _ from 'underscore'
import Backbone from 'backbone'

export default class BrandView extends Backbone.Marionette.View {
    constructor(options = {}) {
        super(
            _.defaults({}, options, {
                className: 'col-xs-6 col-sm-4 col-md-3',
                template: _.template(`
                    <div class="thumbnail">
                       <a href="#" class="to-products-link">
                         <img src="<%- logo %>" alt="<%- name %>">
                       </a>
                    </div>
                `),
                ui: {
                    toProductsLink: '.to-products-link'
                },
                events: {
                    'click @ui.toProductsLink': 'onClickToProductsLink'
                },
            })
        )
    }
    onClickToProductsLink(e) {
        e.preventDefault()
        Backbone.history.navigate(`/b/brands/${ this.model.id }/products`, { trigger: true })
    }
}

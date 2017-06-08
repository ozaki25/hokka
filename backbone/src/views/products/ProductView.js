import _ from 'underscore'
import Backbone from 'backbone'

export default class ProductView extends Backbone.Marionette.View {
    constructor(options = {}) {
        super(
            _.defaults({}, options, {
                className: 'col-xs-6 col-sm-4 col-md-3',
                template: _.template(`
                    <div class="thumbnail">
                       <a href="#" class="link-to-product">
                         <img src="<%- logo %>" alt="<%- name %>">
                       </a>
                    </div>
                `),
                ui: {
                    linkToProduct: '.link-to-product'
                },
                events: {
                    'click @ui.linkToProduct': 'onClickLinkToProduct'
                }
            })
        )
    }
    onClickLinkToProduct(e) {
        e.preventDefault()
        Backbone.history.navigate(`/b/brands/${ this.model.get('brandId') }/products/${ this.model.id }`, { trigger: true })
    }
}

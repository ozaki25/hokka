import _ from 'underscore'
import Backbone from 'backbone'

export default class ShowView extends Backbone.Marionette.View {
    constructor(options = {}) {
        super(
            _.defaults({}, options, {
                className: 'container',
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
        open(this.model.get('link'), '_blank')
    }
}

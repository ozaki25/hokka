import _ from 'underscore'
import Backbone from 'backbone'

export default class BrandView extends Backbone.Marionette.View {
    constructor(options = {}) {
        super(
            _.defaults({}, options, {
                className: 'col-xs-6 col-sm-4 col-md-3',
                childView: 'BrandView',
                template: _.template(`
                    <div class="thumbnail">
                       <a href="#">
                         <img src="<%- logo %>" alt="<%- name %>">
                       </a>
                    </div>
                `),
            })
        )
    }
}

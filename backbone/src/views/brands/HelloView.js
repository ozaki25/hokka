import _ from 'underscore'
import Backbone from 'backbone'

export default class HelloView extends Backbone.Marionette.View {
    constructor(options) {
        super(
            _.defaults({}, options, {
                className: 'container',
                template: _.template(`
                    <h1>Hello</h1>
                `),
            })
        )
    }
}

import Backbone from 'backbone'

export default class Comment extends Backbone.Model {
    constructor(attr = {}, options = {}) {
        super(attr, options)
    }
}

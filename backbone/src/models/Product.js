import Backbone from 'backbone'

export default class Product extends Backbone.Model {
    constructor(attr = {}, options = {}) {
        super(attr, options)
    }
}

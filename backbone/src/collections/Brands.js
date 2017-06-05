import _ from 'underscore'
import Backbone from 'backbone'
import Brand from '../models/Brand'

export default class Brands extends Backbone.Collection {
    constructor(models, options) {
        super(models, _.defaults({}, options, { model: Brand }))
        this.localStorage = new Backbone.LocalStorage('BackboneMarionetteTemplate.Brands')
    }
}

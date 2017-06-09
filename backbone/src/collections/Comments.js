import _ from 'underscore'
import Backbone from 'backbone'
import Comment from '../models/Comment'

export default class Comments extends Backbone.Collection {
    constructor(models = [], options = {}) {
        super(models, _.defaults({}, options, {
            model: Comment,
        }))
        this.url = 'http://localhost:8085/hokka/comments'
    }
}

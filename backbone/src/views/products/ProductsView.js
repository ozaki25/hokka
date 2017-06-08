import _ from 'underscore'
import Backbone from 'backbone'
import ProductView from './ProductView'

export default class ProductsView extends Backbone.Marionette.CollectionView {
    constructor(options = {}) {
        super(
            _.defaults({}, options, {
                childView: ProductView,
            })
        )
    }
}

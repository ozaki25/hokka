import _ from 'underscore'
import Backbone from 'backbone'
import BrandView from './BrandView'

export default class BrandsView extends Backbone.Marionette.CollectionView {
    constructor(options = {}) {
        super(
            _.defaults({}, options, {
                childView: BrandView,
            })
        )
    }
}

import _ from 'underscore'
import Backbone from 'backbone'
import Brand from '../models/Brand'

export default class Brands extends Backbone.Collection {
    constructor(models = [], options = {}) {
        super(models, _.defaults({}, options, {
            model: Brand,
        }))
        this.addDefault()
    }
    addDefault() {
        const brands = [
            {
                name: '六花亭',
                logo: 'https://www.rokkatei-eshop.com/store/Images/logo.png',
            }, {
                name: '石屋製菓',
                logo: 'https://www.ishiya-shop.jp/pict/nmimgsmt1.jpg',
            }, {
                name: 'LeTAO',
                logo: 'https://www.letao.jp/user_data/packages/default/img/branding/images/img_top_main01.jpg',
            }, {
                name: 'ROYCE',
                logo: 'http://www.royce.com/images/pc/heder_logo.jpg',
            },
        ]
        this.add(brands)
    }
}

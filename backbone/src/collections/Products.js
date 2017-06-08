import _ from 'underscore'
import Backbone from 'backbone'
import Product from '../models/Product'

export default class Products extends Backbone.Collection {
    constructor(models = [], options = {}) {
        super(models, _.defaults({}, options, {
            model: Product,
        }))
        this.brandId = options.brandId
        this.category = options.category
        this.addDefault()
    }
    addDefault() {
        const all = [
            {
                id: 1,
                brandId: 1,
                category: '焼菓子',
                name: 'マルセイバターサンド',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10048&ccd=F3000514',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10048.jpg',
            }, {
                id: 2,
                brandId: 1,
                category: '焼菓子',
                name: 'マルセイビスケット',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=11283&ccd=F3000514',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/11283.jpg',
            }, {
                id: 3,
                brandId: 1,
                category: '焼菓子',
                name: '□△○（まるさんかくしかく）',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=11319&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/11319.jpg',
            }, {
                id: 4,
                brandId: 1,
                category: '焼菓子',
                name: 'いつか来た道',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10597&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                id: 5,
                brandId: 1,
                category: '焼菓子',
                name: 'チョコマロン',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10221&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10221.jpg',
            }, {
                id: 6,
                brandId: 1,
                category: '焼菓子',
                name: 'なんもなんも（パルメザン）',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=11246&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/11246.jpg',
            }, {
                id: 7,
                brandId: 1,
                category: '焼菓子',
                name: 'めんこい大平原',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10076&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10076.jpg',
            }, {
                id: 8,
                brandId: 1,
                category: '焼菓子',
                name: 'リッチランド',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10238&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10238.jpg',
            }, {
                id: 9,
                brandId: 1,
                category: '焼菓子',
                name: '郭公の里',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=11305&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/11305.jpg',
            }, {
                id: 10,
                brandId: 1,
                category: '焼菓子',
                name: '玉がしわ',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10626&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10626.jpg',
            }, {
                id: 11,
                brandId: 1,
                category: '焼菓子',
                name: '雪やこんこ',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10888&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10888.jpg',
            }, {
                id: 12,
                brandId: 1,
                category: '焼菓子',
                name: '霜だたみ',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10141&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10141.jpg',
            }, {
                id: 13,
                brandId: 1,
                category: '焼菓子',
                name: '',
                link: '',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                id: 14,
                brandId: 1,
                category: '焼菓子',
                name: '大平原',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10073&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10073.jpg',
            }, {
                id: 15,
                brandId: 1,
                category: '焼菓子',
                name: '百歳',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=30000&ccd=F3000522',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/30000.jpg',
            }, {
                id: 16,
                brandId: 1,
                category: '洋菓子',
                name: 'マルセイキャラメル',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10611&ccd=F3000514',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10611.jpg',
            }, {
                id: 17,
                brandId: 1,
                category: '洋菓子',
                name: 'マルセイバターケーキ',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=11277&ccd=F3000514',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/11277.jpg',
            }, {
                id: 18,
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                id: 19,
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                id: 20,
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                id: 21,
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                id: 22,
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                id: 23,
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                id: 24,
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                logo: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                id: 25,
                brandId: 2,
                category: '',
                name: '',
                link: '',
                logo: '',
            }, {
                id: 26,
                brandId: 3,
                category: '',
                name: '',
                link: '',
                logo: '',
            }, {
                id: 27,
                brandId: 4,
                category: '',
                name: '',
                link: '',
                logo: '',
            }
        ]
        const products = this.brandId ? _(all).where({ brandId: Number(this.brandId) }) :
                         this.category ? _(all).where({ category: this.category }) : all
        this.add(products)
    }
}

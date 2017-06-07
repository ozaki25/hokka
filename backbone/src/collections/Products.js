import _ from 'underscore'
import Backbone from 'backbone'
import Product from '../models/Product'

export default class Products extends Backbone.Collection {
    constructor(models = [], options = {}) {
        super(models, _.defaults({}, options, {
            model: Product,
        }))
        this.addDefault()
    }
    addDefault() {
        const products = [
            {
                brandId: 1,
                category: '焼菓子',
                name: 'マルセイバターサンド',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10048&ccd=F3000514',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10048.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: 'マルセイビスケット',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=11283&ccd=F3000514',
                image: 'https://www.rokkatei-eshop.com/store/images/products/11283.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: '□△○（まるさんかくしかく）',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=11319&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/11319.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: 'いつか来た道',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10597&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: 'チョコマロン',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10221&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10221.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: 'なんもなんも（パルメザン）',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=11246&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/11246.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: 'めんこい大平原',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10076&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10076.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: 'リッチランド',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10238&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10238.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: '郭公の里',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=11305&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/11305.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: '玉がしわ',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10626&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10626.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: '雪やこんこ',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10888&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10888.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: '霜だたみ',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10141&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10141.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: '',
                link: '',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: '大平原',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10073&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10073.jpg',
            }, {
                brandId: 1,
                category: '焼菓子',
                name: '百歳',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=30000&ccd=F3000522',
                image: 'https://www.rokkatei-eshop.com/store/images/products/30000.jpg',
            }, {
                brandId: 1,
                category: '洋菓子',
                name: 'マルセイキャラメル',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=10611&ccd=F3000514',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10611.jpg',
            }, {
                brandId: 1,
                category: '洋菓子',
                name: 'マルセイバターケーキ',
                link: 'https://www.rokkatei-eshop.com/store/ProductDetail.aspx?pcd=11277&ccd=F3000514',
                image: 'https://www.rokkatei-eshop.com/store/images/products/11277.jpg',
            }, {
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                brandId: 1,
                category: '洋菓子',
                name: '',
                link: '',
                image: 'https://www.rokkatei-eshop.com/store/images/products/10597.jpg',
            }, {
                name: '',
                link: '',
                image: '',
            }
        ]
        this.add(products)
    }
    setUrl(brandId) {
        this.url = `/brands/${brandId}/products`
    }
}

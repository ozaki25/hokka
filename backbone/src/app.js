import 'jquery'
import 'bootstrap'
import 'backbone.marionette'
import 'backbone.validation'
import Backbone from 'backbone'
import BrandRootView from './views/brands/RootView'
import ProductRootView from './views/products/RootView'

class appRouter extends Backbone.Marionette.AppRouter {
    constructor() {
        super({
            appRoutes: {
                '' : 'brands',
                'b' : 'brands',
                'b/brands' : 'brands',
                'b/brands/:brandId/products' : 'products',
                'b/brands/:brandId/products/:productId' : 'product',
            },
            controller: {
                brands: () => app.showView(new BrandRootView()),
                products: (brandId) => app.showView(new ProductRootView({ brandId: brandId })),
                product: (brandId, productId) => app.showView(new ProductRootView({ brandId: brandId, productId: productId })),
            },
        })
    }
}

const app = new Backbone.Marionette.Application({
    region: '#root-region',
    onStart: () => {
        new appRouter()
        Backbone.history.start()
    }
})

app.start()

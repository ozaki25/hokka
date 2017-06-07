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
                'backbone' : 'brands',
                'backbone/brands' : 'brands',
                'backbone/brands/:id/products' : 'products',
            },
            controller: {
                brands: () => app.showView(new BrandRootView()),
                products: (id) => app.showView(new ProductRootView({ brandId: id })),
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

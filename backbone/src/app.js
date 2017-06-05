import 'jquery'
import 'bootstrap'
import 'backbone.marionette'
import 'backbone.validation'
import 'backbone.localstorage'
import Backbone from 'backbone'
import BrandRootView from './views/brands/RootView'

class appRouter extends Backbone.Marionette.AppRouter {
    constructor() {
        super({
            appRoutes: {
                ''               : 'brands',
                'backbone'       : 'brands',
                'backbone/brands': 'brands',
            },
            controller: {
                brands: () => { app.showView(new BrandRootView()) },
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

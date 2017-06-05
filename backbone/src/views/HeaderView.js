import _ from 'underscore'
import Backbone from 'backbone'

export default class HeaderView extends Backbone.Marionette.View {
    constructor(options) {
        super(
            _.defaults({}, options, {
                template: _.template(`
                    <nav class="navbar navbar-default">
                      <div class="container">
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-linksa">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                          <a href="#" class="navbar-brand">Hokkaido</a>
                        </div>
                        <div class="collapse navbar-collapse" id="navbar-linksa">
                          <ul class="nav navbar-nav">
                            <li><a href="#">brands</a></li>
                            <li><a href="#">categories</a></li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                `)
            })
        )
    }
}

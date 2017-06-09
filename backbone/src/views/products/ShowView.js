import _ from 'underscore'
import Backbone from 'backbone'
import Comment from '../../models/Comment'
import Comments from '../../collections/Comments'

export default class ShowView extends Backbone.Marionette.View {
    constructor(options = {}) {
        super(
            _.defaults({}, options, {
                className: 'container',
                template: _.template(`
                     <h3><%- name %></h3>
                     <div class="thumbnail">
                       <a href="#" class="link-to-product">
                         <img src="<%- logo %>" alt="<%- name %>">
                       </a>
                    </div>
                    <div class="form-group">
                      <label class="label-control">名前</label>
                      <input class="form-control input-name">
                    </div>
                    <div class="form-group">
                      <label class="label-control">コメント</label>
                      <input class="form-control input-content">
                    </div>
                    <div class="hidden-sm hidden-md hidden-lg">
                      <button class="btn btn-primary btn-block submit-comment">Submit</button>
                    </div>
                    <div class="hidden-xs">
                      <button class="btn btn-primary submit-comment">Submit</button>
                    </div>
                `),
                ui: {
                    linkToProduct: '.link-to-product',
                    inputName: '.input-name',
                    inputContent: '.input-content',
                    submitComment: '.submit-comment',
                },
                events: {
                    'click @ui.linkToProduct': 'onClickLinkToProduct',
                    'click @ui.submitComment': 'onClickSubmitComment',
                }
            })
        )
    }
    onClickLinkToProduct(e) {
        e.preventDefault()
        open(this.model.get('link'), '_blank')
    }
    onClickSubmitComment(e) {
        e.preventDefault()
        const name = this.ui.inputName.val().trim()
        const content = this.ui.inputContent.val().trim()
        if(!content || !name) {
            alert('空欄はだめ')
            return
        }
        const comment = new Comment({ name: name, content: content, productId: this.model.id }, { collection: new Comments() })
        comment.save()
    }
}

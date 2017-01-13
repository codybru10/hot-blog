import Ember from 'ember';

export default Ember.Component.extend({
  addComment: false,
  actions: {
    commentFormShow() {
      this.set('addComment', true);
    },
    saveComment() {
     var params = {
       user: this.get('user'),
       comment: this.get('comment')
     };
     this.set('addBlog', false);
     this.sendAction('saveComment', params);
   }
  }
});

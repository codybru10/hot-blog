import Ember from 'ember';

export default Ember.Component.extend({
  isTextShowing: false,
  actions: {
    textShow: function() {
      this.set('isTextShowing', true);
    },
    textHide: function() {
      this.set('isTextShowing', false);
    },
    update(blog, params){
        this.sendAction('update', blog, params);
    },
    delete(blog) {
      if (confirm('Delete blog?')) {
        this.sendAction('destroyBlog', blog);
      }
    }
  }
});

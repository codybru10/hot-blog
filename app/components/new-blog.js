import Ember from 'ember';

export default Ember.Component.extend({
  addBlog: false,
  actions: {
    blogFormShow() {
      this.set('addBlog', true);
    },
    saveBlog1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        image: this.get('image')
      };
      this.set('addBlog', false);
      this.sendAction('saveBlog2', params);
    }
  }
});

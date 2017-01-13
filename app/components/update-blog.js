import Ember from 'ember';

export default Ember.Component.extend({
  updateBlog: false,
  actions: {
    updateBlog() {
      this.set('updateBlog', true);
    },
    update(blog) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        image: this.get('image')
      };
      this.set('updateBlog', false);
      this.sendAction('update', blog, params);
    }
  }
});

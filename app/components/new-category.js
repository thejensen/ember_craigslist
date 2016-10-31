import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCategory() {

      var newCategory= this.get('category');

      if(!newCategory){
        alert('You must enter a Category');
      } else {
        var params = {
          category: newCategory.toLowerCase(),
        };
        this.sendAction('saveCategory', params);
      }

    },
  }
});

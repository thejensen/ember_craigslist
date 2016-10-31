import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCategory() {

      var newCategory = this.get('categoryName');

      if(!newCategory){
        alert('You must enter a Category');
      } else {
        var params = {
          name: newCategory.toLowerCase(),
        };
        this.sendAction('saveCategory', params);
      }

    },
  }
});

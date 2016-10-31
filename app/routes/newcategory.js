import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveCategory(params) {

      var newCategory = this.store.createRecord('category', {name: params.name, id: params.name});
      newCategory.save();
      this.transitionTo('category', newCategory.id);
    }
  }
});

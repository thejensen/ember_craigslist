import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    saveListing(params) {

      var mysteryObject = this;
      this.store.findRecord('category', params.category).then(function (newCategory) {
        console.log(newCategory);
        var newListing = mysteryObject.store.createRecord('listing', params);
        newListing.set('categories', [newCategory]);
        newListing.save();

        newCategory.get('listings').addObject(newListing);
        newCategory.save();
        mysteryObject.transitionTo('category', newCategory.id);
      });

    }
  }
});

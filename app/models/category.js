import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  listings: DS.hasMany('listing', {async: true})
});

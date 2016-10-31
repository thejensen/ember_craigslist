import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  seller: DS.attr(),
  email: DS.attr(),
  categories: DS.hasMany('category', {async: true})
});

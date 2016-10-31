import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  sortBy: ['date:desc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy'),

});

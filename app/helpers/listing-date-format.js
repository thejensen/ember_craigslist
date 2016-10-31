import Ember from 'ember';

export function listingDateFormat(date/*, hash*/) {
  return (moment(date[0]).format("MMM Do, YYYY"));
}

export default Ember.Helper.helper(listingDateFormat);

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function(){
  this.route('listing', {path: '/listings/:listing_id'});
  this.route('category', {path: '/categories/:category_id'});
  this.route('newcategory', {path: '/categories/new'});
  this.route('newlisting', {path: '/listings/new'});
  this.route('editlisting', {path: '/listings/:listing_id/edit'});
  this.route('editcategory', {path: '/categories/:category_id/edit'});
  this.route('index', {path: '/'});
});

export default Router;

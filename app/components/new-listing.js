import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveListing() {

      var newTitle= this.get('title');
      var newContent= this.get('content');
      var newPrice= this.get('price');
      var newSeller= this.get('seller');
      var newEmail= this.get('email');
      var newImage= this.get('image');
      var newCategory= this.get('category');

      if(!newTitle || !newContent || !newPrice || !newSeller || !newEmail || !newImage || !newCategory){
        alert('You must fill out all form fields');
      } else {
        var params = {
          title: newTitle,
          content: newContent,
          price: newPrice,
          seller: newSeller,
          email: newEmail,
          image: newImage,
          category: newCategory,
          date: Date.now()
          //date: moment().format("MMM Do, YYYY")
        };
      
        this.sendAction('saveListing', params);
      }

    },
  }
});

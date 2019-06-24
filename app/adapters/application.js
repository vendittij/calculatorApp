import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/gavant-public'

});

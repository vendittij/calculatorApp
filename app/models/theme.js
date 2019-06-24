import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

  type: DS.attr(),
  name: DS.attr(),
  className: DS.attr(),

});

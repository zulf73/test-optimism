import { Template } from 'meteor/templating';
import 'meteor/pcel:serialize';
var opt = require('./opt.json')
import { Answers } from '../lib/answers.js';
import './main.html';

Template.body.helpers({
  answers() {
      // Show newest tasks at the top
      return Answers.find({}, { sort: { createdAt: -1 } });
    },
});
Template.optimism.onCreated(() => {
  this.opt = opt;
});

Template.optimism.helpers({
  opt: () =>{
    return this.opt;
  },
});

Template.optimism.events({
  'submit form' : (e) => {
    e.preventDefault();
    var formObject = $('form[name="qf"]').serializeJSON();
    formObject['createdAt'] = new Date();
    console.log(formObject);
    Answers.insert( formObject);
  }
});

import { Mongo } from 'meteor/mongo';
 
export const Answers = new Mongo.Collection('answers');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('answers', function answersPublication() {
      return Answers.find();
    });
}
    
Meteor.methods({
    'answers.insert'(doc) {
        //check(text, String);
        // Make sure the user is logged in before inserting a task
        //if (! this.userId) {
        //  throw new Meteor.Error('not-authorized');
        //}
        Answers.insert(doc);
      }
});

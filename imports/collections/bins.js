import { Mongo } from 'meteor/mongo';

// mongo models
Meteor.methods({
  // function to insert a bin
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },
  // function to remove bin
  'bins.remove': function(bin) {
    return Bins.remove(bin);
  },
  // function to add content to bin (set new content and delete older)
  'bins.update': function(bin, content) {
    return Bins.update(bin._id, { $set: { content }});
  },
  // function to share a bin (add email to array)
  'bins.share': function(bin, email) {
    return Bins.update(bin._id, { $push: { sharedWith: email }});
  }
});

export const Bins = new Mongo.Collection('bins');

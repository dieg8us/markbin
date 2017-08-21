import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  // List of Bins created by the user
  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: this.userId });
  });

  // List of Bins shared
  Meteor.publish('sharedBins', function() {
    // find teh user id
    const user = Meteor.users.findOne(this.userId);

    // validate user login
    if (!user) { return; }

    // find email of the user
    const email = user.emails[0].address;

    // return all bins shared to the user email
    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email }}
    });
  });
});

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

Meteor.methods({
    'addToRole' (role) {
        console.log("User id for role: " + Meteor.userId() );
        let userId = Meteor.userId();
        Roles.addUsersToRoles(userId, role);
    },
});
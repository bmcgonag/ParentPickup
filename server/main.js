import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Roles.createRole("parent", {unlessExists: true});
  Roles.createRole("admin", {unlessExists: true});
  Roles.createRole("systemadmin", {unlessExists: true});
  Roles.createRole("monitor", {unlessExists: true});
  Roles.createRole("teacher", {unlessExists: true});
});

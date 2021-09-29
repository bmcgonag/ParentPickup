import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const SysConfig = new Mongo.Collection('sysConfig');

SysConfig.allow({
    insert: function(userId, doc){
        // if use id exists, allow insert
        return !!userId;
    },
});

Meteor.methods({
    'add.noSysAdminReg' () {
        return SysConfig.insert({
            canReg: false,
            dateAdded: new Date(),
        });
    },
    'edit.noSysAdminReg' (canReg) {
        check(canReg, Boolean);

        if (!this.userId) {
            throw new Meteor.Error('Not able to change registration setting. Make sure you are logged in with valid system administrator credentials.');
        }
        return SysConfig.update({ _id: configId }, {
            $set: {
                canReg: canReg,
                dateUpdated: new Date(),
            }
        });
    }
});
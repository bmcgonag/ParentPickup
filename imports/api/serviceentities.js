import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const ServiceEntities = new Mongo.Collection('serviceEntities');

ServiceEntities.allow({
    insert: function(userId, doc){
        // if use id exists, allow insert
        return !!userId;
    },
});

Meteor.methods({
    'add.serviceEntity' (name, code, address, city, state, zip, phone, email, type) {
        check(name, String);
        check(code, String);
        check(address, String);
        check(city, String);
        check(state, String);
        check(zip, String);
        check(phone, String);
        check(email, String);
        check(type, String);
        
        if (!this.userId) {
            throw new Meteor.Error('User is not allowed to add new Service Entities, make sure you are logged in.');
        }

        return ServiceEntities.add({
            name: name,
            code: code,
            address: address,
            city: city,
            state: state,
            zip: zip,
            phone: phone,
            email: email,
            type: type,
            isActive: true,
            addedOn: new Date(),
            addedBy: Meteor.user().emails[0].address,
        });
    },
    'edit.serviceEntities' (entityId, name, code, address, city, state, zip, phone, email, type, isActive) {
        check(entityId, String);
        check(name, String);
        check(code, String);
        check(address, String);
        check(city, String);
        check(state, String);
        check(zip, String);
        check(phone, String);
        check(email, String);
        check(type, String);
        check(isActive, Boolean);
        
        if (!this.userId) {
            throw new Meteor.Error('User is not allowed to add new Service Entities, make sure you are logged in.');
        }

        return ServiceEntities.update({ _id: entityId }, {
            $set: {
                name: name,
                code: code,
                address: address,
                city: city,
                state: state,
                zip: zip,
                phone: phone,
                email: email,
                type: type,
                isActive: isActive,
                updatedOn: new Date(),
                updatedBy: Meteor.user().emails[0].address,
            }
        });
    },
});
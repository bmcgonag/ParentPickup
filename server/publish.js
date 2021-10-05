import { SysConfig } from '../imports/api/systemConfig.js';
import { ServiceEntities } from '../imports/api/serviceentities.js';

Meteor.publish("SystemConfig", function() {
    try {
        return SysConfig.find({});
    } catch (error) {
        console.log("    ERROR pulling system config data: " + error);
    }
});

Meteor.publish("ServiceEntities", function() {
    try {
        return ServiceEntities.find({});
    } catch (error) {
        console.log("    ERROR pulling Service Entity data: " + error);
    }
});
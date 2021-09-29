import { SysConfig } from '../imports/api/systemConfig.js';

Meteor.publish("SystemConfig", function() {
    try {
        return SysConfig.find({});
    } catch (error) {
        console.log("Error pulling system config data: " + error);
    }
});

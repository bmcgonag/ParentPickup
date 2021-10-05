import { ServiceEntities } from '../../imports/api/serviceentities.js';

Template.createServiceEntity.onCreated(function() {
    this.subscribe("ServiceEntities");
});

Template.createServiceEntity.onRendered(function() {
    $('select').formSelect();
    $('.tooltipped').tooltip();
});

Template.createServiceEntity.helpers({
    codeGen: function() {
        return Session.get("codeGen");
    },
    useCodeGen: function() {
        return Session.get("useCodeGen");
    },
});

Template.createServiceEntity.events({
    'click #saveNewEntity' (event) {
        event.preventDefault();

        let name = $("#entityName").val();
        let code = $("#entityCode").val();
        let address = $("#entityAddress").val();
        let city = $("#entityCity").val();
        let state = $("#entityState").val();
        let zip = $("#entityZip").val();
        let phone = $("#entityPhone").val();
        let email = $("#entityEmail").val();
        let type = $("#entityType").val();

        if (name == "" || name == null || code == "" || code == null) {
            Session.set("misReqEnt", true);
        } else {
            Session.set("misReqEnt", false);
            Meteor.call("add.serviceEntity", name, code, address, city, state, zip, phone, email, type, function(err, result) {
                if (err) {
                    console.log("    ERROR adding service entity: " + err);
                    showSnackbar("Error Adding Service Entity", "red");
                } else {
                    showSnackbar("Entity Added Successfully", "green");
                }
            });
        }
    },
    'click #cancelNewEntity' (event) {
        event.preventDefault();

        $("#entityName").val("");
        $("#entityCode").val("");
        $("#entityAddress").val("");
        $("#entityCity").val("");
        $("#entityState").val("");
        $("#entityZip").val("");
        $("#entityPhone").val("");
        $("#entityEmail").val("");
        $("#entityType").val("");
    },
    'click #generateEntityCode' (event) {
        event.preventDefault();
        let length = 6;
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        Session.set("codeGen", result);
        Session.set("useCodeGen", true);
        
    }
});
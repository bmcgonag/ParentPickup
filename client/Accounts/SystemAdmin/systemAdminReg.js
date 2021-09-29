import { SysConfig } from '../../../imports/api/systemConfig.js';

Template.systemAdminReg.onCreated(function() {
    this.subscribe("SystemConfig");
});

Template.systemAdminReg.onRendered(function() {
    Session.set("canReg", false);
    Session.set("misName", false);
    Session.set("misEmail", false);
    Session.set("misPass", false);
});

Template.systemAdminReg.helpers({
    allowedReg: function() {
        let sysconf = SysConfig.findOne();
        console.dir(sysconf);
        return sysconf.canReg;
    },
    canReg: function() {
        return Session.get("canReg");
    },
    misName: function() {
        return Session.get("misName");
    },
    misEmail: function() {
        return Session.get("misEmail");
    },
    misPass: function() {
        return Session.get("misPass");
    },
});

Template.systemAdminReg.events({
    'click #registerMe' (event) {
        event.preventDefault();
        if (Session.get("canReg") == false) {
            // console.log("reg disabled.");
        } else {
            let name = $("#name").val();
            let email = $("#email").val();
            let pass = $("#password").val();
            let disableSysAdReg = $("#disableSysAdminReg").prop("checked");
            

            if (name == "" || name == null) {
                Session.set("misName", true);
            }

            if (email == "" || email == null) {
                Session.set("misEmail", true);
            }

            if (pass == "" || pass == null) {
                Session.set("misPass", true);
            }

            if (name == "" || name == null || email == "" || email == null || pass == "" || pass == null) {
                console.log("required info missing.");
            } else {
                // call meteor method to create user and add them to sys admin role.
                Accounts.createUser({
                    email: email,
                    password: pass,
                    profile: {
                        fullname: name,
                    }
                });
                
                let userId = Meteor.userId();
                console.log("User ID: " + userId);
                Meteor.call("addToRole", "systemadmin", function(err, result) {
                    if (err) {
                        console.log("    ERROR: ROLES - Error adding user to role: " + err);
                    } else {
                        Meteor.call('add.noSysAdminReg', function(err, result) {
                            if (err) {
                                console.log("    ERROR: SYS ADMIN REG - Error setting system admin registration as disabled: " + err);
                            } else {
                                FlowRouter.go('/dashboard');
                            }
                        });
                    }
                });
            }
        }
    },
    'keyup #passwordConfirm' (event) {
        let pwd = $("#password").val();
        let pwdconf = $("#passwordConfirm").val();

        if (pwd == pwdconf) {
            // console.log("passwords match");
            Session.set("canReg", true);
        } else {
            // console.log("passwords don't match");
            Session.set("canReg", false);
        }
    },
    'change #email' (event) {
        let email = $("#email").val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let isEmail = regex.test(email);
        if (isEmail == false) {
            Session.set("misEmail", true);
        } else {
            Session.set("misEmail", false);
        }
    },
    'click #sysAdminLogin' (event) {
        event.preventDefault();
        FlowRouter.go('/sysAdminlogin');
    },
});

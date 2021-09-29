
Template.teacherRegistration.onRendered(function() {
    Session.set("canreg", false);
    Session.set("missingReq", false);
    Session.set("missingName", false);
    Session.set("missingPhone", false);
    Session.set("missingEmail", false);
    Session.set("missingPassword", false);
});

Template.teacherRegistration.helpers({
    canReg: function() {
        return Session.get("canreg");
    },
    misName: function() {
        return Session.get("missingName");
    },
    misPhone: function() {
        return Session.get("missingPhone");
    },
    misEmail: function() {
        return Session.get("missingEmail");
    },
    misPass: function() {
        return Session.get("missingPassword");
    },
    misReq: function() {
        return Session.get("missingReq");
    }
});

Template.teacherRegistration.events({
    'click #registerMe' (event) {
        event.preventDefault();
        if (Session.get("canreg") == false) {
            // console.log("reg disabled.");
        } else {
            // console.log("Clicked");
            let missingName = false;
            let missingPhone = false;
            let missingEmail = false;
            let missingPassword = false;

            let email = $("#email").val();
            let password = $("#password").val();
            let name = $("#name").val();
            let phone = $("#phone").val();

            if (name == "" || name == null) {
                missingName = true;
                Session.set("missingName", true);
            }

            if (phone == "" || phone == null) {
                missingPhone = true;
                Session.set("missingPhone", true);
            }

            if (email == "" || email == null) {
                missingEmail = true;
                Session.set("missingEmail", true);
            }

            if (password == "" || password == null) {
                missingPassword = true;
                Session.set("missingPassword", true);
            }

            let userId;

            if (missingName == true || missingPhone == true || missingEmail == true || missingPassword == true) {
                Session.set("missingReq", true);
            } else {
                Session.set("missingReq", false);
                Accounts.createUser({
                    email: email,
                    password: password,
                    profile: {
                        fullname: name,
                        phone: phone,
                    }
                });
                
                let userId = Meteor.userId();
                console.log("User ID: " + userId);
                Meteor.call("addToRole", "teacher", function(err, result) {
                    if (err) {
                        console.log("    ERROR: ROLES - Error adding user to role: " + err);
                    } else {
                        // console.log("User should be added to role - teacher.");
                        FlowRouter.go('/dashboard');
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
            Session.set("canreg", true);
        } else {
            // console.log("passwords don't match");
            Session.set("canreg", false);
        }
    },
    'change #email' (event) {
        let email = $("#email").val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let isEmail = regex.test(email);
        if (isEmail == false) {
            Session.set("missingEmail", true);
        } else {
            Session.set("missingEmail", false);
        }
    },
    'click #teachLogin' (event) {
        event.preventDefault();
        FlowRouter.go('/teachlogin');
    },
});
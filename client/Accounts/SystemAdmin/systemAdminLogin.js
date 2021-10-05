Template.systemAdminLogin.onCreated(function() {

});

Template.systemAdminLogin.onRendered(function() {

});

Template.systemAdminLogin.helpers({
    areFilled: function() {
        return Session.get("filledFields");
    },
    loginError: function() {
        return Session.get("loginError");
    },
});

Template.systemAdminLogin.events({
    'click #logmein' (event) {
        event.preventDefault();
        console.log("clicked login");
        let email = $("#email").val();
        let pass = $("#password").val();

        if (email == null || email == "" || pass == "" || pass == null) {
            Session.set("filledFields", false);
            return;
        } else {
            return Meteor.loginWithPassword(email, pass, function(err, result) {
                if (err) {
                    console.log("Error logging in: " + err);
                    Session.set("loginError", true);
                } else {
                    console.log("login result: " + result);
                    Session.set("loginError", false);
                    FlowRouter.go('/dashboard');
                }
            });
        }
    },
    'click #sysAdminReg' (event) {
        event.preventDefault();
        FlowRouter.go('/systemAdminReg');
    },
});
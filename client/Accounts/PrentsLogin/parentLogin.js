Template.parentLogin.onCreated(function() {

});

Template.parentLogin.onRendered(function() {
    
});

Template.parentLogin.helpers({
    areFilled: function() {
        return Session.get("filledFields");
    },
});

Template.parentLogin.events({
    'click #logmein' (event) {
        event.preventDefault();
        console.log("clicked login");
        let email = $("#email").val();
        let pass = $("#password").val();

        if (email == null || email == "" || pass == "" || pass == null) {
            Session.set("filledFields", false);
            return;
        } else {
            Meteor.loginWithPassword(email, pass);
        }
    },
    'click #parentReg' (event) {
        event.preventDefault();
        FlowRouter.go('/parentReg');
    },
});
Template.teacherLogin.onCreated(function() {

});

Template.teacherLogin.onRendered(function() {
    
});

Template.teacherLogin.helpers({
    areFilled: function() {
        return Session.get("filledFields");
    },
});

Template.teacherLogin.events({
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
    'click #teacherReg' (event) {
        event.preventDefault();
        FlowRouter.go('/teachReg');
    },
});
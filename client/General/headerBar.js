
Template.headerBar.onCreated(function() {

});

Template.headerBar.onRendered(function() {
    $('.sidenav').sidenav();
    setTimeout(function() {
        $('.sidenav').sidenav();
    }, 100)

    $(".dropdown-trigger").dropdown();
        
});

Template.headerBar.helpers({

});

Template.headerBar.events({
	'click  .navBtn' (event) {
        event.preventDefault();
        var clickedTarget = event.target.id;
        console.log("clicked " + clickedTarget);
        if (clickedTarget == 'mainMenu') {
            FlowRouter.go('/');
        } else {
            console.log("should be going to /" + clickedTarget);
            FlowRouter.go('/' + clickedTarget);
        }
    },
    'click .signOut': () => {
        FlowRouter.go('/');
        Meteor.logout();
    },
    'click #brandLogo' (event) {
        event.preventDefault();
        FlowRouter.go('/');
    },
});

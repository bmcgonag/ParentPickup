FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', { notLoggedIn: "home" });
    }
});

FlowRouter.route('/dashboard', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', { main: "dashboard" });
    }
});

FlowRouter.route('/parguarlogin', {
    name: 'parentLogin',
    action() {
        BlazeLayout.render('MainLayout', { notLoggedIn: "parentLogin" });
    }
});

FlowRouter.route('/parentReg', {
    name: 'parentReg',
    action() {
        BlazeLayout.render('MainLayout', { notLoggedIn: "parentsRegistration" });
    }
});
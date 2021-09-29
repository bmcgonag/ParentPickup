FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', { notLoggedIn: "home" });
    }
});

FlowRouter.route('/systemAdminReg', {
    name: 'sysAdminReg',
    action() {
        BlazeLayout.render('MainLayout', { notLoggedIn: "systemAdminReg" });
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

FlowRouter.route('/teachlogin', {
    name: 'teachLogin',
    action() {
        BlazeLayout.render('MainLayout', { notLoggedIn: "teacherLogin" });
    }
});

FlowRouter.route('/teachReg', {
    name: 'teachReg',
    action() {
        BlazeLayout.render('MainLayout', { notLoggedIn: "teacherRegistration" });
    }
});
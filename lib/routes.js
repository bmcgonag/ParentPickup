FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', { notLoggedIn: "home" });
    }
});

// -------  System Admin flows -----------

FlowRouter.route('/systemAdminReg', {
    name: 'sysAdminReg',
    action() {
        BlazeLayout.render('MainLayout', { notLoggedIn: "systemAdminReg" });
    }
});

FlowRouter.route('/sysAdminLogin', {
    name: 'sysAdminLogin',
    action() {
        BlazeLayout.render('MainLayout', { notLoggedIn: "systemAdminLogin" });
    }
});

FlowRouter.route('/createServiceEntity', {
    name: 'createServiceEntity',
    action() {
        BlazeLayout.render('MainLayout', { main: "createServiceEntity" });
    }
});

// -------   General User Flows --------

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
 /*
 COMP229 Assign 1
 Janelle-Nicole Forbes
 301224539
 October 8, 2022
 */
//index controller exportable and can be called wherever

// Index Controller
export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', myName: 'Janelle'} );
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about'} );
};

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects'} );
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services'} );
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact'} );
};



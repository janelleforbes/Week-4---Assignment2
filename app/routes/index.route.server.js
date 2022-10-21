 /*
 COMP229 Assign 1
 Janelle-Nicole Forbes
 301224539
 October 8, 2022
 */
//Index Routes
// using library from express
import { Router } from "express";
import { displayAboutPage, 
    displayContactPage, 
    displayHomePage, 
    displayProjectsPage, 
    displayServicesPage } from "../controllers/index.controller.server.js";
// Instanciating the router
const router = Router();

// add middleware to connect application
router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);

export default router;

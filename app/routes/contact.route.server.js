//controller to route page and connect
import { Router } from "express";

import {  DisplayLoginPage,
    ProcessLoginPage,
    DisplayBusinessContactsPage,
    ProcessBusinessContactsPage,
    DisplayContactUpdatePage,
    ProcessContactUpdatePage,
    ProcessContactDelete
    
} from "../controllers/contact.controller.server.js";

//instantiate router - on route
const router = Router();

router.get('/contact/login', DisplayLoginPage);
router.get('/contact/login', ProcessLoginPage);
router.get('/contact/list', DisplayBusinessContactsPage);
router.get('/contact/list', ProcessBusinessContactsPage);
router.get('/contact/update', DisplayContactUpdatePage);
router.get('/contact/update', ProcessContactUpdatePage);
router.get('/contact/update', ProcessContactDelete);


export default router;
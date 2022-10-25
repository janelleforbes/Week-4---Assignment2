//controller to route page and connect
import { Router } from "express";

import {  
    DisplayBusinessContactsPage,
    ProcessBusinessContactsPage,
    DisplayContactUpdatePage,
    ProcessContactUpdatePage,
    ProcessContactDelete
    
} from "../controllers/contact.controller.server.js";

//instantiate router - on route
const router = Router();

router.get('/list', DisplayBusinessContactsPage);
router.get('/list', ProcessBusinessContactsPage);
router.get('/update', DisplayContactUpdatePage);
router.get('/update', ProcessContactUpdatePage);
router.get('/update', ProcessContactDelete);


export default router;
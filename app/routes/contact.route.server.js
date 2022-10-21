//controller to route page and connect
import { Router } from "express";

import {  DisplayContactList,
} from "../controllers/contact.controller.server.js";

//instantiate router - on route
const router = Router();

router.get('/contact-list', DisplayContactList);

export default router;
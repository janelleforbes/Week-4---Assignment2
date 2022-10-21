//controller to route page and connect
import { Router } from "express";

import {  DisplayLoginPage,
} from "../controllers/contact.controller.server.js";

//instantiate router - on route
const router = Router();

router.get('/contact-login', DisplayLoginPage);

export default router;
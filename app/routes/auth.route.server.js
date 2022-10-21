//controller to route page and connect
import { Router } from "express";

import {  DisplayContactList,
    /* 
    DisplayMoviesAddPage, 
    ProcessMoviesAddPage, 
    ProcessMoviesEditPage, 
    DisplayMoviesEditPage, 
ProcessMoviesDelete */
} from "../controllers/auth.controller.server.js";

    //instantiate router - on route
const router = Router();

router.get('/auth-list', DisplayContactList);
/*
router.get('/movie-add', DisplayMoviesAddPage);
router.post('/movie-add', ProcessMoviesAddPage);
router.post('/movie-edit/:id', ProcessMoviesEditPage);
router.get('/movie-edit/:id', DisplayMoviesEditPage);
router.get('/movie-delete/:id', ProcessMoviesDelete);
*/
export default router;
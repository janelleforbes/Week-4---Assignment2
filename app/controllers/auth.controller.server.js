import express from 'express';

// need passport 
import passport from 'passport';

// need to include the User Model for authentication
import User from '../models/contact.js';

// import DisplayName Utility method
import { UserDisplayName } from '../utils/index.js';

// Display Functions
export function DisplayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/list');
}

// Processing Function
export function ProcessLoginPage(req, res, next){
    let id = req.params.id;
    
    let newContact = contactModel({
        _id: req.body.id,
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email})

    passport.authenticate('local', function(err, user, info) {
        if(err){
            console.error(err);
            res.end(err);
        }     
        
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }

            return res.redirect('/login');

        })
        
    })(req, res, next);
}

export function ProcessLogoutPage(req, res, next){
    req.logOut(function(err){
        if(err){
            console.error(err);
            res.end(err);
        }

        console.log("user logged out successfully");
    });

    res.redirect('/login');
}
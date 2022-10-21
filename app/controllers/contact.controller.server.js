import contactModel from "../models/contact.js"

export function DisplayLoginPage(req,res,next){
    contactModel.find(function(err,userCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index',{title: 'contact/login', contact: userCollection});
    })
}
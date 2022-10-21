import contactModel from "../models/contact.js"

export function DisplayContactList(req,res,next){
    contactModel.find(function(err,contactCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index',{title: 'contact/list', contact: contactCollection});
    })
}
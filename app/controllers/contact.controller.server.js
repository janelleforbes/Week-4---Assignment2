import contactModel from "../models/contact.js"

export function DisplayLoginPage(req,res,next){
    contactModel.find(function(err,userCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index',{title: 'Contact Login', contact: userCollection});
    })
}

export function ProcessLoginPage(req, res, next){
    let id = req.params.id;
    
    let newContact = contactModel({
        _id: req.body.id,
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email
    });

    contactModel.updateOne({_id: id }, newContact, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
            res.redirect('/contact/login')
        };

        res.redirect('/contact/list')
    } )
}


export function DisplayBusinessContactsPage(req, res, next){
    contactModel.find(function(err, userCollection) {

        //error checking inside connection
        if(err){
            console.error(err);
            res.end(err);
        }
//render header and footer
        res.render('index', {title: 'Contact Business List', page:'contact/list' , contact: userCollection});
    })
}

//Business Contact Page
export function ProcessBusinessContactsPage(req, res, next){

    let id = req.params.id;
    
    let newContact = contactModel({
        _id: req.body.id,
        Name: req.body.Name,
        Number: req.body.Number,
        Email: req.body.Email
    });

    contactModel.updateOne({_id: id }, newContact, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };
    } )
}

//Contact Update Page

export function DisplayContactUpdatePage(req, res, next){
    let id = req.params.id;

    contactModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Update Contact', page: 'contact/update', contact: contact });
    });    
}

export function ProcessContactUpdatePage(req, res, next){

    let id = req.params.id;
    
    let newContact = contactModel({
        _id: req.body.id,
        Name: req.body.Name,
        Number: req.body.Number,
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email
    });

    contactModel.updateOne({_id: id }, newContact, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact/list')
    } )
}

export function ProcessContactDelete(req, res, next){
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact/list');
    })
}
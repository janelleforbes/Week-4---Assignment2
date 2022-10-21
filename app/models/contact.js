import mongoose from 'mongoose';
//create varibale that will be schema class
const Schema = mongoose.Schema;
//develop schema with attributes
//method with parameters or objects
const ContactSchema = new Schema({
    //properties
    Username: String, 
    Password: String, 
    Email: String,
    Name: String,
    Number: Number
}, {
    //options
    timestamps: true,
    collection: 'contact'
});

export default mongoose.model('contact', ContactSchema);
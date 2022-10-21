import mongoose from 'mongoose';
//create varibale that will be schema class
const Schema = mongoose.Schema;
//develop schema with attributes
//method with parameters or objects
const LoginSchema = new Schema({
    //properties
    Username: String, 
    Password: String, 
    Email: String,
    Name: String,
    Number: Number
}, {
    //options
    timestamps: true,
    collection: 'user'
});

export default mongoose.model('user', LoginSchema);
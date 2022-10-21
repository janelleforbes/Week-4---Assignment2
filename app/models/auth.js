import mongoose from 'mongoose';
//create varibale that will be schema class
const Schema = mongoose.Schema;
//develop schema with attributes
//method with parameters or objects
const AuthenticationSchema = new Schema({
    //properties
    username: String, 
    password: String, 
    email: String,
    name: String,
    number: Number
}, {
    //options
    timestamps: true,
    collection: 'auth'
});

export default mongoose.model('auth', AuthenticationSchema);
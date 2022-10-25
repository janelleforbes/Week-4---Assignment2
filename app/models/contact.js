import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
const { PassportLocalSchema } = mongoose;
//create varibale that will be schema class
const Schema = mongoose.Schema;
//develop schema with attributes
//method with parameters or objects
const UserSchema = new Schema({
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

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);
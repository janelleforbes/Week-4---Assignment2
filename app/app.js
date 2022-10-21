 /*
 COMP229 Assign 1
 Janelle-Nicole Forbes
 301224539
 October 8, 2022
 */
//import express
// Third-Party Modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES Modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
//get path from application and translate to dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// Import Mongoose Module
import mongoose from 'mongoose';

// Configuration Module
import { MongoURI, Secret } from '../config/config.js';

// Import Routes
import indexRouter from './routes/index.route.server.js'
import contactRouter from './routes/contact.route.server.js';

// Instantiate Express Application
const app = express();

// Complete the DB Configuration - completed configuration
mongoose.connect(MongoURI);
//variable that recieves the open connection
const db = mongoose.connection;

//Listen for connection success or error - recieved instance and attached events
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));

// Set Up Middlewares

// Setup ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname,'../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

// Use Routes
app.use('/', indexRouter);
app.use('/', contactRouter);


export default app;


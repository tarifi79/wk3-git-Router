//Import 3rd party Modules
import  express  from 'express';
import looger from'morgan';
import session from 'express-session';
import cookieParser from 'cookie-parser';


import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import indexRouter from './app/routes/index.route.server.js'
//const app = connect();
const app=express();

app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');

app.use(looger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname,'/client')));
app.use(session({
    secret: 'MySecret',
    saveUninitialized: false, 
    resave: false
}));





app.use('/', indexRouter);

// app.use('/hello',helloWorld);
// app.use('/goodbye',goodbyeWorld);

app.listen(3000);
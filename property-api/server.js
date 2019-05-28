const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const passport = require('passport');
const multer = require('multer');

//const ipfs = require('./controllers/ipfs');

// app.use(express.static(__dirname + '/controllers'));
// app.engine('html', require('ejs').renderFile);
// app.set('views', __dirname + '/controllers');
// app.set('view engine', 'html');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const sendImage = require('./controllers/sendImage');
const auth = require('./controllers/auth');
  
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user:'property',
        password: 'rajesh123',
        database: 'property'
    }
})
const app = express();

app.use(bodyParser.json());
app.use(cors());
var upload = multer();

//app.use(cookieParser());
    
    app.get('/', (req, res) =>{res.send(db.users) })
    app.post('/signin', (req, res) => {signin.signinHandler(req, res, db, bcrypt)})   
    app.post('/register', (req, res) =>{register.registerHandler(req, res, db, bcrypt)});
    app.get('/profile/:id', (req, res) => {profile.profileHandler(req, res, db)})
    app.put('/image', (req, res) => {image.imageHandler(req, res, db,image)});
    app.post('/sendImage', upload.any(),(req,res) => {sendImage.sendImageHandler(req, res, db)});
    app.post('/auth', (req,res) => {auth.authHandler(req, res, passport)})
    // app.get('/home', (req, res) =>{
    //     res.render('index.html')
    // })

    app.listen(3001, () =>{
        console.log('its working');
    })


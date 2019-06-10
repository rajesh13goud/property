const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const pg = require('pg');
// const passport = require('passport');
const multer = require('multer');
// const cookieParser = require('cookie-parser');
var session = require('express-session')
//const fileUpload = require('express-fileupload');
const ipfs = require('./controllers/ipfs');
const ocr = require('./controllers/ocr');
const wordsearch = require('./controllers/wordsearch');

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
const img = require('./controllers/img');
const post = require('./controllers/postgres');
const ocrResults = require('./controllers/ocrResults');
  
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use(cookieParser());
var upload = multer();
//app.use(fileUpload());
//app.use(cookieParser());
    
    app.get('/', (req, res) =>{res.send(db.users) })
    app.post('/signin', (req, res) => {signin.signinHandler(req, res, db, bcrypt)})   
    app.post('/register', (req, res) =>{register.registerHandler(req, res, db, bcrypt)});
    app.get('/profile/:id', (req, res) => {profile.profileHandler(req, res, db)})
    app.put('/image', (req, res) => {image.imageHandler(req, res, db)});
    app.post('/img', (req,res) => {img.imgHandler(req,res)});
    //app.get('/ocrResults/:assetId/:invoiceId', (req, res) =>{ocrResults.ocrRes(req,res)});
    app.put('/sendImage', upload.any(),(req,res) => {
        var ipfsURL = "https://gateway.ipfs.io/ipfs/"
    console.log("it is here atleast");
    console.log(req.files);

    //console.log(req.files);
    // db('docs').insert({docshash: multihash})
    if (req.files == null || req.files == 'undefined') {
        response = {
            status: "error",
            message: "The file was not uploaded properly"
        }
        return res.json(response);
    }
    // const imageIn = req.files;
    ipfs.ipfsUpload(req.files[0].buffer,(result) => {
        // const {email, docshash} = req.body;
        if (result.status == "error") { return res.send(result); }
        //console.log(result[0].hash);
        var multihash = result[0].hash;   
        post.postdb(multihash, (result)=>{
            if (result.status == "error") {
                return res.send(result);
            }
        }) 
        
        // ocr.ocrCall(ipfsURL + result[0].hash, (result) => {

        //      if (result.status == "error") {
        //          return res.send(result);
        //      }
            //  db.select('docshash').from('docs')
            //  let inv = {
            //      docshash: multihash,
            //      date: new Date()
            //  }
            // let inv = {
            //     docshash: multihash,
            //     date: new Date()
            // }
            // console.log(inv);
            //  db.returning('docs').insert({'docshash': inv.docshash})    
            //  db('docs').insert(inv)
            //  knex('docs').insert({docshash: multihash})

            // return db.select('docshash','email').from('docs')
            // .where('docshash', '=', inv.docshash)
            // .then(data => console.log('here',data))
            

            })
        // })
        
   })   //sendImage.sendImageHandler(req, res, db)});
    // app.post('/auth', (req,res) => {auth.authHandler(req, res, passport)})
    // app.get('/home', (req, res) =>{
    //     res.render('index.html')
    // })

    app.listen(3001, () =>{
        console.log('its working');
    })


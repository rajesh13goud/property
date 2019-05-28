//const cookieParser = require('cookie-parser');
const multer = require('multer');
//const jwt = require('jsonwebtoken');
const ocr = require('./ocr');
const ipfs = require('./ipfs');


var upload = multer();

const sendImageHandler = (upload.any(), function (req, res) {
    var ipfsURL = "https://gateway.ipfs.io/ipfs/"
    console.log("it is here atleast");
    console.log(req.files);
    if (req.files == null || req.files == 'undefined') {
        response = {
            status: "error",
            message: "The file was not uploaded properly"
        }

        const file = req.files;
        if(file) {
            console.log('success');
        } 
        console.error('error')
          
        
    }
    //      console.log(req.files);
    //      ipfs.ipfsUpload(req.files[0].buffer, (result) => {
    //          if (result.status == "error") { return res.send(result); }
    // //         //console.log(result[0].hash);
    //          var multihash = result[0].hash;
    //      ocr.ocrCall(ipfsURL + result[0].hash, (result) => {

    //          if (result.status == "error") {
    //              return res.send(result);
    //         }
    //      })
    // })
                
})     
        

module.exports = {
    sendImageHandler: sendImageHandler
}
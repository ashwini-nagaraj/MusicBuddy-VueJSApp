const express = require('express');
const router = express.Router();
const API = require('../controllers/api');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './artists');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }

});

let upload = multer({
    storage: storage
}).single('image');


router.get('/', API.fetchAllArtists);
router.get('/:id', API.fetchArtistByID);
router.post('/',upload, API.createArtist);
router.patch('/:id',upload, API.updateArtist);
router.delete('/:id', API.deleteArtist);


module.exports = router;
const Artist = require('../models/artists');

const fs = require('fs');

module.exports = class API {
    static async fetchAllArtists(req, res){
        try{
            const artists = await Artist.find();
            res.status(200).json(artists);
        }catch(err){
            res.status(404).json({message: err.message});
        }
    }

    static async fetchArtistByID(req, res){
       const id =   req.params.id;
       try{
           const artist = await Artist.findById(id);
           res.status(200).json(artist);
       }catch(err){
        res.status(404).json({message: err.message});
       }
    }

    static async createArtist(req, res){
        const artist = req.body;
        const imageName = req.file.filename;
        artist.image = imageName;
        try{
           await Artist.create(artist)
           res.status(201).json({message: 'Artist created successfully!!'})
        }catch(err){
            res.status(400).json({message: err.message})
        }
    }

    static async updateArtist(req, res){
        const id =   req.params.id;
        let new_image='';
        if(req.file){
            new_image = req.file.filename;
            try{
               fs.unlinkSync('./artists/'+req.body.old_image)
            }catch(err){
               console.log(err)
            }
        }else{
            new_image = req.body.old_image
        }
        const newPost = req.body;
        newPost.image = new_image;

        try{
          await Artist.findByIdAndUpdate(id, newPost);
          res.status(200).json({message: 'Artist updated'});
        }catch(err){
            res.status(400).json({message: err.message})
        }

    }

    static async deleteArtist(req, res){
        const id =   req.params.id;
        try{
          const result = await Artist.findByIdAndDelete(id);
          if(result.image!=''){
              try{
                fs.unlinkSync('./artists/'+result.image)
              }catch(err){
                 console.log(err);
              }
          }
          res.status(200).json({message: 'Artist deleted'});
        }catch(err){
            res.status(400).json({message: err.message})
        }
    }
}
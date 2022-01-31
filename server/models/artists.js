const mongoose =  require('mongoose');

const artistSchema = mongoose.Schema({
    artistName: String,
    genre: String,
    about: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    },
    topThreeSongs: 'String'

});

module.exports = mongoose.model("Artist", artistSchema);
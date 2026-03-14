const mongoose = require('mongoose');

    const musicSchema = new mongoose.Schema({
        uri: {
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        artist:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user", 
            // in the end artist is user so we need to give the reference of user collection as the details of artist is saved in usercollection, basically name of userModel
            required: true
        }
    })


const musicModel = mongoose.model("music", musicSchema);

module.exports = musicModel;
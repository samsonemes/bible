const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 40

    }, 
    description: {
        type: String,
        required: true,
        maxlength: 200
    }
}, {timestamps: true})

module.exports =  mongoose.models.Notes || mongoose.model('Notes', notesSchema);
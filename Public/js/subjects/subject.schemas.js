const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var subjectSchema = new Schema({
    GUID: {type: String, required: true, unique: true},
    Title: {type: String, required: true, unique: false},
    Desc: String
});


module.exports = subjectSchema;
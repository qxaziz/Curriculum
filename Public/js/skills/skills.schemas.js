const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var skillSchema = new Schema({
    GUID: {type: String, required: true, unique: true},
    Title: {type: String, required: true, unique: true},
    Desc: String,
    StartDate: {type: Date, required: true},
    NextDate: {type: Date}
});


module.exports = skillSchema;
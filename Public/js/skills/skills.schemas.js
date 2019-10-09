const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var skillSchema = new Schema({
    GUID: {type: String, required: true, unique: true},
    Title: {type: String, required: true, unique: true},
    Desc: String,
    startMonth: Number,
    startDay: Number,
    startYear: Number,
    nextMonth: Number,
    nextDay: Number,
    nextYear: Number
});


module.exports = skillSchema;
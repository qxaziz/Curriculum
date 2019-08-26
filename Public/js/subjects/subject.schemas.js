const mongoose = require('mongoose');

var subjectSchema = new mongoose.Schema({
    GUID: {type: String, required: true, unique: true},
    Title: {type: String, required: true, unique: true},
    Desc: String
});

var skillSchema = new mongoose.Schema({
    GUID: String,
    Title: {type: String, required: true, unique: true},
    Retired: {type: Boolean, default: false},
    Notes: String,
    Source:{
        ebooks: String,
        courses: String,
        web_sites: String,
        courses_online: String
    },
    Date_Entered: Date,
    Next_Review_Date: Date,
    Review_Date_History: [Date]
})


exports.subjectSchema = subjectSchema;
exports.skillSchema = skillSchema;
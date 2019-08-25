const mongoose = require('mongoose');

var subjectSchema = new mongoose.Schema({
    GUID: String,
    Title: {type: String, required: true},
    Desc: String
});

var skillSchema = new mongoose.Schema({
    GUID: String,
    Title: {
        type: String,
    required: true,
},
    Notes: String,
    Source:{
        ebooks: String,
        courses: String,
        web_sites: String,
        courses_online: String
    },
    Date_Entered: Date.now(),
    Next_Review_Date: Date,
    Review_Date_History: String
})


exports.subjectModel = function(colName) {
    return mongoose.model(colName, subjectSchema);
}
exports.skillModel = function(colName) {
    return mongoose.model(colName, skillSchema);
}
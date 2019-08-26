const mongoose = require('mongoose');
var schema = require('./subject.schemas')

module.exports.findAll = (subjectColl)=>{

    var subject = mongoose.model(subjectColl, schema);
    subject.find({}, (err, subjects)=>{
        if (err){
            console.log(err);
            console.log('im erroring');
        }
        else{
            console.log(subjects);
            return subjects;
        }
    })
}
   



    
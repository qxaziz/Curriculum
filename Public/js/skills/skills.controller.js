var Subjects = require('../subjects/subject.dao');
var id = require('../utility/randnum');
var skillsColl = 'Skills';
var skillsSchema = require('./skills.schemas');

const mongoose = require('mongoose');

exports.CreateSubject = (req, res, next)=>{
    var subject = {
        GUID : id.generateRandomNumber(8),
        Title : res.body.Title,
        Description : res.body.Description
    }

    Subjects.create(subject, (err, subject)=>{
        if(err){
            res.json({ error : err });
        }
        res.json({ message : 'subject successfully created.'});
    })
}

exports.getSubjects = (req, res, next)=>{
    Subjects.get({}, (err, subjects)=>{
        if(err){
            res.json({ error : err });
        }
        res.json({ subjects : subjects });
    })
}

exports.getSubject = (req, res, next)=>{
    Subjects.getByName({}, (err, subject)=>{
        if(err){ res.json({ error : err}) }

        res.json({ subject : subject});
    })
}
exports.updateSubject = (req, res, next)=>{

    var subject = { 
        Title : req.body.Title,
        Description: req.body.Description
    };

   Subjects.update({_id : req.params.id}, subject, (err, subject)=>{
        if(err){ res.json({ error : err }) };
        res.json({ message : "subject updated successfully" });
   })
}

exports.removeSubjects = (req, res, next)=>{
        Subjects.delete({_id : req.params.id }, (err, subject)=>{
                if(err){ res.json({ error : err }) };
                res.json({ message : "subject deleted successfully"})
        })
}

exports.removeSkill = (guid)=>{

    return new Promise((resolve, reject)=>{
        var skills = mongoose.model(skillsColl, skillsSchema);
        skills.deleteOne({GUID: guid}, (error)=>{
            if(error){ reject(error); }
            else{ resolve()}
        })
    })
    
}



exports.createSkill = (title, desc, date)=>{

    return new Promise((resolve, reject)=>{
        var skill = mongoose.model(skillsColl, skillsSchema);

        var skillModel = new skill({
            GUID : id.generateRandomNumber(8), 
            Title : title, 
            Desc : desc, 
            StartDate : date,
            NextDate : date
        })

        skillModel.save((error)=>{
            if(error){ reject(error); }
            else { resolve(); }
        })
    })
}


exports.findAllSkills = ()=>{

    return new Promise((resolve, reject)=>{
        var skillModel = mongoose.model(skillsColl, skillsSchema);
        skillModel.find({}, (err, data)=>{
            if(err){ reject(err) }
            else{ resolve(data) }
        })
    })
}

function getMonth(date){

    var tmp = date.Split("T");
    var tmpDate = tmp[0];
    var tmpFullDate = tmpDate.Split("-");
     return tmpFullDate[1]; 
}

function getDay(date){

    var tmp = date.Split("T");
    var tmpDate = tmp[0];
    var tmpFullDate = tmpDate.Split("-");
     return tmpFullDate[2]; 
}

function getYear(date){

    var tmp = date.Split("T");
    var tmpDate = tmp[0];
    var tmpFullDate = tmpDate.Split("-");
     return tmpFullDate[0]; 
}

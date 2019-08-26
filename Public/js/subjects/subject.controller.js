var Subjects = require('./subject.dao');
var id = require('..utility/randnum');

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
    var subject = { Title : req.body.Title,
                    Description: req.body.Description};

   Subjects.update({_id : req.params.id}, subject, (err, subject)=>{
        if(err){ res.json({ error : err }) };
        res.json({ message : "subject updated successfully" });
   })
}

exports.removeSubject = (req, res, next)=>{
        Subjects.delete({_id : req.params.id }, (err, subject)=>{
                if(err){ res.json({ error : err }) };
                res.json({ message : "subject deleted successfully"})
        })
}

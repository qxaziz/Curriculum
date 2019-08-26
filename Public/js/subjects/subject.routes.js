var Subjects = require('./subject.controller');

exports = (router)=>{
    
router.post('/create', Subjects.CreateSubject);
router.get('/get', Subjects.getSubjects );
router.get('/get/:name', Subjects.getSubject);
router.put('/update/:id', Subjects.updateSubject);
router.delete('/delete/:id', Subjects.removeSubject);

}
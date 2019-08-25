const fs = require('fs');



exports.WriteToDB = (dataURL, subjects)=>{

    fs.writeFile(dataURL + 'subjects.json', JSON.stringify(subjects,null, 2), (err)=>{
        if (err) throw err ;
    
        console.log("Written to file !!!");
    });

}
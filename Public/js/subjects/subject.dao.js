const mongoose = require('mongoose');

var subSchema = require('./subject.schemas');
var subjects = 'subjects';





subSchema.statics =
 {
    create: (data, callback)=>{ var subject = new this(data); subject.save(callback); },

    get: (query, callback)=>{ this.find(query, callback); },

    getByName: (query, callback)=>{ this.find(query, callback); },

    update: (query, updateData, callback)=>{ this.findOneAndUpdate(query, {$set: updateData}, {new: true}, callback); },

    delete: (query, callback)=>{ this.findOneAndDelete(query, callback); }

}

module.exports = mongoose.model(subjects, subSchema);
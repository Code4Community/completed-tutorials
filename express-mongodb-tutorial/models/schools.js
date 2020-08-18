const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const schoolSchema = new Schema({
     name: String, 
     state: String,
     enrollment: Number,
     ivyLeage: Boolean,
 });
 const School = mongoose.model('Schools', schoolSchema);
 module.exports = School;
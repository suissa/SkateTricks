const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect('mongodb://127.0.0.1:27017/myapp');
const MyModel = mongoose.model('Test', new Schema({ name: String }));
// Works
MyModel.findOne(function(error, result) { 
    console.log(result)
 });
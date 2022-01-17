const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/skate_project');


const Users = mongoose.model('Users', { 
  name: String
});

module.exports = Users
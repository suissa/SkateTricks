const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/skate_project');


module.exports = mongoose.model('Tricks', { 
  type: String,
  tricks: Array
});
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/skate_project');


const Types = mongoose.model('Types', { 
  name: String
});
// const kitty = new Types({ type: 'teste01', Types: ["a", "b"] });
// kitty.save().then((data) => console.log('meow', {data}));

module.exports = Types
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var gameschema = new Schema({
  name: String,

});

var Player = mongoose.model('Player', gameschema);


module.exports = Player;

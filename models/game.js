
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Player = require('./player');

var gameSchema = new Schema({

  created_at: Date,
  nrOfCards: String,
  games: [Player],

});

var Game = mongoose.model('Game', gameSchema);


module.exports = Game;

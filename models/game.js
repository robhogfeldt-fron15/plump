
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Player = require('./player');

var gameSchema = new Schema({

  created_at: Date,
  nrOfCards: String,
  playersSticks: [{
          sticks: String,
          player: {
              type: Schema.Types.ObjectId,
              ref: 'Player'
          }
      }],

});

var Game = mongoose.model('Game', gameSchema);


module.exports = Game;

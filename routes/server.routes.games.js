
var Game = require('../models/game');
var Player = require('../models/player');

    module.exports = function(app) {

      app.get('/api/games', function(req, res) {

        Game.find(function(err, games) {

            if (err)
                res.send(err)

            res.json(games);
        });
    });

    app.post('/api/games', function(req, res) {

        Game.create({
            playersSticks : req.body.activePlayers,
            nrOfCards: req.body.nrOfCards,
        }, function(err, game) {
            if (err) {
              res.send(err);
            } else {
              Game.findOne(game)
                  .populate('players.player')
                  .exec(function (err, newgame) {
                    if (err) return handleError(err);
                    console.log(newgame);
                      res.json(newgame);
                  });
            }
        });
    });


    app.delete('/api/games/:game_id', function(req, res) {
        Game.remove({
            _id : req.params.game_id
        }, function(err, games) {
            if (err)
                res.send(err);

            Player.find(function(err, games) {
                if (err)
                    res.send(err)
                res.json(games);
            });
        });
    });

    };

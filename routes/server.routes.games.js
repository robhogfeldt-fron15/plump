
var Game = require('../models/game');

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
            players : req.body.players,
            nrOfCards: req.body.nrOfCards
        }, function(err, game) {
            if (err)
                res.send(err);

            Player.find(function(err, game) {
                if (err)
                    res.send(err)
                res.json(game);
            });
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

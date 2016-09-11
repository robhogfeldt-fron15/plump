
var Player = require('../models/player');

    module.exports = function(app) {

      app.get('/api/players', function(req, res) {

        Player.find(function(err, players) {

            if (err)
                res.send(err)

            res.json(players);
        });
    });

    app.post('/api/players', function(req, res) {

        Player.create({
            name : req.body.name,
        }, function(err, player) {
            if (err)
                res.send(err);

            Player.find(function(err, player) {
                if (err)
                    res.send(err)
                    console.log(player);
                    console.log(typeof player);
                res.json(player);
            });
        });

    });


    app.delete('/api/players/:player_id', function(req, res) {
        Player.remove({
            _id : req.params.player_id
        }, function(err, player) {
            if (err)
                res.send(err);

            Player.find(function(err, players) {
                if (err)
                    res.send(err)
                res.json(players);
            });
        });
    });

    };

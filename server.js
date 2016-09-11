
    // set up ========================
    var express  = require('express');
    var app      = express();
    var mongoose = require('mongoose');
    var morgan = require('morgan');
    var bodyParser = require('body-parser');
    var methodOverride = require('method-override');



    mongoose.connect('mongodb://localhost:27017/my_database_name');
    app.use(bodyParser.urlencoded({'extended':'true'}));
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/json' }));
    app.use(morgan('dev'));
    app.use(methodOverride());

    // routes
    require('./routes/server.routes.player')(app);
    require('./routes/server.routes.games')(app);


    // configuration

    app.use(express.static(__dirname + '/public'));



    app.listen(8080);
    console.log("App listening on port 8080");

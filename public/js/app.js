(function () {
    'use strict';

    angular
        .module('plumpApp', ['ngAnimate', 'ngRoute', 'ngResource'])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/',{ templateUrl: 'views/home.html', title: 'Home'})
            .when('/game',{ templateUrl: 'views/create.html', title: 'Game'})
            .when('/player',{ templateUrl: 'views/player.html', title: 'Player'})
            .otherwise({ redirectTo: '/' });
    }
})();

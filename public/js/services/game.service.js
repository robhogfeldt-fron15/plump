(function() {
    'use strict';
    angular
        .module('plumpApp')
        .factory('gameService', gameService);
    gameService.$inject = ['$resource'];
    function gameService($resource) {
        var data = $resource('api/game');
        update: {
            method: 'PUT'
        };
        return data;
    }
})();

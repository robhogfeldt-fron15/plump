(function() {
    'use strict';
    angular
        .module('plumpApp')
        .factory('gameService', gameService);
    gameService.$inject = ['$resource'];

    function gameService($resource) {
      return $resource("/api/games/:id", {id:'@_id'}, {
        query: { method: "GET", isArray: true },
        save: { method: "POST" },
        delete: { method: "DELETE", isArray: true }
  });
    }
})();

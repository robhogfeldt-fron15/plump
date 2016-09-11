(function() {
    'use strict';
    angular
        .module('plumpApp')
        .factory('playerService', playerService);
    playerService.$inject = ['$resource'];

    function playerService($resource) {
      return $resource("/api/players/:id", {id:'@_id'}, {
        query: { method: "GET", isArray: true },
        save: { method: "POST", isArray: true },
        delete: { method: "DELETE", isArray: true }
  });
    }
})();

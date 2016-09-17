(function () {
    'use strict';

    angular
        .module('plumpApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['playerService'];

    function MainCtrl(playerService) {

        var vm = this;
        vm.players = playerService.query();




    }
})();

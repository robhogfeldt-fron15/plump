(function () {
    'use strict';

    angular
        .module('plumpApp')
        .controller('GameCtrl', GameCtrl);



        GameCtrl.$inject = ['playerService'];

        function GameCtrl(playerService) {

            var vm = this;

            var vm = this;
            vm.players = playerService.query();



            vm.submit = function(playerName) {
                playerService.save(playerName, function(players) {
                    vm.players = players
                });

            }

            vm.delete = function (player) {

              playerService.delete({id: player._id}, function(players) {
                vm.players = players
              });

            }

            vm.newGame = {
              activePlayers: [],
              nrOfCards: {}
            };
            vm.addPlayer = function(player) {

              var i = vm.newGame.activePlayers.indexOf(player)
              if (i > -1) {
                vm.newGame.activePlayers.splice(i, 1)
                player.isActive = false;
              } else {
                vm.newGame.activePlayers.push(player)
                player.isActive = true;
              }
            }
            vm.cards = [{nr:1, isActive: false}, {nr:2, isActive: false}, {nr:3, isActive: false}, {nr:4, isActive: false}, {nr:5, isActive: false}]
            vm.nrOfCards = function(card) {
              console.log(card);
              vm.newGame.nrOfCards = card;
              card.isActive = true;
            }


        }

})();

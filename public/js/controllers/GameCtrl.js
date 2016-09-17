(function() {
    'use strict';

    angular
        .module('plumpApp')
        .controller('GameCtrl', GameCtrl);

    GameCtrl.$inject = ['playerService', 'gameService'];

    function GameCtrl(playerService, gameService) {

        var vm = this;
        vm.players = playerService.query();

        vm.submit = function(playerName) {
            playerService.save(playerName, function(players) {
                vm.players = players
            });
        }


        vm.delete = function(player) {
            playerService.delete({
                id: player._id
            }, function(players) {
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

        vm.cards = [{
            nr: 1,
            isActive: false
        }, {
            nr: 2,
            isActive: false
        }, {
            nr: 3,
            isActive: false
            }, {
            nr: 4,
            isActive: false
        }, {
            nr: 5,
            isActive: false
        }];

        vm.nrOfCardsMax = 0;
        vm.nrOfCards = function(card, index) {

          for (var i = 0; i < vm.cards.length; i++) {
            if (vm.cards[i] !== index) {
              vm.cards[i].isActive = false;
            }
          }

            vm.newGame.nrOfCards = card.nr;
            console.log(index);
            vm.cards[index].isActive = true;
            vm.nrOfCardsMax = card.nr;
        }

        vm.currentGame = {};
        vm.startNewGame = function(playersSticks) {

              gameService.save(playersSticks, function(current) {
                  console.log(current);
                  vm.currentGame = current;
              });

        }


    }
})();

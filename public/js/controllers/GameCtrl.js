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
                player.sticks = 0;
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
        vm.gameWrapper = []
        vm.nrOfCards = function(card, index) {

            for (var i = 0; i < vm.cards.length; i++) {
                if (vm.cards[i] !== index) {
                    vm.cards[i].isActive = false;
                }
            }

            vm.newGame.nrOfCards = card.nr;
            vm.cards[index].isActive = true;
            vm.nrOfCardsMax = card.nr;
            vm.gameWrapper = new Array(parseInt(card.nr))
        }


        vm.rounds = [];
        vm.setupPlayers = function() {

            var nrRounds = parseInt(vm.newGame.nrOfCards);


            console.log(vm.rounds);
            for (var i = 0; i < nrRounds; i++) {

              vm.rounds.push(vm.newGame.activePlayers)
            }
            console.log(vm.rounds);
      }

      vm.selectedSticks = 0;
      vm.update = function(parent, child) {
        console.log(vm.rounds[parent][child]);
        vm.rounds[parent][child].sticks = 4;
      }

        vm.currentGame = {};
        vm.startNewGame = function(playersSticks) {

            vm.players = playerService.query();
            gameService.save(playersSticks, function(current) {

                vm.currentGame = current.playersSticks.map(function(player) {
                    for (var i = 0; i < vm.players.length; i++) {
                        if (vm.players[i]._id == player._id) {
                            var p = {};
                            p.sticks = player.sticks;
                            p.player = vm.players[i];
                            return p;
                        }
                    }
                })
                vm.currentGame.rounds = parseInt(current.nrOfCards);
                console.log(vm.currentGame);
            });
        }


    }
})();

(function() {
    'use strict'

    angular
      .module('lp')
      .controller('champCtlr', champCtlr);

      function champCtlr(champService){
          var vm = this;
          vm.champs = [];
          vm.getChamps = getChamps;

          activate();

          function activate() {
              return getChamps().then(function() {
                  for(c in champs){
                    return champ;
                  }
              });
          }

          function getChamps() {
              return champService.getChamps()
                  .then(function(data) {
                      vm.champs = data;
                      return vm.champs;
                  });
          }
    }

})();

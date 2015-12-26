(function() {
    'use strict'

    angular
      .module('lp')
      .service('champService', champService);

      function champService($http){
  return {
      getChamps: getChamps
  };

  function getChamps() {
      return $http.get('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=b2368a72-5189-4f15-8034-a312bdd524fa')
          .then(getChampService)
          .catch(getChampsFailed);

      function getChampService(response) {
          return response.data.results;
      }

      function getChampsFailed(error) {
          logger.error('XHR Failed for getChamps.' + error.data);
      }
    }
  }

})();

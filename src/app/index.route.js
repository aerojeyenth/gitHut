(function() {
  'use strict';

  angular
    .module('hybris')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('contributors', {
      url: '/contributors',
      templateUrl: 'app/pages/contributors/contributors.html',
      controller: 'ContributorsController',
      controllerAs: 'vm',
      params: {
        owner: null,
        repo: null
      },
      resolve: {
          contributors: function ($http) {
            var contributors = $http.get('https://api.github.com/repos/hybris/aldo-challenge/contributors').then(function(res){
                return res.data;
                });

            return contributors;
          }
        }
    });

    $urlRouterProvider.otherwise('/');
  }

})();

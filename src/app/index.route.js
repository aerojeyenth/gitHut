(function() {
  'use strict';

  angular
    .module('gitHut')
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
        repo: null,
        owner: null
      },
      resolve: {
          contributors: function ($stateParams, api, NProgress) {
            var repo = $stateParams.repo;
            var owner = $stateParams.owner;
            NProgress.start();
            return api.contributors.get({owner: owner, repo: repo});;
          }
        }
    });

    $urlRouterProvider.otherwise('/');
  }

})();

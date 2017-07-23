(function() {
  'use strict';

  angular
    .module('gitHut')
    .controller('ContributorsController', ContributorsController);

  /** @ngInject */
  function ContributorsController($state, $stateParams, contributors, NProgress) {
  	var vm = this;

    if(!$stateParams.repo || !$stateParams.owner)
      $state.go('home');

    vm.repo = $stateParams.repo;

    vm.contributors = contributors;
    NProgress.done();
  }
})();

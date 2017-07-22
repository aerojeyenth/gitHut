(function() {
  'use strict';

  angular
    .module('hybris')
    .controller('ContributorsController', ContributorsController);

  /** @ngInject */
  function ContributorsController($stateParams, contributors, NProgress) {
  	var vm = this;

    vm.repo = $stateParams.repo;

    vm.contributors = contributors;
    NProgress.done();
  }
})();

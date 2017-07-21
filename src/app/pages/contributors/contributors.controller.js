(function() {
  'use strict';

  angular
    .module('hybris')
    .controller('ContributorsController', ContributorsController);

  /** @ngInject */
  function ContributorsController($http, contributors) {
  	var vm = this;

  	vm.title = "Contributors Page!";
  	console.log(contributors);
  }
})();

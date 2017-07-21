(function() {
  'use strict';

  angular
    .module('hybris')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
  	var main = this;

  	console.log("res");


  	$http.get('https://api.github.com/users/hybris/repos').then(function(res){
		main.repos = res.data;
  	});

  }
})();

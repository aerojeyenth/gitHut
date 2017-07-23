(function() {
  'use strict';

  angular
    .module('gitHut')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, sortByOptions, api) {
  	var main = this;
    main.searchGit = searchGit;

    main.sortByOptions = sortByOptions;

    //Init
    main.sortBy = "full_name";
    main.owner = "hybris";
    
    //Initiating with hybris
    main.searchGit();

    function searchGit(){

      if(!main.owner)
        return;
      NProgress.start();
      main.repos = api.repos.get({owner:main.owner, sortby: main.sortBy}, function(){
        NProgress.done();
      });

    }

  }
})();

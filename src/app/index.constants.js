/* global NProgress:false sortByOptions:false */
(function() {
  'use strict';

   var sortByOptions = [{
      name:"Full Name",
      id:"full_name"
    },
    {
      name:"Created",
      id:"created"
    },{
      name:"Updated",
      id:"updated"
    },{
      name:"Pushed",
      id:"pushed"
    }];

  angular
    .module('hybris')
    .constant('sortByOptions', sortByOptions)
    .constant('NProgress', NProgress);

})();

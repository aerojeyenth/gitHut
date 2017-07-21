(function() {
  'use strict';

  angular
    .module('hybris')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

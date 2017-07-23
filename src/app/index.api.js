(function ()
{
    'use strict';

    angular
        .module('gitHut')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource)
    {

        var api = {};

        api.repos = $resource('https://api.github.com/users/:owner/repos?sort=:sortby', { owner: '@_owner', sort: '@_sortby' }, {
                        get: { 
                            isArray: true
                        }});

        api.contributors = $resource('https://api.github.com/repos/:owner/:repo/contributors', { owner: '@_owner', repo: '@_repo' }, {
                        get: { 
                            isArray: true
                        }});


        return api;
    }

})();

	
    angular.module('rk.shared')

	    .factory('interceptor', ['$rootScope', '$q', '$injector',

	        function ($rootScope, $q, $injector) {

	            return {

	                request: function (config) {

	                	
	                    return config || $q.when(config);                   
	                }
	            };
	        }
	    ])

		.config(['$httpProvider',

	        function($httpProvider) {

	            $httpProvider.interceptors.push('interceptor');
	            $httpProvider.defaults.useXDomain = true;
			}
		]);
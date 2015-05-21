


	angular.module('rk.shared')

	    .controller('HeaderCtrl', ['$rootScope', '$scope', '$injector',

	        function ($rootScope, $scope, $injector) {

	        	var Utils = $injector.get('Utils');
	        	var $state = $injector.get('$state');




	        



				$scope.navbarCollapsed = true;

            	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                    $scope.navbarCollapsed = true;
                });
	        }
	    ]);

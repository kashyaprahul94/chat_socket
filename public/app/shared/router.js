
	
    angular.module('rk.shared')

		.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',

	        function ($stateProvider, $urlRouterProvider, $locationProvider) {

	            $stateProvider

	                .state('base', {
	                    abstract: true,
	                    views: {
	                        'header@': {
	                            templateUrl: 'app/shared/templates/header.html',
	                            controller: 'HeaderCtrl'
	                        },
	                        'footer@': {
	                            templateUrl: 'app/shared/templates/footer.html',
	                            controller: 'FooterCtrl'
	                        }
	                    }
	                })	           

	                .state('base.home', {
	                    url: '/home',
	                    views: {
	                        'main@': {
	                            templateUrl: 'app/home/templates/home.html',
	                            controller: 'HomeCtrl'
	                        }
	                    }
	                })
	                ;

	            $urlRouterProvider.otherwise('/home');
	            $locationProvider.hashPrefix('!');
	        }
	    ]);
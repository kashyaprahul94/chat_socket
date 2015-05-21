


	angular.module('rk.shared')

		.directive('autoscroll', ['$rootScope', 

			function ($rootScope) {  

				return function(scope, element, attrs) {

					var pos = element[0].parentNode.scrollHeight;

					jQuery(element).parent().stop().animate({
						scrollTop : pos
					}, 100);
				}
			}
		]);
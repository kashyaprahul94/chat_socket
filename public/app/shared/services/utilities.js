

	angular.module('rk.shared')

		.factory('Utils', ['$rootScope', '$injector', 

			function ($rootScope, $injector) {

				var $log = $injector.get('$log');
				var $modal = $injector.get('$modal');
				var $state = $injector.get('$state');
				var $filter = $injector.get('$filter');
				var $timeout = $injector.get('$timeout');				
				var Configs = $injector.get('Configs');




				var Utils = {



                    /* ---------------------- <Utilities Methods> ---------------------- */
					
					showLoading: function () {

					},

					hideLoading: function () {

					},					

					showAlert: function (alertType, messageKey) {

						if ( alertType == 'success' ) {
							this.showSuccess(messageKey);
						} 

						else if ( alertType == 'error' ) {
							this.showError(messageKey);
						} 

						else if ( alertType == 'warning' ) {
							this.showWarning(messageKey);
						} 

						else  {
							this.showInfo(messageKey);
						}
					},

					showSuccess: function (messageKey) {

					},

					showWarning: function (messageKey) {

					},

					showError: function (messageKey, errorRef) {

					},

					showInfo: function (messageKey) {

					},


					hideAlert: function () {

					},





					logs: {

						log: function (string) {
							$log.log(string);
						},

						info: function (string) {
							$log.info(string);
						},

						warn: function (string) {
							$log.warn(string);
						},

						error: function (string) {
							$log.error(string);
						},

						debug: function (string) {
							$log.debug(string);
						}
					},




					scrollTo: function (element) {

						if ( jQuery('#' + element).length === 1 ) {

							jQuery('html, body').animate({
								scrollTop:  jQuery('#' + element).position().top
							}, 1500);
						};
					},


                    /* ---------------------- <BaseUrl> ---------------------- */

					getBaseUrl: function () {
						return Configs.baseUrl;
					},



                    /* ---------------------- < Urls> ---------------------- */


                    getRegisterForEventUrl: function () {
                    	return this.getBaseUrl() + Configs.apis.registerForEvent.url;
                    },





                    /* ---------------------- <Jump To Pages> ---------------------- */

					gotoHomePage: function () {
						$state.go('base.home');
					},





                    /* ---------------------- <Other Methods> ---------------------- */


                    trustSrc: function (src) {
						return $injector.get('$sce').trustAsResourceUrl(src);
                    },








                    /* ---------------------- <Formatters> ---------------------- */





                    /* ---------------------- <Error Handling> ---------------------- */

                    handleErrors: function (errorData) {

                    	
                    }


				};

				return Utils;
			}
		]);

	
	angular.module('rk.shared')

		.factory('RESTSvc', ['$rootScope', '$q', '$http', 'Utils',

			function ($rootScope, $q, $http, Utils) {

				return {

					get: function( url, data ) {

						var deferred = $q.defer();

						$http.get(
							url,
							data
						).success(function (data, status, headers, config) {
							deferred.resolve({
								data: data,
								status: status,
								headers: headers,
								config: config
							});
						}).error(function (data, status, headers, config) {

							var errorOb = {
								data: data,
								status: status,
								headers: headers,
								config: config
							};

							Utils.hideLoading();
		            		Utils.handleErrors(errorOb);
							deferred.reject(errorOb);
						});

						return deferred.promise;
					},


					post: function( url, data ) {

						var deferred = $q.defer();

						$http.post(
							url,
							data
						).success(function (data, status, headers, config) {
							deferred.resolve({
								data: data,
								status: status,
								headers: headers,
								config: config
							});
						}).error(function (data, status, headers, config) {

							var errorOb = {
								data: data,
								status: status,
								headers: headers,
								config: config
							};

							Utils.hideLoading();
		            		Utils.handleErrors(errorOb);
							deferred.reject(errorOb);
						});
						
						return deferred.promise;
					},


					put: function( url, data ) {

						var deferred = $q.defer();

						$http.put(
							url,
							data
						).success(function (data, status, headers, config) {
							deferred.resolve({
								data: data,
								status: status,
								headers: headers,
								config: config
							});
						}).error(function (data, status, headers, config) {

							var errorOb = {
								data: data,
								status: status,
								headers: headers,
								config: config
							};

							Utils.hideLoading();
		            		Utils.handleErrors(errorOb);
							deferred.reject(errorOb);
						});
						
						return deferred.promise;
					},

					delete: function( url, data ) {

						var deferred = $q.defer();

						$http.delete(
							url,
							data
						).success(function (data, status, headers, config) {
							deferred.resolve({
								data: data,
								status: status,
								headers: headers,
								config: config
							});
						}).error(function (data, status, headers, config) {

							var errorOb = {
								data: data,
								status: status,
								headers: headers,
								config: config
							};

							Utils.hideLoading();
		            		Utils.handleErrors(errorOb);
							deferred.reject(errorOb);
						});
						
						return deferred.promise;
					}
				};
			}
		]);
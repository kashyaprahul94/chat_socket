
	
	angular.module('rk.shared')

		.factory('SocketSvc', ['$rootScope', '$injector',

			function ($rootScope, $injector) {

				var socketFactory = $injector.get('socketFactory');

				var socket = io.connect('localhost:3000');

				var SocketSvc = {

					on: function (eventName, callback) {

						socket.on(eventName, function () {  
							var args = arguments;
							$rootScope.$apply(function () {
								callback.apply(socket, args);
							});
						});
					},

					emit: function (eventName, data, callback) {

						socket.emit(eventName, data, function () {
							var args = arguments;
							$rootScope.$apply(function () {
								if (callback) {
									callback.apply(socket, args);
								}
							});
						})
					}
				};

				return SocketSvc;
			}
		]);
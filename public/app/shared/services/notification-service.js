
	
	angular.module('rk.shared')

		.factory('NotificationSvc', ['$rootScope', '$injector',

			function ($rootScope, $injector) {

				var SocketSvc = $injector.get('SocketSvc');

				var NotificationSvc = {

					getNotifications: function () {

						SocketSvc.on('notifications:get', function (notificationsData) {
							$rootScope.$broadcast('notifications:updated', notificationsData);
						});
					},

					saveNotification: function (notificationOb) {

						SocketSvc.emit('notifications:save', notificationOb, function (notifcationResponse) {
							$rootScope.$broadcast('notifications:updated', notifcationResponse);
						});
					},
				};

				return NotificationSvc;
			}
		]);
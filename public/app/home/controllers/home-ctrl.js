

	angular.module('rk.home')

	    .controller('HomeCtrl', ['$rootScope', '$scope', '$injector',

	        function ($rootScope, $scope, $injector) {
	        	
	        	var Utils = $injector.get('Utils');
	        	var SocketSvc = $injector.get('SocketSvc');


	    		$scope.chat = {

	    			message: '',
	    			messages: []
	    		};


	    		$scope.getMessages = function () {

	    			SocketSvc.emit('messages:get', {
	    				userId: $scope.me.userId
	    			});
	    		};



	    		$scope.sendMessage = function (chatOb) {

	    			var chatMessage = {
	    				message: chatOb.message,
	    				sender: $scope.me.userId,
	    				receiver: $scope.you.userId
	    			};

	    			SocketSvc.emit('message:send', chatMessage);

	    			chatOb.message = '';
	    		};



	    		SocketSvc.on('messages:updated', function (chatMessages) {
					$scope.chat.messages = chatMessages[0];
				});

	    		SocketSvc.on('chat:updated', function (chat) {
					$scope.getMessages();
				});




	    		$scope.users = {

	    			me: {
	    				userId: '554e1ed2e319f6fc89c55cd4'
	    			},

	    			you: {
	    				userId: '554e1eeae319f6fc89c55cd5'
	    			}
	    		};

	    		$scope.me = $scope.users.me;
	    		$scope.you = $scope.users.you;


	    		$scope.selectMe = function () {
		    		$scope.me = $scope.users.me;
		    		$scope.you = $scope.users.you;
	    		};

	    		$scope.selectYou = function () {
		    		$scope.me = $scope.users.you;
		    		$scope.you = $scope.users.me;
	    		};



				
				$scope.init = function () {
					$scope.getMessages();
				};

				$scope.init ();


	        }
	    ]);

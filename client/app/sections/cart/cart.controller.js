'use strict';

angular.module('marriageEventApp')
	.controller('CartCtrl', function ($scope, $http, gifts, $modalInstance, $modal) {

		$scope.gifts = gifts.getTickets();
		$scope.$watch( function() { return gifts.getTickets(); }, function(tickets) {
			$scope.gifts = tickets;
		});

		$scope.ticketsCount = gifts.getTicketsCount();
		$scope.$watch( function() { return gifts.getTicketsCount(); }, function(count) {
			$scope.ticketsCount = count;
		});

		// --- gifts manipulation ---
		$scope.addToGifts = function(stageId) {
			gifts.addTicket(stageId, undefined);
		};

		$scope.removeFromGifts = function(stageId) {
			gifts.removeTicket(stageId);
		};
		// gifts manipulation		

		$scope.confirm = function (data) {
			var confirmation = {
				persons: data.persons,
				email: data.email,
				message: data.message,
				tickets: [ ]
			};
			for (var id in $scope.gifts) {
				if ($scope.gifts.hasOwnProperty(id)) {
					if ($scope.gifts[id].booked > 0) {
						confirmation.tickets.push({
							stageId: id, 
							stageName: $scope.gifts[id].stage.title,
							tickets: $scope.gifts[id].booked
						});
					}
				}
			}

			var response = $http.post('/api/reservations', confirmation);
			response.success(function(data, status, headers, config) {
				gifts.setBooked(true);
				gifts.clearTickets();
				$modalInstance.dismiss('cancel');

				var instance = $modal.open({
					templateUrl: 'app/sections/cart/thankyou.html',
					controller: 'ThankyouCtrl',
					size: 'sm',
					resolve: { }
				});
				instance.result.then(function() { }, function() { });
			});

			response.error(function(data, status, headers, config) {
				console.log('error');
			});
		};


		$scope.reset = function () {
			gifts.clearTickets();
			$modalInstance.dismiss('cancel');
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	});
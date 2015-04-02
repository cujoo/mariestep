'use strict';

angular.module('marriageEventApp')
	.controller('NavbarCtrl', function ($scope, $location, gifts, $modal) {
		$scope.menu = [{
			'title': 'Home',
			'link': '/'
		}];

		$scope.isCollapsed = true;

		$scope.isActive = function(route) {
			return route === $location.path();
		};

		$scope.gifts = gifts.getTicketsCount();
		$scope.$watch( function() { return gifts.getTicketsCount(); }, function(count) {
			$scope.gifts = count;
		});

		// gifts cart modal manipulation
		$scope.giftsCart = function() {
			var instance = $modal.open({
				templateUrl: 'app/sections/cart/cart.html',
				controller: 'CartCtrl',
				size: 'lg',
				resolve: { }
			});

			instance.result.then(function() { }, function() { });
		};
		// gifts cart modal manipulation
	});
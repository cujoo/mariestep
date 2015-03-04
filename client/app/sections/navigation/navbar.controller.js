'use strict';

angular.module('marriageEventApp')
	.controller('NavbarCtrl', function ($scope, $location, gifts) {
		$scope.menu = [{
			'title': 'Home',
			'link': '/'
		}];

		$scope.isCollapsed = true;

		$scope.isActive = function(route) {
			return route === $location.path();
		};

		$scope.gifts = gifts.getItemsCount();
		$scope.$watch( function() { return gifts.getItemsCount(); }, function(count) {
			$scope.gifts = count;
		});
	});
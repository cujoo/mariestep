'use strict';

angular.module('marriageEventApp')
	.controller('AboutUsCtrl', function ($scope, $location) {
		$scope.menu = [{
			'title': 'Home',
			'link': '/'
		}];

		$scope.isActive = function(route) {
			return route === $location.path();
		};
	});
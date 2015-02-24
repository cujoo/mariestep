'use strict';

angular.module('marriageEventApp')
	.controller('TripCtrl', function ($scope, $location, $http) {
		$scope.menu = [{
			'title': 'Home',
			'link': '/'
		}];

		$scope.isActive = function(route) {
			return route === $location.path();
		};

		$scope.stages = [ ];

		$http.get('/api/stages').success(function(stages) {
			$scope.stages = stages;
		});
	});
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

		this.active = 0;
		this.selectStage = function(idx) {
			this.active = idx;
		};
		this.isStageSelected = function(idx) {
			return this.active === idx;
		};
		this.stagesSize = function() {
			return $scope.stages.length;
		}
	});
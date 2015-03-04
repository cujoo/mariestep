'use strict';

angular.module('marriageEventApp')
	.controller('TripCtrl', function ($scope, $location, $http, gifts, $modal) {
		$scope.menu = [{
			'title': 'Home',
			'link': '/'
		}];

		$scope.isActive = function(route) {
			return route === $location.path();
		};

		// --- stages manipulation ---
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
		};
		
		$scope.range = function(idx) {
			return new Array(idx);
		};
		// --- stages manipulation ---

		// --- gifts manipulation ---
		this.addGift = function() {
			gifts.addItem();
		};

		this.removeGift = function() {
			gifts.removeItem();
		};
		// gifts manipulation

		// snapshots modal manipulation
		$scope.snapshot = function(stageIdx, snapshotIdx) {
			var instance = $modal.open({
				templateUrl: 'app/sections/trip/snapshot.html',
				controller: 'SnapshotCtrl',
				size: 'lg',
				resolve: {
					stage: function() {
						for (var i=0; i<$scope.stages.length; i++) {
							if ($scope.stages[i].id === stageIdx)
								return $scope.stages[i];
						}
						return { id: 0, title: 'unknown' };
					},
					snapshot: function() { return snapshotIdx; }
				}
			});

			instance.result.then(function() { }, function() { });
		};
		// snapshots modal manipulation
	});
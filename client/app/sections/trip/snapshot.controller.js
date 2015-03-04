'use strict';

angular.module('marriageEventApp')
	.controller('SnapshotCtrl', function ($scope, $modalInstance, stage, snapshot) {
		
		$scope.stage = stage;
		$scope.snapshot = snapshot;

		$scope.ok = function () {
			$modalInstance.close();
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	});
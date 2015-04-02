'use strict';

angular.module('marriageEventApp')
	.controller('ThankyouCtrl', function ($scope, $modalInstance) {

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
		
	});
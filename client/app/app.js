'use strict';

angular.module('marriageEventApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ui.router',
	'ui.bootstrap',
	'uiGmapgoogle-maps'
])
	.constant('CONSTANTS', {
		'GMAP_KEY': 'AIzaSyBQqtJUvHElg4-BTQ-vSNw9sNMds5ZmXck'
	})
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider, uiGmapGoogleMapApiProvider, CONSTANTS) {
		$urlRouterProvider
			.otherwise('/');

		$locationProvider.html5Mode(true);

		uiGmapGoogleMapApiProvider.configure({
			key: CONSTANTS.GMAP_KEY,
			v: '3.17',
			libraries: 'weather,geometry,visualization'
    });
	});
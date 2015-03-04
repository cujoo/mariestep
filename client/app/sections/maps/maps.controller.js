'use strict';

angular.module('marriageEventApp')
	.controller('MapsCtrl', function ($scope, $location, uiGmapGoogleMapApi, CONSTANTS) {
		$scope.menu = [{
			'title': 'Home',
			'link': '/'
		}];

		$scope.isActive = function(route) {
			return route === $location.path();
		};

		// uiGmapGoogleMapApi is a promise.
		// The 'then' callback function provides the google.maps object.
		uiGmapGoogleMapApi.then(function() {
			var coordsC = { latitude: 41.88013, longitude: 12.49479 },
				coordsR = { latitude: 41.88533, longitude: 12.51431 },
				mapOptions = {
					// Disables the default Google Maps UI components
					disableDefaultUI: false,
					scrollwheel: false,
					draggable: false,

					// How you would like to style the map. 
					// This is where you would paste any style found on Snazzy Maps.
					styles: [
							{
								"featureType": "landscape",
								"stylers": [
									{
										"saturation": -100
									},
									{
										"lightness": 65
									},
									{
										"visibility": "on"
									}
								]
							},
							{
								"featureType": "poi",
								"stylers": [
									{
										"saturation": -100
									},
									{
										"lightness": 51
									},
									{
										"visibility": "simplified"
									}
								]
							},
							{
								"featureType": "road.highway",
								"stylers": [
									{
										"saturation": -100
									},
									{
										"visibility": "simplified"
									}
								]
							},
							{
								"featureType": "road.arterial",
								"stylers": [
									{
										"saturation": -100
									},
									{
										"lightness": 30
									},
									{
										"visibility": "on"
									}
								]
							},
							{
								"featureType": "road.local",
								"stylers": [
									{
										"saturation": -100
									},
									{
										"lightness": 40
									},
									{
										"visibility": "on"
									}
								]
							},
							{
								"featureType": "transit",
								"stylers": [
									{
										"saturation": -100
									},
									{
										"visibility": "simplified"
									}
								]
							},
							{
								"featureType": "administrative.province",
								"stylers": [
									{
										"visibility": "off"
									}
								]
							},
							{
								"featureType": "water",
								"elementType": "labels",
								"stylers": [
									{
										"visibility": "on"
									},
									{
										"lightness": -25
									},
									{
										"saturation": -100
									}
								]
							},
							{
								"featureType": "water",
								"elementType": "geometry",
								"stylers": [
									{
										"hue": "#ffff00"
									},
									{
										"lightness": -25
									},
									{
										"saturation": -97
									}
								]
							}
						]
				};

			$scope.c = {
				map: {
					center: coordsC,
					zoom: 17,
					options: mapOptions
				},
				marker: {
					id: CONSTANTS.GMAP_KEY,
					coords: coordsC
				}
			};

			$scope.r = {
				map: {
					center: coordsR,
					zoom: 17,
					options: mapOptions
				},
				marker: {
					id: CONSTANTS.GMAP_KEY,
					coords: coordsR
				}
			};
		});		
	});
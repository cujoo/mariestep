'use strict';

angular.module('marriageEventApp')
	.directive('scroll', function($window) {
		return function($scope, $navbar) {
			angular.element($window).bind('scroll', function() {
				if ($navbar.offset().top > 50) {
					$navbar.addClass('top-nav-collapse');
				} else {
					$navbar.removeClass('top-nav-collapse');
				}
			});
		};
	})
	.directive('scrollAnchor', function() {
		return function($scope, $anchor) {
			angular.element($anchor).bind('click', function(event) {
				angular.element('html, body').stop().animate({
					scrollTop: angular.element($anchor.attr('href')).offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
			});
		};
	});
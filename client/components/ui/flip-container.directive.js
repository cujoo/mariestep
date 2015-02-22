'use strict';

angular.module('marriageEventApp')
	.directive('flipContainer', function() {
		return {
			restrict: 'E',
			controller: function($scope, $element, $attrs) {
				var self = this;
				self.front = null;
				self.rear = null;
				self.verse = 'left'; 
			
				function showFront(){
					if (self.verse == 'left') {
						self.front.removeClass('flip-rotate-right');
						self.rear.addClass('flip-rotate-left');
					} else if (self.verse == 'right') {
						self.front.removeClass('flip-rotate-left');
						self.rear.addClass('flip-rotate-right');
					}
				}
			
				function showBack(){
					if (self.verse == 'left') {
						self.rear.removeClass('flip-rotate-left');
						self.front.addClass('flip-rotate-right');
					} else if (self.verse == 'right') {
						self.rear.removeClass('flip-rotate-right');
						self.front.addClass('flip-rotate-left');
					}          
				}
			
				self.init = function(verse){
					self.front.addClass('flip-none');
					self.rear.addClass('flip-none');
					self.verse = verse;
					
					showFront();
					
					self.front.on('click', showBack);
					self.rear.on('click', showFront);
				}      
			},
			link: function($scope, $element, $attrs, $ctrl) {
				$element.addClass('flip');
				if ($ctrl.front && $ctrl.rear) {
					$ctrl.init($attrs.verse);
				} else {
					console.error('[flip-container]: front and/or rear container not defined!');
				}
			}
		}
	})
	.directive('front', function() {
		return {
			restrict: 'E',
			require: '^flipContainer',
			link: function(scope, element, attrs, $ctrl) {
				if (!$ctrl.front) { $ctrl.front = element }
				else {
					console.error('[flip-container]: front container is already defined!');
				}
			}
		}
	})
	.directive('rear', function() {
		 return {
			restrict: 'E',
			require: '^flipContainer',
			link: function(scope, element, attrs, $ctrl) {
				if (!$ctrl.rear) { $ctrl.rear = element }
				else {
					console.error('[flip-container]: rear container is already defined!');
				}
			}
		} 
	});
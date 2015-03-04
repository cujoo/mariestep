'use strict';

angular.module('marriageEventApp')
 	.service('gifts', function () {
	
		var items = [ ];

		this.getItemsCount = function() {
			return items.length;
		};

		this.addItem = function() {
			items.push({ });
		};

		this.removeItem = function() {
			items.pop();
		};

	});

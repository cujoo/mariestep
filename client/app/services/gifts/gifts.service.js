'use strict';

angular.module('marriageEventApp')
 	.service('gifts', function () {
	
		var tickets = { }, total = 0, booked = false;

		this.setBooked = function(value) {
			booked = value;
		};

		this.hasBeenBooked = function() {
			return booked;
		}
 
		this.getTickets = function() {
			return tickets;
		};

		this.clearTickets = function() {
			tickets = { };
			total = 0;
		};

		this.getTicketsCount = function() {
			return total;
		};

		this.getStageTicketsCount = function(id) {
			if (tickets[id] === undefined) {
				return 0;
			}
			return tickets[id].booked;
		};

		this.addTicket = function(id, stage) {
			if (tickets[id] === undefined && stage !== undefined) {
				tickets[id] = { stage: stage, booked: 0};
			}
			tickets[id].booked++;
			total++;
		};

		this.removeTicket = function(id) {
			if (tickets[id] === undefined) {
				return;
			}
			if (tickets[id].booked === 0) {
				return;
			}
			tickets[id].booked--;
			total--;
		};

	});

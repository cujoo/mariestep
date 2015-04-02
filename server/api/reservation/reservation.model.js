'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ReservationSchema = new Schema({
	_id: Schema.Types.ObjectId,
	persons: String,
	email: String,
	message: String,
	gifts: [{ stageId: Number, stageName: String, tickets: Number}],
	date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
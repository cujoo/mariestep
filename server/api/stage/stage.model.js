'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var StageSchema = new Schema({
	id: Number,
	title: String,
	info: String,
	t_free: Number,
	t_pending: Number,
	t_booked: Number
});

module.exports = mongoose.model('Stage', StageSchema);
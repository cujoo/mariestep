'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var StageSchema = new Schema({
	id: Number,
	title: String,
	info: String,
	t_free: Number,
	t_pending: Number,
	t_booked: Number,
	t_persons: [ String ],
	ss_1: String,
	ss_2: String,
	ss_3: String,
	ss_4: String
});

module.exports = mongoose.model('Stage', StageSchema);
'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var StageSchema = new Schema({
	id: Number,
	title: String,
	info: String
});

module.exports = mongoose.model('Stage', StageSchema);
/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Stage = require('../api/stage/stage.model');

Stage.find({}).remove(function() {
	Stage.create({
		id 			: 1,
		title		: 'Il volo',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 13,
		t_pending	: 1,
		t_booked	: 1
	},{
		id			: 2,
		title		: 'Lima',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 3,
		title		: 'Paracas',
		info 		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 4,
		title		: 'Nazca',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 5,
		title		: 'Arequipa',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 6,
		title		: 'Cruz del Condor',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 7,
		title		: 'Colca del Cayon',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 8,
		title		: 'Puno',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 9,
		title		: 'Lago Titicaca',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 10,
		title		: 'La Paz',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 11,
		title		: 'Salar de Uyuni',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 12,
		title		: 'Cuzco',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 13,
		title		: 'Aguascaliente',
		info		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	},{
		id 			: 14,
		title		: 'Macchu Piccu',
		info  		: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		t_free		: 0,
		t_pending	: 0,
		t_booked	: 0
	});
});
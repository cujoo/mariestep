/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Stage = require('../api/stage/stage.model');

Stage.find({}).remove(function() {
	Stage.create({
		id 		: 1,
		title	: 'Il volo',
		info	: ''
	},{
		id		: 2,
		title	: 'Lima',
		info	: ''
	},{
		id 		: 3,
		title	: 'Paracas',
		info 	: ''
	},{
		id 		: 4,
		title	: 'Nazca',
		info	: ''
	},{
		id 		: 5,
		title	: 'Arequipa',
		info	: ''
	},{
		id 		: 6,
		title	: 'Cruz del Condor',
		info	: ''
	},{
		id 		: 7,
		title	: 'Colca del Cayon',
		info	: ''
	},{
		id 		: 8,
		title	: 'Puno',
		info	: ''
	},{
		id 		: 9,
		title	: 'Lago Titicaca',
		info	: ''
	},{
		id 		: 10,
		title	: 'La Paz',
		info	: ''
	},{
		id 		: 11,
		title	: 'Salar de Uyuni',
		info	: ''
	},{
		id 		: 12,
		title	: 'Cuzco',
		info	: ''
	},{
		id 		: 13,
		title	: 'Aguascaliente',
		info	: ''
	},{
		id 		: 14,
		title	: 'Macchu Piccu',
		info  : ''
	});
});
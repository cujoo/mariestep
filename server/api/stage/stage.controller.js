/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /stages              ->  index
 * POST    /stages              ->  create
 * GET     /stages/:id          ->  show
 * PUT     /stages/:id          ->  update
 * DELETE  /stages/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Stage = require('./stage.model');

// Get list of stages
exports.index = function(req, res) {
	Stage.find().sort('id').exec(function(err, stages) {
		if (err) { return handleError(res, err); }
		return res.json(200, stages);
	});
};

// Get a single thing
exports.show = function(req, res) {

};


// Creates a new thing in the DB.
exports.create = function(req, res) {

};

// Updates an existing thing in the DB.
exports.update = function(req, res) {

};

//exports.update = function(req, res) {
//  if(req.body._id) { delete req.body._id; }
//  Thing.findById(req.params.id, function (err, thing) {
//    if (err) { return handleError(res, err); }
//    if(!thing) { return res.send(404); }
//    var updated = _.merge(thing, req.body);
//    updated.save(function (err) {
//      if (err) { return handleError(res, err); }
//      return res.json(200, thing);
//    });
//  });
//};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {

};

//exports.destroy = function(req, res) {
//  Thing.findById(req.params.id, function (err, thing) {
//    if(err) { return handleError(res, err); }
//    if(!thing) { return res.send(404); }
//    thing.remove(function(err) {
//      if(err) { return handleError(res, err); }
//      return res.send(204);
//    });
//  });
//};

function handleError(res, err) {
	return res.send(500, err);
}
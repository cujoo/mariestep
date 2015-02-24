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
//var Stage = require('./stage.model');

// Get list of stages
exports.index = function(req, res) {
	return res.json(200,[
		{name: "stage 01"},{name: "stage 02"},{name: "stage 03"},
		{name: "stage 04"},{name: "stage 05"},{name: "stage 06"},
		{name: "stage 07"},{name: "stage 08"},{name: "stage 09"},
		{name: "stage 10"},{name: "stage 12"},{name: "stage 13"},
		{name: "stage 14"},{name: "stage 15"},{name: "stage 16"},
		{name: "stage 17"},{name: "stage 18"},{name: "stage 19"},
		{name: "stage 20"},{name: "stage 21"},{name: "stage 22"}])
};

//exports.index = function(req, res) {
//  Thing.find(function (err, things) {
//    if(err) { return handleError(res, err); }
//    return res.json(200, things);
//  });
//};

// Get a single thing
exports.show = function(req, res) {

};

//exports.show = function(req, res) {
//  Thing.findById(req.params.id, function (err, thing) {
//    if(err) { return handleError(res, err); }
//    if(!thing) { return res.send(404); }
//    return res.json(thing);
//  });
//};

// Creates a new thing in the DB.
exports.create = function(req, res) {

};

//exports.create = function(req, res) {
//  Thing.create(req.body, function(err, thing) {
//    if(err) { return handleError(res, err); }
//    return res.json(201, thing);
//  });
//};

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
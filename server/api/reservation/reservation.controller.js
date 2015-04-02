/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /reservations              ->  index
 * POST    /reservations              ->  create
 * GET     /reservations/:id          ->  show
 * PUT     /reservations/:id          ->  update
 * DELETE  /reservations/:id          ->  destroy
 */

'use strict';

var _ = require('lodash'),
	mongoose = require('mongoose'),
	email = require("emailjs");
var Reservation = require('./reservation.model'),
	Stage = require('../stage/stage.model');

function createMail(reservation) {
	var htmlTxt = '<html><p>Ciao ' + reservation.persons + '!</p><p>Queste sono le mete scelte per il regalo:<ul>',
		simpleTxt = 'Ciao ' + reservation.persons + '! Hai selezionato un totale di ';
	var total = 0;
	for (var i=0; i<reservation.gifts.length; i++) {
		var gift = reservation.gifts[i];
		htmlTxt += '<li class="font-weight: normal;"><b>' + gift.stageName + '</b> - x <b>' + gift.tickets + '</b> (<b>' + (gift.tickets * 25) + ' €</b>)</li>';
		total += gift.tickets;
	}
	htmlTxt += '</ul>per un totale di <b>' + (total * 25) + ' €</b>.</p>';
	simpleTxt += (total + ' per un totale di ' + (total * 25) + ' €.\n');
	htmlTxt += '<p>L\'IBAN tramite cui effettuare il bonifico è <b>IT69G0760103200001007437815</b>. Grazie ancora per il tuo contributo, al 16 maggio!</b></html>';
	simpleTxt += 'L\'IBAN tramite cui effettuare il bonifico è IT69G0760103200001007437815. Grazie ancora per il tuo contributo, al 16 maggio!\n';
	htmlTxt += '<br /><p>Marisol e Stefano leggeranno: </p><p><i>' + reservation.message + '</i></p>';
	simpleTxt += 'Marisol e Stefano leggeranno: ' + reservation.message;
	return {
		text: simpleTxt, 
		html: htmlTxt
	};
}

// Get list of stages
exports.index = function(req, res) {
	Reservation.find().sort('id').exec(function(err, stages) {
		if (err) { return handleError(res, err); }
		return res.json(200, stages);
	});
};

// Get a single thing
exports.show = function(req, res) {

};

// Creates a new thing in the DB.
exports.create = function(req, res) {
	var data = req.body;
	Reservation.create({
		_id: new mongoose.Types.ObjectId,
		persons: data.persons,
		email: data.email,
		message: data.message,
		gifts: data.tickets
	}, function(errCreate, reservation) {
		if (errCreate) { return handleError(res, errCreate); }

		for (var i=0; i<reservation.gifts.length; i++) {
			var gift = reservation.gifts[i];
			Stage.findOne({ 'id': gift.stageId }, function(err, stage) {
				stage.t_persons.push(reservation.persons);
				stage.t_pending += gift.tickets;
				stage.t_free -= gift.tickets;
				if (stage.t_free < 0) {
					stage.t_free = 0;
				}
				stage.save(function(err) {
					if (err) console.log(err);
				});
			});
		}
		
		var mail = createMail(reservation),
			bcc = 'Daniele <cujoo.80@hotmail.com>, Stefano <sed8086@gmail.com>'
		email.server.connect({
			user: 'regalo@mariestep16maggio.com',
			password: 'n1ghtw1sh',
			host: 'smtpout.europe.secureserver.net'
		}).send({
			text: mail.text,
			attachment: [{ data: mail.html, alternative: true }],
			subject: 'Il tuo regalo',
			from: 'Marisol e Stefano <regalo@mariestep16maggio.com>',
			to: reservation.email,
			bcc: bcc
		}, function(errMail, message) {
			if (errMail) { return handleError(res, errCreate); }
			return res.json(201, reservation);
		});
	});
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {

};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {

};

function handleError(res, err) {
	return res.send(500, err);
}
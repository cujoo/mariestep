/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Stage = require('../api/stage/stage.model');
var Reservation = require('../api/reservation/reservation.model');

Stage.find({}).remove(function() {
	Stage.create({
		id 			: 1,
		title		: 'Il volo',
		info		: '<p>Dagli Appennini alle Ande... Hasta Pronto</p><p>18 ore di volo per insegnare lo spagnolo a Stefano, se riuscirà a tenerla sveglia abbastanza.</p>',
		t_free		: 13,
		t_pending	: 0,
		t_booked	: 1,
		t_persons	: ['Qui, quo e qua', 'Zio Paperone', 'Tippe e Tappe'],
		ss_1		: '',
		ss_2		: '',
		ss_3		: '',
		ss_4		: ''
	},{
		id			: 2,
		title		: 'Lima',
		info		: '<p>Da qui inizierà e terminerà il nostro viaggio. Una valigia da riempire di ricordi ed un’altra da riportare a casa con tanti souvenir e maglioni colorati... tutto sulle spalle di Stefano.</p>',
		t_free		: 3,
		t_pending	: 2,
		t_booked	: 0,
		t_persons	: ['Io'],
		ss_1		: 'Veduta della città',
		ss_2		: 'Cattedrale di Plaza de Armas',
		ss_3		: 'Miraflores',
		ss_4		: 'Magic Water Circuit'
	},{
		id 			: 3,
		title		: 'Paracas',
		info 		: '<p>A poche ore di “<i>carrettera</i>” da Lima l’incontro con pinguini e leoni marini attraverso un’escursione dal piccolo imbarcadero di Paracas, per poi proseguire verso l’oasi di Huacachina.</p>',
		t_free		: 1,
		t_pending	: 0,
		t_booked	: 10,
		t_persons	: ['Tizio', 'Caio', 'Sempronio'],
		ss_1		: 'La cattedrale',
		ss_2		: 'Pinguini delle Isole',
		ss_3		: 'Oasi di Huacachina',
		ss_4		: 'El Candelabro de Paracas'
	},{
		id 			: 4,
		title		: 'Nazca',
		info		: '<p>Il sorvolo acrobatico, rigorosamente digiuni, sulle Linee di Nazca... a quanto pare veri e propri disegni sul deserto che possono essere visti solamente dal cielo. Chi perderà prima i sensi?</p>',
		t_free		: 10,
		t_pending	: 0,
		t_booked	: 0,
		t_persons	: [ ],
		ss_1		: 'Il Colibrì',
		ss_2		: 'Il Cane',
		ss_3		: 'L’astronauta',
		ss_4		: 'Gli aereoplani che sorvolano Nazca'
	},{
		id 			: 5,
		title		: 'Arequipa',
		info		: '<p>Si inizia a prendere quota in tutti i sensi arrivando nella seconda città più grande del Perù, la Ciudad Blanca, dove avremo modo di acclimatarci e visitare il monastero di Santa Catalina, all’ombra del vulcano El Misti.</p>',
		t_free		: 10,
		t_pending	: 0,
		t_booked	: 0,
		t_persons	: [ ],
		ss_1		: 'Cattedrale di notte',
		ss_2		: 'Monastero di Santa Catalina',
		ss_3		: 'Il centro storico',
		ss_4		: 'Vulcano El Misti'
	},{
		id 			: 6,
		title		: 'Cruz del Condor',
		info		: '<p>Sperando di poter ammirare lo spettacolare volo dei Condor sopra al Canyon, confondendoci tra le diverse comunità andine Yanque e Maca.</p>',
		t_free		: 10,
		t_pending	: 0,
		t_booked	: 0,
		t_persons	: [ ],
		ss_1		: 'Condor',
		ss_2		: 'Ballo della Comunità Yanque',
		ss_3		: 'Villaggio Maca',
		ss_4		: 'La cruz del Condor'
	},{
		id 			: 7,
		title		: 'Colca del Canyon',
		info		: '<p>Il secondo più profondo del mondo, passando attraverso la riserva nazionale delle vigogne dove potremo ammirare el nevado Chucura, las lagunillas de Toqra y Patapampa, el Mirador de los Andes per poi rilassarci tra i bagni termali di Chivay.</p>',
		t_free		: 10,
		t_pending	: 0,
		t_booked	: 0,
		t_persons	: [ ],
		ss_1		: 'La valle nel Colca Canyon',
		ss_2		: 'Mirador',
		ss_3		: 'El Nevado Chucura',
		ss_4		: 'Bagni termali di Chivay'
	},{
		id 			: 8,
		title		: 'Puno',
		info		: '<p>Tra le leggende del luogo sacro degli Inca, costellato di isole naturali dove visiteremo le Isole galleggianti Uros e Taquille per scoprire le tradizioni di un tempo delle tribù locali.</p>',
		t_free		: 10,
		t_pending	: 0,
		t_booked	: 0,
		t_persons	: [ ],
		ss_1		: 'Veduta della città',
		ss_2		: 'Le Isole galleggianti Uros e Taquille',
		ss_3		: 'Le Isole galleggianti Uros e Taquille',
		ss_4		: 'Piazza a Puno'
	},{
		id 			: 9,
		title		: 'Lago Titicaca',
		info		: '<p>Eccoci tra Perù e Bolivia. Partendo da Puno attraverseremo il confine passando per il Lago Titicaca e l’isla del Sol, e infine metteremo i piedi sul suolo boliviano a Copacabana. Un ultimo sforzo tra le strade sterrate ci porterà a La Paz.</p>',
		t_free		: 10,
		t_pending	: 0,
		t_booked	: 0,
		t_persons	: [ ],
		ss_1		: 'Veduta dall’alto del Lago Titicaca',
		ss_2		: 'Copacabana',
		ss_3		: 'Isla del Sol',
		ss_4		: 'Copacabana'
	},{
		id 			: 10,
		title		: 'La Paz',
		info		: '<p>Poco tempo per ambientarci tra la folla che invade le strade e i numerosi mercati. Avremo il coraggio di visitare il famoso mercato delle Streghe? ...qualcuno suggerisce di no.</p>',
		t_free		: 10,
		t_pending	: 0,
		t_booked	: 0,
		t_persons	: [ ],
		ss_1		: 'Illimani si erge sopra La Paz',
		ss_2		: 'Veduta dall’alto di La Paz',
		ss_3		: 'Mercati di La Paz',
		ss_4		: 'Le strade di La Paz'
	},{
		id 			: 11,
		title		: 'Salar de Uyuni',
		info		: '<p>Tra acqua e cielo. 3 giorni a quasi 4.000 di quota a bordo di un 4x4 con alle spalle solo un sacco a pelo, per perdersi nel selvaggio paesaggio della distesa salata più grande del mondo.</p>',
		t_free		: 10,
		t_pending	: 0,
		t_booked	: 0,
		t_persons	: [ ],
		ss_1		: 'Tramonto al Salar de Uyuni',
		ss_2		: 'Laguna rossa',
		ss_3		: 'La distesa Salata',
		ss_4		: 'L\'escursione in jeep'
	},{
		id 			: 12,
		title		: 'Cuzco',
		info		: '<p>Da Uyuni di nuovo in Perù atterrando a Cuzco, la capitale storica del Perù. Affronteremo un bellissimo tour che ci porterà a visitare il centro storico e le rovine che si trovano nei dintorni.</p>',
		t_free		: 10,
		t_pending	: 0,
		t_booked	: 0,
		t_persons	: [ ],
		ss_1		: 'Veduta dall’alto di Cuzco',
		ss_2		: 'Cuzco di notte',
		ss_3		: 'Chiesa della Compagnia',
		ss_4		: 'Le rovine nei dintorni - Pisac'
	},{
		id 			: 13,
		title		: 'Machu Picchu',
		info  		: '<p>È tutto pronto. Sveglia prestissimo e partenza da Aguascalientes per ammirare l’alba dalla cima della montagna che ospita la città perduta degli Inca, e perché no, farsi un selfie con un alpaca!</p>',
		t_free		: 10,
		t_pending	: 0,
		t_booked	: 0,
		t_persons	: [ ],
		ss_1		: 'Il sito di Machu Picchu',
		ss_2		: 'Aguascalientes',
		ss_3		: 'La città perduta',
		ss_4		: 'Il Fiume Rio Urubamba'
	});
});

Reservation.find({}).remove(function() { });
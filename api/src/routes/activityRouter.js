// 'use strict';   ---> ???????????

const { Router } = require('express');
var activityRouter = Router();

const { Activity } = require('../db.js');


// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
activityRouter.post('/', async (req, res) => {
	const { name, difficulty, season, duration, countries } = req.body;
	const activityCreated = await Activity.create({
		name,
		difficulty,
		season,
		duration,
	});
	
	const countriesParsed = countries.substr(1,countries.length-2).split(',');

	activityCreated.addCountries(countriesParsed);


	return res.status(200).send('Actividad agregada con exito');
});

module.exports = activityRouter;

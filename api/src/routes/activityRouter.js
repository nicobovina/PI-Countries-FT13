// 'use strict';   ---> ???????????
const { Op } = require('sequelize');
const { Router } = require('express');
var activityRouter = Router();

const { Activity } = require('../db.js');


// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
activityRouter.post('/', async (req, res) => {
	const { name, difficulty, season, duration, countries } = req.body;
	// const activityCreated = await Activity.create({
	// 	name,
	// 	difficulty,
	// 	season,
	// 	duration,
	// });
	const [activityCreated, created] = await Activity.findOrCreate({ where: { name: name.toLowerCase() } } );
	if (created){
		activityCreated.difficulty = difficulty;
		activityCreated.season = season;
		activityCreated.duration = duration;
		await activityCreated.save();
	}
	const countriesParsed = countries.substr(1,countries.length-2).split(',');
	activityCreated.addCountries(countriesParsed);

	return res.status(200).json(activityCreated);
});

module.exports = activityRouter;

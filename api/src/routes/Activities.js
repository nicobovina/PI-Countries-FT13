// 'use strict';   ---> ???????????
const { Op } = require('sequelize');
const { Router } = require('express');
var activities = Router();

const { Activity } = require('../db.js');


// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
activities.post('/', async (req, res) => {
	const { name, difficulty, season, duration, countries } = req.body;
	let activities;

	try{
		const [activity, created] = await Activity.findOrCreate({ 
			where: { name: name.toLowerCase() },
			defaults: {
				difficulty,
				season,
				duration
			}});
		activity.addCountries([...countries]);
		activities = await Activity.findAll({attributes: ['name']});
		return res.status(200).json(activities);
	} catch(err){
		return res.send(err);
	}
});



// Muestra las actividades creadas.
activities.get('/', async (req, res) => {	
	let activities;
	try{
		activities = await Activity.findAll();
		if (activities.length === 0)	return res.status(404).send('Not Found');
		return res.status(200).json(activities);
	} catch (err) {
		return res.send(err);
	}
});


module.exports = activities;



// 'use strict';   ---> ???????????
const { Op } = require('sequelize');
const { Router } = require('express');
var activityRouter = Router();

const { Activity } = require('../db.js');


// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
activityRouter.post('/', async (req, res) => {
	const { name, difficulty, season, duration, countries } = req.body;
	console.log(req.body);
	// Revisa si existe la actividad que se desea crear.
	// En caso de no existir esa actividad, la crea.
	// En caso de existir, la unica funcionalidad es permitir agregar nuevos paises
	const [activityCreated, created] = await Activity.findOrCreate({ 
		where: { name: name.toLowerCase() },
		defaults: {
			difficulty,
			season,
			duration
		}});
	console.log(activityCreated);
	// const countriesParsed = countries.substr(1,countries.length-2).split(',');
	// activityCreated.addCountries(countriesParsed);
	activityCreated.addCountries([...countries]);

	return res.status(200).json(activityCreated);
});



// Muestra las actividades creadas.
// En caso de recibir como parametro un name, busca en la BD de datos aquellas actividades con ese nombre
// y devuelve lo encontrado
activityRouter.get('/', async (req, res) => {
	const { name } = req.query;
	let activities;

	try{
		if (!name) activities = await Activity.findAll();
		else {
			activities = await Activity.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
			// En caso que no se encuentren actividades que incluyan el string name
			if (activities.length === 0)	return res.status(404).send('Activities not founded');
		}
		return res.status(200).json(activities);
	} catch (err) {
		return res.send(err);
	}
});


module.exports = activityRouter;

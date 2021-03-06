// 'use strict';   ---> ???????????
const axios = require("axios").default;
const { Op } = require('sequelize');
const { Router } = require('express');
var countries = Router();


const { Country, Activity } = require('../db.js');

// Obtengo todos los paises, y mostrar los 10 primeros.
// Por el body, el parametro 'index' indica a partir de que
// paises se tiene que enviar.
countries.get('/', async (req, res) => {
	const { name, continent } = req.query;
	let filters = {};
	let countries;

	try{
		if (name) filters.name = { [Op.iLike]: `%${name}%` };
		if (continent) filters.continent = { [Op.iLike]: `%${continent}%` };
		countries = await Country.findAll({
			where: {...filters},
			include: {
				model: Activity,
				attributes: ['name']
			},
			order: [['name', 'ASC']]
		});
		// En caso que no se encuentren paises con los parametros buscados
		// if (countries.length === 0)	return res.status(200).send(countries);
		if (countries.length === 0)	return res.status(404).send('Not Found');
		return res.status(200).send(countries);
	} catch (err) {
		return res.send(err);
	}	
});

// Recibe en la URL un codigo de 3 letras 
// que se corresponde con el ID del pais en la BD
countries.get('/:idPais', async (req, res) => {
	const { idPais } = req.params;
	try{
		const country = await Country.findByPk(idPais.toUpperCase(), {include: Activity});
		// En caso que el id recibido no coincida con un pais que se encuentre en BD
		if (!country)	return res.status(404).send('Not Found');
		return res.status(200).json(country);
	} catch (err) {
		return res.send(err);
	}
});





module.exports = countries;
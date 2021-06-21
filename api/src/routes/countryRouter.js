// 'use strict';   ---> ???????????
const axios = require("axios").default;
const { Op } = require('sequelize');
const { Router } = require('express');
var countryRouter = Router();


const { Country, Activity } = require('../db.js');

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan


// Obtengo todos los paises, y mostrar los 10 primeros.
// Por el body, el parametro 'index' indica a partir de que
// paises se tiene que enviar.
countryRouter.get('/', async (req, res) => {
	// Variable que controla hasta que pais se envio.
	// const { index } = req.query;
	const { name } = req.query;
	let countries;

	try{
		// En caso que no nos pasen como parametro en la URL un nombre
		// if (!name)	countries = await Country.findAll({limit: 10, offset: index*10 });
		if (!name){	countries = await Country.findAll({
				include: Activity,
				order: [['name', 'ASC']]
			});
		}
		// En caso que recibamos como parametro en la URl un nombre
		else {
			countries = await Country.findAll({ 
				where: { name: { [Op.iLike]: `%${name}%` } }, 
				include: Activity,
				order: [['name', 'ASC']]
			});
			// En caso que no se encuentren paises que incluyan el string name
			if (countries.length === 0)	return res.status(404).send('Country not founded');
		}
		return res.status(200).send(countries);
	} catch (err) {
		return res.send(err);
	}	
});



// Recibe en la URL un codigo de 3 letras 
// que se corresponde con el ID del pais en la BD
countryRouter.get('/:idPais', async (req, res) => {
	const { idPais } = req.params;
	const country = await Country.findByPk(idPais.toUpperCase());
	// En caso que el id recibido no coincida con un pais que se encuentre en BD
	if (!country)	return res.status(404).send('Country not founded');

	return res.status(200).json(country);
})





module.exports = countryRouter;
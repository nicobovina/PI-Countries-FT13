const { Op } = require('sequelize');
const { Country, Activity } = require('../../db.js');

const getCountries = async (name, continent) => {
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
		if (countries.length === 0)	throw { error: 'No se encontraron los paises'};
		return countries;
	} catch (err) {
		throw err;
	}	
}


const getCountry = async (idCountry) => {
	try{
		const country = await Country.findByPk(idCountry.toUpperCase(), {include: Activity});
		if (!country)	throw { error: 'No se encontró el pais' };
		return country;
	} catch (err) {
		throw err;
	}
}

module.exports = {
	getCountries,
	getCountry
};
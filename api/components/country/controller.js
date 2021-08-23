// 'use strict';   ---> ???????????
const store = require('./store.js');

const getCountries = async ({ name, continent }) => {
	try{
		const countries = await store.getCountries(name, continent);
		return countries;
	} catch (err){
		throw err;
	}
};

const getCountry = async ({idCountry}) => {
	try{
		const country = await store.getCountry(idCountry);
		return country;
	} catch (err){
		throw err;
	}
}

module.exports = {
	getCountries,
	getCountry
};
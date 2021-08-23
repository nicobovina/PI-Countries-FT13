const axios = require("axios").default;
const { Country, Activity } = require('./db.js');
const REST_COUNTRIES = 'https://restcountries.eu/rest/v2/all';

const apiCall = async () => {
  try{
    const {data: countries} = await axios.get(REST_COUNTRIES);
    for (country in countries){
          const { 
            alpha3Code: id, 
            name, 
            flag, 
            region: continent, 
            capital, 
            subregion, 
            area, 
            population 
          } = countries[country];
          const countryCreated = await Country.create({
              id, name, flag, continent, capital, subregion, area, population
            });
    }
  }catch(err){
    throw err;
  }
}

module.exports = apiCall;
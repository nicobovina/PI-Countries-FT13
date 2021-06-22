// import axios from 'axios';
const axios = require("axios").default;

const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
const ADD_ACTIVITY = 'ADD_ACTIVITY';
const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
const GET_ACTIVITIES = 'GET_ACTIVITIES';
const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';



export function getCountries(name = undefined, continent = undefined, activity = undefined) {
	let url = 'http://localhost:3001/countries?';
	if (name)	url = `${url}name=${name}&`;
	if (continent) url= `${url}continent=${continent}`;
	console.log(url);
	return async function(dispatch) {
		try{
			const response = await axios(url);
			return dispatch({ type: GET_COUNTRIES, payload: response.data });
		} catch(err){
			console.log(err);
		}
	}
}

// export function getCountriesByName(name) {
// 	name = undefined;
// 	return async function(dispatch) {
// 		const response = await axios(`http://localhost:3001/countries?name=${name}`);
// 		return dispatch({ type: GET_COUNTRIES_BY_NAME, payload: response.data });
// 	}
// }

export function getCountryDetail(id) {
	return async function(dispatch) {
		const response = await axios(`http://localhost:3001/countries/${id}`);
		return dispatch({type: GET_COUNTRY_DETAIL, payload: response.data});
	}
}

export function addActivity(activity) {
	return async function(dispatch) {
		const response = await axios.post('http://localhost:3001/activity', {
			name: activity.name,
			difficulty: activity.difficulty,
			season: activity.season,
			duration: activity.duration,
			countries: activity.countries
		});
		console.log(response.data);
		return dispatch({type: ADD_ACTIVITY, payload: response.data});
	}
}

export function getActivities(){
	return async function(dispatch){
		const response = await axios('http://localhost:3001/activity');
		return dispatch({ type: GET_ACTIVITIES, payload: response.data });
	}
}

export function filterByActivity(activity){
	return { type: FILTER_BY_ACTIVITY, payload: activity };
}



// export function filterByContinent(continent){
// 	return { type: FILTER_BY_CONTINENT, payload: continent };
// }
// import axios from 'axios';
const axios = require("axios").default;

const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
const ADD_ACTIVITY = 'ADD_ACTIVITY';
// const GET_ACTIVITY = 'GET_ACTIVITY';



export function getCountries() {
	return async function(dispatch) {
		const response = await axios('http://localhost:3001/countries');
		console.log(response.data);
		return dispatch({ type: GET_COUNTRIES, payload: response.data });
	}
}

export function getCountriesByName(name) {
	return async function(dispatch) {
		const response = await axios(`http://localhost:3001/countries?name=${name}`);
		console.log(response.data);
		return dispatch({ type: GET_COUNTRIES_BY_NAME, payload: response.data });
	}
}

export function getCountryDetail(id) {
	return async function(dispatch) {
		const response = await axios(`http://localhost:3001/countries/${id}`);
		return dispatch({type: GET_COUNTRY_DETAIL, payload: response.data});
	}
}

export function addActivity(activity) {
	console.log(activity);
	return async function(dispatch) {
		const response = await axios.post('http://localhost:3001/activity', {
			name: activity.name,
			difficulty: activity.difficulty,
			season: activity.season,
			duration: activity.duration,
			countries: activity.countries
		});
		return dispatch({type: ADD_ACTIVITY, payload: response.data});
	}
}

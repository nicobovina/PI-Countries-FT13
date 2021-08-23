import { api_url } from '../url.js';
const axios = require("axios").default;

const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
const ADD_ACTIVITY = 'ADD_ACTIVITY';
const GET_ACTIVITIES = 'GET_ACTIVITIES';



export function getCountries(name = undefined, continent = undefined, activity = undefined, order = undefined) {
	let url = `${api_url}/countries?`;
	if (name)	url = `${url}name=${name}&`;
	if (continent) url= `${url}continent=${continent}`;
	let resp;
	return async function(dispatch) {
		try{
			const response = await axios.get(url);
			if (activity){
				resp = response.data.filter( c => 
					c.activities.filter( a => 
						a.name.includes(activity)).length)
			} else resp = response.data;
			if(order){
				if (order === 'nameAsc')
					resp.sort((a,b) => (a.name.localeCompare(b.name)));
				else if (order === 'nameDes')
					resp.sort((a,b) => (b.name.localeCompare(a.name)));
				else if (order === 'popAsc')
					resp.sort((a,b) => (a.population - b.population));
				else if (order === 'popDes')
					resp.sort((a,b) => (b.population - a.population));
			}
			return dispatch({ type: GET_COUNTRIES, payload: resp });
		} catch(err){
			console.log(err);
		}
	}
}

export function getCountryDetail(id) {
	return async function(dispatch) {
		try{
			const response = await axios.get(`${api_url}/countries/${id}`);
			return dispatch({type: GET_COUNTRY_DETAIL, payload: response.data });
		} catch(err){
			console.log(err);
		}
	}
}

export function addActivity(activity) {
	return async function(dispatch) {
		const response = await axios.post(`${api_url}/activity`, {
			name: activity.name,
			difficulty: activity.difficulty,
			season: activity.season,
			duration: activity.duration,
			countries: activity.countries
		});
		return dispatch({type: ADD_ACTIVITY, payload: response.data});
	}
}

export function getActivities(){
	return async function(dispatch){
		try{
			const response = await axios.get(`${api_url}/activity`);
			return dispatch({ type: GET_ACTIVITIES, payload: response.data });
		} catch(err){
			console.log(err);
		}
	}
}

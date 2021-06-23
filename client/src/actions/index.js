const axios = require("axios").default;

const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
const ADD_ACTIVITY = 'ADD_ACTIVITY';
const GET_ACTIVITIES = 'GET_ACTIVITIES';



export function getCountries(name = undefined, continent = undefined, activity = undefined, order = undefined) {
	let url = 'http://localhost:3001/countries?';
	if (name)	url = `${url}name=${name}&`;
	if (continent) url= `${url}continent=${continent}`;
	let resp;
	return async function(dispatch) {
		try{
			const response = await axios(url);
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
		const response = await axios(`http://localhost:3001/countries/${id}`);
		return dispatch({type: GET_COUNTRY_DETAIL, payload: response.data });
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

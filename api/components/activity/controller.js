const store = require('./store.js');

const createActivity = async ({ name, difficulty, season, duration, countries }) => {
	try{
		const activity = await store.createActivity(name, difficulty, season, duration, countries);
		return activity;
	} catch (err){
		throw err;
	}
};

const getActivities = async () => {
	try{
		const activities = await store.getActivities();
		return activities;
	} catch (err){
		throw err;
	}
}

module.exports = {
	createActivity,
	getActivities
}
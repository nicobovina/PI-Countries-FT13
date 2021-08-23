const { Op } = require('sequelize');
const { Activity } = require('../../db.js');

const createActivity = async (name, difficulty, season, duration, countries) => {
	let activities = [];
	try{
		const [activity, created] = await Activity.findOrCreate({ 
			where: { name: name.toLowerCase() },
			defaults: {
				difficulty,
				season,
				duration
			}});
		activity.addCountries([...countries]);
		activities = await Activity.findAll({attributes: ['name']});
		console.log('LAS ACTIVITIES: ',activities);
		return activities;
	} catch(err){
		throw err;
	}
};

const getActivities = async () => {
	let activities = [];
	try{
		activities = await Activity.findAll();
		return activities;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	createActivity,
	getActivities
}


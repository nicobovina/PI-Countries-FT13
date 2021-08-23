const countries = require('../components/country/network.js');
const activities = require('../components/activity/network.js');


const router = server => {
	server.use('/countries', countries);
	server.use('/activity', activities); 
}

module.exports = router;

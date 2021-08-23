const { Router } = require('express');
const response = require('../../network/response.js');
const controller = require('./controller.js');
const router = Router();


router.post('/', async (req, res) => {
	controller
		.createActivity(req.body)
			.then(e => response.success(req, res, 200, e))
			.catch(e => response.error(req, res, 400, e, 'No se pudo crear la actividad' ))
});

router.get('/', async (req, res) => {
	controller
		.getActivities()
			.then(e => response.success(req, res, 200, e))
			.catch(e => response.error(req, res, 404, e, 'No se pudo obtener las actividades'))

});

module.exports = router;
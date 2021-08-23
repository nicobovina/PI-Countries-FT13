const { Router } =  require('express');
const response = require('../../network/response.js');
const controller = require('./controller.js');
const router = Router();

router.get('/', (req, res) => {
	controller
		.getCountries(req.query)
			.then(e => response.success(req, res, 200, e))
			.catch(e => response.error(req, res, 404, e, 'No se pudo obtener los paises'))
});

router.get('/:idCountry', (req, res) => {
	controller
		.getCountry(req.params)
			.then(e => response.success(req, res, 200, e))
			.catch(e => response.error(req, res, 404, e, 'No se pudo obtener el pais'))
});

module.exports = router;


const { Router } = require('express');
const controller = require('../controller/controller');

const router = Router();

router.get('/cienciaFiccion', controller.getCF)

router.get('/comedia', controller.getConedia)

router.get('/independientes', controller.independientes)

module.exports = router;

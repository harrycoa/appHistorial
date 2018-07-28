var express = require('express');
var router = express.Router();

// importar el archivo que nos cargara los controladores
var controllers = require('.././controllers');

/* GET home page. */
router.get('/', controllers.homecontroller.index);

// rutas para llamadas
router.get('/historial',controllers.llamadascontroller.getLlamadas);
router.get('/nuevo',controllers.llamadascontroller.getNuevaLlamada);
router.post('/nuevo',controllers.llamadascontroller.postNuevaLlamada);
router.post('/eliminarllamada',controllers.llamadascontroller.postEliminarllamada);
router.get('/modificar/:idHistorial', controllers.llamadascontroller.getModificarLlamada);
router.post('/editar', controllers.llamadascontroller.postModificarLlamada);

router.get('/orden', controllers.llamadascontroller.getOrden);



module.exports = router;

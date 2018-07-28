// crear una funcion de una ruta
// homecontroller
module.exports = {
    // funciones del controlador
    index : function(req, res, next) {
        res.render('index', {title: 'Bienvenido a la App'});
    }
}
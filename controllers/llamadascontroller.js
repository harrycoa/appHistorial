// llamadas controller
// importamos mysql
var mysql = require('mysql');
var dateFormat = require('dateformat');

module.exports = {
    // funciones del controlador
    getLlamadas : function(req, res, next) {
        // importamos el modulo de conf bd
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        var llamadas = null;
        db.query('Select * from x_taHistorialLlamadas', function(err, rows, fields){
            if (err) throw err;

            llamadas = rows;
            db.end();

            res.render('historial/llamadas', {llamadas : llamadas});
        });        
    },
    getNuevaLlamada : function(req, res, next){
        res.render('historial/nuevo');
    },
    postNuevaLlamada : function(req, res, next){
        // console.log(req.body);
        var fechaactual = new Date;
        var fecha = dateFormat(fechaactual, 'yyyy-mm-yy h:MM:ss');

        var llamada = {
            placa : req.body.placa,
            cliente : req.body.cliente,
            tipoContacto : req.body.tipoContacto,
            telefonoCliente : req.body.telefonoCliente,
            trabajadorCorasur : req.body.trabajadorCorasur,
            telefonoCorasur : req.body.telefonoCorasur,
            motivo : req.body.motivo,
            resultadoLlamada : req.body.resultadoLlamada,
            estado : req.body.estado,
            km : req.body.km,    
            campoReserva1 : req.body.campoReserva1,    
            fechaRegistro : fecha
        }
     //   console.log(llamada)
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        db.query('INSERT INTO x_taHistorialLlamadas SET ?', llamada, function(err,rows,fields){
            if (err) throw err;
            db.end();
        });

        res.render('historial/nuevo', {info : 'Llamada creada correctamente'});

    },
    postEliminarllamada : function(req, res, next){			
        var idHistorial = req.body.idHistorial;// cuando se envia parametros por post se envia por body
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
        var respuesta={res:false};
        db.connect();
          db.query('delete from x_taHistorialLlamadas where idHistorial = ?',idHistorial, function(err,rows,fields){
                if(err)throw err; 
                db.end();
                respuesta.res=true;
                res.json(respuesta);
        });
     },
    getModificarLlamada : function(req, res, next){			
        var idHistorial = req.params.idHistorial;// cuando se envia parametros por get se envia por params
        var config =require('.././database/config');;
        console.log(idHistorial);
         
        var db=mysql.createConnection(config);
      
         db.connect();
            var llamadas=null;
         db.query('SELECT * FROM  x_taHistorialLlamadas where idHistorial = ?',idHistorial, function(err,rows,fields){
                 if(err) throw err;
                 llamadas=rows;
                 db.end();
                 res.render('historial/modificar',{ListLlamadas: llamadas});
         });
    },

    postModificarLlamada : function(req, res, next){			
        var fechaactual = new Date();
        var fecha = dateFormat(fechaactual,'yyyy-mm-dd hh:MM:ss');
        var llamada = {
             //campo1: req.body.campo1,
             //la variable va de acuerdo como esta   base 
             placa: req.body.placa,
             cliente: req.body.cliente,
             tipoContacto: req.body.tipoContacto,
             telefonoCliente: req.body.telefonoCliente,
             trabajadorCorasur: req.body.trabajadorCorasur,
             telefonoCorasur: req.body.telefonoCorasur,
             motivo: req.body.motivo,
             resultadoLlamada: req.body.resultadoLlamada,
             estado: req.body.estado,
             km: req.body.km               
         
         }
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
         db.connect();
        // console.log(llamada);
        db.query('update x_taHistorialLlamadas SET ? where ?' ,[llamada,{idHistorial: req.body.idHistorial}], function(err,rows,fields){
                  if(err) throw err;			
                  db.end();
                 
          });
         res.redirect('/historial');
      },
    
    getOrden : function(req, res, next){			
        var placa = req.params.placa;
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();

        var llamadas = null;
        //db.query('select Ore.numero as OrdenReparacion,Ore.nombre as NombrePropietario, Ore.direccion as Direccion, Ore.conductor as NombreConductor,Ore.km as kilomertraje,Ore.fhre as FechaRecepcion,Ore.fhen as FechaEntrega,Ore.email as email,Ore.idtipo as TipoMannto,Ve.marca as Marca,Ve.Modelo as Modelo,Ve.color as Color,Ve.Motor as Motor,Ve.Chasis as Chasis,Ve.anofab as AñoFabricacion,Ve.vin as VIN,Ve.telefono as Telefono,Ve.celular as Celular from  gx_oreparacion as Ore inner join gx_vehiculo as Ve on Ore.placa=Ve.placa limit 10', function(err, rows, fields){
        db.query('select numero,placa, nombre,direccion,conductor,km, telefono, celular,idtipo,fhinire,fhfinre,fhinien,fhfinen from gx_oreparacion limit 10', function(err, rows, fields){
        if (err) throw err;

            llamadas = rows;
            db.end();

            res.render('historial/orden', {llamadas : llamadas});
        });
    }
    /*
    postModificarLlamada : function(req, res, next){			
        var fechaactual = new Date();
        var fecha = dateFormat(fechaactual,'yyyy-mm-dd hh:MM:ss');
        var llamada = {
             //campo1: req.body.campo1,
             //la variable va de acuerdo como esta   base 
             placa: req.body.placa,
             cliente: req.body.cliente,
             tipoContacto: req.body.tipoContacto,
             telefonoCliente: req.body.telefonoCliente,
             trabajadorCorasur: req.body.trabajadorCorasur,
             telefonoCorasur: req.body.telefonoCorasur,
             motivo: req.body.motivo,
             resultadoLlamada: req.body.resultadoLlamada,
             estado: req.body.estado,
             km: req.body.km               
         
         }
        var config =require('.././database/config');;
        var db=mysql.createConnection(config);
         db.connect();
        // console.log(llamada);
        db.query('update x_taHistorialLlamadas SET ? where ?' ,[llamada,{idHistorial: req.body.idHistorial}], function(err,rows,fields){
                  if(err) throw err;			
                  db.end();
                 
          });
         res.redirect('/historial');
    }*/
    
      

     
}

/*
getOrden : function(req, res, next) {
    var placa = req.params.placa;
    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();

    var llamadas = null;
    //db.query('select Ore.numero as OrdenReparacion,Ore.nombre as NombrePropietario, Ore.direccion as Direccion, Ore.conductor as NombreConductor,Ore.km as kilomertraje,Ore.fhre as FechaRecepcion,Ore.fhen as FechaEntrega,Ore.email as email,Ore.idtipo as TipoMannto,Ve.marca as Marca,Ve.Modelo as Modelo,Ve.color as Color,Ve.Motor as Motor,Ve.Chasis as Chasis,Ve.anofab as AñoFabricacion,Ve.vin as VIN,Ve.telefono as Telefono,Ve.celular as Celular from  gx_oreparacion as Ore inner join gx_vehiculo as Ve on Ore.placa=Ve.placa limit 10', function(err, rows, fields){
    db.query('select numero,placa, nombre,direccion,conductor,km, telefono, celular,idtipo,fhinire,fhfinre,fhinien,fhfinen from gx_oreparacion limit 10', function(err, rows, fields){
    if (err) throw err;

        llamadas = rows;
        db.end();

        res.render('historial/orden', {llamadas : llamadas});
    });
}*/
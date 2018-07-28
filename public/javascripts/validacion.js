$(function(){
    $('.form-nuevallamada form').form({
        placa: {
            identifier : 'placa',
            rules : [
               {
                   type: 'empty',
                   prompt: 'Por favor ingrese el Placa'
               }/*
               {
                   type: 'integer',
                   promt: 'debe ser un numero entero'
               } */
            ]
        },
        cliente: {
            identifier : 'cliente',
            rules : [
                {
                    type: 'empty',
                    prompt : 'Por favor ingrese nombre del Cliente'
                }
            ]
        },
        tipoContacto: {
            identifier : 'tipoContacto',
            rules : [
                {
                    type: 'empty',
                    prompt : 'Por favor ingrese el tipo de contacto respectivo'
                }
            ]
        },
        telefonoCliente: {
            identifier : 'telefonoCliente',
            rules : [
                {
                    type: 'empty',
                    prompt : 'Por favor ingrese el telefono del cliente'
                },
                {
                    type: 'number',
                    promt: 'el telefono debe ser numerico'
                }
            ]
        },
        trabajadorCorasur: {
            identifier : 'trabajadorCorasur',
            rules : [
                {
                    type: 'empty',
                    prompt : 'Por favor ingrese su nombre'
                }
            ]
        },
        telefonoCorasur: {
            identifier : 'telefonoCorasur',
            rules : [
                {
                    type: 'empty',
                    prompt : 'Por favor ingrese un telefono origen'
                },
                {
                    type: 'number',
                    promt: 'el telefono debe ser numerico'
                }
            ]
        },
        motivo: {
            identifier : 'motivo',
            rules : [
                {
                    type: 'empty',
                    prompt : 'Por favor ingrese el motivo'
                }
            ]
        },
        resultadoLlamada: {
            identifier : 'resultadoLlamada',
            rules : [
                {
                    type: 'empty',
                    prompt : 'Por favor ingrese el resultado'
                }
            ]
        },
        estado: {
            identifier : 'estado',
            rules : [
                {
                    type: 'empty',
                    prompt : 'Por favor ingrese el estado de la llamada'
                }
            ]
        },
        km: {
            identifier : 'km',
            rules : [
                {
                    type: 'empty',
                    prompt : 'Por favor ingrese el ultimo kilometraje'
                },
                {
                    type: 'number',
                    promt: 'el kilometraje debe ser numerico'
                }
            ]
        }   

    });
});
      /* caso numerico 
        ejemplo caso numerico
        precio : {
            identifier : 'precio',
            rules : [
                {
                    type: 'empty',
                    promt : 'Por favor ingrese un precio'
                },
                {
                    type: 'number',
                    promt: 'el precio debe ser numerico'
                }
            ]
        }                   
        */
        /* caso numerico 
        ejemplo caso ENTERO POSITIVO
        stock : {
            identifier : 'stock',
            rules : [
                {
                    type: 'empty',
                    promt : 'Por favor ingrese un stock'
                },
                {
                    type: 'integer',
                    promt: 'debe ser un numero entero'
                }
            ]
        }                   
        */
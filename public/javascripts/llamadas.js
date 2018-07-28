$(function(){
    //funcion ajax elminar
      $('#tbl-llamadas #btn-eliminar').click(function(e){
          e.preventDefault();
          var elemento =$(this);
           var idHistorial= elemento.parent().parent().find('#idHistorial').text();
          // alert(id);
          var confirmar = confirm('Desear Eliminar Llamada');
          if(confirmar)
          {
              $.ajax({
               url:'http://localhost:3000/eliminarllamada',
               method: 'post',
               data : {idHistorial : idHistorial},
               success : function(res){
                   console.log(res);
                   if(res.res){
                       elemento.parent().parent().remove();
                   }
               }
           });
          }
           
 
      });
 });
  window.addEventListener('load',function() {
  var boton = document.getElementById('boton');
  var listado=[];// Guarda los datos del formulario
  boton.addEventListener('click',function(evento) {// Evento del boton al hacerle click
  evento.preventDefault();

  var nombre=document.getElementById("nombre").value;
  var apellido=document.getElementById("apellido").value;
  var edad=document.getElementById("edad").value;
  var genero=document.getElementById("genero").value;
  var ciudad=document.getElementById("ciudad").value;
  var pais=document.getElementById("pais").value;
  var enviar=document.getElementById("enviar");

function enviardatos(nombre,apellido,edad,pais){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.pais=pais;
    this.formulario=function(){
    return "Nombre:"+this.nombre+"<br>"+
            "Apellido:"+this.apellido+"</br>"+
            "Edad :"+this.edad+"</br>"+
            "Pais :"+this.pais;
  }
   }
    listado.push(new enviardatos(nombre,apellido,edad,pais));// pone los datos al final a traves del push
    enviar.innerHTML= listado[listado.length-1].formulario();// Agrega los datos  y tiene -1 porque el ID comienza en uno
    document.getElementById("formulario").reset() // Para que eliminen los datos del campo luego de enviar
      });
});

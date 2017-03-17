  window.addEventListener('load',function() {
  var listado=[];// Guarda los datos del formulario
  boton.addEventListener('click',function(evento) {// Evento del boton al hacerle click
  evento.preventDefault();

  var nombre=document.getElementById("nombre").value;
  var apellido=document.getElementById("apellido").value;
  var edad=document.getElementById("edad").value;
  var pais=document.getElementById("pais").value;
  var pattern = /([A-Z]{1}[a-zá-ú]{1,}\s?)/;
  var s_letras = /^[a-zñÑA-Z]*$/;

  function enviardatos(nombre,apellido,edad,pais){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.pais=pais;
    this.formulario=function(){
         var div=document.createElement("div");
         div.classList.add("div-contenedor");
         var p =document.createElement("p")
         p.innerHTML+="Nombre:"+this.nombre+"<br>"+
                    "Apellido:"+this.apellido+"</br>"+
                       "Edad :"+this.edad+"</br>"+
                       "Pais :"+this.pais;
         div.appendChild(p);
         return div;
          };
   }
   var enviardatos=new enviardatos(nombre,apellido,edad,pais);
   listado.push(enviardatos);

    if(nombre==""){
     alert("Debe ingresar su nombre");
    }
    else if (nombre.search(s_letras)){
      alert("Ingrese solo letras en el nombre");
     }
    else if(nombre.search(pattern)){
     alert("La primera letra del nombre debe ser mayúscula");
    }
    else if(apellido==""){
      alert("Ingrese sus apellido");
     }
    else if (apellido.search(s_letras)){
         alert("Ingrese solo letras en el apellido");
    }
    else if(apellido.search(pattern)){
      alert("La primera letra del apellido solo debe ser mayúscula");
    }
    else if(edad==""){
      alert("Ingrese su edad");
    }
    else if(pais==""){
      alert("Debe completar su pais");
    }
    else if (pais.search(s_letras)){
        alert("Ingrese solo letras en el país");
     }
    else if(pais.search(pattern)){
      alert("La primera letra del país debe ser mayúscula");
    }
    else{
      enviar.appendChild(enviardatos.formulario());
      document.getElementById("foormulario").reset();
    }

      });
    });

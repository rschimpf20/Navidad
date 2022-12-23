//La idea es verlo en pantalla completa F11.

const participantes = ["Nestor", "Estela", "Martín","Caro","Fernando", "Sonia", "Fede", "Michelle","Silvia", "Jorge"];
const tamanoParticipantes = participantes.length;
for(i=0; i <participantes.length ;i++){
  var cont= document.getElementById('contenedor');
  //div
  var divParticipante = document.createElement("div"); divParticipante.className = "divParticipante"; 
  //nombre
  var columnaNombre= document.createElement('div'); columnaNombre.className = "columna izquierda"; 
  var nombreParticipante = document.createElement('h2'); nombreParticipante.className= "nombreParticipante";nombreParticipante.id= 'nombre_'+i; nombreParticipante.textContent = participantes[i];
  columnaNombre.appendChild(nombreParticipante);divParticipante.appendChild(columnaNombre);
  //boton
  var columnaBoton = document.createElement('div'); columnaBoton.className = "columna medio";
  var botonParticipante = document.createElement('button'); botonParticipante.className = "botonParticipante";botonParticipante.id= 'boton_' +i; botonParticipante.onclick = function(){funcionBoton(this.id)};
  columnaBoton.appendChild(botonParticipante);divParticipante.appendChild(columnaBoton);
  //resultado
  var columnaResultado = document.createElement('div'); columnaResultado.className = "columna derecha";
  var resultadoParticipante = document.createElement('h2'); resultadoParticipante.id = 'resultado_' + i; resultadoParticipante.className = "resultadoParticipante"; resultadoParticipante.textContent = "A";
  columnaResultado.appendChild(resultadoParticipante);divParticipante.appendChild(columnaResultado);
  cont.appendChild(divParticipante);  
}
function funcionBoton(id){
  // formato del id: resultado_2
  const actual = id.substring(id.indexOf("_") + 1);    
  var result = document.getElementById('resultado_' + actual);
  var nomParticip= document.getElementById('nombre_' + actual);
  
  do{
    var nombreResultado=  participantes[Math.floor(Math.random() * participantes.length)];
    if(nombreResultado != nomParticip.textContent  && (participantes.length !=2 || QuedanDos(actual, nombreResultado) ==false) ){
      break;
    }
  } 
  while(true)
  participantes.splice(participantes.indexOf(nombreResultado), 1);
  result.textContent = nombreResultado; result.style.color="black"; result.style.animation="aparecetexto 1s";  
  document.getElementById(id).disabled = true;
}
// bug en donde la ultima persona solo se podía dar a sí mismo. 
function QuedanDos(actual, nombreSeleccionado){ 
  const indUltimo = indUltimoParticipante(actual);
  const nombreUltimo = document.getElementById('nombre_' + indUltimo).textContent;
  if(participantes.includes(nombreUltimo) == false || nombreUltimo == nombreSeleccionado){
    return false;
  }
  return true;
}
function indUltimoParticipante(actual){
  for( i =0; i<tamanoParticipantes; i++){
    if(document.getElementById('resultado_' + i).textContent =="A" && i!= actual){
      return i;
    }
  }
}
console.log('Duracion');

alert('Duracion de Vuelo');

const escala01 = prompt ('Ingrese la primer escala');
const duracion01 = prompt ('Ingrese la duracion');
const escala02 = prompt ('Ingrese la segunda escala');
const duracion02 = prompt ('Ingrese la duracion');
const escala03 = prompt ('Ingrese el destino final');
const duracion03 = prompt ('Ingrese la duracion');
const total = Number(duracion01) + Number(duracion02) + Number(duracion03);

alert(`El recorrido de su vuelo será el siguiente: 

  Primer escala: ${escala01}, duración: ${duracion01} horas,
  Segunda escala: ${escala02}, duración: ${duracion02} horas,
  Destino final: ${escala03}, duración: ${duracion03} horas.
  
  Duracion total del vuelo: ${total} horas.`);
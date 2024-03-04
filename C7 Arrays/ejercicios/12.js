function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var convierteAMayuscula=[];
  for(var i=0;i<array.length;i++){
    if(typeof array[i]==='string');
    var letramayuscula= array[i].toUpperCase();
    convierteAMayuscula.push(letramayuscula)
  }
  return convierteAMayuscula;
}

module.exports = convertirStringAMayusculas;

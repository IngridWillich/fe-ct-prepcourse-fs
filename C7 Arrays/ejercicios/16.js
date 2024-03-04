function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var elementoArray=[];
   for( var i=0;i<array.length;i++){
    var elementoXIndice=array[i]*i;
    elementoArray.push(elementoXIndice);
   }
   return elementoArray;
}

module.exports = multiplicarElementosPorIndice;

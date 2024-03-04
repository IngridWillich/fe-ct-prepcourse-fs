function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sumaElementos=0
  for(var i=0;i<arrayOfNums.length;i++){
    sumaElementos += arrayOfNums[i];
  }
return sumaElementos;


}

module.exports = agregarNumeros;

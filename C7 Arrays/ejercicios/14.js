function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var numerosMayoresADiez=[];
  for(var i=0; i<array.length;i++){
    if(array[i]>10){
      numerosMayoresADiez.push(array[i]);
    }
  }
return numerosMayoresADiez.length; //es .length porque pide LA CANTIDAD DE ELEMENTOS, no 
//que devuelva un array con los numeros que cumplen esa condicion
}

module.exports = contarElementosMayoresA10;

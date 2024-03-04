function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var elementosDuplicados= [];
  for (var i=0;i< array.length;i++){
    var elementoDuplicado= array[i]*2
    elementosDuplicados.push(elementoDuplicado);
  }
  return elementosDuplicados;
}

module.exports = duplicarElementos;

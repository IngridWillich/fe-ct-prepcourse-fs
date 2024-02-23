function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var contador=1;
  for (var i=a; 1<=b; i++){
    contador *=i;
  }
  return contador;
}

module.exports = productoEntreNúmeros;
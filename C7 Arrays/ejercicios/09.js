function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var numeroAleatorio= Math.random()*array.length;
   return numeroAleatorio
}

module.exports = obtenerElementoAleatorio;

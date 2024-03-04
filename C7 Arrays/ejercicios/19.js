function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver 
  //el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  
  if (arguments.length === 0) {
    return 0; // Si no se pasa ningún argumento, devuelve 0
  } else if (arguments.length === 1) {
    return arguments[0]; // Si se pasa un argumento, devuélvelo sin modificar
  } else {
    var producto = 1;
    for (var i = 0; i < arguments.length; i++) {
      producto=producto* arguments[i]; // Multiplica cada argumento
    }
    return producto;
  }




}

module.exports = multiplicarArgumentos;

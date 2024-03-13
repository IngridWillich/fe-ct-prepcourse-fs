function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
str1= str1.toUpperCase();
str2= str2.toUpperCase();

if(str1.length!==str2.length)return false;
if (str1 === '' && str2 === '') {
   return true;
}

let array1=str1.split('').sort();
let array2=str2.split('').sort();
   for(let i=0;i<str1.length;i++){
         if(array1[i]!==array2[i]){
            return false;
         }else return true;
      }
      
   }


module.exports = esAnagrama;

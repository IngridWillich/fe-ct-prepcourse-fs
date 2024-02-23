function mayorYMenor(num){
    if (num > 5 && num< 10 && num % 2===0)console.log(true);
    else console.log (false);
}
mayorYMenor(2);
mayorYMenor(6);
mayorYMenor(11);

// OR
function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
 }
 operadorOr('Henry');
 operadorOr('Javascript');
 operadorOr('H');

 // NOT
function negacion(permiso) {
    if (permiso) console.log('Tiene permiso');
 }
 negacion(true);
 negacion(false);


 Boolean ("")
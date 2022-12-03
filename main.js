addEventListener("DOMContentLoaded", (e) => {
// switch Operación única con múltiples casos
// si no hay un break continuara la ejecucion del siguiente case
//estructura es la misma sino sin break en algunos casos 
//switch (expresión) {
//  case valor1:
//    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
//  case valor2:
//     //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
//     [break;]

var Animal = 'Jirafa';
switch (Animal) {
  case 'Vaca':// se comportan de la misma manera 
  case 'Jirafa':
  case 'Perro':
  case 'Cerdo'://se comporta diferente por eso tiene el  break
    console.log('Este animal subirá al Arca de Noé.');
    break;
  case 'Dinosaurio':
  default:
    console.log('Este animal no lo hará.');
}

//Operaciones encadenadas con múltiples casos
// dependiendo del valor entero dado, se pueden recibir diferentes resultados

})
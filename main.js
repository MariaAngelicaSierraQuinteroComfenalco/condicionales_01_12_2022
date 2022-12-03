addEventListener("DOMContentLoaded", (e) => {
// switch
// evalua los diferentes casos y ejercuta las que sean positiva 
//estructura 
//switch (expresión) {
//  case valor1:
//    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
//    [break;]
//  case valor2:
//     //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
//     [break;]
switch (expr) {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;//si no se pone seguira ejecutandose todo sin parar, a diferencia que si esta no debera 
    case 'Manzanas'://cada caso 
      console.log('El kilogramo de manzanas cuesta $0.32.');//el parametro
      break;
    case 'Platanos':
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Papayas':
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default: // si ninguno de los caso se encontro concidencia entonces el default nos lo dira al final
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  
  console.log("¿Hay algo más que te quisiera consultar?");

})
addEventListener("DOMContentLoaded", (e) => {
// IF anidados
//es hacer un if dentro de otro if y asi sucecivamente para muchas situciones es mas efectiva
//ejemplo
var numero1=23 //variables
var numero2=63 
if (numero1 == numero2){ //primer if
   document.write("Los dos números son iguales") 
}else{ //primer if-else
   if (numero1 > numero2) { //segundo if 
      document.write("El primer número es mayor que el segundo") 
   }else{ //segundo if-else
      document.write("El primer número es menor que el segundo") 
   } 
}

})
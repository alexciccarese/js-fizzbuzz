// scrivere programma che stampi da 1 a 100 
// aggiungere che a ogni multiplo di 3 esca fuori la scritta "Fizz" al posto del numero
// aggiungere che a ogni multiplo di 5 esca fuori la scritta "Buzz" al posto del numero
// aggiungere che al posto dei numero moltiplicabili sia per 3 che per 5 esca la scritta "FizzBuzz"

for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0) {
      console.log("Fizz");
      
    } else if (i % 5 === 0) {
      console.log("Buzz");
      
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      
    } else {

      console.log(i);
    }

}
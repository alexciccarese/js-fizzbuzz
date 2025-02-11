// scrivere programma che stampi da 1 a 100 
// aggiungere che a ogni multiplo di 3 esca fuori la scritta "Fizz" al posto del numero
// aggiungere che a ogni multiplo di 5 esca fuori la scritta "Buzz" al posto del numero

for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0) {
      console.log("Fizz");
      
    } else if (i % 5 === 0) {
      console.log("Buzz");
      
    } 

    console.log(i);
}
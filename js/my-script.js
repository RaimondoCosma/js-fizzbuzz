'use strict';
// Creo un ciclo for per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Metto Fizz sui multipli di 3
    if (( i % 3 === 0) && !( i % 5 === 0)){
        console.log('Fizz');
    // Metto Buzz sui multipli di 5
    } else if (( i % 5 === 0) && !(i % 3 === 0)){
        console.log('Buzz');
    // Metto FizzBuzz sui multipli sia di 3 che di 5
    } else if (( i % 3 === 0) && (i % 5 === 0)){
        console.log('FizzBuzz')
    } else {
        console.log(i)
    }
};
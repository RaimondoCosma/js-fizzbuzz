'use strict';
const totalNumbers = document.getElementById('total-numbers');
const box = 100;
// Creo un ciclo for per stampare i numeri da 1 a 100
for (let i = 1; i <= box; i++) {
    const numberItem = document.createElement('div');
    numberItem.classList.add('box');
    totalNumbers.append(numberItem);
    // Metto Fizz sui multipli di 3
    if (( i % 3 === 0) && !( i % 5 === 0)){
        console.log('Fizz');
        numberItem.classList.add('box__fizz');
        numberItem.innerHTML = 'Fizz';
    // Metto Buzz sui multipli di 5
    } else if (( i % 5 === 0) && !(i % 3 === 0)){
        console.log('Buzz');
        numberItem.classList.add('box__buzz');
        numberItem.innerHTML = 'Buzz';
    // Metto FizzBuzz sui multipli sia di 3 che di 5
    } else if (( i % 3 === 0) && (i % 5 === 0)){
        console.log('FizzBuzz');
        numberItem.classList.add('box__fizz-buzz');
        numberItem.innerHTML = 'FizzBuzz';
    } else {
        console.log(i)
        numberItem.innerHTML = i;
    }
};


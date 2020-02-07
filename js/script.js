'use strict';

const input = document.querySelector('#input'), // input/output button
  numbers = document.querySelectorAll('.numbers div'), // number buttons
  operators = document.querySelectorAll('.operators div'), // operator buttons
  result = document.querySelector('#result'), // equal button
  clear = document.querySelector('#clear'); // clear button
const buttons = document.querySelector('.buttons');
// function numbah(i) {
//   const value = "hello"
//   array.forEach('numbers', i); {
// //     console.log(value)
//   };
// };


operators.forEach(function (symb) {
  symb.addEventListener('click', function (event) {
    console.log(symb)

    input.innerHTML += symb.innerHTML
  })
})

numbers.forEach(function (number) {
  number.addEventListener('click', function (event) {

    input.innerHTML += number.innerHTML
  })
});

for clear(function (m) {
  console.log("mmmm");
  let c = "";
  c.addEventListener('click', function (event) {
    input.innerHTML = c.innerHTML;
  });
});


  let resultDisplayed = false; // flag to keep an eye on what output is displayed

// buttons.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('bitch');
//   console.log(numbah)

// })

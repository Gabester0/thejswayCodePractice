// Functions with fat arrow notation

var half = number => console.log(number / 2);

half(45);

//A few notes about fat arrow:
//Functions are anonymous
//Return is implied and does not need to be written
//If the function only consists of one line the curly brackets may be omitted
//If the function only has one parameter the parentheses can be omitted.
//The word function is implicit and does not need to be written in these cases


// function expression. A function expression defines a function as part of a larger expression, typically a variable assignment.

//When you are defining a function the elements/items passed to it are called parameters.
//Parameters are general guides for using the function

//When you are calling a function the specific items passed to the function are called arguments
//Arguments are specific to that calling of the function.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Coding time!
//Improved hello
//Complete the following program so that it asks the user for his first and last names, then show the result of the //sayHello() function.
//
//// Say hello to the user
//function sayHello(firstName, lastName) {
//  const message = `Hello, ${firstName} ${lastName}!`;
//  return message;
//}
//
// TODO: ask user for first and last name
// TODO: call sayHello() and show its result

/*
function sayHello(){
  let firstName = String(prompt("Enter your first name"));
  let lastName = String(prompt("Enter your last name"));
  const message = console.log(`Hello, ${firstName} ${lastName}!`);
  return message;

  
}

sayHello(); //returns : "Hello Gabe Eipper!" // Success
*/





////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Number squaring
//Complete the following program so that the square1() and square2() functions work properly.
//


//// Square the given number x
//function square1(x) {
//  // TODO: complete the function code
//}
//
//// Square the given number x
//const square2 = x => // TODO: complete the function code

//console.log(square1(0)); // Must show 0
//console.log(square1(2)); // Must show 4
//console.log(square1(5)); // Must show 25
//
//console.log(square2(0)); // Must show 0
//console.log(square2(2)); // Must show 4
//console.log(square2(5)); // Must show 25
//When it's done, update the program so that it shows the square of every number between 0 and 10.
//
//Writing 10 dumb calls to square() is forbidden! You know how to repeat statements, don't you? ;)
//

function square1(k){
  console.log(k*k);
}

square1(5); //returns 25

const square2 = x => console.log(x * x);

for (i = 0; i <= 10; i++){
  square2(i);
}

//returns :
//0
//1
//4
//9
//16
//25
//36
//49
//64
//81
//100





//Minimum of two numbers
//Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function //returns the minimum of its two received numbers.
//
// TODO: write the min() function

//console.log(min(4.5, 5)); // Must show 4.5
//console.log(min(19, 9));  // Must show 9
//console.log(min(1, 1));   // Must show 1

let min = (x, y) => {
  if(x < y){
    alert(x);
  } else {
    alert(y);
  }
};

min(4.45, 4.44); //Returns 4.44
min(19, 9); //returns 9
min(1, 1);  //returns 1






//Calculator
//Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, //multiplication and division. You can use either a function declaration or a function expression.
//
// TODO: complete program

//console.log(calculate(4, "+", 6));  // Must show 10
//console.log(calculate(4, "-", 6));  // Must show -2
//console.log(calculate(2, "*", 0));  // Must show 0
//console.log(calculate(12, "/", 0)); // Must show Infinity


function add (x, y){
  console.log(x + " + " + y + " = " + (x + y));
}

function minus (x, y){
  console.log(x + " - " + y + " = " + (x - y));
}

function mult (x, y){
  console.log(x + " x " + y + " = " + (x * y));
}

function divide (x, y){
  console.log(x + " / " + y + " = " + (x / y));
}

add(4, 6); //returns 10
minus(4, 6); //returns -2
mult(2, 0); //returns 0
divide(12,0); //returns Infinity




//Circumference and area of a circle
//Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test //it using user input.

//Here are some tips for solving this exercise:
//
//Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
//The value of number π (Pi) is obtained with Math.PI in JavaScript.
//You might want to use the exponentiation operator ** to perform computations.
//console.log(2 ** 3); // 8: 2 * 2 * 2
//console.log(3 ** 2); // 9: 3 * 3


//Circumpherence = Pi * Radius * 2
//Area = Pi * Radius * Radius

function circFacts (rad){
  console.log("The Circumpherence of your circle is: " + Math.PI * rad * 2);
  console.log("The Area of your circle is: " + Math.PI * rad * rad);
}

circFacts (45);

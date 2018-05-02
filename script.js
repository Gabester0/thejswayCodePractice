//Coding time!
//Try to code each exercise twice, once with a while loop and the other with a for, to see for yourself which one is the
//most appropriate.



////////////////////////////////////////////////////////////////////////
//Carousel
////////////////////////////////////////////////////////////////////////
//Write a program that launches a carousel for 10 turns, showing the turn number each time.
//
//When it's done, improve it so that the number of turns is given by the user.
//

//\\//Solution #1 with for loop:
//let k = Number(prompt("Input how many rides you will take."));
//for(let i = 1; i <= k; i++){
//  console.log("Launching ride number: " + i + " now.");
//}

//\\//Solution #2 with while loop:

//let k = Number(prompt("How many rides?"));
//let i = 1;
//
//while (i <= k){
//  console.log("Now launching ride #" + i + " now!" );
//  i++;
//}

//\\//\\//Conclusions: in this case a for loop is simpler to write, and there is no risk of running an infinite loop.


////////////////////////////////////////////////////////////////////////
//Parity
////////////////////////////////////////////////////////////////////////
//Check the following program that shows even numbers (divisible by 2) between 1 and 10.
//
//for (let i = 1; i <= 10; i++) {
//  if (i % 2 === 0) {
//    console.log(`${i} is even`);
//  }
//}
//This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's //often used to assess number parity.
//
//console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
//console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
//console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
//console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
//console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
//Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given //by the user.

//This program must show exactly 10 numbers including the first one, not 11 numbers!


//\\//Solution #1 still with for loop but also displaying the odd numbers.
//for (let i = 1; i <= 10; i++) {
//  if (i % 2 === 0) {
//    console.log(`${i} is even`);
//  } else {
//    console.log(`${i} is odd`);
//  }
//}



//\\//Solution #2; User input dertermines starting point. while loop
 
//let i = Number(prompt("Please input your starting number"));
//let k = i + 10;
//while (i <= k){
//
//  if (i % 2 === 0) {
//    console.log(`${i} is even`);
//  } else {
//    console.log(`${i} is odd`);
//  }
//
//  i++;
//
//}


///\\\///\\\///The while loop is again not my preference.  My initial solution was the same except that it was written
//as while(i <= i +10)
//The problem is that i is always going to be less than i plus 10 if i is always increasing!  Fortunately I cancelled before the browser crashed!





////////////////////////////////////////////////////////////////////////
//Input validation
////////////////////////////////////////////////////////////////////////
//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
//
//When you are done with the above, improve the program so that the terminating number is between 50 and 100.
//

///\\\///\\\ Solution #1 : While Loop
//let guess = Number(prompt("I'm thinking of a number.  Can you guess what it is?"));
//
//while (guess !== 100) {
//if (guess > 100) {
//  guess = Number(prompt("Sorry.  You are way off.  Please try again"));
//} else {
//  alert("Close enough!");
//  guess = 100;
//}
//}



///\\\///\\\ Solution #2 with a for loop
//let guess = Number(prompt("I'm thinking of a number.  Can you guess what it is?"));
//
//while (guess < 50 || guess > 100) {
//if (guess > 100) {
//  guess = Number(prompt("Sorry.  You are way off.  Please try again"));
//} else if (guess < 50){
//  guess = Number(prompt("Close, but not quite"));
//} else {
//  alert("Close enough!");
//  guess = 100;
//}
//}




//Multiplication table
//Write a program that asks the user for a number, then shows the multiplication table for this number.

//When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a //blueprint).


//Solution #1 with for loop
//let k = Number(prompt("Please input a number between 2 and 9"));
//
//for (j = 2; j <= 9; j ++){
//  console.log( k + " x " + j + " = " + k * j);
//}
//
////solution #2 with while loop
//
//let a = Number(prompt("Please input a number between 2 and 9"));
//let b = 2;
//
//if (a ===1 || a >= 10){
//  prompt("That is not a valid input.  Please refresh the page and try again.  ");
//} else {
//
//  while (b <= 9){
//
//  console.log( a + " x " + b + " = " + a * b );
//  b++;
//
//  }
//
//}







//Neither yes nor no
//Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text
//until either "yes" or "no" is typed, which ends the game.

let guess;
let a = 1;

while ( a === 1 ){
  guess = String(prompt("I'm thinking of 2 words.  Guess one correctly and I will leave you alone."));
  
  if (guess === "yes" || guess === "no"){ //It is essential when using || that full conditions are outlined each time
                                            // if (guess === "yes" || "no") instantly is seen as true
                                            //JavaScript reads this as if(string){} which, while not true, is not false
    a = 0;
    alert("You Did It!");
  }
}





//FizzBuzz
//Write a program that shows all numbers between 1 and 100 with the following exceptions:
//
//It shows "Fizz" instead if the number is divisible by 3.
//
//It shows "Buzz" instead if the number is divisible by 5 and not by 3.
//
//When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
//
//This exercise has many, many solutions. It's a job interview classic that a significant number of candidates fail. Try //your best!



//\\// My FizzBuzz Solution #1
//
//for (k = 1; k <= 100; k++){
//
//  if((k % 3 === 0) && (k % 5 === 0)){
//    console.log("FizzBuzz");
//  }
//    else if(k % 3 === 0){
//      console.log("Fizz");
//    }
//      else if (k % 5 === 0){
//        console.log("Buzz");
//      }
//        else {
//          console.log(k);
//        }
//}




//\\// My FizzBuzz Solution #2


for (k = 1; k <= 100; k++){
  let p3 = k % 3 === 0;
  let p5 = k % 5 === 0;

  if(p3 && p5){
    console.log("FizzBuzz");
  }
    else if(p3){
      console.log("Fizz");
    }
      else if (p5){
        console.log("Buzz");
      }
        else {
          console.log(k);
        }
}

//Improved Hello
var fullName = String(prompt("Enter your first name") + prompt("Enter your Last name"));



// Final Values

let a = 2;
a -= 1;                               //Prediction: a now equals 1 becasue (a-=1) is the same as (a = a-1) and a is 2
                                      //**//Result:
a++;                                  //Prediction: a = 2 because a was 1 at line 9 and we increment a by 1
                                      //**//Result: 2
let b = 8;
b += 2;                               //Prediction: b = 10 because b=8 and b+=2 is the same as b = b +8
                                      //**//Result: 10
const c = a + b * b;                  //Prediction: c = 102 because b is 10 and multiplication takes precedence over add
                                      //**//Result: 102
const d = a * b + b;                  //Prediction: d = 30 becuase * has precedence over +
                                      //**//Result: 30
const e = a * (b + b);                //Prediction: e = 40 because parentheses precedes *
                                      //**//Result: 40
const f = a * b / a;                  //Prediction: f = 10 because * and / have tied precedence they are executed in order
                                              //from left to right
                                      //**//Result: 10
const g = b / a * a;                  //Prediction: g = 10 see above
                                      //**//Result: 10
console.log(a, b, c, d, e, f, g);    //Result 2 10 102 30 40 10 10


//VAT execution
//VAT is Value Added Tax

var rate = 1.206;
function vat (initialValue){
  console.log(initialValue * rate)
}

vat(46.99);
//returns 56.99



//Celsius to Fahrenheit

 //[°F] = [°C] x 9/5 + 32

function cToF(initialTemp){
 alert(initialTemp * 9/5 + 32);
}

cToF(100);
//Returns 212 !



//Variable Swapping

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
number1 -= 2;
number2 += 2;

console.log(number1); // Should show 3        Result: 3
console.log(number2); // Should show 5        Result: 5

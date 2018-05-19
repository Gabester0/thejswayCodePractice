//////////////////////////////////////////////////////////////////////////////////////////////
//Coding time!
//////////////////////////////////////////////////////////////////////////////////////////////
//Word info
//////////////////////////////////////////////////////////////////////////////////////////////
//Write a program that asks you for a word then shows its length, lowercase, and uppercase values.
//
//const input = String(prompt("please input a word"));
//
//let caseCheck = function(toCheck){
//
//  let toCheckArray = toCheck.split("");
//  let toCheckArrUp = input.toUpperCase().split("");
//  let up = 0;
//
//  for (let k = 0; k <toCheckArray.length; k++){
//
//    if (toCheckArray[k]===toCheckArrUp[k]){
//      up ++;
//    }
//  }
//  console.log("Your word has " + up + " Uppercase characters.");
//  console.log("Your word has " + (input.length - up) + " Lowercase characters.");
//
//};
//
//console.log(`${input} is your word.  \n Your word is ${input.length} characters long.`);
//caseCheck(input);



//////////////////////////////////////////////////////////////////////////////////////////////
//Vowel count
//////////////////////////////////////////////////////////////////////////////////////////////
//Improve the previous program so that it also shows the number of vowels inside the word.
//

//const input = String(prompt("please input a word"));
//
//let caseCheck = function(toCheck){
//
//  let toCheckArray = toCheck.split("");
//  let toCheckArrUp = input.toUpperCase().split("");
//  let up = 0;
//  let vow = 0;
//
//  for (let k = 0; k <toCheckArray.length; k++){
//
//    if (toCheckArray[k]===toCheckArrUp[k]){
//      up ++;
//    }
//
//    if (toCheckArrUp[k] === "A" || toCheckArrUp[k] === "E" || toCheckArrUp[k] === "I" ||
//    toCheckArrUp[k] ==="O" ||toCheckArrUp[k]=== "U" ){
//
//      vow++;
//    }
//  }
//  console.log("Your word has " + up + " Uppercase characters.");
//  console.log("Your word has " + (input.length - up) + " Lowercase characters.");
//  console.log("Your word has " + vow + " Vowels.");
//
//};
//
//console.log(`${input} is your word.  \n Your word is ${input.length} characters long.`);
//caseCheck(input);
//









//////////////////////////////////////////////////////////////////////////////////////////////
//Backwards word
//////////////////////////////////////////////////////////////////////////////////////////////
//Improve the previous program so that it shows the word written backwards.
//



//const input = String(prompt("please input a word"));
//
//let caseCheck = function(toCheck){
//
//  let toCheckArray = toCheck.split("");
//  let toCheckArrUp = input.toUpperCase().split("");
//  let up = 0;
//  let vow = 0;
//  let rev = [];
//
//  for (let k = 0; k <toCheckArray.length; k++){
//
//    if (toCheckArray[k]===toCheckArrUp[k]){
//      up ++;
//    }
//
//    if (toCheckArrUp[k] === "A" || toCheckArrUp[k] === "E" || toCheckArrUp[k] === "I" ||
//    toCheckArrUp[k] ==="O" ||toCheckArrUp[k]=== "U" ){
//
//      vow++;
//    }
//  }
//
//  for (let j = toCheckArray.length; j >= 0; j--){
//    rev.push(toCheckArray[j]);
//  }
//
//  console.log("Your word has " + up + " Uppercase characters.");
//  console.log("Your word has " + (input.length - up) + " Lowercase characters.");
//  console.log("Your word has " + vow + " Vowels.");
//  console.log(rev.join(""));
//};
//
//console.log(`${input} is your word.  \n Your word is ${input.length} characters long.`);
//caseCheck(input);




//////////////////////////////////////////////////////////////////////////////////////////////
//Palindrome
//////////////////////////////////////////////////////////////////////////////////////////////

//Improve the previous program to check if the word is a palindrome. A palindrome is a word or sentence that's spelled the same way both forward //and backward, ignoring punctuation, case, and spacing.

//"radar" should be detected as a palindrome, "Radar" too.



const input = String(prompt("please input a word"));

let caseCheck = function(toCheck){
  
  let toCheckArray = toCheck.split("");
  let toCheckArrUp = input.toUpperCase().split("");
  let up = 0;
  let vow = 0;
  let rev = [];
  
  for (let k = 0; k <toCheckArray.length; k++){
  
    if (toCheckArray[k]===toCheckArrUp[k]){
      up ++;
    }
    
    if (toCheckArrUp[k] === "A" || toCheckArrUp[k] === "E" || toCheckArrUp[k] === "I" ||
    toCheckArrUp[k] ==="O" ||toCheckArrUp[k]=== "U" ){
      
      vow++;
    }
  }
  
  for (let j = toCheckArray.length; j >= 0; j--){
    rev.push(toCheckArray[j]);
  }
  
  console.log("Your word has " + up + " Uppercase characters.");
  console.log("Your word has " + (input.length - up) + " Lowercase characters.");
  console.log("Your word has " + vow + " Vowels.");
  console.log(rev.join(""));
  
  if(rev.join("").toUpperCase() === toCheckArrUp.join("") ){
    console.log("Your word is a palindrome");
  } else {
    console.log("Your word is not a palindrome");
  }
};

console.log(`${input} is your word.  \n Your word is ${input.length} characters long.`);
caseCheck(input);

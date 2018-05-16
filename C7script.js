//Coding time!
//Create all these programs in a generic fashion: the program output should reflect any update in the array's content.
//

//////////////////////////////////////////////////////////////////////////////////////////////
//Musketeers
//Write a program that:
//////////////////////////////////////////////////////////////////////////////////////////////
//
//Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
//Shows each array element using a for loop.
//Adds the "D'Artagnan" value to the array.
//Shows each array element using the forEach() method.
//Remove poor Aramis.
//Shows each array element using a for-of loop.


//Initialize Array
const musketeers = [`Athos`, `Porthos`, `Aramis`];


//Iterate through array with a for loop
for (let k = 0; k < musketeers.length; k++){
  console.log( musketeers[k]);
  console.log(`\\\\\\\\\\\\\\\\`);
}


//Add D'Artagnan to array

musketeers.unshift(`D'Artagnan`);


//Iterate through with forEach()

musketeers.forEach(musketeer =>{
 console.log(musketeer);
 console.log(`------------------`);
});


//Removes Aramis

musketeers.splice(3, 1);


//Iterate through array with for of loop

for (const myMusket of musketeers){
  console.log(myMusket);
}




//////////////////////////////////////////////////////////////////////////////////////////////
//Sum of values
//////////////////////////////////////////////////////////////////////////////////////////////


//Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
//


const values = [3, 11, 7, 2, 9, 10];

let k = 0;

for( const sum of values){
  k+= sum;
  console.log(k);
}





//////////////////////////////////////////////////////////////////////////////////////////////
//Array maximum
//////////////////////////////////////////////////////////////////////////////////////////////

//Write a program that creates the following array, then calculates and shows the array's maximum value.
//

const value = [3, 11, 7, 2, 9, 10];

let j = 0;

for (const num of value){
  
  if (j < num){
    j = num;
  }
}

console.log(`Winner is ` + j);



//////////////////////////////////////////////////////////////////////////////////////////////
//List of words
//////////////////////////////////////////////////////////////////////////////////////////////

//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, //except "stop".

let l = 0;
let wordGuess = [];

let iter = function(){
 wordGuess.forEach(wordG=>{
   console.log(wordG);
 });
  
};

while (l === 0){
  word = prompt("Please input a word");
  
  if(word !== "stop"){
    console.log("I'm sorry.  That is incorrect.");
    wordGuess.push(word);
  } else {
    console.log("Alright");
    iter ();
    break;
  }
}

  
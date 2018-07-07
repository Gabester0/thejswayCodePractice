//Counting elements
//Here is some HTML code (content is by French poet Paul Verlaine).
//
//<h1>Mon rêve familier</h1>
//
//<p>Je fais souvent ce rêve <span class="adjective">étrange</span> et <span class="adjective">pénétrant</span></p>
//<p>D'une <span>femme <span class="adjective">inconnue</span></span>, et que j'aime, et qui m'aime</p>
//<p>Et qui n'est, chaque fois, ni tout à fait la même</p>
//<p>Ni tout à fait une autre, et m'aime et me comprend.</p>
//Complete the following program to write the countElements() function, that takes a CSS selector as a parameter and returns the number of //corresponding elements.

// TODO: write the countElements() function here

function countElements(tag){
  
  return document.querySelectorAll(tag).length;
  
}

//console.log(countElements("p"));              // Should show 4  //Returns: 4
//console.log(countElements(".adjective"));     // Should show 3  //Returns: 3
//console.log(countElements("p .adjective"));   // Should show 3  //Returns: 3
//console.log(countElements("p > .adjective")); // Should show 2  //Returns: 2

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//Handling attributes
//Here is the description of several musical instruments.
//
//<h1>Some musical instruments</h1>
//<ul>
//  <li id="clarinet" class="wind woodwind">
//    The <a href="https://en.wikipedia.org/wiki/Clarinet">clarinet</a>
//  </li>
//  <li id="saxophone" class="wind woodwind">
//    The <a href="https://en.wikipedia.org/wiki/Saxophone">saxophone</a>
//  </li>
//  <li id="trumpet" class="wind brass">
//    The <a href="https://en.wikipedia.org/wiki/Trumpet">trumpet</a>
//  </li>
//  <li id="violin" class="chordophone">
//    The <a href="https://en.wikipedia.org/wiki/Violin">violin</a>
//  </li>
//</ul>


//Write a JavaScript program containing a linkInfo() function that shows:
//

//The total number of links.
//The target of the first and last links.
//This function should work even if no links are present.


//const linkInfo = (tag) =>{
//
//  let k = document.getElementsByTagName(`${tag}`);
//  let l =  k.length;
//
//  if(l >= 1){
//  console.log(`There are ${l} links`);
//  console.log(`First link: ${k[0].href}`);
//  console.log(`Last link: ${k[l-1].href}`);
//  } else {
//    console.log(`There are no links here!`);
//  }
//
//  };
//linkInfo("a");
//
//Expected result

//RESULT:
/*There are 4 links
externalfile:drive-71f063f0832f4eaea59920f4d8081006d998fa16/root/the jsway/Chapter 14/C14script.js:62 First link: https://en.wikipedia.org/wiki/Clarinet
externalfile:drive-71f063f0832f4eaea59920f4d8081006d998fa16/root/the jsway/Chapter 14/C14script.js:63 Last link: https://en.wikipedia.org/wiki/Violin*/


//
//Add the following new instrument at the end of the HTML list, then check your program's new result.
//
//<li id="harpsichord">
//  The <a href="https://en.wikipedia.org/wiki/Harpsichord">harpsichord</a>
//</li>


//Expected result
//RESULT!:
/*s:61 There are 5 links
externalfile:drive-71f063f0832f4eaea59920f4d8081006d998fa16/root/the jsway/Chapter 14/C14script.js:62 First link: https://en.wikipedia.org/wiki/Clarinet
externalfile:drive-71f063f0832f4eaea59920f4d8081006d998fa16/root/the jsway/Chapter 14/C14script.js:63 Last link: https://en.wikipedia.org/wiki/Harpsichord*/


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//Handling classes
//Improve the previous program to add a has() function that tests if an element designated by its ID has a class. The function shows true, false //or an error message if the element can't be found.
//
// Show if an element has a class
//const has = (id, someClass) => {
//  // TODO: write the function code
//};
//
//has("saxophone", "woodwind");     // Should show true
//has("saxophone", "brass");        // Should show false
//has("trumpet", "brass");          // Should show true
//has("contrabass", "chordophone"); // Should show an error message
//Use console.error() rather than console.log() to display an error message in the console.//


const linkInfo = (tag) =>{
  
  let k = document.getElementsByTagName(`${tag}`);
  let l =  k.length;
  
  if(l >= 1){
  console.log(`There are ${l} links`);
  console.log(`First link: ${k[0].href}`);
  console.log(`Last link: ${k[l-1].href}`);
  } else {
    console.log(`There are no links here!`);
  }

  };
  
const hasClass = (id, cl)=>{
  let h = document.getElementById(`${id}`);
  
  if (h){
  
    if(document.getElementById(`${id}`).classList.contains(`${cl}`)) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  else{
      console.error("Error");
  }
};

linkInfo("a");

hasClass("saxophone", "woodwind");     // Should show true                  Shows: true
hasClass("saxophone", "brass");        // Should show false                 Shows: false
hasClass("trumpet", "brass");          // Should show true                  Shows: true
hasClass("contrabass", "chordophone"); // Should show an error message      Shows: error
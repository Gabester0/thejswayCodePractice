//Coding time!
//Adding a paragraph
//Improve the languages example to add a paragraph (<p> tag) containing a link (<a> tag) to the URL https://en.wikipedia.org/wiki/List_of_programming_languages.



function createPar (link, text, parent){
  const p = document.createElement("p");
  const a = document.createElement("a");
  a.href = `${link}`;
  a.textContent = text;
  p.appendChild(a);
  document.querySelector(`${parent}`).appendChild(p);
}

//createPar("https://en.wikipedia.org/wiki", "For more languages click here", ".beginning");
//Execution result //Success!

//Newspaper list
//Here is the HTML code of a web page.

//<h3>Some newspapers</h3>
//<div id="content"></div>
//Write a program that shows on the page a list of newspapers defined in a JavaScript array. Each link must be clickable.




//// Newspaper list
const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];


  //let p = document.createElement("p");

//    newspapers.forEach(paper => {
//      let a = document.createElement("a");
//      a.href = paper;
//      a.target = "_blank";
//      a.textContent = `${paper}`;
//      const br = document.createElement("br");
//      document.getElementById("contents").appendChild(a).appendChild(br);
//    });

//Execution result
//Some newspapers
//https://www.nytimes.com----https://www.washingtonpost.com----http://www.economist.com----
//
//



//Mini-dictionary
//Here is the HTML code of a web page.
//
//<h3>A mini-dictionary</h3>
//<div id="content"></div>
//Write a program that shows on the page a list of terms and definitions defined in a JavaScript array.
//
const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];
//Use the HTML <dl> tag to create the list (more on this tag). Each term of the dictionary should be given more importance with a <strong> tag

//const list = document.createElement("dl");
//document.getElementById("cont").appendChild(list);

//for (const word of words){
//  const bre = document.createElement("br");
//  const st = document.createElement("strong");
//  let dt = document.createElement("dt");
//  dt.textContent = `${word.term}: `;
//
//  let dd = document.createElement("dd");
//  dd.textContent = `${word.definition}`;
//
//  st.appendChild(dt);
//  list.appendChild(st);
//  list.appendChild(dd);
//  list.appendChild(bre);
//
//}


//
//Execution result:
//
/*A mini-dictionary
Procrastination:
Avoidance of doing a task that needs to be accomplished

Tautology:
logical argument constructed in such a way that it is logically irrefutable

Oxymoron:
figure of speech that juxtaposes elements that appear to be contradictory
*/








//Updating colors
//The following HTML content defines three paragraphs.
//
//<h1>Paragraph 1</h1>
//<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim fringilla dapibus. Curabitur placerat efficitur molestie. Quisque quis consequat nibh. Aenean feugiat, eros eget aliquam vulputate, leo augue luctus lectus, non lobortis libero quam non sem. Aliquam sit amet tincidunt ex, mollis interdum massa.</div>
//
//<h1>Paragraph 2</h1>
//div>Vivamus at justo blandit, ornare leo id, vehicula urna. Fusce sed felis eget magna viverra feugiat eget nec orci. Duis non massa nibh. Aenean vehicula velit a magna lobortis tempor ut quis felis. Proin vitae dui a eros facilisis fringilla ut ut ante.</div>
//
//<h1>Paragraph 3</h1>
//<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet pharetra massa. Nulla blandit erat nulla, et scelerisque libero varius ut. Praesent bibendum eu magna ullamcorper venenatis. Sed ut pellentesque leo. Sed ultrices sapien consequat odio posuere gravida.</div>




//Write a program that asks the user for the new text color, and then asks for the new background color. The page is then updated accordingly.
//
//Execution result with red text on white background
// Success




function setParColor (textCol, parCol){
  
  const el = document.querySelector("body");
  el.setAttribute("style", `color: ${textCol}; backgroundColor: ${parCol};`)
  
}

setParColor("red", "white");





//Information about an element
//Here is this exercise's HTML code.
//


//<div id="content">ABC
//    <br>Easy as
//    <br>One, two, three
//</div>
//<div id="infos"></div>
//And the associated CSS stylesheet.
//
//#content {
//    float: right;
//    margin-top: 100px;
//    margin-right: 50px;
//}



//Write a program that adds to the page a list showing the height and width of the element identified by "content".

let coStyle = getComputedStyle(document.getElementById("co"));
console.log(coStyle.height, coStyle.width);     /// Returns 60px 947px

document.getElementById("infos").innerHTML = `${coStyle.height} px height.  <br>   ${coStyle.width} px width.`;
// Click handler on the document
// document.addEventListener("click", e => {
//     console.log("Document handler");
//   });
//   // Click handler on the paragraph
//   document.getElementById("para").addEventListener("click", e => {
//     console.log("Paragraph handler");
//   });
//   // Click handler on the button
//   document.getElementById("propa").addEventListener("click", e => {
//     console.log("Button handler");
//   });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////Coding Time:
// Counting clicks
// Start with the following HTML content.
// /*// Write the JavaScript code that counts the number of clicks on the myButton button by updating the clickCount element. The deactivate button stops the counting.
// */

let count = document.getElementById("clickCount");
let myBut = document.getElementById("myButton");

let num = 1;

function adder (){
  count.textContent = num ++;
}

myBut.addEventListener("click", adder);


document.getElementById("deactivate").addEventListener("click", elem=>{
  myBut.removeEventListener("click", adder);
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Changing colors
// Here is some HTML content to start with.  


//Write the associated JavaScript code that updates the 
//background color of all div tags according to the key (R, Y, G or B) pressed by the user.

let divs = document.querySelectorAll("div");

function changeColor(col){

  divs.forEach(d =>{
    d.style.backgroundColor = col;
  });
};
// //rgyb 82, 71, 89, 66

const colorChanger = e =>{
  if(e.keyCode === 82){
    changeColor("red");
  } else if (e.keyCode === 71){
    changeColor("green");
  } else if(e.keyCode === 89){
    changeColor("yellow");
  } else if(e.keyCode === 66){
    changeColor("blue");
  }
}

document.addEventListener("keydown", colorChanger);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Desserts!

// Write the JavaScript code that adds a new dessert to the list when the user clicks on the button. The dessert name is chosen by the user.

// Bonus points for adding the possibility of changing a dessert's name when clicking on it.

const addBtn = document.getElementById("addButton");
const desList = document.getElementById("desserts");

function editItem(){
  this.textContent = prompt("What will you have instead?");
};

function renderDessert(d){
  let listItem = document.createElement("li");
  listItem.textContent = d;
  listItem.addEventListener("click", editItem);
  desList.appendChild(listItem);
};

function addFn(){
  let newDessert = prompt("Please tell us what you will be having for dessert");
  renderDessert(newDessert);
};

addBtn.addEventListener("click", addFn);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Interactive quiz
// Here is the starter HTML code.

// And the associated JavaScript code that defines a question list.

// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];
const parentDiv = document.getElementById("content");

questions.forEach(q =>{
  let pEl = document.createElement("p");
  pEl.textContent = q.statement;

  let btn = document.createElement("button");
  btn.textContent = "show answer";
  btn.id= q.answer;
  btn.addEventListener("click", showAns);

  pEl.appendChild(btn);
  parentDiv.appendChild(pEl);
})

function showAns () {
  const ans = this.id;
  this.parentNode.textContent = ans;
  }
// Complete this code to display the questions in the <div> element of the page, with a "Show the answer" button next to each question. Clicking this button replaces it with the answer for this question.

// Execution result


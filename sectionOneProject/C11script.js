let urls = [];


let Url = function(title, url, author){
  this.title = title,
  this.url = url,
  this.author = author;
};

function inputPrompt (){
  let r = parseInt(prompt(`Choose an option: \n#1: Show Links.  Enter 1\n#2: Add Link.  Enter 2\n#3: Remove Link.  Enter 3\n#4: Quit.  Enter 4`));
  
if( r == 1 || r == 2 || r == 3 || r == 4){
    switch(r){
      case 1:
        showLinks();
        break;
      case 2:
        addLinks();
        break;
      case 3:
        removeLinks();
        break;
      case 4:
        quit();
    }
   } else {

   alert(`That is not a valid option, please try again`);

   inputPrompt();
    }
}

//1
function showLinks(){
  let k = 0;
  
  if (urls.length > 0){
  
  urls.forEach(url =>{
    
    alert(`${k}: ${url.title} (${url.url}) Author: ${url.author}`);
    k++;
  });
} else {

  alert("Your list of urls is empty!  Please add some.");
}
  inputPrompt();
}

function addLinks(){
  
  let title = prompt("What is the name of the page? :");

  let author = prompt("Please input the author's (thats you!) name: ");

  let url = prompt("What is the url?  \nPlease make sure this url begins with http:// or https:// \n and ends with a period followed by a valid domain extension.");

  if((url.startsWith("https://www.") || url.startsWith("http://www.")) && url.includes(".", url.length - 4)){
    alert("Thank you for youir contribution!");
    let contribution = new Url(title, url, author);
    urls.push(contribution);

  } else {
    alert("That doesn't look right.  Please try again. ");
    inputPrompt();
  }
  

  inputPrompt();
}

function removeLinks(){
  
  if (urls.length >= 1){
    
    let remove = prompt(`Please enter the index number of the url you wish to remove (between 0 and ${urls.length-1}):`);
  
      if((remove >= 0) && (remove <= urls.length -1)){
        urls.splice(remove, 1);
        alert("Gone!");
      } else {
        alert("That didn't work.  Try again!");
      }
  } else {
    alert("Nothing to remove yet!");
  }
  inputPrompt();
}


function quit(){
  window.close();
}

inputPrompt();

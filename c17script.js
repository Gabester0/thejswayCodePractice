////////////////////////////////////// Password Verifier
//
//Write the JavaScript code that validates the password when the user submits the form. The validation rules are as follow:

//The two inputted passwords must be identical.
//The minimal password length is 6 characters.
//The password must contain at least one digit.
//The validation result must be shown on the page with an appropriate message in each case.

//document.getElementById("passwordHelp").addEventListener("click", e =>{
//  e.alert("Make sure both your passwords are identical.  <br/>Your password must be greater than 6 characters in length <br/>Your password must //contain at least one digit");
//});
//

const results = document.getElementById("passwordHelp");
results.style.color = "red";

document.getElementById("password1").addEventListener("blur", e =>{
  let p1 = e.target.value;
  const reqD = /[0-9]/;

if (p1.length < 6){
  results.textContent = "Sorry your password is too short.";
  results.style.color = "red";

  return;
} else if (reqD.test(p1) === false){
  results.textContent = "Sorry your password does not have any numbers";
  results.style.color = "red";

  return;
}
  
});

document.getElementById("password2").addEventListener("blur", e =>{
  let p2 = e.target.value;
  const p1 = document.querySelector("input").value;
console.log(p1);

  if  (p2!== p1){
    results.textContent = "Passwords do not match";
    results.style.color = "red";

    return;
  }
  else {
    results.style.color = "green";
    results.textContent = "Looks good!";
  }
  
});


document.querySelector("form").addEventListener("submit", e =>{
  e.preventDefault();
});








/*      GOT HOUSES                              */


//// Character list. Each house has a name and a code Character list. Each house has a name and
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};
//Complete this code so that:
//
//The house dropdown list is filled during page load.
//The list of characters is shown whenever the user selects a new house in the list.

const houseEl = document.getElementById("house");
const charList = document.getElementById("characters");

houses.forEach(h=>{
  
  let houseOpt = document.createElement("option");
  
  houseOpt.textContent = h.name;

  houseEl.appendChild(houseOpt);
  
});

houseEl.addEventListener("change", e=>{
  
  let inp = e.target.value;
  
  if(inp === "" ){
    charList.textContent = "Please select a house";
  }
  else {
  charList.textContent = " ";
  let code = inp.slice(0, 2).toUpperCase();
  getCharacters(code).forEach(ch => {
    let li = document.createElement("li");
    li.textContent = ch;
    charList.appendChild(li);
  });
  }
  
});


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
///////////// AutoComplete Forms    /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//Autocomplete
//In this exercise, you'll have to assist the user in selecting a country. As he enters the country name in an input box, the page shows a list //of corresponding countries. Clicking on a suggested country replaces the value in the input box.

//To keep things simple, only countries starting with a "A" letter are taken into account.
// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];
//Complete this code to implement country autocompletion.

const auto = document.getElementById("suggestions");
const inputBox = document.getElementById("country");

inputBox.addEventListener("input", e=>{
  let inp = e.target.value;
  
  if (inp.length === 0){
    auto.textContent = "";

  } else {
    
    auto.textContent = "";
    
    countryList.forEach(count =>{
      
      let k = inp.length;
      let j = count.slice(0, k);
      
      //console.log( inp === j.toLowerCase());
      if( inp.toLowerCase() === j.toLowerCase()){

        let countryP = document.createElement("p");
        countryP.textContent = count;
        countryP.classList.add("suggestion");
        countryP.addEventListener("click", e => {
          inputBox.value = String(count);
          auto.textContent = "";
        });
        auto.appendChild(countryP);
      } else {

      

      }
    });
    
  }
  
});


//Execution result
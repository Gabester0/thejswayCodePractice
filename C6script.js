const laptop = {
  brand: "acer",
  os:"Chrome",
  hardware: "Intel",
  price: 200
};

console.log(`I code with an ${laptop.brand} ${laptop.os}-book that I bought for \$ ${laptop.price}`);

//////////////////////////////////////////////////////////////////
//Coding time!
//////////////////////////////////////////////////////////////////


//Adding character experience
//Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0.
//////////////////////////////////////////////////////////////////
//Experience must appear in character description.
//////////////////////////////////////////////////////////////////


// TODO: create the character object here

const aurora = {
  health : 100,
  strength : 50,
  xp : 0,
  describe : function(){
    console.log(`Aurora currently has ${aurora.xp} XP, ${aurora.health} health, and ${aurora.strength} strength`);
  }
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());


//Execution result
//    Aurora currently has 15 XP, 80 health, and 60 strength    //Successful//



//////////////////////////////////////////////////////////////////

//Modeling a dog
//Complete the following program to add the dog object definition.

// TODO: create the dog object here

const dog = {
  name: `Fido`,
  breed: `Pittbull`,
  species: `Canine`,
  size: 2.5,
  bark: `Hi, will you be my friend?`,
  describe: function(){
    console.log(`${this.name} is a friendly ${this.breed}.  ${this.name} is ${this.size} feet tall.`);
  },
  reactionToCat: function(){
    console.log(`Look, a cat!  ${this.name} barks: ${this.bark}`);
  }
};

dog.describe();
dog.reactionToCat();


//console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
//console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
//Execution result
//
//Fido is a friendly Pittbull.  Fido is 2.5 feet tall.    //Success//
// Look, a cat!  Fido barks: Hi, will you be my friend?   //Success//




//////////////////////////////////////////////////////////////////

//Modeling a circle
//Complete the following program to add the circle object definition. Its radius value is input by the user.
//
//const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
let r = Number(prompt(`Enter the circle radius`));

const circle = {
  d : r *2,
  a : r*r*Math.PI,
  c : r*2*Math.PI
};


console.log(`Its circumference is ${circle.c}`);
console.log(`Its area is ${circle.a}`);

//Input 45 as radius
//Returns:
//Its circumference is 282.7433388230814
//Its area is 6361.725123519331
//



//////////////////////////////////////////////////////////////////

//Modeling a bank account
//Write a program that creates an account object with the following characteristics:
//
//A name property set to "Alex".
//A balance property set to 0.
//A credit method adding the (positive or negative) value passed as an argument to the account balance.
//A describe method returning the account description.
//Use this object to show its description, crediting 250, debiting 80, then show its description again.
//

const account = {
  acctName : "Alex",
  acctBal : 0,
  acctCredit : function (cred){
    this.acctBal += cred;
    this.acctDescribe();
  },
    acctDescribe : function (){
    console.log(`This account belongs to ${this.acctName} and the current balance is ${this.acctBal}`);
  }
};

//Execution result
account.acctDescribe();     //Returns: This account belongs to Alex and the current balance is 0

account.acctCredit(250);    //Returns:  This account belongs to Alex and the current balance is 250

account.acctCredit(-80);    //Returns:  This account belongs to Alex and the current balance is 170

account.acctDescribe();     //Returns:  This account belongs to Alex and the current balance is 170

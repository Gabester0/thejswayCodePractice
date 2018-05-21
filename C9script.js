//////////////////////////////////////////////////////////////////
//Coding time!
//////////////////////////////////////////////////////////////////
//Dogs
//Complete the following program to add the definition of the Dog class.
//
//Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".
//
//// TODO: define the Dog class here


class Dog {
  constructor(name, species, size){
    this.name = name;
    this.species = species;
    this.size = size;
  }
  describe(){
    console.log(`${this.name} is a ${this.species} dog measuring ${this.size}`);
  }
  bark(){
    if(this.size > 60){
      console.log( `Look a cat! ${this.name} barks:  Grrr! Grrr!`);
    } else {
      console.log(`Look a cat! ${this.name} barks:  Woof! Woof!`);
    }
  }
}

const fang = new Dog("Fang", "boarhound", 75);
//console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
//console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);
//
const snowy = new Dog("Snowy", "terrier", 22);
//console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
//console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

//Execution result:
//Fang is a boarhound dog measuring 75
//Look, a cat! Fang barks: Grrr! Grrr!
//Snowy is a terrier dog measuring 22
//Look, a cat! Snowy barks: Woof! Woof!


//\\//\\// Or:
fang.describe();
fang.bark();

snowy.describe();
snowy.bark();

//Execution result:
//Fang is a boarhound dog measuring 75
//Look, a cat! Fang barks: Grrr! Grrr!
//Snowy is a terrier dog measuring 22
//Look, a cat! Snowy barks: Woof! Woof!




//////////////////////////////////////////////////////////////////
//Character inventory
//////////////////////////////////////////////////////////////////

//Improve the example RPG to add character inventory management according to the following rules:
//

//A character's inventory contains a number of gold and a number of keys.
//

//Each character begins with 10 gold and 1 key.
//

//The character description must show the inventory state.
//

//When a character slays another character, the victim's inventory goes to its vanquisher.
//

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.inventory = {
      gold : 10,
      keys : 1
    };
    this.xp = 0; // XP is always zero for new characters
  }
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`);
        this.xp += bonusXP;
        this.inventory.gold += target.inventory.gold;
        this.inventory.keys += target.inventory.keys;
        this.describe();
        target.describe();
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    if(this.health > 0){
    console.log( `${this.name} has ${this.health} health points, ${this
      .strength} as strength, ${this.xp} XP points and ${this.inventory.gold} gold tokens and ${this.inventory.keys} keys.`);
  }
  else {
    console.log(`${this.name} is eliminated`);
  }
  }
}

let Aurora = new Character("Aurora", 150, 50);
let Xorg = new Character("Xorg", 40, 20);

Aurora.describe();
Xorg.describe();
Aurora.attack(Xorg);
//Here's the expected execution result.
//
//Execution result
/*Aurora has 150 health points, 50 as strength, 0 XP points and 10 gold tokens and 1 keys.
Xorg has 40 health points, 20 as strength, 0 XP points and 10 gold tokens and 1 keys.
Aurora attacks Xorg and causes 50 damage points
Aurora eliminated Xorg and wins 10 experience points
Aurora has 150 health points, 50 as strength, 10 XP points and 20 gold tokens and 2 keys.
Xorg is eliminated*/





//////////////////////////////////////////////////////////////////
//Account list
//////////////////////////////////////////////////////////////////

//Let's build upon a previous account object exercise. A bank account is still defined by:
//
//A name property.
//A balance property, initially set to 0.
//A credit method adding the value passed as an argument to the account balance.
//A describe method returning the account description.
//Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These //accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

class Account {
  constructor(name){
    this.name = name;
    this.balance = 0;
  }
  credit(money){
    this.balance += money;
    this.describe();
  }
  describe(){
    console.log(`This is ${this.name}'s account with a balance of ${this.balance} Dollars`);
  }
}

let Sean = new Account("Sean");
let Brad = new Account("Brad");
let George = new Account("George");

let Bank = [];

Bank.push(Sean, Brad, George);

Bank.forEach(function(acct){
  acct.credit(1000);
});

//Execution result
/*
This is Sean's account with a balance of 1000 Dollars
This is Brad's account with a balance of 1000 Dollars
This is George's account with a balance of 1000 Dollars
*/
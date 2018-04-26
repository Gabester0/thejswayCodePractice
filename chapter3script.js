//Number comparison
//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
//

//function comp (no1, no2){
//  if (no1 > no2){
//    console.log("The first number is greater than the second number");
//  } else if (no2 > no1){
//    console.log("The second number is greater than the first number");
//  } else {
//    console.log("The two numbers are equal");
//  }
//}
//
//comp (3/7, 2.33); //returns 2nd no greater
//comp (7/3, 2.1);  //returns ist no greater
//comp (7/3, 2.33); //returns 1st no greater (When the js engine does the math for 7/3 it doesnt round off so
                  //the 1st no is 0.003333333 greater than the 2nd no.)





//Final values
//Take a look at the following program.

//let nb1 = Number(prompt("Enter nb1:"));
//let nb2 = Number(prompt("Enter nb2:"));
//let nb3 = Number(prompt("Enter nb3:"));
//
//if (nb1 > nb2) {
//  nb1 = nb3 * 2;
//} else {
//  nb1++;
//  if (nb2 > nb3) {
//    nb1 += nb3 * 3;
//  } else {
//    nb1 = 0;
//    nb3 = nb3 * 2 + nb2;
//  }
//}
//console.log(nb1, nb2, nb3);
//Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. //Complete the following table.
//
//Initial values	         nb1 predict    Actual	    nb2 predict     Actual     	nb3 predict     Actual
//nb1=nb2=nb3=4             0             0           4               4           12              12      Correct!
//nb1=4,nb2=3,nb3=2         4             4           3               3           2               2       Correct!
//nb1=2,nb2=4,nb3=0         3             3           4               4           0               0       Correct!

//Check your predictions by executing the program.
//






//Number of days in a month
//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years //are excluded. Incorrect inputs must be taken into account.
//
//January - 31 days
//February - 28 days in a common year and 29 days in leap years
//March - 31 days
//April - 30 days
//May - 31 days
//June - 30 days
//July - 31 days
//August - 31 days
//September - 30 days
//October - 31 days
//November - 30 days
//December - 31 days

//let months = {
//  1 : 31,  2 : 28,  3 : 31,  4 : 30,  5 : 31,  6 : 30,
//  7 : 31,  8 : 31,  9 : 30,  10 : 31,  11 : 30,  12 : 31
//};
//
//function howManyDays (month){
//  month > 12 || month < 1 ? console.log("Please input a valid month.") :  console.log(months[month]);
//}
//                    ///Result:
//howManyDays(2);     //28
//howManyDays(4);     //30
//howManyDays(12);    //31
//howManyDays(0);     //Please input valid month
//howManyDays(13);    // " "



//Following second
//Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program //calculates and shows the time one second after. Incorrect inputs must be taken into account.

//This is not as simple as it seems... Look at the following results to see for yourself:
//
//14h17m59s => 14h18m0s
//6h59m59s => 7h0m0s
//23h59m59s => 0h0m0s (midnight)

//Limitations
//Seconds : 60
//Minutes : 60
//Hours   : 24


let hours = Number(prompt("Please input time in hours: "));
let minutes = Number(prompt("Please input time in minutes: "));
let seconds = Number(prompt("Please input time in seconds: "));



if (hours > 23 || minutes > 59 || seconds > 59 ) {
  console.log("Please input your time in a different format.  Be sure that hours are entered in military time.  Please ensure that hours input are less than 24 and minutes and seconds input are less than 60.");
}
else if (seconds === 59 && minutes === 59 && hours === 23) {

  hours = 0;
  console.log("The returned time is 0 hours, 0 minutes, and 0 seconds.");
}

else if (seconds === 59 && minutes === 59){
  
  hours += 1;
  console.log("The returned time is " + hours + " hours, 0 minutes, and 0 seconds.");
  
}

else if (seconds === 59){
  
  minutes += 1;
  console.log("The returned time is " + hours + " hours, " + minutes + " minutes, and 0 seconds.");
  
}

else if (seconds < 59){
  
  seconds += 1;
  console.log("The returned time is " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds." );
}



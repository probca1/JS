/*
In JavaScript we have the following conditional statements:
Use "if" to specify a block of code to be executed, if a specified condition is true
Use "else" to specify a block of code to be executed, if the same condition is false
Use "else if" to specify a new condition to test, if the first condition is false
Use "switch" to specify many alternative blocks of code to be executed
*/

// Syntax of "if" statement
/* 
if(condition)
{
//code to be executed if condition is truce.
} 
else {
    //code to be executed in false condition.
}
*/

//Write a "Good Morning" greeting if the time is less than 12
// let d = new Date().getHours()
// if (d < 12) {
//     console.log("Good Morning");
// }
// else {
//     console.log("Good Afternoon");
// }

/*Multiple "if...else" statements can be nested to create an "else if" clause. Note that there is no "elseif" (in one word) keyword.
Syntax: 
 if (condition1)
    statement1
 else if (condition2)
   statement2
 else if (condition3)
   statement3
 else
   statementN
*/

/* => Ternary Operator:
  (condition)
  ? code for true condition
  : code for false condition */
  let age=10
//   age>=18 
//   ? console.log("you can vote")
//   : console.log("you cannot vote");

// function checkIfQualified() {
//   return age > 35 ? "Qualified" : "Not Qualified!";
// }
// console.log(checkIfQualified());

/* =>=> A chained ternary operator is an alternate (shortcut) way of writing an if...else if...else statement.
        ==> Syntax:
  (condition1)
  ? code to execute if condition1 is true
  : (condition2)
  ? code to execute if condition1 is false and condition2 is true
  : (condition3)
  ? code to execute if condition1 and condition2 are false but condition3 is true
  : code to execute if all the stated conditions are false;
  */
//   new Date().getHours() < 21
//   ? console.log("Today is special!")
//   : new Date().getHours() < 22
//   ? console.log("Don't waste today's opportunities!")
//   : new Date().getHours() < 23
//   ? console.log("Fear obscures the eyes of glorious opportunities!")
//   : console.log("Last minutes embodies great opportunities!");

//   function checkIfQualified(age) {
//     return age > 34
//       ? "Qualified"
//       : age >= 30 && age <= 34
//       ? "Probation period!"
//       : age === 29
//       ? "Come next year"
//       : "Not qualified!";
//   }
//   console.log(checkIfQualified(32));

/*
Switch Statement
Use the "switch" statement to select one of many code blocks to be executed.
  SYNTAX: 
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
 *** This is how it works:
-The switch expression is evaluated once.
-The value of the expression is compared with the values of each case.
-If there is a match, the associated block of code is executed.
-If there is no match, the default code block is executed.
-Switch cases use strict comparison (===). The values must be of the same type to match.
*/
// let day;
//     switch (new Date().getDay()) {
//         case 0:
//             day = "Sunday";
//             break;
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         case 3:
//             day = "Wednesday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
//     }
    // console.log(day);

// =>> default: clause will get executed, if none of cases matches and can be written any place. */
// switch (new Date().getDay()) {
//   case 0:
//     console.log("Sunday is here! The workdays begin...");
//     break;
//   default:
//     console.log("This day is all about work...work...work.");
//     break;
//   case 5:
//     console.log("It's Friday! Prepare for the parties!");
//     break;
//   case 6:
//     console.log("Saturday is a good day to rest well.");
// }

    /* => COMMON CODE BLOCKS */
    
// switch (new Date().getDay()) {
//   case 4:
//   case 5:
//     text = "Soon it is Weekend";
//     break;
//   case 0:
//   case 6:
//     text = "It is Weekend";
//     break;
//   default:
//     text = "Looking forward to the Weekend";
// } 

// function checkIfQualified(age, canDrive, canCycle) {
//   if (age > 34 && (canDrive === "Yes" || canCycle === "Yes")) {
//     return "Qualified";
//   } else if (
//     age >= 30 &&
//     age <= 34 &&
//     (canDrive === "Yes" || canCycle === "Yes")
//   ) {
//     return "Probation period!";
//   } else if (age === 29) {
//     return "Come next year";
//   } else {
//     return "Not qualified!";
//   }
// }
// console.log(checkIfQualified(89, "Yes", "No"));

//JavaScript contains the following falsy values:
// -> false
// -> 0, -0 and 0n
// -> "", '' (empty strings)
// -> null, undefined and NaN
// -> document.all

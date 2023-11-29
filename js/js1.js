/* 
=> JavaScript Variables
Variable is a container for information you want to store. A variable value can change during the script. You can refer to a variable by name to see its value or to change its value. Variable names are case Sensitive. Eg Name, name, NAME all are different.

=> Rules for Variable name
1. They must begin with a letter or the underscore / $ character. Eg Total, total_marks etc. 
2. Variable names are case Sensitive. Eg Name, name, NAME all are different
3. It contains only letters, digits, underscore and $, (not even space in between).
4. Reserved words cannot  variable name.
*/

/*
=> => JavaScript Values declaration keywords:
1. var:  variable can be redeclare, and reassigned / updated . A global scope variable
2. let:  variable can not be redeclare, but can be reassigned / updated. A block scope variable
3. const : variable can not be redeclare, and reassigned / updated. A block scope variable
*/ 
//STUDY WITH INVESTIGATION
//must know about these keyword:
const accountID="spt4js" //value is locked and we cannot leave without value assigned
let email="spt4js@gmail.com"
var address="kathmandu"
password="tut4JS@myJs"  //declaration without keyword

//to display values
console.log(accountID);
console.table([accountID,email,address,password]);

//=> Note=> Do not prefer to use var keyword because os issue in block scope and functinal scope.

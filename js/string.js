/* 
     "JAVASCRIPT STRING"
    There are 2 ways to create string in JavaScript
1. By string literal
2. By string object (using new keyword) 

??? 1. By String Literal ???
<<< Ways to Create JavaScript Strings >>>
 a. Single quotes: 'SPT'
 b. Double quotes: "Hey! SPT"
 c.Backticks: `My "best" way to ${write}`; */
const fname = "surendra"
const id = 10125

// console.log(fname + " id" + id);

// console.log(`Hi!I'm ${fname} and my "Id" is ${id}`);
let l=5,b=2,h=3
// console.log(`volume is ${l*b*h}`);

// console.log(fname.length);
// console.log(fname[0]);
// console.log(fname.charAt(7));
//In JavaScript, strings are immutable. That means the characters of a string cannot be changed.
fname[0]='S'
// console.log(fname);

//*** JavaScript is Case-Sensitive ***

const ch1 = 'a';
const ch2 = 'A'
// console.log(ch1 === ch2); // false

/* * * STRING OBJECT * * */
//although we can create but it slows down the program.
const myName=new String(fname)
/* -- the commonly used JavaScript String methods: --*/
// console.log(myName.__proto__);

// console.log(fname.valueOf());
//**valueOf() returns the primitive value of string object.
// console.log(fname.repeat(3));

const text1 = 'bca';
const text2 = '  project on  ';
const text3 = 'JavaScript';
// concatenating two strings
const result1 = text1.concat(' ', text2,"",text3);
// console.log(result1);

// converting the text to uppercase
const result2 = text1.toUpperCase();
// console.log(result2); // BCA

// removing whitespace from the string
const result3 = text2.trim();
// console.log(result3); 

// converting the string to an array
const result4 = text3.split();
// console.log(result4); 

// slicing the string
const result5= text3.slice(0,5);
// console.log(result5); 
const result6= text3.slice(-8,5);
// console.log(result6); 
const newString = text3.substring(-10, 3)
// console.log(newString);

// console.log(text3.indexOf('S'));

const url = "https://spt.com.np"

// console.log(url.replace('com', 'org'))
//replace('replace','with'), not the orgincal assigned

// console.log(url.includes('com'))
//.includes('string to check') returns boolean form

let sp='Surendra-Prasad'
// console.log(sp.split('-'));
//split into separate words

let spt="BCA"
console.log(spt.anchor("Bachelor in Computer Application"));
/*
=> JavaScript is a dynamically typed (also called loosely typed) scripting language.
=> The latest ECMAScript standard defines eight data types Out of which seven data types are Primitive(predefined) and one complex or Non-Primitive.
*/

"use strict" //treat all JS as newer version
//alert() // => we are using nodejs that doesn't support, works only on browser or old version

/* lets talk abt readability/ future proved, apps developer avoid ";"
better to write separate line and auto wrap of line. we can use 'Prettier code formatter"
get help from MDN and ECMA.org.
*/

let age=25 //number
let weight=62.5  //number
let name="Surendra"  //string -> we can use single / double quotes
let isTrue= true //boolean => true/false
let provience=null //=>empty / standalone value
let country;    //undefined => not assigned
let brand("sptcode") //symbol=> mostly used in react/ identify or denote uniquely.
// object => the most important: array, set , null etc.

//typeof function:
console.log(typeof age);
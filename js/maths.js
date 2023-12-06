/*JavaScript Numbers are Always 64-bit Floating Point:
Integer Precision: (numbers without a period or exponent notation) are accurate up to 15 digits.
Floating point arithmetic is not always 100% accurate.
*/
const num = 9999999999999999
// console.log(num);
// console.log(typeof num);
// let num1=Number(num)
// console.log(typeof num1);
// let n1=0.001*0.3
// console.log(n1);
/* ==== JavaScript Numbers as Object ====
** The JavaScript number object enables you to represent a numeric value. It may be integer or floating-point. JavaScript number object follows IEEE standard to represent the floating-point numbers.
** Syntax: let n=new Number(value); */
const num2 = new Number(7894556)
// console.log(num2);
// console.log(typeof num2);

/* JavaScript Number Methods */
// console.log(toString(num2));
// console.log(typeof num2);
//It returns the given number in the form of string.
// console.log(num2.toString().length);
// console.log(isFinite(num2));
let n=456
// console.log(isFinite(n));
// console.log(parseFloat(n));

let num3=4.1201
// console.log(num3.toFixed(0));
// console.log(Math.round(num3));
// console.log(Math.ceil(num3));
// console.log(Math.floor(num3));

/* It returns the string that represents a number with exact digits after a decimal point */

const NS = 1000000
// console.log(NS.toLocaleString());
// console.log(NS.toLocaleString('en-IN'));
//return number system as local
// console.log(Number);

// +++++ Maths +++++

// console.log(Math);
// console.log(Math.abs(-45)); 
//return values positive if negative
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
//returns upper value
// console.log(Math.floor(4.9));
//returns lower value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
// console.log(Math.random()*(max-min));
// console.log(Math.random()*(max-min+1));
// console.log(Math.floor(Math.random()*(max-min+1)));
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


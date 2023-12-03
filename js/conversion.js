//example
// let marks=85
//first you need to check datatype
// console.log(typeof(marks))
// marks="85"
// console.log(typeof(marks))
// let marksInNum=Number(marks);
// comsole.log(typeof marksInNum)
// console.log(marksInNum)   
// if the value comes with alphanuemeric
// let num="45ab"
// let numInNumber=Number(marks);
// comsole.log(typeof numInNumber)
// console.log(numInNumber)  //output is NaN

//if we assign num=null we get output 0.
//if we assign num=undefine we get output NaN.
//if we assign num=true we get output 1.
//if we assign num="" we get output false.
//if we assign num="something" we get output true.

// let a=null
// console.log(a)
// console.log(typeof a)


//boolean conversion
// let a=1;
// let bln=Boolean(a)
// console.log(bln)
// console.log(typeof bln)

// let a= " ";
// let bln=Boolean(a)
// console.log(bln)
// console.log(typeof bln)

// let a="SPT";
// let bln=Boolean(a)
// console.log(bln)
// console.log(typeof bln)

//1=> true; 0=> false
// " " => false; "SPT"=> true

//********  OPERATORS **********operators******** */

// let value=10
// let negativeVal=-value

/* 
 let add=5+5
 let dif=5-5
 console.log(5*5)
 console.log(2**3)  // for power
 let divide=5/2
 let remainder= 5 % 2
 */
// Concatenation: string+strings
let str1 = "I love "
let str2 = " Programming"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let preConter = 100
pstConter++;
console.log(preConter);
let see=++preConter;
console.log(see);
let pstConter = 100
pstConter++;
console.log(pstConter);
let check=pstConter++;
console.log(check);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
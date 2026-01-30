console.log("    Hello Developers.    ")//0 based indexing

let str="   Hello Developers cat dog     "

console.log(str.length)//length

console.log(str.charAt(9))//character

console.log(str.charCodeAt(9))//ASCII code

//Substring

console.log(str.substring(9));//All the characters after index 10

//start<end
console.log(str.substring(9,11));// from character startIdx to endIdx (exc.)...9,10

//start>end
console.log(str.substring(11,9));// the indices would be swaped before applying the substring function

//-ve
console.log(str.substring(-100));// prints 0 to end of the string .. (-ve numbers -> 0)

//Slice function
let str1 = str.slice(10)//All the chars after index 10
console.log(str1);

//start<end

let sl1 = str.slice(10,12)
console.log(sl1);

//start>end

let sl2 = str.slice(14,10)
console.log(sl2);

//-ve index

let sl3 = str.slice(-10)//cuts from the end of the string.(Returns 10 characters from the end of the string)
console.log(sl3);

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.includes("Dog"));
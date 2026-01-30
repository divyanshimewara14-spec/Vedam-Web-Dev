let searchQuery = " Learn JavaScript Functions Arrow IIFE ";
//1 Trim the input string and print the cleaned value and its length
let q1 = searchQuery.trim();
console.log(q1)
console.log(q1.length)
//2 Convert the cleaned string to lowercase and uppercase
let lower = searchQuery.toLowerCase();
console.log(lower);
console.log(q1.toUpperCase());
//3 Extract the word 'JavaScript' using substring() and slice()

let q3 = q1.substring(6,16);
console.log(q3)
let q32 = q1.slice(6,16);
console.log(q32)

//4 Check whether the query contains: functions, arrow, and iife
console.log(lower.includes("functions"));
console.log(lower.includes("arrow"));
console.log(lower.includes("iife"));

//5 Print the character at index 6 and the ASCII value of the first character
console.log(searchQuery.charAt(6));
console.log(searchQuery.charCodeAt(6));

//6 Perform a case-insensitive check for the word 'javascript'

console.log(lower.includes("javascript"))


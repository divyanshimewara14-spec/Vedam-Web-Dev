let arr = [1,2,3,4,5,6,7];

//let arr2 = new Array(10,20,30);
//console.log(arr2)

//To get a part of the Array
console.log(arr);
let subArr = arr.slice(2,6)//returns a sliced array
console.log(arr)
console.log(subArr);

//Splice

//remove elements
//arr.splice(2,3);//(startIndex, no. of elements to remove)
console.log("spliced arr",arr);

//Remove and add elements splice(startIdx,noofElem,elem1,elem2,elem3,...,elemN)

//1,2,3,4,5,6,7:
arr.splice(2,0,10,20,30,40);//1,2,10,20,30,40,5,6,7

console.log(arr);

//Can be used to add elements in the midst of the array
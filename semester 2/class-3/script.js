//Function declaration

//function greet(){
//    console.log("parameter:",a);
//}
//greet();

// 1) Using arguements

function greet(a){
    console.log("parameter:",arguments);
}
greet(1,2,3,4,"ABC",true,11);

function noOfArg(){
    console.log(arguments.length);
}
noOfArg();

// 2) Using rest operator

function findArg(a,b,...arg){
    //Print all arguments
    console.log(a,b,arg)
}

findArg(1,2,5,6,7,8,"apple")

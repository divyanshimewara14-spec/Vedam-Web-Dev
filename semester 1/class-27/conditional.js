let weather = "rainy";
if(weather==="rainy"){
    console.log("take an umbrella");
}
else{
    console.log("enjoy the sunshine🌞");
}
/*let day= "Friday"; 

        switch(day){
            case "Monday":
                console.log("Start strong L");
                break;
            case "Tuesday":
                console.log("Keep going ");
                break;
            case "Friday":
                console.log("Weekend loading break;");
                break;
            default:
                console.log("Enjoy the day");
        }*/

/*let marks = prompt("pls enter marks");
marks = Number(marks);
if(!(marks>=0 && marks<=100)){
    console.log("Theek marks batao");
}
else{
if(marks>=90){
    console.log("A");
}
else if(marks>=80){
    console.log("B");
}
else if(marks>=70){
    console.log("C");
}
else if(marks>=60){
    console.log("D");
}
else{
    console.log("F");
}
}*/

/*let ishungry = true;
let action = ishungry? "Eat food" : "work work work";
console.log(action);*/

let day = "thursday";

switch(day){
    case "Monday":
        console.log("start fresh");
        break;

    case "Tuesday":
        console.log("keep going");
        break;

    case "Friday":
        console.log("enjoy the weekend");
        break;

    default:
        console.log("just another day");
}
/*
//grading with switch
let marks = prompt("pls enter your marks");
marks = Number(marks);
let grade;

//switch

switch(true){
    case marks>=90:
        grade="A";
        break;
    case marks>=80:
        grade="B";
        break;
    case marks>=70:
        grade="C";
        break;
    case marks>=60:
        grade="D";
        break;
    default:
        grade="F";
}
console.log(grade);
*/

/*for(let i=1;i<=5;i++){
    console.log("hello",i);
}*/

/*let i =0;
while(i<=3){
    console.log(i);
    i++;
}
console.log("done");*/

/*let rows=5;
for(let i=rows;i>=1;i--){
    let str =""
    for(let j=1;j<=rows;j++){
        str+=j;
    }
    console.log(str);
}*/
/*let rows =4;

for(let i =1;i<=rows;i++){
    let str = "";

    //spaces
    for(let space=1;space<=rows-i;space++){
        str += " ";
    }

    //stars
    for(let star=1;star<= 2*i-1;star++)
{
    str += "*";
}
 console.log(str);
}*/
/*let rows =4;
for(let i =1;i<=rows;i++){
    let str="";

    //space
    for(let space=1;space<=rows-i;space++){
        str+=" ";
    }
    
    //star
    for(let star=1;star<=2*i-1;star++){
        str+="*";
    }

    console.log(str);
}*/
greet()

    function greet(){
        console.log("hello");
    }

console.log(i);

var i =7;
console.log(i);

let user = {
    name:"Mitali",age:21
};
for(let key in user){
    console.log(key,user[key])
}
        
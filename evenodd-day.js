// Input as string 
let x="12";

// Convert a number
let num=Number(x);


// Even or odd function 
let Num=num%2==0 ? "Even" : "Odd" ;
console.log(Num);


// input as string
let y = "4";
 
// convert to number
let day=Number(y);

// uses switch case
switch(true){
    case(1<=day && 5>=day):
      date="It's a weekday";
      break;
    case(6<=day && 7>=day):
     date="It's the weekend";
     break;
    default:
        date="Invalid day";
}
// print 
console.log(date);

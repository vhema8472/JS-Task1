
//  Step-1 : input as string
let a = "85";


 // Step-2 : type conversion 
let mark1 = Number(a);


// Uses  switch statements :
let grade ;
switch(true){
    case(mark1>=90 && mark1<=100):
        grade='A';
        break;
    case(75<=mark1 && 89>=mark1):
        grade='B';
        break;

    case(50<=mark1 && 74>=mark1):
        grade='C';
        break;

    case(50>mark1):
        grade="Fail";
        break;

    default:
        grade="Invalid mark";
}


// Prints the grade 
console.log(grade);   

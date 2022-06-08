//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
console.log("Enter array index to display number in words");
let ch = 100;

switch (ch){
    case 1:
        console.log("Single Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    default :
        console.log("Wrong input");                                                                               
}
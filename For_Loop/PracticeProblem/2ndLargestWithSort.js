/*
 * Problem Statement=>  
        2. Extend the above program 1 to sort the array and then find the 2nd largest and the 2nd smallest element.
*/

let numberArray = new Array();
// generating 10 random no and storing it into array 
for (let i = 0; i<10; i++) {
    let number=Math.floor(Math.random() * 1000)
    numberArray.push(number);
}
console.log("Array: "+numberArray);

// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
let largest=smallest  = numberArray[0];
let secondLargest=secondSmallest=numberArray[0]

//finding the largest  element in an array
for (let i=1; i<numberArray.length; i++){
    if (numberArray[i]>largest){
        largest = numberArray[i];
    }
}
//finding the second largest  element in an array
for (let i=1; i<numberArray.length; i++){
    if (numberArray[i]>secondLargest && numberArray[i]<largest){
        secondLargest = numberArray[i];
    }
}
console.log("Second largest  element in an array"+secondLargest);

//finding smallest  element in an array
for (let i=1; i<numberArray.length; i++){
    if (numberArray[i]<smallest){
        smallest = numberArray[i];
    }
}
//finding the second smallest  element in an array
for (let i=1; i<numberArray.length; i++){
    if (numberArray[i]<secondSmallest && numberArray[i]>smallest){
        secondSmallest = numberArray[i];
    }
}
console.log("Second smallest element in an array=> "+secondSmallest);

//Using Sort function Sorting the array

numberArray.sort();
console.log("Sorted array : "+numberArray);
console.log("Second largest after sort : "+numberArray[numberArray.length-1]);
console.log("Second smallest after sort : "+numberArray[1]);
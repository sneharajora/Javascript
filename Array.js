const names =["sneha","neha","sakshi"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
 
//Assignment Array

const arr = [1,9,5,3,5,7];
let sum = 0;
function sumofArrays(arr){
    console.log(arr);
   for(let i =0;i<=arr.length-1;i++){
    sum += arr[i];
   }

   console.log(sum);
}
sumofArrays(arr);

// reverse an array
function reverseAnArray(arr){
    let reverseArray =[];
 for(let i = arr.length-1;i>=0;i--){
      reverseArray.push(arr[i]);
 }
 console.log(reverseArray);
}
reverseAnArray(arr);

//find largest array
function largestNumber(arr){
        let largest = arr[0];
     for(let i=0;i<=arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
     }
     console.log(largest);
}
console.log(largestNumber(arr));

//find smallest array
function smallestinArray(arr){
  let smallest = arr[0];
  for(let i =0 ;i<=arr.length;i++){
    if(arr[i]<smallest){
        smallest = arr[i];
    }
  }
  console.log(smallest);
}
smallestinArray(arr);


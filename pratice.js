// find the missing number
const arr = [1,2,4,5];
const n= arr.length+1;
const nsum = (n*(n+1))/2;
 let sum = 0;
 for(let i = 0 ;i<=arr.length-1;i++){
    sum += sum + arr[i];
 }
 console.log(nsum-sum);
 
 //find longest Subarray with sum k

 
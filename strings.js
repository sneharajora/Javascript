// Reverse a nameing
   let name = "lol"
function reverse(name){
        let reversedname = '';
       for(let i= name.length-1;i>=0;i--){
            reversedname += name.charAt(i);                              
      }
      console.log(reversedname);
      
// Palindrome check 
   if(reversedname===name){
    console.log("Palindrome");  
   }
   else{
    console.log("Not Palindrome");
   }

}
reverse(name);


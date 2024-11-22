function processData(){
    const hoursWorked = document.getElementById("userInput").value;
    if(isNaN(hoursWorked)|| hoursWorked===""){
       alert("please Enter the valid input");
       return;
    }
    // Convert input to number
    const numHours = parseFloat(hoursWorked);
    // Data type of number
    let out ='';
     
     out+= `Input is a ${typeof numHours} type. <br>`; 

    if(numHours>40){
           out+= "You have worked overtime! <br>";
           document.body.style.background = "green";
    } 
    else if(numHours<40){
          out+= "You are on regular hours <br>";
          document.body.style.backgroundColor = "blue";
    }
     else {
        out += "Perfect work hours! <br>";
        document.body.style.backgroundColor = "yellow";
     }

     document.getElementById("output").innerHTML =out;

    //// String exapmle
   const exampleString = "Frontend Developer";
     
     out += `The string ${exampleString} has ${exampleString.length} characters. <br>`;

      let vowels = "aeiouAEIOU";
      let vowelCount = 0;
      let consonantCount = 0;

      for(let i = 0 ;i<exampleString.length;i++){
        if(vowels.includes(exampleString[i])){
            vowelCount++;
        }
        else {
            consonantCount++;
        }
      }

      out+= `The string contains ${vowelCount} vowels and ${consonantCount} consonents, <br>`;
      
      // CREATE AND DISPLAY OBJECT
        const person = {
           name: "Sneha Rajora",
           age: 24,
           profession: "Frontend Developer"
        };
          out+= `Person Object: Name: ${person.name}, Age:${person.age}, Profession: ${person.profession} <br>`;
  
        // work with an array and sum the numbers
        
        document.getElementById("output").innerHTML =out;
}
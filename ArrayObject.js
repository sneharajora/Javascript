let people = [
    {name:'sneha',age:30},
    {name:'neha',age:20},
    {name:'chitra',age:40},
]

function findPersonByName(name){
     // Iterate through the array of people
     for(let person of people){
        if(person.name === name){
            return person;
        }
     }
     return null;
}
let person = findPersonByName("neha");
console.log(person); 


function filterByAge(minAge){
     for(let person of people){
        if(person.age >minAge){
            console.log(person.name);
        }
    }
}
 
filterByAge(32);

console.log(people.pop());
console.log(people);
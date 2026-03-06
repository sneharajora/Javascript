let students = [
  { name: "Sneha", marks: 85 },
  { name: "Raj", marks: 40 },
  { name: "Anita", marks: 72 },
  { name: "Karan", marks: 55 },
  { name: "Meena", marks: 30 },
  { name: "Amit", marks: 67 },
  { name: "Rohit", marks: 90 },
  { name: "Pooja", marks: 45 },
  { name: "Vikas", marks: 62 },
  { name: "Nisha", marks: 78 },
  { name: "Arjun", marks: 50 },
  { name: "Priya", marks: 95 },
  { name: "Deepak", marks: 38 },
  { name: "Komal", marks: 82 },
  { name: "Sahil", marks: 47 },
  { name: "Neha", marks: 88 },
  { name: "Manish", marks: 54 },
  { name: "Jyoti", marks: 66 },
  { name: "Ashok", marks: 73 },
  { name: "Simran", marks: 29 },
  { name: "Ravi", marks: 81 },
  { name: "Kavita", marks: 92 },
  { name: "Suresh", marks: 36 },
  { name: "Divya", marks: 64 },
  { name: "Ajay", marks: 57 },
  { name: "Preeti", marks: 79 },
  { name: "Sunil", marks: 43 },
  { name: "Anjali", marks: 68 },
  { name: "Vivek", marks: 60 },
  { name: "Shweta", marks: 33 },
  { name: "Mukesh", marks: 71 },
  { name: "Renu", marks: 52 },
  { name: "Lokesh", marks: 27 },
  { name: "Tina", marks: 85 }
]

let sortname = document.getElementById("sortname");
let sortscore = document.getElementById("sortscore");
let ten = document.getElementById("sort10");

function display(data){
   let container = document.getElementById("output");
    container.innerHTML = "";
     data.forEach(student =>{
            let li = document.createElement("li");
            li.textContent = student.name + "-" + student.marks;
             container.appendChild(li);
   });
}

document.getElementById("sortname").addEventListener("click",function(){
    let sorted = [...students].sort((a,b)=> a.name.localeCompare(b.name));
    display(sorted);
});

document.getElementById("sortscore").addEventListener("click",function(){
    let filtered = [...students].sort((a,b)=>a.marks - b.marks);
    display(filtered);
})
let value = 0 ;

let clickI = document.getElementById("increase");
let clickD = document.getElementById("decrease");
let reset = document.getElementById("reset");;
let count = document.getElementById("count")


clickI.addEventListener("click",function (){
  value++;
  count.textContent = value;
});

clickD.addEventListener("click",function (){
   value--;
   count.textContent =value;
});

reset.addEventListener("click",function(){
    value = 0;
    count.textContent = value;
});

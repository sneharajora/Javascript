
// function first(){
//       let baddie = "sneha";
      
//       function makechange(){
//         console.log(baddie);
//       }
//       return makechange;
// };

// const chu = first(); 

// for(let g=0;g<=3;g++){
//     console.log(chu());
    
// }

function counter(){
   let count = 1;

    function incre(){
     console.log(count+1);
    }
    return incre;
}

const inc = counter();
inc();
inc();
inc();


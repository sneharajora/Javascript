  

   const generateColor =()=>{
        let letters =  "0123456789ABCDEF";
         let color = "#";

        for(let i =0;i<6;i++){
             color += letters[(Math.floor(Math.random()*16))];
        }
        console.log(color);
        return color;
    }
    
    const colorchange =()=>{
         let preview = document.getElementById('changingbutton');
         let color = generateColor();

        preview.style.background = color;
    }
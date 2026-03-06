function main(){
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async(response)=>{
        const json = response.json();
        console.log(json.todos.length);
        //await response.text();
    });
}

async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const json = await response.jsonI();
    console.log(json.todos.length);
}

main();


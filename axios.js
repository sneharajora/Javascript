const axios = require('axios');

async function main(){
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(response.formData.todos.lenght);
}
main();
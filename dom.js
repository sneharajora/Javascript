const username = "";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === ""?'Guest': username;

console.dir(document);

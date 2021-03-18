//VARIABLES

let ageParagraph = document.getElementById("age");
let userName = document.getElementById("userName");
const form = document.querySelector('form');
const todo = document.getElementById("todo");

//EVENT LISTENERS

form.addEventListener('submit', (e) => {
    e.preventDefault();
    grabActivity();
    grabAge();
})

function grabActivity(){
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data)
    fetch(`https://www.boredapi.com/api/activity?type=${data.type}`)
    .then((response) => response.json())
    .then((json) => writeText(todo, json.activity))
}

function grabAge(){
  let inputValue = document.getElementById("fname").value
  userName.innerHTML = inputValue
  fetch("https://api.agify.io?name="+inputValue)
  .then((response) => response.json())
    .then((response)=> writeText(ageParagraph, response.age))
}

function writeText(element, text) {
    element.innerHTML = text;
}



/*fetch('https://randomuser.me/api/')
.then((response) => response.json())
.then((response) => console.log(response))*/  

/*fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then((response) => response.json())
.then((response) => console.log(response))

fetch('https://api.imgflip.com/get_memes')
.then((response) => response.json())
.then((response) => console.log(response))*/



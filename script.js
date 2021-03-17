//VARIABLES

const form = document.querySelector('form');

//const button = form.querySelector('button');

const activity = document.getElementById("todo");

//EVENT LISTENERS

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    fetch(`https://www.boredapi.com/api/activity?type=${data.type}`)
    .then((response) => response.json())
    .then((json) => writeText(activity, json.activity))
})

function writeText(element, text) {
    element.innerHTML = text;
}














/*fetch('https://randomuser.me/api/')
.then((response) => response.json())
.then((response) => console.log(response))*/

fetch('https://api.agify.io?name=tropical')
.then((response) => response.json())
.then((response) => console.log(response))

/*fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then((response) => response.json())
.then((response) => console.log(response))

fetch('https://api.imgflip.com/get_memes')
.then((response) => response.json())
.then((response) => console.log(response))*/



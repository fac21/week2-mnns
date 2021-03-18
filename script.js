//VARIABLES

let ageParagraph = document.getElementById("age");
let userName = document.getElementById("userName");
const form = document.querySelector('form');
const todo = document.getElementById("todo");

//EVENT LISTENERS

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    fetch(`https://www.boredapi.com/api/activity?type=${data.type}`)
    .then((response) => response.json())
    .then((json) => writeText(todo, json.activity))
    grabAge()
})

function writeText(element, text) {
    element.innerHTML = text;
}

function grabActivity(){
  
}

function grabAge(){
  let inputValue = document.getElementById("fname").value
  userName.innerHTML = inputValue
  fetch("https://api.agify.io?name="+inputValue)
  .then((response) => response.json())
   /*.then((response) => console.log(response))*/
  .then((response)=> {
      let result= response.age
      ageParagraph.innerHTML = result
  })
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



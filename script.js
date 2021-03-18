//VARIABLES

const form = document.querySelector('form');
const favBand = document.getElementById("favBand");
const usersName = document.getElementById("usersName")

const matchPhoto = document.getElementById("matchPhoto");
const matchName = document.getElementById("matchName");
const matchAge = document.getElementById("matchAge");
const matchHobby = document.getElementById("matchHobby");
const matchArtist = document.getElementById("matchArtist");
const matchSong = document.getElementById("matchSong");

let data = {};
let formData = {};


//EVENT LISTENER

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formData = new FormData(form);
    data = Object.fromEntries(formData);
    updateResponse();
    grabPerson();
    grabActivity();
    grabSong();
})


// FUNCTIONS

function updateResponse() {
    usersName.innerText = `Hi ${formName.value}, your perfect match is....`;
}

function writeText(element, text) {
    element.innerHTML = text;
}

function grabActivity(){
    fetch(`https://www.boredapi.com/api/activity?type=${data.type}`)
    .then((response) => response.json())
    .then((json) => writeText(matchHobby, json.activity))
}

function grabPerson() {
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((json) => json.results[0])
    .then((results) => {
        writeText(matchName, results.name.first);
        writeText(matchAge, results.dob.age);
        matchPhoto.src = results.picture.large;
    })
}

function grabSong(){
    //let bandSearch = favBand.innerText.split('').joint('+');
    console.log(favBand);
    fetch(`https://itunes.apple.com/search?term=${favBand.value}&limit=5`)
    .then((response) => response.json())
    .then((json) => json.results[0])
    .then((results) => {
        console.log(results);
        writeText(matchArtist, results.artistName);
        writeText(matchSong, results.trackName);
    })
}

/*fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then((response) => response.json())
.then((response) => console.log(response))

fetch('https://api.imgflip.com/get_memes')
.then((response) => response.json())
.then((response) => console.log(response))*/



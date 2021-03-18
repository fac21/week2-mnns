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
const matchJoke = document.getElementById("matchJoke");
const matchCocktail = document.getElementById("matchCocktail");
const errorMessage = "Sorry, database not loading";

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
    grabJoke();
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
    .then((response) => {
        if (!response.ok){
           throw new Error(response.status);
         } else {
           return response.json();
         }})
    .then((json) => writeText(matchHobby, json.activity))
    .catch(() => writeText(matchHobby, errorMessage));
}

function grabPerson() {
    fetch('https://randomuser.me/api/')
    .then((response) => {
        if (!response.ok){
           throw new Error(response.status);
         } else {
           return response.json();
         }})
    //.then((response) => response.json())
    .then((json) => json.results[0])
    .then((results) => {
        writeText(matchName, results.name.first);
        writeText(matchAge, results.dob.age);
        matchPhoto.src = results.picture.large;
    })
    .catch(() => {
        writeText(matchName, errorMessage);
        writeText(matchAge, errorMessage);
    });
}

function grabSong(){
    //let bandSearch = favBand.innerText.split('').joint('+');
    fetch(`https://itunes.apple.com/search?term=${favBand.value}&limit=5`)
    .then((response) => {
        if (!response.ok){
           throw new Error(response.status);
         } else {
           return response.json();
         }})
    //.then((response) => response.json())
    .then((json) => json.results[0])
    .then((results) => {
        writeText(matchArtist, results.artistName);
        writeText(matchSong, results.trackName);
    })
    .catch(() => writeText(matchArtist, errorMessage));
}

function grabJoke(){
    fetch(`https://v2.jokeapi.dev/joke/Any`)
    .then((response) => {
        if (!response.ok){
           throw new Error(response.status);
         } else {
           return response.json();
         }})
    //.then((response) => response.json())
    .then((json) => {
        console.log(json);
        if(json.flags.racist === true || json.flags.sexist){
            writeText(matchJoke, `This joke has been deemed inappropriate by this site`);
        }
        else if(json.joke) {
            writeText(matchJoke, json.joke);
        }
        else{
            const concat = `${json.setup} ${json.delivery}`;
            writeText(matchJoke, concat);
        }
    })
    .catch(() => writeText(matchHobby, errorMessage));
    
}



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
    grabPerson(data)
    grabActivity(data);
    grabSong(data);
    grabJoke(data);
})


// FUNCTIONS

function updateResponse() {
    usersName.innerText = `Hi ${formName.value}, your perfect match is....`;
}

function writeText(element, text) {
    element.innerHTML = text;
}

function grabActivity(data){
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

function grabPerson(data) {
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

function grabSong(data){
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

function grabJoke(data){
    fetch(`https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes`)
    .then((response) => {
        if (!response.ok){
           throw new Error(response.status);
         } else {
           return response.json();
         }})
    .then((json) => {
        const concat = `${json.setup} ${json.punchline}`
        writeText(matchJoke, concat)    
    })
    .catch(() => writeText(matchHobby, errorMessage));
    
}



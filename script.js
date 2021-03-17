fetch("https://random.dog/woof.json")
.then((response) => response.json())
.then((response) => console.log(response))

fetch('https://randomuser.me/api/')
.then((response) => response.json())
.then((response) => console.log(response))

fetch('https://www.boredapi.com/api/activity')
.then((response) => response.json())
.then((response) => console.log(response))

fetch('https://api.agify.io?name=tropical')
.then((response) => response.json())
.then((response) => console.log(response))

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then((response) => response.json())
.then((response) => console.log(response))

fetch('https://api.imgflip.com/get_memes')
.then((response) => response.json())
.then((response) => console.log(response))



const submitButton = document.querySelector("button")
let ageParagraph = document.getElementById("age")
let userName= document.getElementById("userName")

/* fetch('https://www.boredapi.com/api/activity')
.then((response) => response.json())
.then((response) => console.log(response))*/

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

submitButton.addEventListener('click', grabAge)




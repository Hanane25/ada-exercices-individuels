
var name = prompt("Quelle est votre nom");

document.querySelector('h2').innerHTML = "👋 Bonjour " + name;

var year = prompt("Quelle est votre année de naissance");

var age = 2022 - year;

console.log(age)
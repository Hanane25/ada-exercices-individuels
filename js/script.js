
function askName() {

    var name = prompt("Quelle est votre nom ?");
    var bonjour = "👋 Bonjour ";

    document.querySelector('h2').innerHTML = bonjour + name;

}


function askBirthYear() {

    var year = prompt("Quelle est votre année de naissance ?");
    var month = prompt("Quelle est votre mois de naissance ?");

    /*function calculAge() {
        var age = 2022 - year;
        return age;
    }*/

    var age = (2022 - year);
    var birthMonth = (10 - month)

    document.querySelector('h3').innerHTML += age + ' ans et ' + birthMonth + ' mois';

    console.log(age);

}

askName();
askBirthYear();



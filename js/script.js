
function askName() {

    var name = prompt("Quelle est votre nom ?");
    var bonjour = "👋 Bonjour ";

    document.querySelector('h2').innerHTML = bonjour + name;
    //document.body.innerHTML = bonjour + name;
}


function askBirthYear() {

    let year = prompt("Quelle est votre année de naissance ?");
    var month = prompt("Quelle est votre mois de naissance ?");

    /*function calculAge() {
        var age = 2022 - year;
        return age;
    }*/

    if (month < 10) {
        let age = (2022 - year);
        let birthMonth = (10 - month)

        document.querySelector('h3').innerHTML += age + ' ans et ' + birthMonth + ' mois';

        console.log(age);

    } else if (month > 10) {

        year++;
        console.log(year);
        let age = (2022 - year);
        let birthMonth = (month - 10)
        console.log(birthMonth);

        console.log(age);

        document.querySelector('h3').innerHTML += age + ' ans et ' + birthMonth + ' mois';

    } else {
        let age = (2022 - year);
        document.querySelector('h3').innerHTML += age + ' ans'
    }
}

askName();
askBirthYear();



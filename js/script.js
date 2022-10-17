
function askName() {

    var name = prompt("Quelle est votre nom ?");
    var bonjour = "👋 Bonjour ";

    return bonjour + name;
}


function askBirthYear() {

    let year = prompt("Quelle est votre année de naissance ?");
    var month = prompt("Quelle est votre mois de naissance ?");

    let today = new Date();
    console.log(today);

    if (month < today.getMonth()) {
        let age = today.getFullYear() - year;
        let birthMonth = today.getMonth() + 1 - month;

        console.log(age);
        console.log(birthMonth);

        return age + ' ans et ' + birthMonth + ' mois';

    } else if (month > today.getMonth()) {

        year++;
        console.log(year);

        let age = (today.getFullYear() - year);
        let birthMonth = (month - (today.getMonth() + 1))

        console.log(birthMonth);
        console.log(age);

        return age + ' ans et ' + birthMonth + ' mois';

    } else {
        let age = (today.getFullYear() - year);
        document.querySelector('h3').innerHTML += age + ' ans'
    }
}


document.querySelector('h2').innerHTML = askName();
document.querySelector('h3').innerHTML += askBirthYear();



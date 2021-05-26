//variables pour comptage de sortie
let items = [];
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let win1 = 0;
let win2 = 0;
let Pourcentwin;
let Pourcentwin2;


//bouton joué  reset historique
function roll() {

// request d1 et d2 separé pour appel API
    let d1 = new XMLHttpRequest();
    d1.response = "";
    d1.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("dice1").innerHTML = d1.responseText;
        }
    };
    d1.open("GET", "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new", false);
    d1.send()

    let d2 = new XMLHttpRequest();
    d2.response = "";
    d2.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("dice1").innerHTML = d1.responseText;

        }
    };
    d2.open("GET", "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new", false);
    d2.send()

// recupération de la valeur sous forme de variable
    let Rollone = document.getElementById("dice1").innerHTML = d1.responseText;
    let Rolltwo = document.getElementById("dice1").innerHTML = d2.responseText;
    let dice1 = document.getElementById("dice1").src = "images/dice" + Rollone + ".png";
    let dice2 = document.getElementById("dice2").src = "images/dice" + Rolltwo + ".png";
    let numberOne = parseInt(Rollone);
    let numberTwo = parseInt(Rolltwo);

//affichage victoire + calcul pourcentage + ajout dans la liste de sortie

    if (numberOne > numberTwo) {
        document.getElementById("affiche").innerHTML = "Joueur 1 gagne";
        win1++;
        items.push(numberOne);
        items.push(numberTwo);
        Pourcentwin = win1 / (win1 + win2) * 100;
        Pourcentwin2 = (win2 / (win1 + win2)) * 100;

    }

    if (numberOne < numberTwo) {
        document.getElementById("affiche").innerHTML = "Joueur 2 gagne";
        win2++;
        items.push(numberOne);
        items.push(numberTwo);
        Pourcentwin = win1 / (win1 + win2) * 100;
        Pourcentwin2 = (win2 / (win1 + win2)) * 100;
    }

    if (numberOne === numberTwo) {
        document.getElementById("affiche").innerHTML = "égalité";
        items.push(numberOne);
        items.push(numberTwo);

    }

    check();

//nombre de face sortie
    function check() {
        for (let i = 0; i < items.length; i++) {
            if (items[i] === 1) {
                count1 = items.filter(x => x === 1).length;

            }
            if (items[i] === 2) {
                count2 = items.filter(x => x === 2).length;

            }
            if (items[i] === 3) {
                count3 = items.filter(x => x === 3).length;

            }
            if (items[i] === 4) {
                count4 = items.filter(x => x === 4).length;

            }
            if (items[i] === 5) {
                count5 = items.filter(x => x === 5).length;

            }
            if (items[i] === 6) {
                count6 = items.filter(x => x === 6).length;

            }
        }

    }

//save local Storage
    localStorage.setItem("count1", count1);
    localStorage.setItem("count2", count2);
    localStorage.setItem("count3", count3);
    localStorage.setItem("count4", count4);
    localStorage.setItem("count5", count5);
    localStorage.setItem("count6", count6);
    localStorage.setItem("win1", win1);
    localStorage.setItem("win2", win2);
    localStorage.setItem("Pourcentwin", Pourcentwin);
    localStorage.setItem("Pourcentwin2", Pourcentwin2);
//rendu hmtl
    document.getElementById("nb1").innerHTML = "nombre de 1: " + localStorage.getItem("count1");
    document.getElementById("nb2").innerHTML = "nombre de 2: " + localStorage.getItem("count2");
    document.getElementById("nb3").innerHTML = "nombre de 3: " + localStorage.getItem("count3");
    document.getElementById("nb4").innerHTML = "nombre de 4: " + localStorage.getItem("count4");
    document.getElementById("nb5").innerHTML = "nombre de 5: " + localStorage.getItem("count5");
    document.getElementById("nb6").innerHTML = "nombre de 6: " + localStorage.getItem("count6");
    document.getElementById("win1").innerHTML = "joueur 1 à gagner " + localStorage.getItem("win1") + " fois soit: " + localStorage.getItem("Pourcentwin") + "%";
    document.getElementById("win2").innerHTML = "joueur 2 à gagner " + localStorage.getItem("win2") + " fois soit: " + localStorage.getItem("Pourcentwin2") + "%";

}

//charger Historique
function load() {

    document.getElementById("nb1").innerHTML = "nombre de 1: " + localStorage.getItem("count1");
    document.getElementById("nb2").innerHTML = "nombre de 2: " + localStorage.getItem("count2");
    document.getElementById("nb3").innerHTML = "nombre de 3: " + localStorage.getItem("count3");
    document.getElementById("nb4").innerHTML = "nombre de 4: " + localStorage.getItem("count4");
    document.getElementById("nb5").innerHTML = "nombre de 5: " + localStorage.getItem("count5");
    document.getElementById("nb6").innerHTML = "nombre de 6: " + localStorage.getItem("count6");
    document.getElementById("win1").innerHTML = "joueur 1 à gagner " + localStorage.getItem("win1") + " fois soit: " + localStorage.getItem("Pourcentwin") + "%";
    document.getElementById("win2").innerHTML = "joueur 2 à gagner " + localStorage.getItem("win2") + " fois soit: " + localStorage.getItem("Pourcentwin2") + "%";
}
















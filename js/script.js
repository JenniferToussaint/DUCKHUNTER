// Pour bouger le canard

var ecran_canard = document.querySelector('.ecran_canard');
var movingCanard = document.querySelector('.canard');
var speed = 70;
movingCanard.style.top = '0px';
movingCanard.style.left = '0px';

// Faire une écoute sur les touches qui sont pressées
document.addEventListener('keydown', (event) => {
    var top = parseInt(movingCanard.style.top);
    var left = parseInt(movingCanard.style.left);

// On fait un switch pour regarder quelle touche est appuyée
    switch (event.key) {
        case 'ArrowRight':
            if (left <1250) {   
        
                left += speed; 
            } 
            break;
        case 'ArrowLeft':
            if(left>0) {       
                left -= speed; 
            }
            break;
        case 'ArrowDown':
            if(top<495) { 
                top += speed; 
            }
            break;
        case 'ArrowUp':
            if(top> 0 ) {    
                top -= speed;
            }
            break;

        default: console.log('Touche non acceptée');
            break;
    }

      movingCanard.style.left = left + 'px';
      movingCanard.style.top = top + 'px';

});

// Variable pour se relier au DOM
var canard = document.querySelector('.canard');
var spanHunt = document.querySelector('#hunt');
var spanDuck = document.querySelector('#duck');
var spanTime = document.querySelector('#time');
var spanGagnant = document.querySelector('#gagnant');

// Initialisation des variables
var scoreDuck = 0;
var scoreHunt=0;
var temps = 0;
var gagnant = " ";


//Variable par rapport au temps

var interval1S = setInterval(ajoutTemps, 1000); // Fait défiler le chrono
var interval10S = setInterval(ajoutPointDuck, 10000); // Toute les 10sec le canard gagne 1 point
var timeOut = setTimeout(gameOver, 120000); // Au bout de 120sec le temps s'arrete, et le click du chasseur est retiré

// Ajout d'une "écoute" lorsque que l'on clique sur le gif du canard
canard.addEventListener('click', ajoutPointHunt);

//Fonction pour ajouter 1 point a chaque fois au chasseur et écrire le score dans la balise span
function ajoutPointHunt(){
    scoreHunt++;
    spanHunt.innerText = scoreHunt;
}

// Fonction pour ajouter 1 point a chaque fois au canard et  écrire le score dans la balise span
function ajoutPointDuck(){
    scoreDuck++;
    spanDuck.innerText = scoreDuck;
   
}
// Fonction pour ajouter 1 seconde et écrire le timer dans la balise span
function ajoutTemps() {
    temps++;
    spanTime.innerText = temps;
    
}
// Fonction pour arreter les intervalles et arreter "l'écoute" lors du clique sur le canard
function gameOver() {
    clearInterval(interval10S);
    clearInterval(interval1S);
    canard.removeEventListener('click', ajoutPointHunt);
    afficherGagnant ();
    remettreCompteurAZero();
    refreshPage ();
}

// Fonction pour afficher le gagnant 

function afficherGagnant() {
    

    if (scoreDuck > scoreHunt) {

    gagnant = "Le canard est gagnant !";
    } 
    else if (scoreDuck < scoreHunt) {

    gagnant = "Le chasseur est gagnant !";
    } 
    else {

    gagnant = "EGALITE !";
    } 
    alert(gagnant);
}
// Une fois la partie fini les compteur se remettent a zéro et je les reaffiche
function remettreCompteurAZero() {
     scoreDuck = 0;
     scoreHunt=0;
     temps = 0;
     gagnant = " ";
    
     spanHunt.innerText = scoreHunt;
     spanDuck.innerText = scoreDuck;
     spanTime.innerText = temps;

}
//Fonction qui refresh automatiquement la page
function refreshPage() {
    location.assign(location.href);
}
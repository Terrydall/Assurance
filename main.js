// Je détermine le nom de mes variables
let age = Number(window.prompt("age"));
let duree = Number(window.prompt("duree"));
let alesi = Number(window.prompt("accident"));
let fido = Number(window.prompt("fidelite"));
// J'appelle ma fonction assurance 
assurAnce(age, duree, alesi, fido);

// Je créer la fonction âge
function verifAge(age, p) {
    if (age < 25) { // si agé de moins de 25 ans 
        p = p + 1;
        return p;
    } else if (age > 60) { // si agé de plus de 60 ans
        p = vieuxChameau(age, p);
        return p;
    }
    else {
        return p;
    }
}
// je créer la fonction durée
function verifDuree(duree, p) {
    if (duree < 2) { // si le permis est inférieur à 2 ans
        p = p + 1;
        return p;
    } else {
        return p;
    }
}
// Je créer la fonction Accident
function verifAccident(alesi, p) {
    p = p + alesi; 
    return p;
}
// Je créer la fonction Fidelite
function verifFidelite(fido, p) {
    if (p < 3 || fido > 1) { // si les points sont inférieurs à 3 ou la fidelite est supérieur à 1 an
        p = p - 1;
        return p;
    } else {
        return p;
    }
}
// Je créer la fonction calculTarif
function calculTarif(p) { 
    if (p === -1) {
        tabMess(p); // affiche le message associé à la condition
    }
    else if (p === 0) {
        tabMess(p);// affiche le message associé à la condition
    }
    else if (p === 1) {
        tabMess(p);// affiche le message associé à la condition
    }
    else if (p === 2) {
        tabMess(p);// affiche le message associé à la condition
    }
    else {
        tabMess(p);// affiche le message associé à la condition
    }

}
// Je créer la foncton vieuxChameau
function vieuxChameau(age, p) {
    if (age > 60 && age < 70) { // si l'âge est compris entre 60 et 70 ans
        p = p + 1;
        tabAdvert(p);// affiche le message associé à la condition
        return p;
    } else if (age > 70 && age < 80) { // si l'âge est compris entre 70 et 80 ans
        p = p + 2;
        tabAdvert(p);// affiche le message associé à la condition
        return p;
    } else {
        p = p + 3;
        tabAdvert(p);// affiche le message associé à la condition
        return p;
    }

}
// Je créer la fonction que j'ai appelé plus haut assurAnce avec toutes les fonctions associées
function assurAnce(age, duree, alesi, fido) {
    let p = 0;
    p = verifAge(age, p);// Permet de générer le calcul de point en fonction de l'âge
    p = verifDuree(duree, p);// Permet de générer le calcul de point en fonction du temps de permis
    p = verifAccident(alesi, p); // Permet de générer le calcul de point en fonction du nombre d'accident
    p = verifFidelite(fido, p); // Permet de générer le calcul de point en fonction de la fidélité
        tabRecap(age, duree, alesi, fido); // J'appelle la fonction tabRecap
        calculTarif(p);// J'appelle la fonction calculTarif
}
// Je créer la fonction afficheTarif
function afficheTarif(msg) {
    let output = document.getElementById("formula");// Déclare la fonction pour afficher l'élément de ma page html sous (id = formula)
    output.innerHTML = msg;
}
// Je créer la fonction afficheAvert
function afficheAvert(msg) {
    let outputFid = document.getElementById("except");// Déclare la fonction pour afficher l'élément de ma page html sous (id = except)
    outputFid.innerHTML = msg;
}
// Je créer la fonction afficheRecap
function afficheRecap(msg) { // Récapitule les données saisies
    let outputFid = document.getElementById("fid");
    outputFid.innerHTML = msg;
}
// Je créer la fonction tabMess
function tabMess(msg) {
    let mesMess = ["Vous avez droit au tarif A", "Vous avez droit au tarif B", "Vous avez droit au tarif C"," Vous avez droit au tarif D","Refus"]; // Ecris un message qui spécifie à quel tarif on a le droit mais aussi le refus
    let leMess = mesMess[msg + 1];
    afficheTarif(leMess); // J'appelle ma fonction afficheTarif en lui associant (leMess)
}
// Je créer la fonction tabAdvert
function tabAdvert(msg) {
    let adverTab = ["mets des lunettes !", "plus assez de reflexes!", "on propose des tarifs pas trop degueux pour les chaises roulantes !"];
    let lAdvert = adverTab[msg -1 ]; // Message d'alert en fonction des données saisies et de l'âge de l'assuré
    afficheAvert(lAdvert); // J'appelle ma fonction en lui associant (lAdvert)
} 
// Je créer la fonction tabRecap
function tabRecap(age,duree,alesi,fido) {
    let recapTab = ["vous avez : " + age + " ans", "vous avez : " + duree + " ans de permis", "vous avez eu : " + alesi + " accident(s)", "vous etes assure depuis : " + fido + " an(s)"];
    // Je créer une boucle pour éxécuter l'action de ma fonction
    for (let i = 0; i < recapTab.length; i++) {
        let output = document.getElementById([i]);
        output.innerHTML = recapTab[i];
      
    }
    
}
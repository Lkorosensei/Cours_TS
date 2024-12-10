//Contrairement à JS, TS possède la notion d'énummération; elle est similaire au langage C
// Définition d'une énumération : on indique les noms des valeurs
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Bleu"] = 0] = "Bleu";
    Couleur[Couleur["Blanc"] = 1] = "Blanc";
    Couleur[Couleur["Rouge"] = 2] = "Rouge";
})(Couleur || (Couleur = {}));
; //(ici Couleur rajoute la correspondance en terme de valeurs (=0, =1, =2))
//Utilisation
var ma_couleur = Couleur.Bleu;
var ma_couleur1 = Couleur.Rouge;
console.log(ma_couleur);
console.log(ma_couleur1);
console.log(" ");
//Définition d'une énummeration en indiquant précisément des valeurs
var Taille;
(function (Taille) {
    Taille[Taille["Petit"] = 3] = "Petit";
    Taille[Taille["Moyen"] = 10] = "Moyen";
    Taille[Taille["Grand"] = 12] = "Grand";
})(Taille || (Taille = {}));
;
var ma_taille = Taille.Petit;
var ma_taille2 = Taille.Grand;
console.log(ma_taille);
console.log(ma_taille2);

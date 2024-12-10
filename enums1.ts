//Contrairement à JS, TS possède la notion d'énummération; elle est similaire au langage C

// Définition d'une énumération : on indique les noms des valeurs

enum Couleur {Bleu, Blanc,Rouge}; //(ici Couleur rajoute la correspondance en terme de valeurs (=0, =1, =2))

//Utilisation
const ma_couleur = Couleur.Bleu;
const ma_couleur1 = Couleur.Rouge;

console.log(ma_couleur);
console.log(ma_couleur1);

console.log(" ");

//Définition d'une énummeration en indiquant précisément des valeurs
enum Taille {Petit = 3, Moyen = 10, Grand = 12};

const ma_taille : Taille = Taille.Petit;
const ma_taille2 : Taille = Taille.Grand;
console.log(ma_taille);
console.log(ma_taille2);


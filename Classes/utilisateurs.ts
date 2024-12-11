var currentId = 0; // Variable globale pour suivre l'ID
function generateId(): number {
    return ++currentId; // Incrémente et retourne l'ID
}

interface Utilsateur {
    //Définition de mon contrat
    //les champs nom, prenom et id sont obligatoires lors de la création de la classe

    nom: string; //les propriétés ont une portée public
    prenom: string;
    id: number;
}

class CompteUtilisateur {
    nom: string;
    prenom: string;
    id: number;

    constructor(nom: string, prenom: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.id = generateId();
    }
}

const util : Utilsateur = new CompteUtilisateur("Dimitri", "Payet"); //je passe par l'interface
const util2 : Utilsateur = new CompteUtilisateur("Paul", "Edid");
console.log(`${util.nom}, ${util.prenom}, ${util.id}`);
console.log(`${util2.nom}, ${util2.prenom}, ${util2.id}`);
console.log(util);



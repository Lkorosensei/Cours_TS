interface Personne {
    id: number;
    Nom: string;
    Prenom: string;
    Adresse: string;
    CP: string;
    Ville: string;
}

class ComptePersonne implements Personne{
    id: number;
    Nom: string;
    Prenom: string;
    Adresse: string;
    CP: string;
    Ville: string;

    constructor(id: number, Nom: string, Prenom: string, Adresse: string, CP: string, Ville: string) {
        this.id = id;
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.Adresse = Adresse;
        this.CP = CP;
        this.Ville = Ville;  
    }
}

const person1 : Personne = new ComptePersonne(1,"Samir",'Ibrahim',"32 rue Henry Littolf", "92700","Colombes");
const person2 : Personne = new ComptePersonne(2,"William",'Nyacka',"52 rue François Mauriac", "92700","Colombes");
const person3 : Personne = new ComptePersonne(3,"VIALLON",'Victor',"77 Imp. Roland Garros", "84550","Saint-Saturnin les Avignon");

console.log(person1);
console.log(person2);
console.log(person3);

console.log("");

interface Salarié extends Personne {
    numSecu: number;
    dateDebut: Date;
    anciennete: string;
    posteOccupe: string;
    classification: string;
    categorie: string;
}

class CompteSalarié implements Salarié {
    
    numSecu: number;
    dateDebut: Date;
    anciennete: string;
    posteOccupe: string;
    classification: string;
    categorie: string;

    constructor(id: number, Nom: string, Prenom: string, Adresse: string, CP: string, Ville: string, numSecu: number, dateDebut: Date, anciennete: string, posteOccupe: string, classification: string, categorie: string) {
        super(id,Nom,Prenom,Adresse,CP,Ville);
        this.numSecu = numSecu;
        this.dateDebut = dateDebut;
        this.anciennete = anciennete;
        this.posteOccupe = posteOccupe;
        this.classification = classification;
        this.categorie = categorie;
    }
}

const salar : Salarié = new CompteSalarié(1,"Ben Adji","Safa","4 rue François Mauriac", "93250","Villemomble",123456,02/12/,"5 ans","Comptable","Freelance","Categojsp")
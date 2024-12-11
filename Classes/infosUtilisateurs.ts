interface ISalarie{
    numSecu : number;
    dateDebut : Date;
    anciennete: string;
    postOccupe : string;
    classification : string;
    categorie : string;

}

interface IPersonne {
    id : number;
    nom : string;
    prenom : string;
    adresse : string;
    cp : string;
    ville : string;
    age : number;
    direBonjour();
}

class Personne implements IPersonne {
    id: number;
    nom: string;
    prenom: string;
    adresse: string;
    cp: string;
    ville: string;
    private _age : number;

    //Methode Getter
    get age() {
        return this._age;
    }

    constructor(id: number,nom: string, prenom: string, adresse: string, cp: string, ville: string, age: number) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse
        this.cp = cp;
        this.ville = ville;
        this._age = age;
    }

    //Méthode : direBonjour()
    direBonjour = () => {
        console.log(`Bonjour, mon nom est : ${this.nom} ${this.prenom}`);
    }

    //Méthode : ajouterUnAn
    ajouterUnAn = () => {
        this._age = this._age + 1;
    }

}

class Salarie extends Personne {
    
    numSecu: number;
    dateDebut: Date;
    anciennete: string;
    postOccupe: string;
    classification: string;
    categorie: string;

    constructor(id: number,nom: string, prenom: string, adresse: string, cp: string, ville: string, age: number, numSecu: number, dateDebut: Date, anciennete: string, postOccupe: string, classification: string, categorie: string){
        super(id,nom,prenom,adresse,cp,ville,age); //J'hérite des propriétés de personne
        this.numSecu = numSecu;
        this.dateDebut = dateDebut;
        this.anciennete = anciennete;
        this.postOccupe = postOccupe;
        this.classification = classification;
        this.categorie = categorie ;
    }
}
const perso : IPersonne = new Personne(1, "Jean", "Durand", "12 rue des cocotiers", "75015", "Paris", 45);

console.log(perso);
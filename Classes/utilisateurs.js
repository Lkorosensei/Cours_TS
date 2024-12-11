var currentId = 0; // Variable globale pour suivre l'ID
function generateId() {
    return ++currentId; // Incrémente et retourne l'ID
}
var CompteUtilisateur = /** @class */ (function () {
    function CompteUtilisateur(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.id = generateId();
    }
    return CompteUtilisateur;
}());
var util = new CompteUtilisateur("Dimitri", "Payet"); //je passe par l'interface
var util2 = new CompteUtilisateur("Paul", "Edid");
console.log("".concat(util.nom, ", ").concat(util.prenom, ", ").concat(util.id));
console.log("".concat(util2.nom, ", ").concat(util2.prenom, ", ").concat(util2.id));
console.log(util);

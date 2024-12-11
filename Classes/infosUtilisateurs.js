var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    function Personne(id, nom, prenom, adresse, cp, ville, age) {
        var _this = this;
        //Méthode : direBonjour()
        this.direBonjour = function () {
            console.log("Bonjour, mon nom est : ".concat(_this.nom, " ").concat(_this.prenom));
        };
        //Méthode : ajouterUnAn
        this.ajouterUnAn = function () {
            _this._age = _this._age + 1;
        };
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.cp = cp;
        this.ville = ville;
        this._age = age;
    }
    Object.defineProperty(Personne.prototype, "age", {
        //Methode Getter
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Personne;
}());
var Salarie = /** @class */ (function (_super) {
    __extends(Salarie, _super);
    function Salarie(id, nom, prenom, adresse, cp, ville, age, numSecu, dateDebut, anciennete, postOccupe, classification, categorie) {
        var _this = _super.call(this, id, nom, prenom, adresse, cp, ville, age) || this; //J'hérite des propriétés de personne
        _this.numSecu = numSecu;
        _this.dateDebut = dateDebut;
        _this.anciennete = anciennete;
        _this.postOccupe = postOccupe;
        _this.classification = classification;
        _this.categorie = categorie;
        return _this;
    }
    return Salarie;
}(Personne));
var perso = new Personne(1, "Jean", "Durand", "12 rue des cocotiers", "75015", "Paris", 45, 123456789, new Date(), "10 ans", "Developpeur Fullstack", "Cadre", "A1");
console.log(perso);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listepersonnes = void 0;
var listepersonnes = /** @class */ (function () {
    // Constructeur avec un seul attribut personnes
    function listepersonnes(personnes) {
        this.personnes = personnes;
    }
    Object.defineProperty(listepersonnes.prototype, "_personnes", {
        // Getters et setters pour personnes
        get: function () {
            return this.personnes;
        },
        set: function (value) {
            this.personnes = value;
        },
        enumerable: false,
        configurable: true
    });
    // Méthode 3: Chercher dans le tableau personnes si l'attribut nom d'un est égal à la valeur du paramètre s
    listepersonnes.prototype.findbynom = function (s) {
        for (var i = 0; i < this.personnes.length; i++) {
            if (this.personnes[i].nom === s) {
                return this.personnes[i];
            }
        }
        return null;
    };
    // Méthode 4: Vérifier dans le tableau personnes si un objet possède au moins une adresse dont le code postal égal au paramètre cp
    listepersonnes.prototype.findbycodepostal = function (cp) {
        for (var i = 0; i < this.personnes.length; i++) {
            var adresses = this.personnes[i].adresses;
            for (var j = 0; j < adresses.length; j++) {
                if (adresses[j].codePostal === cp) {
                    return true;
                }
            }
        }
        return false;
    };
    // Méthode 5: Calculer le nombre d'objets dans le tableau personnes ayant une adresse dans la ville passée en paramètre
    listepersonnes.prototype.countpersonnevville = function (ville) {
        var count = 0;
        for (var i = 0; i < this.personnes.length; i++) {
            var adresses = this.personnes[i].adresses;
            for (var j = 0; j < adresses.length; j++) {
                if (adresses[j].ville === ville) {
                    count++;
                    break; // Une fois qu'on trouve une adresse dans la ville, on passe à la personne suivante
                }
            }
        }
        return count;
    };
    // Méthode 6: Remplacer les noms de personnes ayant un nom égal à la valeur oldNom par newNom
    listepersonnes.prototype.editpersonneenom = function (oldNom, newNom) {
        for (var i = 0; i < this.personnes.length; i++) {
            if (this.personnes[i].nom === oldNom) {
                this.personnes[i].nom = newNom;
            }
        }
    };
    // Méthode 7: Remplacer les villes de personnes ayant un nom égal à la valeur du paramètre nom par newVille
    listepersonnes.prototype.editpersonnevville = function (nom, newVille) {
        for (var i = 0; i < this.personnes.length; i++) {
            if (this.personnes[i].nom === nom) {
                var adresses = this.personnes[i].adresses;
                for (var j = 0; j < adresses.length; j++) {
                    adresses[j].ville = newVille;
                }
            }
        }
    };
    // Méthode pour afficher toutes les personnes
    listepersonnes.prototype.afficherpersonnes = function () {
        console.log("=== Liste des personnes ===");
        for (var i = 0; i < this.personnes.length; i++) {
            var personne_1 = this.personnes[i];
            console.log("Nom: ".concat(personne_1.nom, ", Sexe: ").concat(personne_1.sexe));
            console.log("Adresses:");
            for (var j = 0; j < personne_1.adresses.length; j++) {
                var adresse = personne_1.adresses[j];
                console.log("  - ".concat(adresse.rue, ", ").concat(adresse.ville, " ").concat(adresse.codePostal));
            }
            console.log("---");
        }
    };
    return listepersonnes;
}());
exports.listepersonnes = listepersonnes;

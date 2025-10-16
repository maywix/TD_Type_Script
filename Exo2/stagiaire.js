"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stagiaire = void 0;
var stagiaire = /** @class */ (function () {
    function stagiaire(nom, notes) {
        this.nom = nom;
        this.notes = notes;
    }
    Object.defineProperty(stagiaire.prototype, "_nom", {
        get: function () {
            return this.nom;
        },
        set: function (value) {
            this.nom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(stagiaire.prototype, "_notes", {
        get: function () {
            return this.notes;
        },
        set: function (value) {
            this.notes = value;
        },
        enumerable: false,
        configurable: true
    });
    stagiaire.prototype.calculermoyenne = function () {
        if (this.notes.length === 0) {
            return 0;
        }
        var somme = this.notes.reduce(function (a, b) { return a + b; }, 0);
        return somme / this.notes.length;
    };
    stagiaire.prototype.trouvermax = function () {
        return Math.max.apply(Math, this.notes); // on utilise le "spread operator" donc "..." pour transformer le tableau en valeurs
    };
    stagiaire.prototype.trouvermin = function () {
        return Math.min.apply(Math, this.notes);
    };
    return stagiaire;
}());
exports.stagiaire = stagiaire;

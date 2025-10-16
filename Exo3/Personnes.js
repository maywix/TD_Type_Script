"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personne = void 0;
var personne = /** @class */ (function () {
    //constructeur, sexe M ou F
    function personne(nom, sexe, adresses) {
        if (adresses === void 0) { adresses = []; }
        if (sexe !== "M" && sexe !== "F") {
            throw new Error("Le sexe doit être M ou F");
        }
        this._nom = nom;
        this._sexe = sexe;
        this._adresses = adresses;
    }
    Object.defineProperty(personne.prototype, "nom", {
        //getters et setters
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(personne.prototype, "sexe", {
        get: function () {
            return this._sexe;
        },
        set: function (value) {
            if (value !== "M" && value !== "F") {
                throw new Error("Le sexe doit être M ou F");
            }
            this._sexe = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(personne.prototype, "adresses", {
        get: function () {
            return this._adresses;
        },
        set: function (value) {
            this._adresses = value;
        },
        enumerable: false,
        configurable: true
    });
    personne.prototype.getadressecomplete = function () {
        var result = [];
        for (var i = 0; i < this._adresses.length; i++) {
            result.push(this._adresses[i].getadressecomplete());
        }
        return result.join(" | ");
    };
    personne.prototype.ajouteradresse = function (uneadresse) {
        this._adresses.push(uneadresse);
    };
    personne.prototype.getinfocomplete = function () {
        var adressesStr = [];
        for (var i = 0; i < this._adresses.length; i++) {
            adressesStr.push(this._adresses[i].getadressecomplete());
        }
        return "".concat(this._nom, ", ").concat(this._sexe, ", ").concat(adressesStr.join(" | "));
    };
    return personne;
}());
exports.personne = personne;

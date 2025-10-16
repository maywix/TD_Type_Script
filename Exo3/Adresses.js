"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adresse = void 0;
var adresse = /** @class */ (function () {
    //constructeur
    function adresse(rue, ville, codePostal) {
        this._rue = rue;
        this._ville = ville;
        this._codePostal = codePostal;
    }
    Object.defineProperty(adresse.prototype, "rue", {
        //getters et setters
        get: function () {
            return this._rue;
        },
        set: function (value) {
            this._rue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(adresse.prototype, "ville", {
        get: function () {
            return this._ville;
        },
        set: function (value) {
            this._ville = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(adresse.prototype, "codePostal", {
        get: function () {
            return this._codePostal;
        },
        set: function (value) {
            this._codePostal = value;
        },
        enumerable: false,
        configurable: true
    });
    adresse.prototype.getadressecomplete = function () {
        return "".concat(this._rue, ", ").concat(this._ville, ", ").concat(this._codePostal);
    };
    return adresse;
}());
exports.adresse = adresse;

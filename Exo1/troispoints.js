"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroisPoints = void 0;
//constructeur
var TroisPoints = /** @class */ (function () {
    function TroisPoints(premier, deuxieme, troisieme) {
        this.premier = premier;
        this.deuxieme = deuxieme;
        this.troisieme = troisieme;
    }
    Object.defineProperty(TroisPoints.prototype, "_premier", {
        //getter et setter
        get: function () {
            return this.premier;
        },
        set: function (value) {
            this.premier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TroisPoints.prototype, "_deuxieme", {
        get: function () {
            return this.deuxieme;
        },
        set: function (value) {
            this.deuxieme = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TroisPoints.prototype, "_troisieme", {
        get: function () {
            return this.troisieme;
        },
        set: function (value) {
            this.troisieme = value;
        },
        enumerable: false,
        configurable: true
    });
    TroisPoints.prototype.testalignement = function () {
        var AB = this._premier.calculerdistance(this._deuxieme);
        var AC = this._premier.calculerdistance(this._troisieme);
        var BC = this._deuxieme.calculerdistance(this._troisieme);
        return (Math.abs(AB - (AC + BC)) < 0.001 ||
            Math.abs(AC - (AB + BC)) < 0.001 ||
            Math.abs(BC - (AB + AC)) < 0.001);
    };
    TroisPoints.prototype.estisocele = function () {
        var AB = this._premier.calculerdistance(this._deuxieme);
        var AC = this._premier.calculerdistance(this._troisieme);
        var BC = this._deuxieme.calculerdistance(this._troisieme);
        return (Math.abs(AC - AB) < 0.001 ||
            Math.abs(AB - BC) < 0.001 ||
            Math.abs(AC - BC) < 0.001);
    };
    TroisPoints.prototype.afficher = function () {
        return "Premier: ".concat(this.premier.afficher(), ", Deuxi\u00E8me: ").concat(this.deuxieme.afficher(), ", Troisi\u00E8me: ").concat(this.troisieme.afficher());
    };
    return TroisPoints;
}());
exports.TroisPoints = TroisPoints;

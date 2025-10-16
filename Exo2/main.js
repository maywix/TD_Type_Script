"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var formation_1 = require("./formation");
var stagiaire_1 = require("./stagiaire");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        //initialisation des donnéees
        console.log("demarrage du programme ex2");
        var formation = Main.initialiserformation();
    };
    Main.initialiserformation = function () {
        var stagiaire1 = new stagiaire_1.stagiaire("Doe", [12, 15, 17]);
        var stagiaire2 = new stagiaire_1.stagiaire("Smith", [18, 16, 19]);
        var stagiaire3 = new stagiaire_1.stagiaire("Jones", [10, 13, 11]);
        var stagiaire4 = new stagiaire_1.stagiaire("Johnson", [14, 17, 15]);
        var stagiaires = [stagiaire1, stagiaire2, stagiaire3, stagiaire4];
        var formationInstance = new formation_1.Formation("Typescript", 5, stagiaires);
        console.log("la moyenne de la formation est: ".concat(formationInstance
            .calculerMoyenneFormation()
            .toFixed(2)));
        formationInstance.afficherNomMax();
        return formationInstance;
    };
    return Main;
}());
exports.Main = Main;
// Appeler la fonction main pour executer le programme
Main.main();

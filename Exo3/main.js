"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var Adresses_1 = require("./Adresses");
var ListePersonnes_1 = require("./ListePersonnes");
var Personnes_1 = require("./Personnes");
var main = /** @class */ (function () {
    function main() {
    }
    main.main = function () {
        console.log("=== demarrage programme exercice 3 ===");
        var listeinstance = main.initialiserdonnees();
        main.testermethodes(listeinstance);
    };
    main.initialiserdonnees = function () {
        // Création des adresses
        var adresse1 = new Adresses_1.adresse("25 rue de la gaite", "montpellier", "34000");
        var adresse2 = new Adresses_1.adresse("78 avenue des palmiers", "nice", "06000");
        var adresse3 = new Adresses_1.adresse("156 boulevard jean jaures", "bordeaux", "33000");
        var adresse4 = new Adresses_1.adresse("42 rue pasteur", "montpellier", "34070");
        var adresse5 = new Adresses_1.adresse("88 place wilson", "nantes", "44000");
        // Création des personnes
        var personne1 = new Personnes_1.personne("bernard", "M", [adresse1, adresse4]);
        var personne2 = new Personnes_1.personne("sophie", "F", [adresse2]);
        var personne3 = new Personnes_1.personne("julien", "M", [adresse3, adresse5]);
        var personne4 = new Personnes_1.personne("claire", "F", [adresse1]);
        // Création de la liste des personnes
        var personnes = [personne1, personne2, personne3, personne4];
        var listeinstance = new ListePersonnes_1.listepersonnes(personnes);
        console.log("donnees initiales creees !");
        listeinstance.afficherpersonnes();
        return listeinstance;
    };
    main.testermethodes = function (listeinstance) {
        console.log("\n=== tests des methodes ===");
        // Test de findbynom
        console.log("\n1. test findbynom:");
        var personnetrouvee = listeinstance.findbynom("bernard");
        if (personnetrouvee) {
            console.log("personne trouvee: ".concat(personnetrouvee.nom, ", sexe: ").concat(personnetrouvee.sexe));
        }
        else {
            console.log("personne non trouvee");
        }
        var personneinexistante = listeinstance.findbynom("inexistant");
        console.log("recherche 'inexistant': ".concat(personneinexistante ? "trouve" : "non trouve"));
        // Test de findbycodepostal
        console.log("\n2. test findbycodepostal:");
        console.log("code postal 34000 existe: ".concat(listeinstance.findbycodepostal("34000")));
        console.log("code postal 99999 existe: ".concat(listeinstance.findbycodepostal("99999")));
        // Test de countpersonnevville
        console.log("\n3. test countpersonnevville:");
        console.log("nombre de personnes a montpellier: ".concat(listeinstance.countpersonnevville("montpellier")));
        console.log("nombre de personnes a nice: ".concat(listeinstance.countpersonnevville("nice")));
        console.log("nombre de personnes a marseille: ".concat(listeinstance.countpersonnevville("marseille")));
        // Test de editpersonneenom
        console.log("\n4. test editpersonneenom:");
        console.log("avant modification:");
        var bernard = listeinstance.findbynom("bernard");
        console.log("nom actuel: ".concat(bernard ? bernard.nom : "non trouve"));
        listeinstance.editpersonneenom("bernard", "robert");
        console.log("apres modification bernard -> robert:");
        var robert = listeinstance.findbynom("robert");
        console.log("nouveau nom: ".concat(robert ? robert.nom : "non trouve"));
        // Test de editpersonnevville
        console.log("\n5. test editpersonnevville:");
        console.log("avant modification des villes de sophie:");
        var sophie = listeinstance.findbynom("sophie");
        if (sophie) {
            for (var i = 0; i < sophie.adresses.length; i++) {
                console.log("  ville: ".concat(sophie.adresses[i].ville));
            }
        }
        listeinstance.editpersonnevville("sophie", "cannes");
        console.log("apres modification des villes de sophie -> cannes:");
        if (sophie) {
            for (var i = 0; i < sophie.adresses.length; i++) {
                console.log("  nouvelle ville: ".concat(sophie.adresses[i].ville));
            }
        }
        console.log("\n=== etat final ===");
        listeinstance.afficherpersonnes();
    };
    return main;
}());
exports.main = main;
// appeler la fonction main pour executer le programme
main.main();

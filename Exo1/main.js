"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import du fichier test exo pour faire les test
var Testexo1_1 = require("./Testexo1");
console.log("Execution de l'exo 1");
// Fonction principale pour executer les tests de lexo
function main() {
  try {
    console.log("Démarrage des tests...");
    // Execution des tests de la classe point
    Testexo1_1.Testexo1.runTests();
    // Execution des tests d'alignement des points
    Testexo1_1.Testexo1.testalignement();
    console.log("Tous les tests ont été executés");
  } catch (error) {
    console.log("Erreur");
  }
}
// Execution de tout le programme
main();

// import du fichier test exo pour faire les test
import { Testexo1 } from "./Testexo1";

console.log("Execution de l'exo 1");

// Fonction principale pour executer les tests de lexo
function main(): void {
  try {
    console.log("Démarrage des tests...");

    // Execution des tests de la classe point
    Testexo1.runTests();

    // Execution des tests d'alignement des points
    Testexo1.testalignement();

    console.log("Tous les tests ont été executés");
  } catch (error) {
    console.log("Erreur");
  }
}

// Execution de tout le programme
main();

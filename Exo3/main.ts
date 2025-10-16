import { Adresse } from "./adresse";
import { Personne } from "./personne";
import { ListePersonnes } from "./listePersonnes";

export class Main {
  public static main(): void {
    console.log("=== Démarrage programme Exercice 3 ===");
    const listePersonnes = Main.initialiserDonnees();
    Main.testerMethodes(listePersonnes);
  }

  private static initialiserDonnees(): ListePersonnes {
    // Création des adresses
    const adresse1 = new Adresse("123 rue de la Paix", "Paris", "75001");
    const adresse2 = new Adresse("456 avenue des Champs", "Lyon", "69000");
    const adresse3 = new Adresse("789 boulevard Saint-Michel", "Marseille", "13000");
    const adresse4 = new Adresse("321 rue Victor Hugo", "Paris", "75002");
    const adresse5 = new Adresse("654 place de la République", "Toulouse", "31000");

    // Création des personnes
    const personne1 = new Personne("Dupont", "M", [adresse1, adresse4]);
    const personne2 = new Personne("Martin", "F", [adresse2]);
    const personne3 = new Personne("Durand", "M", [adresse3, adresse5]);
    const personne4 = new Personne("Leblanc", "F", [adresse1]);

    // Création de la liste des personnes
    const personnes = [personne1, personne2, personne3, personne4];
    const listePersonnes = new ListePersonnes(personnes);

    console.log("Données initiales créées !");
    listePersonnes.afficherPersonnes();

    return listePersonnes;
  }

  private static testerMethodes(listePersonnes: ListePersonnes): void {
    console.log("\n=== Tests des méthodes ===");

    // Test de findByNom
    console.log("\n1. Test findByNom:");
    const personneTrouvee = listePersonnes.findByNom("Dupont");
    if (personneTrouvee) {
      console.log(`Personne trouvée: ${personneTrouvee._nom}, Sexe: ${personneTrouvee._sexe}`);
    } else {
      console.log("Personne non trouvée");
    }

    const personneNonTrouvee = listePersonnes.findByNom("Inexistant");
    console.log(`Recherche 'Inexistant': ${personneNonTrouvee ? "Trouvé" : "Non trouvé"}`);

    // Test de findByCodePostal
    console.log("\n2. Test findByCodePostal:");
    console.log(`Code postal 75001 existe: ${listePersonnes.findByCodePostal("75001")}`);
    console.log(`Code postal 99999 existe: ${listePersonnes.findByCodePostal("99999")}`);

    // Test de countPersonneVille
    console.log("\n3. Test countPersonneVille:");
    console.log(`Nombre de personnes à Paris: ${listePersonnes.countPersonneVille("Paris")}`);
    console.log(`Nombre de personnes à Lyon: ${listePersonnes.countPersonneVille("Lyon")}`);
    console.log(`Nombre de personnes à Nice: ${listePersonnes.countPersonneVille("Nice")}`);

    // Test de editPersonneNom
    console.log("\n4. Test editPersonneNom:");
    console.log("Avant modification:");
    const dupont = listePersonnes.findByNom("Dupont");
    console.log(`Nom actuel: ${dupont ? dupont._nom : "Non trouvé"}`);
    
    listePersonnes.editPersonneNom("Dupont", "Dupuis");
    console.log("Après modification Dupont -> Dupuis:");
    const dupuis = listePersonnes.findByNom("Dupuis");
    console.log(`Nouveau nom: ${dupuis ? dupuis._nom : "Non trouvé"}`);

    // Test de editPersonneVille
    console.log("\n5. Test editPersonneVille:");
    console.log("Avant modification des villes de Martin:");
    const martin = listePersonnes.findByNom("Martin");
    if (martin) {
      for (let i = 0; i < martin._adresses.length; i++) {
        console.log(`  Ville: ${martin._adresses[i]._ville}`);
      }
    }
    
    listePersonnes.editPersonneVille("Martin", "Bordeaux");
    console.log("Après modification des villes de Martin -> Bordeaux:");
    if (martin) {
      for (let i = 0; i < martin._adresses.length; i++) {
        console.log(`  Nouvelle ville: ${martin._adresses[i]._ville}`);
      }
    }

    console.log("\n=== État final ===");
    listePersonnes.afficherPersonnes();
  }
}

// Appeler la fonction main pour exécuter le programme
Main.main();
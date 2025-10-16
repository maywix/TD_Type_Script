import { adresse } from "./Adresses";
import { listepersonnes } from "./ListePersonnes";
import { personne } from "./Personnes";

export class main {
  public static main(): void {
    console.log("=== demarrage programme exercice 3 ===");
    const listeinstance = main.initialiserdonnees();
    main.testermethodes(listeinstance);
  }

  private static initialiserdonnees(): listepersonnes {
    // Création des adresses
    const adresse1 = new adresse("25 rue de la gaite", "montpellier", "34000");
    const adresse2 = new adresse("78 avenue des palmiers", "nice", "06000");
    const adresse3 = new adresse(
      "156 boulevard jean jaures",
      "bordeaux",
      "33000"
    );
    const adresse4 = new adresse("42 rue pasteur", "montpellier", "34070");
    const adresse5 = new adresse("88 place wilson", "nantes", "44000");

    // Création des personnes
    const personne1 = new personne("bernard", "M", [adresse1, adresse4]);
    const personne2 = new personne("sophie", "F", [adresse2]);
    const personne3 = new personne("julien", "M", [adresse3, adresse5]);
    const personne4 = new personne("claire", "F", [adresse1]);

    // Création de la liste des personnes
    const personnes = [personne1, personne2, personne3, personne4];
    const listeinstance = new listepersonnes(personnes);

    console.log("donnees initiales creees !");
    listeinstance.afficherpersonnes();

    return listeinstance;
  }

  private static testermethodes(listeinstance: listepersonnes): void {
    console.log("\n=== tests des methodes ===");

    // Test de findbynom
    console.log("\n1. test findbynom:");
    const personnetrouvee = listeinstance.findbynom("bernard");
    if (personnetrouvee) {
      console.log(
        `personne trouvee: ${personnetrouvee.nom}, sexe: ${personnetrouvee.sexe}`
      );
    } else {
      console.log("personne non trouvee");
    }

    const personneinexistante = listeinstance.findbynom("inexistant");
    console.log(
      `recherche 'inexistant': ${personneinexistante ? "trouve" : "non trouve"}`
    );

    // Test de findbycodepostal
    console.log("\n2. test findbycodepostal:");
    console.log(
      `code postal 34000 existe: ${listeinstance.findbycodepostal("34000")}`
    );
    console.log(
      `code postal 99999 existe: ${listeinstance.findbycodepostal("99999")}`
    );

    // Test de countpersonnevville
    console.log("\n3. test countpersonnevville:");
    console.log(
      `nombre de personnes a montpellier: ${listeinstance.countpersonnevville(
        "montpellier"
      )}`
    );
    console.log(
      `nombre de personnes a nice: ${listeinstance.countpersonnevville("nice")}`
    );
    console.log(
      `nombre de personnes a marseille: ${listeinstance.countpersonnevville(
        "marseille"
      )}`
    );

    // Test de editpersonneenom
    console.log("\n4. test editpersonneenom:");
    console.log("avant modification:");
    const bernard = listeinstance.findbynom("bernard");
    console.log(`nom actuel: ${bernard ? bernard.nom : "non trouve"}`);

    listeinstance.editpersonneenom("bernard", "robert");
    console.log("apres modification bernard -> robert:");
    const robert = listeinstance.findbynom("robert");
    console.log(`nouveau nom: ${robert ? robert.nom : "non trouve"}`);

    // Test de editpersonnevville
    console.log("\n5. test editpersonnevville:");
    console.log("avant modification des villes de sophie:");
    const sophie = listeinstance.findbynom("sophie");
    if (sophie) {
      for (let i = 0; i < sophie.adresses.length; i++) {
        console.log(`  ville: ${sophie.adresses[i].ville}`);
      }
    }

    listeinstance.editpersonnevville("sophie", "cannes");
    console.log("apres modification des villes de sophie -> cannes:");
    if (sophie) {
      for (let i = 0; i < sophie.adresses.length; i++) {
        console.log(`  nouvelle ville: ${sophie.adresses[i].ville}`);
      }
    }

    console.log("\n=== etat final ===");
    listeinstance.afficherpersonnes();
  }
}

// appeler la fonction main pour executer le programme
main.main();

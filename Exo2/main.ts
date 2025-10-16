import { Formation } from "./formation";
import { stagiaire } from "./stagiaire";

export class Main {
  public static main(): void {
    //initialisation des donnéees
    console.log("demarrage du programme ex2");
    const formation = Main.initialiserformation();
  }
  private static initialiserformation(): Formation {
    const stagiaire1 = new stagiaire("Doe", [12, 15, 17]);
    const stagiaire2 = new stagiaire("Smith", [18, 16, 19]);
    const stagiaire3 = new stagiaire("Jones", [10, 13, 11]);
    const stagiaire4 = new stagiaire("Johnson", [14, 17, 15]);
    const stagiaires = [stagiaire1, stagiaire2, stagiaire3, stagiaire4];
    const formationInstance = new Formation("Typescript", 5, stagiaires);
    console.log(
      `la moyenne de la formation est: ${formationInstance
        .calculerMoyenneFormation()
        .toFixed(2)}`
    );
    formationInstance.afficherNomMax();
    return formationInstance;
  }
}

// Appeler la fonction main pour executer le programme
Main.main();

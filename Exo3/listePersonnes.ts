import { personne } from "./Personnes";

export class listepersonnes {
  // Constructeur avec un seul attribut personnes
  constructor(private personnes: personne[]) {}

  // Getters et setters pour personnes
  public get _personnes(): personne[] {
    return this.personnes;
  }

  public set _personnes(value: personne[]) {
    this.personnes = value;
  }

  // Méthode 3: Chercher dans le tableau personnes si l'attribut nom d'un est égal à la valeur du paramètre s
  public findbynom(s: string): personne | null {
    for (let i = 0; i < this.personnes.length; i++) {
      if (this.personnes[i].nom === s) {
        return this.personnes[i];
      }
    }
    return null;
  }

  // Méthode 4: Vérifier dans le tableau personnes si un objet possède au moins une adresse dont le code postal égal au paramètre cp
  public findbycodepostal(cp: string): boolean {
    for (let i = 0; i < this.personnes.length; i++) {
      const adresses = this.personnes[i].adresses;
      for (let j = 0; j < adresses.length; j++) {
        if (adresses[j].codePostal === cp) {
          return true;
        }
      }
    }
    return false;
  }

  // Méthode 5: Calculer le nombre d'objets dans le tableau personnes ayant une adresse dans la ville passée en paramètre
  public countpersonnevville(ville: string): number {
    let count = 0;
    for (let i = 0; i < this.personnes.length; i++) {
      const adresses = this.personnes[i].adresses;
      for (let j = 0; j < adresses.length; j++) {
        if (adresses[j].ville === ville) {
          count++;
          break; // Une fois qu'on trouve une adresse dans la ville, on passe à la personne suivante
        }
      }
    }
    return count;
  }

  // Méthode 6: Remplacer les noms de personnes ayant un nom égal à la valeur oldNom par newNom
  public editpersonneenom(oldNom: string, newNom: string): void {
    for (let i = 0; i < this.personnes.length; i++) {
      if (this.personnes[i].nom === oldNom) {
        this.personnes[i].nom = newNom;
      }
    }
  }

  // Méthode 7: Remplacer les villes de personnes ayant un nom égal à la valeur du paramètre nom par newVille
  public editpersonnevville(nom: string, newVille: string): void {
    for (let i = 0; i < this.personnes.length; i++) {
      if (this.personnes[i].nom === nom) {
        const adresses = this.personnes[i].adresses;
        for (let j = 0; j < adresses.length; j++) {
          adresses[j].ville = newVille;
        }
      }
    }
  }

  // Méthode pour afficher toutes les personnes
  public afficherpersonnes(): void {
    console.log("=== Liste des personnes ===");
    for (let i = 0; i < this.personnes.length; i++) {
      const personne = this.personnes[i];
      console.log(`Nom: ${personne.nom}, Sexe: ${personne.sexe}`);
      console.log("Adresses:");
      for (let j = 0; j < personne.adresses.length; j++) {
        const adresse = personne.adresses[j];
        console.log(
          `  - ${adresse.rue}, ${adresse.ville} ${adresse.codePostal}`
        );
      }
      console.log("---");
    }
  }
}

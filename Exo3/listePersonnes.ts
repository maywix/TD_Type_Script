import { Personne } from "./personne";
import { Adresse } from "./adresse";

export class ListePersonnes {
  // Constructeur avec un seul attribut personnes
  constructor(private personnes: Personne[]) {}

  // Getters et setters pour personnes
  public get _personnes(): Personne[] {
    return this.personnes;
  }

  public set _personnes(value: Personne[]) {
    this.personnes = value;
  }

  // Méthode 3: Chercher dans le tableau personnes si l'attribut nom d'un est égal à la valeur du paramètre s
  public findByNom(s: string): Personne | null {
    for (let i = 0; i < this.personnes.length; i++) {
      if (this.personnes[i]._nom === s) {
        return this.personnes[i];
      }
    }
    return null;
  }

  // Méthode 4: Vérifier dans le tableau personnes si un objet possède au moins une adresse dont le code postal égal au paramètre cp
  public findByCodePostal(cp: string): boolean {
    for (let i = 0; i < this.personnes.length; i++) {
      const adresses = this.personnes[i]._adresses;
      for (let j = 0; j < adresses.length; j++) {
        if (adresses[j]._codePostal === cp) {
          return true;
        }
      }
    }
    return false;
  }

  // Méthode 5: Calculer le nombre d'objets dans le tableau personnes ayant une adresse dans la ville passée en paramètre
  public countPersonneVille(ville: string): number {
    let count = 0;
    for (let i = 0; i < this.personnes.length; i++) {
      const adresses = this.personnes[i]._adresses;
      for (let j = 0; j < adresses.length; j++) {
        if (adresses[j]._ville === ville) {
          count++;
          break; // Une fois qu'on trouve une adresse dans la ville, on passe à la personne suivante
        }
      }
    }
    return count;
  }

  // Méthode 6: Remplacer les noms de personnes ayant un nom égal à la valeur oldNom par newNom
  public editPersonneNom(oldNom: string, newNom: string): void {
    for (let i = 0; i < this.personnes.length; i++) {
      if (this.personnes[i]._nom === oldNom) {
        this.personnes[i]._nom = newNom;
      }
    }
  }

  // Méthode 7: Remplacer les villes de personnes ayant un nom égal à la valeur du paramètre nom par newVille
  public editPersonneVille(nom: string, newVille: string): void {
    for (let i = 0; i < this.personnes.length; i++) {
      if (this.personnes[i]._nom === nom) {
        const adresses = this.personnes[i]._adresses;
        for (let j = 0; j < adresses.length; j++) {
          adresses[j]._ville = newVille;
        }
      }
    }
  }

  // Méthode pour afficher toutes les personnes
  public afficherPersonnes(): void {
    console.log("=== Liste des personnes ===");
    for (let i = 0; i < this.personnes.length; i++) {
      const personne = this.personnes[i];
      console.log(`Nom: ${personne._nom}, Sexe: ${personne._sexe}`);
      console.log("Adresses:");
      for (let j = 0; j < personne._adresses.length; j++) {
        const adresse = personne._adresses[j];
        console.log(`  - ${adresse._rue}, ${adresse._ville} ${adresse._codePostal}`);
      }
      console.log("---");
    }
  }
}
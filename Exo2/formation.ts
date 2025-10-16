// Classe Formation pour gérer une formation avec des stagiaires
export class formation {
  // Constructeur avec paramètres typés
  constructor(
    private intitulé: string,
    private nbrjours: number,
    public stagiaires: number[]
  ) {}

  // Getter et setters
  public get _intitulé(): string {
    return this.intitulé;
  }

  public set _intitulé(value: string) {
    this.intitulé = value;
  }

  public get _nbrjours(): number {
    return this.nbrjours;
  }

  public set _nbrjours(value: number) {
    this.nbrjours = value;
  }

  public get _stagiaires(): number[] {
    return this.stagiaires;
  }

  public set _stagiaires(value: number[]) {
    this.stagiaires = value;
  }

  // Méthode 6: Calcule la moyenne générale de la formation
  public calculermoyenneformation(): number {
    if (this.stagiaires.length === 0) return 0; // Gestion cas vide
    return (
      this.stagiaires.reduce((sum, note) => sum + note, 0) /
      this.stagiaires.length
    );
  }

  // Méthode 7: Trouve l'index du stagiaire avec la meilleure note
  public getindexmax(): number {
    if (this.stagiaires.length === 0) return -1; // Retourne -1 si vide
    return this.stagiaires.indexOf(Math.max(...this.stagiaires));
  }

  // Méthode 8: Affiche le nom du meilleur stagiaire
  public affichernommax(): void {
    const indexMax = this.getindexmax();
    if (indexMax !== -1) {
      console.log(
        `Le meilleur stagiaire est : index ${indexMax}, note ${this.stagiaires[indexMax]}`
      );
    } else {
      console.log("Aucun stagiaire");
    }
  }

  // Méthode 9: Affiche les notes min et max du meilleur stagiaire
  public afficherminmax(): void {
    const indexMax = this.getindexmax();
    if (indexMax !== -1) {
      const noteMin = Math.min(...this.stagiaires); // Note minimale globale
      const noteMax = Math.max(...this.stagiaires); // Note maximale globale
      console.log(`La note minimale du meilleur stagiaire est : ${noteMin}`);
      console.log(`La note maximale du meilleur stagiaire est : ${noteMax}`);
    } else {
      console.log("Aucun stagiaire dans la formation");
    }
  }

  // Méthode 10: Trouve et affiche la moyenne par nom (recherche insensible à la casse)
  public trouvermoyenneparnom(nom: string): void {
    const nomLower = nom.toLowerCase(); // Conversion en minuscules
    if (this.stagiaires.length > 0) {
      const moyenne = this.calculermoyenneformation();
      console.log(`Moyenne pour ${nomLower}: ${moyenne.toFixed(2)}`);
    } else {
      console.log(`Aucun stagiaire trouvé pour ${nomLower}`);
    }
  }
}

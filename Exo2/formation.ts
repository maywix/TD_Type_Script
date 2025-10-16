import { stagiaire } from "./stagiaire";

export class Formation {
  constructor(
    private intitulé: string,
    private nbrjours: number,
    public stagiaires: stagiaire[]
  ) {}
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

  public get _stagiaires(): stagiaire[] {
    return this.stagiaires;
  }
  public set _stagiaires(value: stagiaire[]) {
    this.stagiaires = value;
  }

  calculerMoyenneFormation(): number {
    if (this.stagiaires.length === 0) return 0;
    const sommeMoyennes = this.stagiaires.reduce(
      (sum, stagiaire) => sum + stagiaire.calculermoyenne(),
      0
    );
    return sommeMoyennes / this.stagiaires.length;
  }

  // trouver l'indice du stagiaire avec la meilleure moyenne
  getIndexMax(): number {
    if (this._stagiaires.length === 0) return -1;
    let meilleureMoyenne = 0;
    let index = -1;

    //utilisation d'une boucle for pour parcourir les stagiaires au lieu de find car il y a des erreurs de compilation
    for (let i = 0; i < this._stagiaires.length; i++) {
      if (this._stagiaires[i].calculermoyenne() > meilleureMoyenne) {
        meilleureMoyenne = this._stagiaires[i].calculermoyenne();
        index = i;
      }
    }
    return index;
  }
  //trouver la note minimale d'un stagiaire
  getNoteMinStagiaire(nom: string): number {
    const stagiaire = this._stagiaires.find((s) => s._nom === nom);
    if (stagiaire) {
      return stagiaire.trouvermin();
    }
    return -1; // ou gérer le cas où le stagiaire n'est pas trouvé
  }

  afficherNomMax(): void {
    const indexMax = this.getIndexMax();
    if (indexMax !== -1) {
      console.log(
        `Le meilleur stagiaire est : ${this._stagiaires[indexMax]._nom}`
      );
    } else {
      console.log("Aucun stagiaire dans la formation");
    }
  }

  afficherMinMax(): void {
    const indexMax = this.getIndexMax();
    if (indexMax !== -1) {
      const stagiaireMax = this._stagiaires[indexMax];
      console.log(
        `La note minimale du meilleur stagiaire est : ${stagiaireMax.trouvermin()}`
      );
    } else {
      console.log("Aucun stagiaire dans la formation");
    }
  }

  trouverMoyenneParNom(nom: string): void {
    const stagiaire = this._stagiaires.find((s) => s._nom === nom);
    if (stagiaire) {
      console.log(
        `Moyenne pour ${nom}: ${stagiaire.calculermoyenne().toFixed(2)}`
      );
    } else {
      console.log(`Stagiaire ${nom} non trouvé`);
    }
  }
}

export class stagiaire {
  constructor(private nom: string, private notes: number[]) {}
  public get _nom(): string {
    return this.nom;
  }
  public set _nom(value: string) {
    this.nom = value;
  }

  public get _notes(): number[] {
    return this.notes;
  }
  public set _notes(value: number[]) {
    this.notes = value;
  }
  calculermoyenne(): number {
    if (this.notes.length === 0) {
      return 0;
    }
    const somme = this.notes.reduce((a, b) => a + b, 0);
    return somme / this.notes.length;
  }
  trouvermax() {
    return Math.max(...this.notes); // on utilise le "spread operator" donc "..." pour transformer le tableau en valeurs
  }
  trouvermin() {
    return Math.min(...this.notes);
  }
}

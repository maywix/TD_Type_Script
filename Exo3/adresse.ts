export class Adresse {
  // Constructeur avec paramètres typés
  constructor(
    private rue: string,
    private ville: string,
    private codePostal: string
  ) {}

  // Getters et setters pour rue
  public get _rue(): string {
    return this.rue;
  }

  public set _rue(value: string) {
    this.rue = value;
  }

  // Getters et setters pour ville
  public get _ville(): string {
    return this.ville;
  }

  public set _ville(value: string) {
    this.ville = value;
  }

  // Getters et setters pour codePostal
  public get _codePostal(): string {
    return this.codePostal;
  }

  public set _codePostal(value: string) {
    this.codePostal = value;
  }
}
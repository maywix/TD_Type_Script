import { Adresse } from "./adresse";

export class Personne {
  // Constructeur avec paramètres typés
  constructor(
    private nom: string,
    private sexe: string, // 'M' ou 'F'
    private adresses: Adresse[]
  ) {}

  // Getters et setters pour nom
  public get _nom(): string {
    return this.nom;
  }

  public set _nom(value: string) {
    this.nom = value;
  }

  // Getters et setters pour sexe
  public get _sexe(): string {
    return this.sexe;
  }

  public set _sexe(value: string) {
    this.sexe = value;
  }

  // Getters et setters pour adresses
  public get _adresses(): Adresse[] {
    return this.adresses;
  }

  public set _adresses(value: Adresse[]) {
    this.adresses = value;
  }
}
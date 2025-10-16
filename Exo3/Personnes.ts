import { adresse } from "./Adresses";

export class personne {
  private _nom: string;
  private _sexe: string;
  private _adresses: adresse[];

  //constructeur, sexe M ou F
  constructor(nom: string, sexe: string, adresses: adresse[] = []) {
    if (sexe !== "M" && sexe !== "F") {
      throw new Error("Le sexe doit être M ou F");
    }
    this._nom = nom;
    this._sexe = sexe;
    this._adresses = adresses;
  }

  //getters et setters
  get nom(): string {
    return this._nom;
  }
  set nom(value: string) {
    this._nom = value;
  }

  get sexe(): string {
    return this._sexe;
  }
  set sexe(value: string) {
    if (value !== "M" && value !== "F") {
      throw new Error("Le sexe doit être M ou F");
    }
    this._sexe = value;
  }

  get adresses(): adresse[] {
    return this._adresses;
  }
  set adresses(value: adresse[]) {
    this._adresses = value;
  }

  public getadressecomplete(): string {
    let result: string[] = [];
    for (let i = 0; i < this._adresses.length; i++) {
      result.push(this._adresses[i].getadressecomplete());
    }
    return result.join(` | `);
  }

  public ajouteradresse(uneadresse: adresse): void {
    this._adresses.push(uneadresse);
  }

  public getinfocomplete(): string {
    let adressesStr: string[] = [];
    for (let i = 0; i < this._adresses.length; i++) {
      adressesStr.push(this._adresses[i].getadressecomplete());
    }
    return `${this._nom}, ${this._sexe}, ${adressesStr.join(` | `)}`;
  }
}

//import de la classe point
import { point } from "./point";

//constructeur
export class TroisPoints {
  constructor(
    private premier: point,
    private deuxieme: point,
    private troisieme: point
  ) {}

  //getter et setter
  get _premier(): point {
    return this.premier;
  }

  set _premier(value: point) {
    this.premier = value;
  }

  get _deuxieme(): point {
    return this.deuxieme;
  }

  set _deuxieme(value: point) {
    this.deuxieme = value;
  }

  get _troisieme(): point {
    return this.troisieme;
  }

  set _troisieme(value: point) {
    this.troisieme = value;
  }

  testalignement(): boolean {
    const AB = this._premier.calculerdistance(this._deuxieme);
    const AC = this._premier.calculerdistance(this._troisieme);
    const BC = this._deuxieme.calculerdistance(this._troisieme);
    return (
      Math.abs(AB - (AC + BC)) < 0.001 ||
      Math.abs(AC - (AB + BC)) < 0.001 ||
      Math.abs(BC - (AB + AC)) < 0.001
    );
  }

  estisocele(): boolean {
    const AB = this._premier.calculerdistance(this._deuxieme);
    const AC = this._premier.calculerdistance(this._troisieme);
    const BC = this._deuxieme.calculerdistance(this._troisieme);
    return (
      Math.abs(AC - AB) < 0.001 ||
      Math.abs(AB - BC) < 0.001 ||
      Math.abs(AC - BC) < 0.001
    );
  }

  afficher(): string {
    return `Premier: ${this.premier.afficher()}, Deuxième: ${this.deuxieme.afficher()}, Troisième: ${this.troisieme.afficher()}`;
  }
}

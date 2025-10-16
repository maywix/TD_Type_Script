export class point {
  constructor(private _abs: number, private _ord: number) {}
  //get et set
  get abs(): number {
    return this._abs;
  }
  set abs(value: number) {
    this._abs = value;
  }
  get ord(): number {
    return this._ord;
  }
  set ord(value: number) {
    this._ord = value;
  }

  //Methode pour calculer la distance entre deux points
  calculerdistance(p: point) {
    return Math.sqrt(
      Math.pow(this._abs - p._abs, 2) + Math.pow(this._ord - p._ord, 2)
    );
  }

  static distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  //Methode calculer milieu
  calculermilieu(p: point): point {
    const xm = (this._abs + p.abs) / 2;
    const ym = (this.ord + p.ord) / 2;
    return new point(xm, ym);
  }
  afficher(): string {
    return `(${this._abs}, ${this._ord})`;
  }
}

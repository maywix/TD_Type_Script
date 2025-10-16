"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.point = void 0;
var point = /** @class */ (function () {
  function point(_abs, _ord) {
    this._abs = _abs;
    this._ord = _ord;
  }
  Object.defineProperty(point.prototype, "abs", {
    //get et set
    get: function () {
      return this._abs;
    },
    set: function (value) {
      this._abs = value;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(point.prototype, "ord", {
    get: function () {
      return this._ord;
    },
    set: function (value) {
      this._ord = value;
    },
    enumerable: false,
    configurable: true,
  });
  //Methode pour calculer la distance entre deux points
  point.prototype.calculerdistance = function (p) {
    return Math.sqrt(
      Math.pow(this._abs - p._abs, 2) + Math.pow(this._ord - p._ord, 2)
    );
  };
  point.distance = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  };
  //Methode calculer milieu
  point.prototype.calculermilieu = function (p) {
    var xm = (this._abs + p.abs) / 2;
    var ym = (this.ord + p.ord) / 2;
    return new point(xm, ym);
  };
  point.prototype.afficher = function () {
    return "(".concat(this._abs, ", ").concat(this._ord, ")");
  };
  return point;
})();
exports.point = point;

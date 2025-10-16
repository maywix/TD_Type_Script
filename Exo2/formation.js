"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
var Formation = /** @class */ (function () {
  function Formation(intitulé, nbrjours, stagiaires) {
    this.intitulé = intitulé;
    this.nbrjours = nbrjours;
    this.stagiaires = stagiaires;
  }
  Object.defineProperty(Formation.prototype, "_intitul\u00E9", {
    get: function () {
      return this.intitulé;
    },
    set: function (value) {
      this.intitulé = value;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Formation.prototype, "_nbrjours", {
    get: function () {
      return this.nbrjours;
    },
    set: function (value) {
      this.nbrjours = value;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Formation.prototype, "_stagiaires", {
    get: function () {
      return this.stagiaires;
    },
    set: function (value) {
      this.stagiaires = value;
    },
    enumerable: false,
    configurable: true,
  });
  Formation.prototype.calculerMoyenneFormation = function () {
    if (this.stagiaires.length === 0) return 0;
    var sommeMoyennes = this.stagiaires.reduce(function (sum, stagiaire) {
      return sum + stagiaire.calculermoyenne();
    }, 0);
    return sommeMoyennes / this.stagiaires.length;
  };
  // trouver l'indice du stagiaire avec la meilleure moyenne
  Formation.prototype.getIndexMax = function () {
    if (this._stagiaires.length === 0) return -1;
    var meilleureMoyenne = 0;
    var index = -1;
    for (var i = 0; i < this._stagiaires.length; i++) {
      if (this._stagiaires[i].calculermoyenne() > meilleureMoyenne) {
        meilleureMoyenne = this._stagiaires[i].calculermoyenne();
        index = i;
      }
    }
    return index;
  };
  //trouver la note minimale d'un stagiaire
  Formation.prototype.getNoteMinStagiaire = function (nom) {
    var stagiaire = null;
    for (var i = 0; i < this._stagiaires.length; i++) {
      if (this._stagiaires[i]._nom === nom) {
        stagiaire = this._stagiaires[i];
        break;
      }
    }
    if (stagiaire) {
      return stagiaire.trouvermin();
    }
    return -1; // ou gérer le cas où le stagiaire n'est pas trouvé
  };
  Formation.prototype.afficherNomMax = function () {
    var indexMax = this.getIndexMax();
    if (indexMax !== -1) {
      console.log(
        "Le meilleur stagiaire est : ".concat(this._stagiaires[indexMax]._nom)
      );
    } else {
      console.log("Aucun stagiaire dans la formation");
    }
  };
  Formation.prototype.afficherMinMax = function () {
    var indexMax = this.getIndexMax();
    if (indexMax !== -1) {
      var stagiaireMax = this._stagiaires[indexMax];
      console.log(
        "La note minimale du meilleur stagiaire est : ".concat(
          stagiaireMax.trouvermin()
        )
      );
    } else {
      console.log("Aucun stagiaire dans la formation");
    }
  };
  Formation.prototype.trouverMoyenneParNom = function (nom) {
    var stagiaire = null;
    for (var i = 0; i < this._stagiaires.length; i++) {
      if (this._stagiaires[i]._nom === nom) {
        stagiaire = this._stagiaires[i];
        break;
      }
    }
    if (stagiaire) {
      console.log(
        "Moyenne pour "
          .concat(nom, ": ")
          .concat(stagiaire.calculermoyenne().toFixed(2))
      );
    } else {
      console.log("Stagiaire ".concat(nom, " non trouv\u00E9"));
    }
  };
  return Formation;
})();
exports.Formation = Formation;

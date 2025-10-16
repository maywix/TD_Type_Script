"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testexo1 = void 0;
var point_1 = require("./point");
var troispoints_1 = require("./troispoints");
var Testexo1 = /** @class */ (function () {
    function Testexo1() {
    }
    Testexo1.runTests = function () {
        console.log("Début des tests de l'exercice 1");
        this.testerClassPoint();
    };
    Testexo1.testerClassPoint = function () {
        console.log("Test classe point");
        //Test 1: création et getters
        var pointA = new point_1.point(11, 22);
        var pointB = new point_1.point(80, 17);
        console.log("Point A", pointA.afficher());
        console.log("Point B", pointB.afficher());
        //Test 2: Setters
        pointA.abs = 3;
        pointB.abs = 5;
        console.log("Point A modifié", pointA.afficher());
        //Test 3: Distance entre points
        var distanceAB = pointA.calculerdistance(pointB);
        console.log("Distance A-B", distanceAB);
        //Test 4: Méthode statique
        var distanceStatique = point_1.point.distance(1, 2, 3, 4);
        console.log("Distance statique (1,2 to 4,6)", distanceStatique);
        //Test 5: Calcul du milieu
        var milieu = pointA.calculermilieu(pointB);
        console.log("Milieu A-B", milieu.afficher());
    };
    Testexo1.testalignement = function () {
        console.log("testalignement");
        //cas 1 aligné
        var troispointshorizontal = new troispoints_1.TroisPoints(new point_1.point(0, 0), new point_1.point(3, 0), new point_1.point(6, 0));
        troispointshorizontal.testalignement();
        console.log(troispointshorizontal.afficher());
        console.log("aligné (horizontal):", troispointshorizontal.testalignement());
        //cas 2 points aligne vertical
        var pointsalignes = new troispoints_1.TroisPoints(new point_1.point(0, 0), new point_1.point(0, 3), new point_1.point(0, 6));
        console.log(pointsalignes.afficher());
        console.log("aligné (vertical):", pointsalignes.testalignement());
    };
    return Testexo1;
}());
exports.Testexo1 = Testexo1;

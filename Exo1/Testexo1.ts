import { point } from "./point";
import { TroisPoints } from "./troispoints";
export class Testexo1 {
  static runTests(): void {
    console.log("Début des tests de l'exercice 1");
    this.testerClassPoint();
  }
  static testerClassPoint(): void {
    console.log("Test classe point");
    //Test 1: création et getters
    const pointA = new point(11, 22);
    const pointB = new point(80, 17);
    console.log("Point A", pointA.afficher());
    console.log("Point B", pointB.afficher());
    //Test 2: Setters
    pointA.abs = 3;
    pointB.abs = 5;
    console.log("Point A modifié", pointA.afficher());
    //Test 3: Distance entre points
    const distanceAB = pointA.calculerdistance(pointB);
    console.log("Distance A-B", distanceAB);
    //Test 4: Méthode statique
    const distanceStatique = point.distance(1, 2, 3, 4);
    console.log("Distance statique (1,2 to 4,6)", distanceStatique);
    //Test 5: Calcul du milieu
    const milieu = pointA.calculermilieu(pointB);
    console.log("Milieu A-B", milieu.afficher());
  }
  static testalignement(): void {
    console.log("testalignement");
    //cas 1 aligné
    const troispointshorizontal = new TroisPoints(
      new point(0, 0),
      new point(3, 0),
      new point(6, 0)
    );
    troispointshorizontal.testalignement();
    console.log(troispointshorizontal.afficher());
    console.log("aligné (horizontal):", troispointshorizontal.testalignement());
    //cas 2 points aligne vertical
    const pointsalignes = new TroisPoints(
      new point(0, 0),
      new point(0, 3),
      new point(0, 6)
    );
    console.log(pointsalignes.afficher());
    console.log("aligné (vertical):", pointsalignes.testalignement());
  }
}

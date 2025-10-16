import { formation } from "./formation";
import { stagiaire } from "./stagiaire";
export class Main{
  public static main():void{
    //initialisation des données
    const formation =Main.initialiserdonnees();
  }
}private static initialiserdonnees():formation{
    const stagiaires:stagiaire[]=[];
    stagiaires.push(new stagiaire("Alice",[12,14,16]));
    stagiaires.push(new stagiaire("Bob",[10,15,20]));
    stagiaires.push(new stagiaire("Charlie",[8,18,14]));
    const notes:number[]=[];
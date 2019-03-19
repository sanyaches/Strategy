import {AttackBehavior} from "./AttackBehavior";
import {Unit} from "../../Units/Unit";

export class Sabre implements AttackBehavior{
    damage: number = 75;
    range: number = 1;

    attack(targetUnit: Unit): void {
        console.log('shot an arrow to target' + this.damage+ 'HP')
    }
}
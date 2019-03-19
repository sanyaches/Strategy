import {AttackBehavior} from "./AttackBehavior";
import {Unit} from "../../Units/Unit";

export class Bow implements AttackBehavior{
    damage: number = 50;
    range: number = 5;

    attack(targetUnit: Unit): void {
        console.log('shot an arrow to target' + this.damage + 'HP')
    }
}
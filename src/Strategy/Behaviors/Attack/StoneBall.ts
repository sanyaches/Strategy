import {AttackBehavior} from "./AttackBehavior";
import {Unit} from "../../Units/Unit";

export class StoneBall implements AttackBehavior{
    damage: number = 100;
    range: number = 10;

    attack(): void {
        console.log('shot an arrow to target' + this.damage + 'HP')
    }
}
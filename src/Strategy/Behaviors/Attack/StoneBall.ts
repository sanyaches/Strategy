import {AttackBehavior} from "./AttackBehavior";
import {Unit} from "../../Units/Unit";

export class StoneBall implements AttackBehavior{
    damage: number = 100;
    range: number = 10;

    attack(targetUnit: Unit): void {
        targetUnit.health -= this.damage;
        if (targetUnit.health <= 0) targetUnit.isAlive = false;

        console.log('Unit: '+ typeof(targetUnit) + ' X: ' + targetUnit.position_x +
            ' Y: ' + targetUnit.position_y +'-' + this.damage + 'hp ');
    }
}
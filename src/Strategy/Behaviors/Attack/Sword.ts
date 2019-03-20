import {AttackBehavior} from "./AttackBehavior";
import {Unit} from "../../Units/Unit";

export class Sword implements AttackBehavior{
    damage: number = 50;
    range: number = 1;

    attack(targetUnit: Unit): void {
        targetUnit.health -= this.damage;
        if (targetUnit.health <= 0) targetUnit.isAlive = false;

        console.log('Unit: '+ typeof(targetUnit) + ' X: ' + targetUnit.position_x +
            ' Y: ' + targetUnit.position_y +'-' + this.damage + 'hp ');
    }
}
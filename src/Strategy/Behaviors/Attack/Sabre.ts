import {AttackBehavior} from "./AttackBehavior";
import {Unit} from "../../Units/Unit";

export class Sabre implements AttackBehavior{
    damage: number = 75;
    range: number = 1;

    attack(targetUnit: Unit): void {
        targetUnit.health -= this.damage;
        if (targetUnit.health <= 0) {
            targetUnit.isAlive = false;
            targetUnit.icon = '../src/Strategy/Icons/grave.png';
            targetUnit.icon_alternative = '../src/Strategy/Icons/grave.png';
            targetUnit.moveBehavior.speed = 0;
            targetUnit.attackBehavior.damage = 0;
            targetUnit.attackBehavior.range = 0;
        }

        console.log('Unit: '+ typeof(targetUnit) + ' X: ' + targetUnit.position_x +
            ' Y: ' + targetUnit.position_y +'-' + this.damage + 'hp ');
    }
}
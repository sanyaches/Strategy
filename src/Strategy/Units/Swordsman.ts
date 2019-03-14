import {Unit} from "./Unit";
import {Bow} from "../Behaviors/Attack/Bow";
import {MoveArcher} from "../Behaviors/Move/MoveArcher";
import {Sword} from "../Behaviors/Attack/Sword";
import {MoveSwordsman} from "../Behaviors/Move/MoveSwordsman";

export class Swordsman extends Unit{
    constructor(pos_x: number, pos_y: number, playerId: number) {
        super(pos_x, pos_y, playerId);
        this.attackBehavior = new Sword();
        this.moveBehavior = new MoveSwordsman();
        this.icon = '../src/Strategy/Icons/swordsman.png';
        this.icon_alternative = '../src/Strategy/Icons/swordsman_alternative.png';
        this.health = 100;

    }
}
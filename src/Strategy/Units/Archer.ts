import {Unit} from "./Unit";
import {Bow} from "../Behaviors/Attack/Bow";
import {MoveArcher} from "../Behaviors/Move/MoveArcher";

export class Archer extends Unit {
    constructor(pos_x: number, pos_y: number, playerId: number) {
        super(pos_x, pos_y, playerId);
        this.attackBehavior = new Bow();
        this.moveBehavior = new MoveArcher();
        this.icon = '../src/Strategy/Icons/archer.png';
        this.icon_alternative = '../src/Strategy/Icons/archer_alternative.png';
        this.health = 50;
    }
}
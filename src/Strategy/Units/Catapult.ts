import {Unit} from "./Unit";
import {Bow} from "../Behaviors/Attack/Bow";
import {MoveArcher} from "../Behaviors/Move/MoveArcher";
import {StoneBall} from "../Behaviors/Attack/StoneBall";
import {MoveCatapult} from "../Behaviors/Move/MoveCatapult";

export class Catapult extends Unit {
    constructor(pos_x: number, pos_y: number, playerId: number) {
        super(pos_x, pos_y, playerId);
        this.attackBehavior = new StoneBall();
        this.moveBehavior = new MoveCatapult();
        this.icon = '../src/Strategy/Icons/catapult.png';
        this.icon_alternative = '../src/Strategy/Icons/catapult_alternative.png';
        this.health = 75;
    }

}
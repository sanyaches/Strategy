import {Unit} from "./Unit";
import {Bow} from "../Behaviors/Attack/Bow";
import {MoveArcher} from "../Behaviors/Move/MoveArcher";
import {Sabre} from "../Behaviors/Attack/Sabre";
import {MoveHorseman} from "../Behaviors/Move/MoveHorseman";

export class Horseman extends Unit {
    constructor(pos_x: number, pos_y: number, playerId: number) {
        super(pos_x, pos_y, playerId);
        this.attackBehavior = new Sabre();
        this.moveBehavior = new MoveHorseman();
        this.icon = '../src/Strategy/Icons/horseman_alternative.png';
        this.icon_alternative = '../src/Strategy/Icons/horseman_alternative.png';
        this.health = 200;

    }

}
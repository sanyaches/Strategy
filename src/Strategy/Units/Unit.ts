import {AttackBehavior} from "../Behaviors/Attack/AttackBehavior";
import {MoveBehavior} from "../Behaviors/Move/MoveBehavior";
import {Area} from "../Map/Area";

export class Unit {
    position_x: number;
    position_y: number;
    playerId: number;

    constructor(pos_x: number, pos_y: number, playerid: number){
        this.position_x = pos_x;
        this.position_y = pos_y;
        this.playerId = playerid;
        this.isAlive = true;
    }

    attackBehavior: AttackBehavior;
    moveBehavior: MoveBehavior;
    area: Area;
    health: number;
    isAlive: boolean;
    icon: string;
    icon_alternative: string;

    Attack(){
        this.attackBehavior.attack()
    };

    Move(){
        this.moveBehavior.move();
    };
}
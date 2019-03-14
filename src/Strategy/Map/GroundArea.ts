import {Area} from "./Area";

export class GroundArea extends Area{

    constructor(pos_x: number, pos_y: number){
        super(pos_x, pos_y);
        this.image = '../src/Strategy/Icons/ground.png';
        this.canMove = true;
    }

}


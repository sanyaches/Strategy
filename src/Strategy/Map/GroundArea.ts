import {Area} from "./Area";

export class GroundArea extends Area{
    canMove = true;
    image = '../src/Strategy/Icons/ground.png';

    constructor(pos_x: number, pos_y: number){
        super(pos_x, pos_y);
    }

}


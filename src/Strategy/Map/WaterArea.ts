import {Area} from "./Area";

export class WaterArea extends Area{
    canMove = false;
    image: string = '../src/Strategy/Icons/water.png';

    constructor(pos_x: number, pos_y: number){
        super(pos_x, pos_y);

    }
}
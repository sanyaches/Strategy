import {Area} from "./Area";

export class GraveArea extends Area{
    canMove: boolean = false;
    image: string = '../src/Strategy/Icons/death.png';

    constructor(pos_x: number, pos_y: number){
        super(pos_x, pos_y);

    }
}
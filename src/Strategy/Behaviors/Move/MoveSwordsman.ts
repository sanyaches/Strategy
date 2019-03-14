import {MoveBehavior} from "./MoveBehavior";
import {Area} from "../../Map/Area";

export class MoveSwordsman implements MoveBehavior{
    speed: number = 5;

    move(): void {
        console.log('Can move' + this.speed + ' steps.')
    }
}
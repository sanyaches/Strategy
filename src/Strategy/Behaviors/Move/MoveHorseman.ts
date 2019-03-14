import {MoveBehavior} from "./MoveBehavior";
import {Area} from "../../Map/Area";

export class MoveHorseman implements MoveBehavior{
    speed: number = 10;

    move(): void {
        console.log('Can move' + this.speed + ' steps.')
    }
}
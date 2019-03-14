import {MoveBehavior} from "./MoveBehavior";
import {Area} from "../../Map/Area";

export class MoveArcher implements MoveBehavior{
    speed = 3;

    move(): void {
        console.log('Can move' + this.speed + ' steps.')
    }
}
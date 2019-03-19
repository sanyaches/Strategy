import {MoveBehavior} from "./MoveBehavior";
import {Area} from "../../Map/Area";

export class MoveCatapult implements MoveBehavior{
    speed: number = 1;

    move(targetArea: Area): void {
        console.log('Can move' + this.speed + ' steps.')
    }
}
import {Area} from "../../Map/Area";

export interface MoveBehavior {
    speed: number;

    move(targetArea: Area): void;
}
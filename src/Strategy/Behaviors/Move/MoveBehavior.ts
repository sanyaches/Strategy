import {Area} from "../../Map/Area";

export interface MoveBehavior {
    speed: number;

    move(): void;
}
import {Area} from "../../Map/Area";
import {Unit} from "../../Units/Unit";

export interface MoveBehavior {
    speed: number;

    move(unit: Unit, targetArea: Area): void;
}
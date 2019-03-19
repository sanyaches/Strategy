import {Unit} from "../../Units/Unit";

export interface AttackBehavior {
    damage: number;
    range: number;

    attack(targetUnit: Unit): void;
}
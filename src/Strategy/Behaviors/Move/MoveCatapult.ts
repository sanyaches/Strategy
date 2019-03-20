import {MoveBehavior} from "./MoveBehavior";
import {Area} from "../../Map/Area";
import {Unit} from "../../Units/Unit";

export class MoveCatapult implements MoveBehavior{
    speed: number = 1;

    move(unit: Unit, targetArea: Area): void {
        console.log('Unit: '+ typeof(unit) + ' X: ' + unit.position_x +
            ' Y: ' + unit.position_y +' move to ' + ' X: ' + targetArea.position_x +
            ' Y: ' + targetArea.position_y);

        unit.position_x = targetArea.position_x;
        unit.position_y = targetArea.position_y;
    }
}
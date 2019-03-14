export class Area {
    position_x: number;
    position_y: number;
    image: string;
    canMove: boolean;

    constructor (pos_x: number, pos_y: number){
        this.position_x = pos_x;
        this.position_y = pos_y;
    }

}
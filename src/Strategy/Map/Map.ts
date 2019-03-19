import {Area} from "./Area";
import {GroundArea} from "./GroundArea";
import {WaterArea} from "./WaterArea";
import {Unit} from "../Units/Unit";
import {Archer} from "../Units/Archer";
import {Horseman} from "../Units/Horseman";
import {Swordsman} from "../Units/Swordsman";
import {Catapult} from "../Units/Catapult";

export class Map {
    rows: number;
    cols: number;
    map: Array<Array<Area>>;
    units: Array<Unit>;
    currentUnit: Unit;
    mayMoveCells: Array<HTMLElement> = []; //DIVS
    mayAttackCells: Array<HTMLElement> = []; //DIVS

    constructor(i: number, j: number){
        this.rows = i;
        this.cols = j;
    }

    print_grid(){
        let c_canvas = <HTMLCanvasElement> document.getElementById("setka");
        let context = c_canvas.getContext("2d");

        for (let x = 0; x <= 720; x += 36) {
          context.moveTo(x, 0);
          context.lineTo(x, 720);
        }

        for (let y = 0; y <= 720; y += 36) {
          context.moveTo(0, y);
          context.lineTo(720, y);
        }

        context.strokeStyle = "#888";
        context.lineWidth = 4;
        context.stroke();
    }

    load_map_texture_logic(obj: object){
        // console.log(obj);
        let areas = (obj as any).areas;
        let result_map: Array<Array<Area>> = [];

        for (let i:number = 0; i < areas.length; i++) {
            let arr: Array<Area> = [];

            for (let j = 0; j < areas[i].length; j++) {

                switch(areas[i][j]) {
                   case "Grnd": {
                      arr.push(new GroundArea(i, j ));
                      break;
                   }
                   case "Water": {
                      arr.push(new WaterArea(i, j ));
                      break;
                   }
                   default: {
                      arr.push(new GroundArea(i, j ));
                      break;
                   }
                }

            }
            // console.log(arr);
            result_map.push(arr);
        }

        // console.log(result_map);
        this.map = result_map;
    }

    draw_map_texture(){
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let div = document.createElement("div");
                let div_position = ("position: absolute;");
                let div_left = "left: " + (36 * j + 10) + "px;";
                let div_top = "top: " + (36 * i + 10) + "px;";
                let div_width = "width: " + 32 + "px;";
                let div_height = "height: " + 32 + "px;";
                let yourVar = this.map[i][j].image;
                let div_background_image = 'background-image: url(' + yourVar + ');';
                let area_z_index = 'z-index: 1;';
                let newStyle = div_position + div_left + div_top + div_width + div_height +
                    div_background_image + area_z_index;

                div.setAttribute("style", newStyle);

                document.body.appendChild(div);
            }
        }
    }

    init_units() {
        let request = new XMLHttpRequest();
        request.open("GET", "../src/Strategy/Map/units.json", false);
        request.send(null);
        let my_JSON_object = JSON.parse(request.responseText);
        let units_from_json = my_JSON_object.units;

        let units = [];
        for (let i = 0; i < units_from_json.length; i++) {

            switch(units_from_json[i].type) {
               case "Archer": {
                  units.push(new Archer(units_from_json[i].pos_x, units_from_json[i].pos_y,
                      units_from_json[i].player_id));
                  break;
               }
               case "Horseman": {
                  units.push(new Horseman(units_from_json[i].pos_x, units_from_json[i].pos_y,
                      units_from_json[i].player_id));
                  break;
               }
               case "Swordsman": {
                  units.push(new Swordsman(units_from_json[i].pos_x, units_from_json[i].pos_y,
                      units_from_json[i].player_id));
                  break;
               }
               case "Catapult": {
                  units.push(new Catapult(units_from_json[i].pos_x, units_from_json[i].pos_y,
                      units_from_json[i].player_id));
                  break;
               }
               default: {
                  alert("Unreadable Type of Unit! Error!!!");
                  break;
               }
            }
        }

        this.units = units;
    }

    draw_map_unit() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                for (let k = 0; k < this.units.length; k++) {
                    if (this.units[k].position_x == j && this.units[k].position_y == i) {
                        let div = document.createElement("div");
                        let div_position = ("position: absolute;");
                        let div_left = "left: " + (36 * j + 10) + "px;";
                        let div_top = "top: " + (36 * i + 10) + "px;";
                        let div_width = "width: " + 32 + "px;";
                        let div_height = "height: " + 32 + "px;";
                        let yourVar: string;

                        /** Меняем иконку на развернутую если игрок с другим 'playerId' */
                        if (this.units[k].playerId == 0) {
                            yourVar = this.units[k].icon;
                        }
                        else {
                            yourVar = this.units[k].icon_alternative;
                        }
                        let div_background_image = 'background-image: url(' + yourVar + ');';

                        /** 'Unit' должен быть поверх 'Area' */
                        let area_z_index = 'z-index: 2;';
                        let newStyle = div_position + div_left + div_top + div_width + div_height +
                            div_background_image + area_z_index;

                        div.setAttribute("style", newStyle);
                        document.body.appendChild(div);
                    }
                }
            }
        }
    }

    click_logic(){
        let self = this;

        let getDivs = function (elements: Array<HTMLElement>) {
            let divs = [] as Array<HTMLElement>;
            for (let i = 0; i < elements.length; i++)
                if(elements[i].tagName == 'DIV') divs.push(elements[i]);

            return divs;
        };

        let getUnit = function (x: number, y: number) {
            for (let i = 0; i < self.units.length; i++) {
                if ( (self.units[i].position_x == x) && (self.units[i].position_y == y) ) {
                    return self.units[i];
                }
            }
        };

        let getArea = function (x: number, y: number) {
            for (let i = 0; i < self.rows; i++) {
                for (let j = 0; j < self.cols; j++) {
                    if ( (self.map[i][j].position_x == x) && (self.map[i][j].position_y) ) {
                        return self.map[i][j];
                    }
                }

            }
        };

        let upgradeMap = function (){

        };

        document.body.onclick = function(event: MouseEvent) {

            /** Все элементы 'div' из координат клика помещаем в 'Array<HTMLElement>' */
            let elements = document.elementsFromPoint(event.clientX, event.clientY) as Array<HTMLElement>;
            let divs = getDivs(elements);


            /** Первый клик по юниту */
            if ( divs.length == 2 && self.currentUnit == undefined ) {  // before if OK

                /**
                 * Обработка первого клика (выбор юнита для действия)
                 * divs[0] --> Unit; divs[1] --> Area
                 */
                // document.body.setAttribute('flag', '1');

                // if ( document.body.getAttribute('flag') == '1' ) {
                alert('Start stage 1!');
                // document.body.setAttribute('flag', '1');

                /** Подсветка выбранного юнита красным */
                divs[0].style.backgroundColor = "rgba( 255, 1, 0, 0.3)";


                /** Get logic coordinates = Unit ( PositionX ; PositionY ) range(20) */
                let clickX = event.clientX, clickY = event.clientY;
                let unitPositionX = Math.floor( (clickX - 10) / 36 );
                let unitPositionY = Math.floor( (clickY - 10) / 36 );

                /** Запоминаем Юнита, по которому кликнули */
                let currentUnit: Unit;
                // let units: Array<Unit> = self.units;
                currentUnit = getUnit(unitPositionX, unitPositionY);
                console.log(currentUnit);
                self.currentUnit = currentUnit;

                /** Получаем speed - скорость ходьбы и range - дальность атаки */
                let speed = currentUnit.moveBehavior.speed;
                let range = currentUnit.attackBehavior.range;

                /**
                 * Найдём клетки, в которые можно ходить
                 * speed >= r = sqrt( sqr(x1-x2) + sqr(y1-y2) )
                 * физические координаты к логическим относятся так:
                 * (i, j) ==> (X, Y) = (j * 36 + 10 px; i * 36 + 10)
                 * Так же отберем клетки тех юнитов, до которых можно дотянуться
                 * range >= r = sqrt( sqr(x1-x2) + sqr(y1-y2) )
                 */

                for (let i = 0; i < self.rows; i++) {
                    for (let j = 0; j < self.cols; j++) {

                        // Условие для ходьбы
                        if ( speed >= Math.sqrt( Math.pow( (j - currentUnit.position_x), 2) +
                            Math.pow( (i - currentUnit.position_y), 2 ) ) ) {

                            /**
                             * Если 'div' один в координате и Area.canMove
                             * то кладём в клетки, в которые можно ходить
                             */
                            let elements = document.elementsFromPoint(
                                j * 36 + 10, i * 36 + 10) as Array<HTMLElement>;
                            let divs = getDivs(elements);

                            if (divs.length == 1 && self.map[i][j].canMove) {
                                self.mayMoveCells.push(divs[0]);
                            }

                        }

                        // Условие для атаки
                        if ( range >= Math.sqrt( Math.pow( (j - currentUnit.position_x), 2) +
                            Math.pow( (i - currentUnit.position_y), 2 ) ) ) {
                            /**
                             * Если div-а два в координате и 'playerId' у targetUnit и currentUnit отличаются
                             * то кладём в клетки, юнитов из которых можно атаковать
                             */
                            let elements = document.elementsFromPoint(
                                j * 36 + 10, i * 36 + 10) as Array<HTMLElement>;
                            let divs = getDivs(elements);
                            if (divs.length == 2 && ( getUnit(j, i).playerId != currentUnit.playerId ) ) {
                                self.mayAttackCells.push(divs[1]);
                            }
                        }
                    }
                }

                /** Подсветим mayMoveCells и mayAttackCells */
                for (let i = 0; i < self.mayMoveCells.length; i++) {
                    self.mayMoveCells[i].style.backgroundImage = "url('../src/Strategy/Icons/ground_select.jpg')";
                }
                for (let i = 0; i < self.mayAttackCells.length; i++) {
                    self.mayAttackCells[i].style.backgroundImage = "url('../src/Strategy/Icons/ground_select.jpg')";
                }

                /** Обработка первого клика завершена, идём ждать второго клика */

            }

            // flag == 1, current Unit defined
            if ( self.currentUnit != undefined ) {

                /** Начало обработки второго клика */
                alert('Start stage 2!');

                /** Get logic coordinates = Area ( PositionX ; PositionY ) range(20) */
                    let clickX = event.clientX, clickY = event.clientY;
                    let areaPositionX = Math.floor( (clickX - 10) / 36 );
                    let areaPositionY = Math.floor( (clickY - 10) / 36 );

                /**
                 * Либо div второго клика - земля, либо вражеский юнит
                 * Если в Divs 1 элемент то это область на которую хочет перейти пользователь
                 */
                if (divs.length == 1 && self.mayMoveCells.includes(divs[0]) ) {

                    /** Запоминаем Область, по которой кликнули */
                    let currentArea: Area;
                    currentArea = getArea(areaPositionX, areaPositionY);
                    console.log(currentArea);

                    /** Собственно идём в Area */
                    self.currentUnit.move(currentArea);
                    upgradeMap();
                }

                /** Если второго клик по вражескому юниту */
                if ( divs.length == 2 && self.mayAttackCells.includes(divs[1]) ) {

                    /** Запоминаем Юнита, по которой кликнули */
                    let targetUnit: Unit;
                    targetUnit = getUnit(areaPositionX, areaPositionY);
                    console.log(targetUnit);

                    /** Собственно бьём по TargetUnit */
                    self.currentUnit.attack(targetUnit);
                    upgradeMap();
                }

                /** Конец обработки второго клика - подтираем всё дело */
                document.body.setAttribute('flag', null);
                self.currentUnit = undefined;

                /** Подсветку уберём: поменяем bckgrnd-img и очистим mayMoveCells и mayAttackCells */
                for (let i = 0; i < self.mayMoveCells.length; i++) {
                    self.mayMoveCells[i].style.backgroundImage = "url('../src/Strategy/Icons/ground.png')";
                }
                for (let i = 0; i < self.mayAttackCells.length; i++) {
                    self.mayAttackCells[i].style.backgroundImage = "url('../src/Strategy/Icons/ground.png')";
                }
                self.mayMoveCells = [];
                self.mayAttackCells = [];


            }

        };
    }
}
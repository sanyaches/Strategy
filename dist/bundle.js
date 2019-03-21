(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bow {
    constructor() {
        this.damage = 50;
        this.range = 5;
    }
    attack(targetUnit) {
        targetUnit.health -= this.damage;
        if (targetUnit.health <= 0) {
            targetUnit.isAlive = false;
            targetUnit.icon = '../src/Strategy/Icons/grave.png';
            targetUnit.icon_alternative = '../src/Strategy/Icons/grave.png';
            targetUnit.moveBehavior.speed = 0;
            targetUnit.attackBehavior.damage = 0;
            targetUnit.attackBehavior.range = 0;
        }
        console.log('Unit: ' + typeof (targetUnit) + ' X: ' + targetUnit.position_x +
            ' Y: ' + targetUnit.position_y + '-' + this.damage + 'hp ');
    }
}
exports.Bow = Bow;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sabre {
    constructor() {
        this.damage = 75;
        this.range = 1;
    }
    attack(targetUnit) {
        targetUnit.health -= this.damage;
        if (targetUnit.health <= 0)
            targetUnit.isAlive = false;
        console.log('Unit: ' + typeof (targetUnit) + ' X: ' + targetUnit.position_x +
            ' Y: ' + targetUnit.position_y + '-' + this.damage + 'hp ');
    }
}
exports.Sabre = Sabre;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StoneBall {
    constructor() {
        this.damage = 100;
        this.range = 10;
    }
    attack(targetUnit) {
        targetUnit.health -= this.damage;
        if (targetUnit.health <= 0)
            targetUnit.isAlive = false;
        console.log('Unit: ' + typeof (targetUnit) + ' X: ' + targetUnit.position_x +
            ' Y: ' + targetUnit.position_y + '-' + this.damage + 'hp ');
    }
}
exports.StoneBall = StoneBall;
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sword {
    constructor() {
        this.damage = 50;
        this.range = 1;
    }
    attack(targetUnit) {
        targetUnit.health -= this.damage;
        if (targetUnit.health <= 0)
            targetUnit.isAlive = false;
        console.log('Unit: ' + typeof (targetUnit) + ' X: ' + targetUnit.position_x +
            ' Y: ' + targetUnit.position_y + '-' + this.damage + 'hp ');
    }
}
exports.Sword = Sword;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoveArcher {
    constructor() {
        this.speed = 3;
    }
    move(unit, targetArea) {
        console.log('Unit: ' + typeof (unit) + ' X: ' + unit.position_x +
            ' Y: ' + unit.position_y + ' move to ' + ' X: ' + targetArea.position_x +
            ' Y: ' + targetArea.position_y);
        unit.position_x = targetArea.position_x;
        unit.position_y = targetArea.position_y;
    }
}
exports.MoveArcher = MoveArcher;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoveCatapult {
    constructor() {
        this.speed = 1;
    }
    move(unit, targetArea) {
        console.log('Unit: ' + typeof (unit) + ' X: ' + unit.position_x +
            ' Y: ' + unit.position_y + ' move to ' + ' X: ' + targetArea.position_x +
            ' Y: ' + targetArea.position_y);
        unit.position_x = targetArea.position_x;
        unit.position_y = targetArea.position_y;
    }
}
exports.MoveCatapult = MoveCatapult;
},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoveHorseman {
    constructor() {
        this.speed = 10;
    }
    move(unit, targetArea) {
        console.log('Unit: ' + typeof (unit) + ' X: ' + unit.position_x +
            ' Y: ' + unit.position_y + ' move to ' + ' X: ' + targetArea.position_x +
            ' Y: ' + targetArea.position_y);
        unit.position_x = targetArea.position_x;
        unit.position_y = targetArea.position_y;
    }
}
exports.MoveHorseman = MoveHorseman;
},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoveSwordsman {
    constructor() {
        this.speed = 5;
    }
    move(unit, targetArea) {
        console.log('Unit: ' + typeof (unit) + ' X: ' + unit.position_x +
            ' Y: ' + unit.position_y + ' move to ' + ' X: ' + targetArea.position_x +
            ' Y: ' + targetArea.position_y);
        unit.position_x = targetArea.position_x;
        unit.position_y = targetArea.position_y;
    }
}
exports.MoveSwordsman = MoveSwordsman;
},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Area {
    constructor(pos_x, pos_y) {
        this.position_x = pos_x;
        this.position_y = pos_y;
    }
}
exports.Area = Area;
},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Area_1 = require("./Area");
class GroundArea extends Area_1.Area {
    constructor(pos_x, pos_y) {
        super(pos_x, pos_y);
        this.canMove = true;
        this.image = '../src/Strategy/Icons/ground.png';
    }
}
exports.GroundArea = GroundArea;
},{"./Area":9}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lvl1_texture {
    constructor() {
        this.Lvl1_texture = {
            "areas": [
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ],
                [
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Water", "Water", "Water", "Water", "Grnd",
                    "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd", "Grnd"
                ]
            ]
        };
    }
}
exports.Lvl1_texture = Lvl1_texture;
},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GroundArea_1 = require("./GroundArea");
const WaterArea_1 = require("./WaterArea");
const Archer_1 = require("../Units/Archer");
const Horseman_1 = require("../Units/Horseman");
const Swordsman_1 = require("../Units/Swordsman");
const Catapult_1 = require("../Units/Catapult");
// import {loadRules} from "tslint";
class Map {
    constructor(i, j) {
        this.mayMoveCells = []; //DIVS
        this.mayAttackCells = []; //DIVS
        this.rows = i;
        this.cols = j;
    }
    print_grid() {
        let c_canvas = document.getElementById("setka");
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
    load_map_texture_logic(obj) {
        // console.log(obj);
        let areas = obj.areas;
        let result_map = [];
        for (let i = 0; i < areas.length; i++) {
            let arr = [];
            for (let j = 0; j < areas[i].length; j++) {
                switch (areas[i][j]) {
                    case "Grnd": {
                        arr.push(new GroundArea_1.GroundArea(j, i));
                        break;
                    }
                    case "Water": {
                        arr.push(new WaterArea_1.WaterArea(j, i));
                        break;
                    }
                    default: {
                        arr.push(new GroundArea_1.GroundArea(j, i));
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
    draw_map_texture() {
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
            switch (units_from_json[i].type) {
                case "Archer": {
                    units.push(new Archer_1.Archer(units_from_json[i].pos_x, units_from_json[i].pos_y, units_from_json[i].player_id));
                    break;
                }
                case "Horseman": {
                    units.push(new Horseman_1.Horseman(units_from_json[i].pos_x, units_from_json[i].pos_y, units_from_json[i].player_id));
                    break;
                }
                case "Swordsman": {
                    units.push(new Swordsman_1.Swordsman(units_from_json[i].pos_x, units_from_json[i].pos_y, units_from_json[i].player_id));
                    break;
                }
                case "Catapult": {
                    units.push(new Catapult_1.Catapult(units_from_json[i].pos_x, units_from_json[i].pos_y, units_from_json[i].player_id));
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
                        let yourVar;
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
    click_logic() {
        let self = this;
        /** Из всех элементов выбирает divs */
        let getDivs = function (elements) {
            let divs = [];
            for (let i = 0; i < elements.length; i++)
                if (elements[i].tagName == 'DIV')
                    divs.push(elements[i]);
            return divs;
        };
        /** По логическим координатам возвращает Unit */
        let getUnit = function (x, y) {
            for (let i = 0; i < self.units.length; i++) {
                if ((self.units[i].position_x == x) && (self.units[i].position_y == y)) {
                    return self.units[i];
                }
            }
        };
        /** По логическим координатам возвращает Area */
        let getArea = function (x, y) {
            for (let i = 0; i < self.rows; i++) {
                for (let j = 0; j < self.cols; j++) {
                    if ((self.map[i][j].position_x == x) && (self.map[i][j].position_y == y)) {
                        return self.map[i][j];
                    }
                }
            }
        };
        /** Подтирает старые дивы юнитов и рисует новые по обновленной логической карте */
        let clearUnit = function () {
            for (let i = 0; i < self.units.length; i++) {
                let divsUnit = getDivs(document.elementsFromPoint(self.units[i].position_x * 36 + 10, self.units[i].position_y * 36 + 10));
                divsUnit[0].parentNode.removeChild(divsUnit[0]);
            }
        };
        /** Массиву ячеек меняет background-image */
        let changeBackground = function (cells, backgroundUrl) {
            for (let i = 0; i < cells.length; i++)
                cells[i].style.backgroundImage = backgroundUrl;
        };
        /** Логика кликов */
        document.body.onclick = function (event) {
            let flag = 0;
            /** Все элементы 'div' из координат клика помещаем в 'Array<HTMLElement>' */
            let elements = document.elementsFromPoint(event.clientX, event.clientY);
            let divs = getDivs(elements);
            /** Get coordinates Logic and Physical */
            let physicalX = event.clientX, physicalY = event.clientY;
            let logicX = Math.floor((physicalX - 10) / 36);
            let logicY = Math.floor((physicalY - 10) / 36);
            /** Первый клик по юниту */
            if (divs.length == 2 && self.currentUnit == undefined) { // before if OK
                /**
                 * Обработка первого клика (выбор юнита для действия)
                 * divs[0] --> Unit; divs[1] --> Area
                 */
                flag = 1;
                /** Подсветка выбранного юнита красным */
                divs[0].style.backgroundColor = "rgba( 255, 1, 0, 0.3)";
                /** Запоминаем Юнита, по которому кликнули */
                let currentUnit;
                currentUnit = getUnit(logicX, logicY);
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
                        let elementsMap = document.elementsFromPoint(j * 36 + 10, i * 36 + 10);
                        let divsMap = getDivs(elementsMap);
                        // Условие для ходьбы
                        if (speed >= Math.sqrt(Math.pow((j - currentUnit.position_x), 2) +
                            Math.pow((i - currentUnit.position_y), 2))) {
                            /**
                             * Если 'div' один в координате и Area.canMove
                             * то кладём в клетки, в которые можно ходить
                             */
                            if (divsMap.length == 1 && self.map[i][j].canMove) {
                                self.mayMoveCells.push(divsMap[0]);
                            }
                        }
                        // Условие для атаки
                        if (range >= Math.sqrt(Math.pow((j - currentUnit.position_x), 2) +
                            Math.pow((i - currentUnit.position_y), 2))) {
                            /**
                             * Если div-а два в координате и 'playerId' у targetUnit и currentUnit отличаются
                             * то кладём в клетки, юнитов из которых можно атаковать
                             */
                            if (divsMap.length == 2 && (getUnit(j, i).playerId != currentUnit.playerId) &&
                                getUnit(j, i).isAlive) {
                                self.mayAttackCells.push(divsMap[1]);
                            }
                        }
                    }
                }
                /** Подсветим mayMoveCells и mayAttackCells */
                changeBackground(self.mayMoveCells, "url('../src/Strategy/Icons/ground_select.jpg')");
                changeBackground(self.mayAttackCells, "url('../src/Strategy/Icons/ground_select.jpg')");
                /** Обработка первого клика завершена, идём ждать второго клика */
            }
            // current Unit defined
            if (self.currentUnit != undefined && flag == 0) {
                /** Начало обработки второго клика */
                /**
                 * Либо div второго клика - земля, либо вражеский юнит
                 * Если в Divs 1 элемент то это область на которую хочет перейти пользователь
                 */
                if (divs.length == 1 && self.mayMoveCells.includes(divs[0])) {
                    /** Запоминаем Область, по которой кликнули */
                    let currentArea;
                    currentArea = getArea(logicX, logicY);
                    console.log(currentArea);
                    /** Собственно идём в Area */
                    clearUnit();
                    self.currentUnit.move(self.currentUnit, currentArea);
                    self.draw_map_unit();
                }
                /** Если второго клик по вражескому юниту */
                if (divs.length == 2 && self.mayAttackCells.includes(divs[1])) {
                    /** Запоминаем Юнита, по которой кликнули */
                    let targetUnit;
                    targetUnit = getUnit(logicX, logicY);
                    console.log(targetUnit);
                    /** Собственно бьём по TargetUnit */
                    clearUnit();
                    self.currentUnit.attack(targetUnit);
                    self.draw_map_unit();
                }
                /** Конец обработки второго клика - подтираем всё дело */
                self.currentUnit = undefined;
                /** Подсветку уберём: поменяем background-image и очистим mayMoveCells и mayAttackCells */
                changeBackground(self.mayMoveCells, "url('../src/Strategy/Icons/ground.png')");
                changeBackground(self.mayAttackCells, "url('../src/Strategy/Icons/ground.png')");
                self.mayMoveCells = [];
                self.mayAttackCells = [];
            }
        };
    }
}
exports.Map = Map;
},{"../Units/Archer":14,"../Units/Catapult":15,"../Units/Horseman":16,"../Units/Swordsman":17,"./GroundArea":10,"./WaterArea":13}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Area_1 = require("./Area");
class WaterArea extends Area_1.Area {
    constructor(pos_x, pos_y) {
        super(pos_x, pos_y);
        this.canMove = false;
        this.image = '../src/Strategy/Icons/water.png';
    }
}
exports.WaterArea = WaterArea;
},{"./Area":9}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Unit_1 = require("./Unit");
const Bow_1 = require("../Behaviors/Attack/Bow");
const MoveArcher_1 = require("../Behaviors/Move/MoveArcher");
class Archer extends Unit_1.Unit {
    constructor(pos_x, pos_y, playerId) {
        super(pos_x, pos_y, playerId);
        this.attackBehavior = new Bow_1.Bow();
        this.moveBehavior = new MoveArcher_1.MoveArcher();
        this.icon = '../src/Strategy/Icons/archer.png';
        this.icon_alternative = '../src/Strategy/Icons/archer_alternative.png';
        this.health = 50;
    }
}
exports.Archer = Archer;
},{"../Behaviors/Attack/Bow":1,"../Behaviors/Move/MoveArcher":5,"./Unit":18}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Unit_1 = require("./Unit");
const StoneBall_1 = require("../Behaviors/Attack/StoneBall");
const MoveCatapult_1 = require("../Behaviors/Move/MoveCatapult");
class Catapult extends Unit_1.Unit {
    constructor(pos_x, pos_y, playerId) {
        super(pos_x, pos_y, playerId);
        this.attackBehavior = new StoneBall_1.StoneBall();
        this.moveBehavior = new MoveCatapult_1.MoveCatapult();
        this.icon = '../src/Strategy/Icons/catapult.png';
        this.icon_alternative = '../src/Strategy/Icons/catapult_alternative.png';
        this.health = 75;
    }
}
exports.Catapult = Catapult;
},{"../Behaviors/Attack/StoneBall":3,"../Behaviors/Move/MoveCatapult":6,"./Unit":18}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Unit_1 = require("./Unit");
const Sabre_1 = require("../Behaviors/Attack/Sabre");
const MoveHorseman_1 = require("../Behaviors/Move/MoveHorseman");
class Horseman extends Unit_1.Unit {
    constructor(pos_x, pos_y, playerId) {
        super(pos_x, pos_y, playerId);
        this.attackBehavior = new Sabre_1.Sabre();
        this.moveBehavior = new MoveHorseman_1.MoveHorseman();
        this.icon = '../src/Strategy/Icons/horseman.png';
        this.icon_alternative = '../src/Strategy/Icons/horseman_alternative.png';
        this.health = 200;
    }
}
exports.Horseman = Horseman;
},{"../Behaviors/Attack/Sabre":2,"../Behaviors/Move/MoveHorseman":7,"./Unit":18}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Unit_1 = require("./Unit");
const Sword_1 = require("../Behaviors/Attack/Sword");
const MoveSwordsman_1 = require("../Behaviors/Move/MoveSwordsman");
class Swordsman extends Unit_1.Unit {
    constructor(pos_x, pos_y, playerId) {
        super(pos_x, pos_y, playerId);
        this.attackBehavior = new Sword_1.Sword();
        this.moveBehavior = new MoveSwordsman_1.MoveSwordsman();
        this.icon = '../src/Strategy/Icons/swordsman.png';
        this.icon_alternative = '../src/Strategy/Icons/swordsman_alternative.png';
        this.health = 100;
    }
}
exports.Swordsman = Swordsman;
},{"../Behaviors/Attack/Sword":4,"../Behaviors/Move/MoveSwordsman":8,"./Unit":18}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Unit {
    constructor(pos_x, pos_y, playerid) {
        this.position_x = pos_x;
        this.position_y = pos_y;
        this.playerId = playerid;
        this.isAlive = true;
    }
    attack(targetUnit) {
        this.attackBehavior.attack(targetUnit);
    }
    ;
    move(unit, targetArea) {
        this.moveBehavior.move(unit, targetArea);
    }
    ;
}
exports.Unit = Unit;
},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("./Strategy/Map/Map");
const Lvl1_texture_1 = require("./Strategy/Map/Lvl1_texture");
// let duck = new MallardDuck("Black cloak");
// duck.display();
// duck.performFly();
// duck.performQuack();
// duck.setquackBehavior(new MuteQuack());
// duck.performQuack();
//
let map = new Map_1.Map(20, 20);
map.print_grid();
map.load_map_texture_logic(new Lvl1_texture_1.Lvl1_texture().Lvl1_texture);
map.draw_map_texture();
map.init_units();
map.draw_map_unit();
map.click_logic();
},{"./Strategy/Map/Lvl1_texture":11,"./Strategy/Map/Map":12}]},{},[19])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvU3RyYXRlZ3kvQmVoYXZpb3JzL0F0dGFjay9Cb3cudHMiLCJzcmMvU3RyYXRlZ3kvQmVoYXZpb3JzL0F0dGFjay9TYWJyZS50cyIsInNyYy9TdHJhdGVneS9CZWhhdmlvcnMvQXR0YWNrL1N0b25lQmFsbC50cyIsInNyYy9TdHJhdGVneS9CZWhhdmlvcnMvQXR0YWNrL1N3b3JkLnRzIiwic3JjL1N0cmF0ZWd5L0JlaGF2aW9ycy9Nb3ZlL01vdmVBcmNoZXIudHMiLCJzcmMvU3RyYXRlZ3kvQmVoYXZpb3JzL01vdmUvTW92ZUNhdGFwdWx0LnRzIiwic3JjL1N0cmF0ZWd5L0JlaGF2aW9ycy9Nb3ZlL01vdmVIb3JzZW1hbi50cyIsInNyYy9TdHJhdGVneS9CZWhhdmlvcnMvTW92ZS9Nb3ZlU3dvcmRzbWFuLnRzIiwic3JjL1N0cmF0ZWd5L01hcC9BcmVhLnRzIiwic3JjL1N0cmF0ZWd5L01hcC9Hcm91bmRBcmVhLnRzIiwic3JjL1N0cmF0ZWd5L01hcC9MdmwxX3RleHR1cmUudHMiLCJzcmMvU3RyYXRlZ3kvTWFwL01hcC50cyIsInNyYy9TdHJhdGVneS9NYXAvV2F0ZXJBcmVhLnRzIiwic3JjL1N0cmF0ZWd5L1VuaXRzL0FyY2hlci50cyIsInNyYy9TdHJhdGVneS9Vbml0cy9DYXRhcHVsdC50cyIsInNyYy9TdHJhdGVneS9Vbml0cy9Ib3JzZW1hbi50cyIsInNyYy9TdHJhdGVneS9Vbml0cy9Td29yZHNtYW4udHMiLCJzcmMvU3RyYXRlZ3kvVW5pdHMvVW5pdC50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQSxNQUFhLEdBQUc7SUFBaEI7UUFDSSxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBVyxDQUFDLENBQUM7SUFnQnRCLENBQUM7SUFkRyxNQUFNLENBQUMsVUFBZ0I7UUFDbkIsVUFBVSxDQUFDLE1BQU0sSUFB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TSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO29CQUM5RyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQy9DO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO29CQUM5RyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQy9DO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO29CQUM5RyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQy9DO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO29CQUM5RyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQy9DO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2FBQ0o7U0FDSixDQUFBO0lBQ1QsQ0FBQztDQUFBO0FBdkZELG9DQXVGQzs7OztBQ3RGRCw2Q0FBd0M7QUFDeEMsMkNBQXNDO0FBRXRDLDRDQUF1QztBQUN2QyxnREFBMkM7QUFDM0Msa0RBQTZDO0FBQzdDLGdEQUEyQztBQUMzQyxvQ0FBb0M7QUFFcEMsTUFBYSxHQUFHO0lBU1osWUFBWSxDQUFTLEVBQUUsQ0FBUztRQUhoQyxpQkFBWSxHQUF1QixFQUFFLENBQUMsQ0FBQyxNQUFNO1FBQzdDLG1CQUFjLEdBQXVCLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFHM0MsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksUUFBUSxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDN0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxHQUFXO1FBQzlCLG9CQUFvQjtRQUNwQixJQUFJLEtBQUssR0FBSSxHQUFXLENBQUMsS0FBSyxDQUFDO1FBQy9CLElBQUksVUFBVSxHQUF1QixFQUFFLENBQUM7UUFFeEMsS0FBSyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxHQUFHLEdBQWdCLEVBQUUsQ0FBQztZQUUxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFFdEMsUUFBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pCLEtBQUssTUFBTSxDQUFDLENBQUM7d0JBQ1YsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUM7d0JBQ2hDLE1BQU07cUJBQ1I7b0JBQ0QsS0FBSyxPQUFPLENBQUMsQ0FBQzt3QkFDWCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQzt3QkFDL0IsTUFBTTtxQkFDUjtvQkFDRCxPQUFPLENBQUMsQ0FBQzt3QkFDTixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksdUJBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQzt3QkFDaEMsTUFBTTtxQkFDUjtpQkFDSDthQUVKO1lBQ0Qsb0JBQW9CO1lBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7UUFFRCwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQjtRQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLFlBQVksR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzNDLElBQUksUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNoRCxJQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUMsSUFBSSxTQUFTLEdBQUcsU0FBUyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZDLElBQUksVUFBVSxHQUFHLFVBQVUsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUN6QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDbkMsSUFBSSxvQkFBb0IsR0FBRyx3QkFBd0IsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNyRSxJQUFJLFlBQVksR0FBRyxhQUFhLENBQUM7Z0JBQ2pDLElBQUksUUFBUSxHQUFHLFlBQVksR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLFNBQVMsR0FBRyxVQUFVO29CQUNyRSxvQkFBb0IsR0FBRyxZQUFZLENBQUM7Z0JBRXhDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUVwQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQztTQUNKO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEQsSUFBSSxlQUFlLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUUzQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUU3QyxRQUFPLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQzdCLEtBQUssUUFBUSxDQUFDLENBQUM7b0JBQ1osS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxNQUFNO2lCQUNSO2dCQUNELEtBQUssVUFBVSxDQUFDLENBQUM7b0JBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUN0RSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDbkMsTUFBTTtpQkFDUjtnQkFDRCxLQUFLLFdBQVcsQ0FBQyxDQUFDO29CQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDdkUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLE1BQU07aUJBQ1I7Z0JBQ0QsS0FBSyxVQUFVLENBQUMsQ0FBQztvQkFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3RFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxNQUFNO2lCQUNSO2dCQUNELE9BQU8sQ0FBQyxDQUFDO29CQUNOLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO29CQUMzQyxNQUFNO2lCQUNSO2FBQ0g7U0FDSjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhO1FBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO3dCQUNoRSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN4QyxJQUFJLFlBQVksR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7d0JBQzNDLElBQUksUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO3dCQUNoRCxJQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDOUMsSUFBSSxTQUFTLEdBQUcsU0FBUyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7d0JBQ3ZDLElBQUksVUFBVSxHQUFHLFVBQVUsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO3dCQUN6QyxJQUFJLE9BQWUsQ0FBQzt3QkFFcEIsa0VBQWtFO3dCQUNsRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTs0QkFDN0IsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3lCQUNoQzs2QkFDSTs0QkFDRCxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQzt5QkFDNUM7d0JBQ0QsSUFBSSxvQkFBb0IsR0FBRyx3QkFBd0IsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUVyRSx1Q0FBdUM7d0JBQ3ZDLElBQUksWUFBWSxHQUFHLGFBQWEsQ0FBQzt3QkFDakMsSUFBSSxRQUFRLEdBQUcsWUFBWSxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsU0FBUyxHQUFHLFVBQVU7NEJBQ3JFLG9CQUFvQixHQUFHLFlBQVksQ0FBQzt3QkFFeEMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNsQztpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixzQ0FBc0M7UUFDdEMsSUFBSSxPQUFPLEdBQUcsVUFBVSxRQUE0QjtZQUNoRCxJQUFJLElBQUksR0FBRyxFQUF3QixDQUFDO1lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtnQkFDcEMsSUFBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUs7b0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1RCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFRixnREFBZ0Q7UUFDaEQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztZQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxFQUFHO29CQUN0RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3hCO2FBQ0o7UUFDTCxDQUFDLENBQUM7UUFFRixnREFBZ0Q7UUFDaEQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztZQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hDLElBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxFQUFHO3dCQUN4RSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3pCO2lCQUNKO2FBQ0o7UUFDTCxDQUFDLENBQUM7UUFFRixrRkFBa0Y7UUFDbEYsSUFBSSxTQUFTLEdBQUc7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQXVCLENBQUUsQ0FBQztnQkFDaEUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7UUFDTCxDQUFDLENBQUM7UUFFRiw0Q0FBNEM7UUFDNUMsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLEtBQXlCLEVBQUUsYUFBcUI7WUFDN0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUNqQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUM7UUFDdkQsQ0FBQyxDQUFDO1FBRUYsb0JBQW9CO1FBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVMsS0FBaUI7WUFDOUMsSUFBSSxJQUFJLEdBQVcsQ0FBQyxDQUFDO1lBRXJCLDRFQUE0RTtZQUM1RSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUF1QixDQUFDO1lBQzlGLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU3Qix5Q0FBeUM7WUFDekMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUN6RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBRSxDQUFDO1lBQ2pELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFFLENBQUM7WUFFakQsMkJBQTJCO1lBQzNCLElBQUssSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLEVBQUcsRUFBRyxlQUFlO2dCQUV2RTs7O21CQUdHO2dCQUNILElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ1QseUNBQXlDO2dCQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQztnQkFFeEQsNkNBQTZDO2dCQUM3QyxJQUFJLFdBQWlCLENBQUM7Z0JBQ3RCLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztnQkFFL0IsaUVBQWlFO2dCQUNqRSxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDM0MsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7Z0JBRTdDOzs7Ozs7O21CQU9HO2dCQUNILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDaEMsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUNwQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBdUIsQ0FBQzt3QkFDeEQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUVuQyxxQkFBcUI7d0JBQ3JCLElBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxFQUFHOzRCQUVoRDs7OytCQUdHOzRCQUNILElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0NBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUN0Qzt5QkFFSjt3QkFFRCxvQkFBb0I7d0JBQ3BCLElBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxFQUFHOzRCQUNoRDs7OytCQUdHOzRCQUNILElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFFO2dDQUNqRCxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRztnQ0FDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQ3hDO3lCQUNKO3FCQUNKO2lCQUNKO2dCQUNELDhDQUE4QztnQkFDOUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxnREFBZ0QsQ0FBQyxDQUFDO2dCQUN0RixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGdEQUFnRCxDQUFDLENBQUM7Z0JBQ3hGLGtFQUFrRTthQUNyRTtZQUVELHVCQUF1QjtZQUN2QixJQUFLLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUc7Z0JBRTlDLHFDQUFxQztnQkFFckM7OzttQkFHRztnQkFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFHO29CQUUxRCw4Q0FBOEM7b0JBQzlDLElBQUksV0FBaUIsQ0FBQztvQkFDdEIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRXpCLDZCQUE2QjtvQkFDN0IsU0FBUyxFQUFFLENBQUM7b0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxXQUFXLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN4QjtnQkFFRCw0Q0FBNEM7Z0JBQzVDLElBQUssSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUc7b0JBRTdELDRDQUE0QztvQkFDNUMsSUFBSSxVQUFnQixDQUFDO29CQUNyQixVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFFeEIsb0NBQW9DO29CQUNwQyxTQUFTLEVBQUUsQ0FBQztvQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN4QjtnQkFFRCx5REFBeUQ7Z0JBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO2dCQUU3QiwwRkFBMEY7Z0JBQzFGLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUseUNBQXlDLENBQUMsQ0FBQztnQkFDL0UsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO2dCQUNqRixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0o7QUF0VkQsa0JBc1ZDOzs7O0FDaFdELGlDQUE0QjtBQUU1QixNQUFhLFNBQVUsU0FBUSxXQUFJO0lBSS9CLFlBQVksS0FBYSxFQUFFLEtBQWE7UUFDcEMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUp4QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFVBQUssR0FBVyxpQ0FBaUMsQ0FBQztJQUtsRCxDQUFDO0NBQ0o7QUFSRCw4QkFRQzs7OztBQ1ZELGlDQUE0QjtBQUM1QixpREFBNEM7QUFDNUMsNkRBQXdEO0FBRXhELE1BQWEsTUFBTyxTQUFRLFdBQUk7SUFDNUIsWUFBWSxLQUFhLEVBQUUsS0FBYSxFQUFFLFFBQWdCO1FBQ3RELEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxTQUFHLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsa0NBQWtDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLDhDQUE4QyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FDSjtBQVRELHdCQVNDOzs7O0FDYkQsaUNBQTRCO0FBRzVCLDZEQUF3RDtBQUN4RCxpRUFBNEQ7QUFFNUQsTUFBYSxRQUFTLFNBQVEsV0FBSTtJQUM5QixZQUFZLEtBQWEsRUFBRSxLQUFhLEVBQUUsUUFBZ0I7UUFDdEQsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsb0NBQW9DLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdEQUFnRCxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FFSjtBQVZELDRCQVVDOzs7O0FDaEJELGlDQUE0QjtBQUc1QixxREFBZ0Q7QUFDaEQsaUVBQTREO0FBRTVELE1BQWEsUUFBUyxTQUFRLFdBQUk7SUFDOUIsWUFBWSxLQUFhLEVBQUUsS0FBYSxFQUFFLFFBQWdCO1FBQ3RELEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsb0NBQW9DLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdEQUFnRCxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBRXRCLENBQUM7Q0FFSjtBQVhELDRCQVdDOzs7O0FDakJELGlDQUE0QjtBQUc1QixxREFBZ0Q7QUFDaEQsbUVBQThEO0FBRTlELE1BQWEsU0FBVSxTQUFRLFdBQUk7SUFDL0IsWUFBWSxLQUFhLEVBQUUsS0FBYSxFQUFFLFFBQWdCO1FBQ3RELEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcscUNBQXFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGlEQUFpRCxDQUFDO1FBQzFFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBRXRCLENBQUM7Q0FDSjtBQVZELDhCQVVDOzs7O0FDWkQsTUFBYSxJQUFJO0lBS2IsWUFBWSxLQUFhLEVBQUUsS0FBYSxFQUFFLFFBQWdCO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFVRCxNQUFNLENBQUMsVUFBZ0I7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUFBLENBQUM7SUFFRixJQUFJLENBQUMsSUFBVSxFQUFFLFVBQWdCO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQUEsQ0FBQztDQUNMO0FBM0JELG9CQTJCQzs7OztBQy9CRCw0Q0FBdUM7QUFDdkMsOERBQXlEO0FBR3pELDZDQUE2QztBQUM3QyxrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QiwwQ0FBMEM7QUFDMUMsdUJBQXVCO0FBQ3ZCLEVBQUU7QUFDRixJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQUcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7QUFDekIsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLDJCQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1RCxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUN2QixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDakIsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ3BCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7QXR0YWNrQmVoYXZpb3J9IGZyb20gXCIuL0F0dGFja0JlaGF2aW9yXCI7XHJcbmltcG9ydCB7VW5pdH0gZnJvbSBcIi4uLy4uL1VuaXRzL1VuaXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb3cgaW1wbGVtZW50cyBBdHRhY2tCZWhhdmlvcntcclxuICAgIGRhbWFnZTogbnVtYmVyID0gNTA7XHJcbiAgICByYW5nZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBhdHRhY2sodGFyZ2V0VW5pdDogVW5pdCk6IHZvaWQge1xyXG4gICAgICAgIHRhcmdldFVuaXQuaGVhbHRoIC09IHRoaXMuZGFtYWdlO1xyXG4gICAgICAgIGlmICh0YXJnZXRVbml0LmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFVuaXQuaXNBbGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0YXJnZXRVbml0Lmljb24gPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2dyYXZlLnBuZyc7XHJcbiAgICAgICAgICAgIHRhcmdldFVuaXQuaWNvbl9hbHRlcm5hdGl2ZSA9ICcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvZ3JhdmUucG5nJztcclxuICAgICAgICAgICAgdGFyZ2V0VW5pdC5tb3ZlQmVoYXZpb3Iuc3BlZWQgPSAwO1xyXG4gICAgICAgICAgICB0YXJnZXRVbml0LmF0dGFja0JlaGF2aW9yLmRhbWFnZSA9IDA7XHJcbiAgICAgICAgICAgIHRhcmdldFVuaXQuYXR0YWNrQmVoYXZpb3IucmFuZ2UgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VuaXQ6ICcrIHR5cGVvZih0YXJnZXRVbml0KSArICcgWDogJyArIHRhcmdldFVuaXQucG9zaXRpb25feCArXHJcbiAgICAgICAgICAgICcgWTogJyArIHRhcmdldFVuaXQucG9zaXRpb25feSArJy0nICsgdGhpcy5kYW1hZ2UgKyAnaHAgJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0F0dGFja0JlaGF2aW9yfSBmcm9tIFwiLi9BdHRhY2tCZWhhdmlvclwiO1xyXG5pbXBvcnQge1VuaXR9IGZyb20gXCIuLi8uLi9Vbml0cy9Vbml0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FicmUgaW1wbGVtZW50cyBBdHRhY2tCZWhhdmlvcntcclxuICAgIGRhbWFnZTogbnVtYmVyID0gNzU7XHJcbiAgICByYW5nZTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBhdHRhY2sodGFyZ2V0VW5pdDogVW5pdCk6IHZvaWQge1xyXG4gICAgICAgIHRhcmdldFVuaXQuaGVhbHRoIC09IHRoaXMuZGFtYWdlO1xyXG4gICAgICAgIGlmICh0YXJnZXRVbml0LmhlYWx0aCA8PSAwKSB0YXJnZXRVbml0LmlzQWxpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VuaXQ6ICcrIHR5cGVvZih0YXJnZXRVbml0KSArICcgWDogJyArIHRhcmdldFVuaXQucG9zaXRpb25feCArXHJcbiAgICAgICAgICAgICcgWTogJyArIHRhcmdldFVuaXQucG9zaXRpb25feSArJy0nICsgdGhpcy5kYW1hZ2UgKyAnaHAgJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0F0dGFja0JlaGF2aW9yfSBmcm9tIFwiLi9BdHRhY2tCZWhhdmlvclwiO1xyXG5pbXBvcnQge1VuaXR9IGZyb20gXCIuLi8uLi9Vbml0cy9Vbml0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvbmVCYWxsIGltcGxlbWVudHMgQXR0YWNrQmVoYXZpb3J7XHJcbiAgICBkYW1hZ2U6IG51bWJlciA9IDEwMDtcclxuICAgIHJhbmdlOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBhdHRhY2sodGFyZ2V0VW5pdDogVW5pdCk6IHZvaWQge1xyXG4gICAgICAgIHRhcmdldFVuaXQuaGVhbHRoIC09IHRoaXMuZGFtYWdlO1xyXG4gICAgICAgIGlmICh0YXJnZXRVbml0LmhlYWx0aCA8PSAwKSB0YXJnZXRVbml0LmlzQWxpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VuaXQ6ICcrIHR5cGVvZih0YXJnZXRVbml0KSArICcgWDogJyArIHRhcmdldFVuaXQucG9zaXRpb25feCArXHJcbiAgICAgICAgICAgICcgWTogJyArIHRhcmdldFVuaXQucG9zaXRpb25feSArJy0nICsgdGhpcy5kYW1hZ2UgKyAnaHAgJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0F0dGFja0JlaGF2aW9yfSBmcm9tIFwiLi9BdHRhY2tCZWhhdmlvclwiO1xyXG5pbXBvcnQge1VuaXR9IGZyb20gXCIuLi8uLi9Vbml0cy9Vbml0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3dvcmQgaW1wbGVtZW50cyBBdHRhY2tCZWhhdmlvcntcclxuICAgIGRhbWFnZTogbnVtYmVyID0gNTA7XHJcbiAgICByYW5nZTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBhdHRhY2sodGFyZ2V0VW5pdDogVW5pdCk6IHZvaWQge1xyXG4gICAgICAgIHRhcmdldFVuaXQuaGVhbHRoIC09IHRoaXMuZGFtYWdlO1xyXG4gICAgICAgIGlmICh0YXJnZXRVbml0LmhlYWx0aCA8PSAwKSB0YXJnZXRVbml0LmlzQWxpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VuaXQ6ICcrIHR5cGVvZih0YXJnZXRVbml0KSArICcgWDogJyArIHRhcmdldFVuaXQucG9zaXRpb25feCArXHJcbiAgICAgICAgICAgICcgWTogJyArIHRhcmdldFVuaXQucG9zaXRpb25feSArJy0nICsgdGhpcy5kYW1hZ2UgKyAnaHAgJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge01vdmVCZWhhdmlvcn0gZnJvbSBcIi4vTW92ZUJlaGF2aW9yXCI7XHJcbmltcG9ydCB7QXJlYX0gZnJvbSBcIi4uLy4uL01hcC9BcmVhXCI7XHJcbmltcG9ydCB7VW5pdH0gZnJvbSBcIi4uLy4uL1VuaXRzL1VuaXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlQXJjaGVyIGltcGxlbWVudHMgTW92ZUJlaGF2aW9ye1xyXG4gICAgc3BlZWQgPSAzO1xyXG5cclxuICAgIG1vdmUodW5pdDogVW5pdCwgdGFyZ2V0QXJlYTogQXJlYSk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnVW5pdDogJysgdHlwZW9mKHVuaXQpICsgJyBYOiAnICsgdW5pdC5wb3NpdGlvbl94ICtcclxuICAgICAgICAgICAgJyBZOiAnICsgdW5pdC5wb3NpdGlvbl95ICsnIG1vdmUgdG8gJyArICcgWDogJyArIHRhcmdldEFyZWEucG9zaXRpb25feCArXHJcbiAgICAgICAgICAgICcgWTogJyArIHRhcmdldEFyZWEucG9zaXRpb25feSk7XHJcblxyXG4gICAgICAgIHVuaXQucG9zaXRpb25feCA9IHRhcmdldEFyZWEucG9zaXRpb25feDtcclxuICAgICAgICB1bml0LnBvc2l0aW9uX3kgPSB0YXJnZXRBcmVhLnBvc2l0aW9uX3k7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge01vdmVCZWhhdmlvcn0gZnJvbSBcIi4vTW92ZUJlaGF2aW9yXCI7XHJcbmltcG9ydCB7QXJlYX0gZnJvbSBcIi4uLy4uL01hcC9BcmVhXCI7XHJcbmltcG9ydCB7VW5pdH0gZnJvbSBcIi4uLy4uL1VuaXRzL1VuaXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlQ2F0YXB1bHQgaW1wbGVtZW50cyBNb3ZlQmVoYXZpb3J7XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBtb3ZlKHVuaXQ6IFVuaXQsIHRhcmdldEFyZWE6IEFyZWEpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVW5pdDogJysgdHlwZW9mKHVuaXQpICsgJyBYOiAnICsgdW5pdC5wb3NpdGlvbl94ICtcclxuICAgICAgICAgICAgJyBZOiAnICsgdW5pdC5wb3NpdGlvbl95ICsnIG1vdmUgdG8gJyArICcgWDogJyArIHRhcmdldEFyZWEucG9zaXRpb25feCArXHJcbiAgICAgICAgICAgICcgWTogJyArIHRhcmdldEFyZWEucG9zaXRpb25feSk7XHJcblxyXG4gICAgICAgIHVuaXQucG9zaXRpb25feCA9IHRhcmdldEFyZWEucG9zaXRpb25feDtcclxuICAgICAgICB1bml0LnBvc2l0aW9uX3kgPSB0YXJnZXRBcmVhLnBvc2l0aW9uX3k7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge01vdmVCZWhhdmlvcn0gZnJvbSBcIi4vTW92ZUJlaGF2aW9yXCI7XHJcbmltcG9ydCB7QXJlYX0gZnJvbSBcIi4uLy4uL01hcC9BcmVhXCI7XHJcbmltcG9ydCB7VW5pdH0gZnJvbSBcIi4uLy4uL1VuaXRzL1VuaXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlSG9yc2VtYW4gaW1wbGVtZW50cyBNb3ZlQmVoYXZpb3J7XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgbW92ZSh1bml0OiBVbml0LCB0YXJnZXRBcmVhOiBBcmVhKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VuaXQ6ICcrIHR5cGVvZih1bml0KSArICcgWDogJyArIHVuaXQucG9zaXRpb25feCArXHJcbiAgICAgICAgICAgICcgWTogJyArIHVuaXQucG9zaXRpb25feSArJyBtb3ZlIHRvICcgKyAnIFg6ICcgKyB0YXJnZXRBcmVhLnBvc2l0aW9uX3ggK1xyXG4gICAgICAgICAgICAnIFk6ICcgKyB0YXJnZXRBcmVhLnBvc2l0aW9uX3kpO1xyXG5cclxuICAgICAgICB1bml0LnBvc2l0aW9uX3ggPSB0YXJnZXRBcmVhLnBvc2l0aW9uX3g7XHJcbiAgICAgICAgdW5pdC5wb3NpdGlvbl95ID0gdGFyZ2V0QXJlYS5wb3NpdGlvbl95O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNb3ZlQmVoYXZpb3J9IGZyb20gXCIuL01vdmVCZWhhdmlvclwiO1xyXG5pbXBvcnQge0FyZWF9IGZyb20gXCIuLi8uLi9NYXAvQXJlYVwiO1xyXG5pbXBvcnQge1VuaXR9IGZyb20gXCIuLi8uLi9Vbml0cy9Vbml0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZVN3b3Jkc21hbiBpbXBsZW1lbnRzIE1vdmVCZWhhdmlvcntcclxuICAgIHNwZWVkOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIG1vdmUodW5pdDogVW5pdCwgdGFyZ2V0QXJlYTogQXJlYSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVbml0OiAnKyB0eXBlb2YodW5pdCkgKyAnIFg6ICcgKyB1bml0LnBvc2l0aW9uX3ggK1xyXG4gICAgICAgICAgICAnIFk6ICcgKyB1bml0LnBvc2l0aW9uX3kgKycgbW92ZSB0byAnICsgJyBYOiAnICsgdGFyZ2V0QXJlYS5wb3NpdGlvbl94ICtcclxuICAgICAgICAgICAgJyBZOiAnICsgdGFyZ2V0QXJlYS5wb3NpdGlvbl95KTtcclxuXHJcbiAgICAgICAgdW5pdC5wb3NpdGlvbl94ID0gdGFyZ2V0QXJlYS5wb3NpdGlvbl94O1xyXG4gICAgICAgIHVuaXQucG9zaXRpb25feSA9IHRhcmdldEFyZWEucG9zaXRpb25feTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBBcmVhIHtcclxuICAgIHBvc2l0aW9uX3g6IG51bWJlcjtcclxuICAgIHBvc2l0aW9uX3k6IG51bWJlcjtcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgICBjYW5Nb3ZlOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwb3NfeDogbnVtYmVyLCBwb3NfeTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uX3ggPSBwb3NfeDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uX3kgPSBwb3NfeTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0FyZWF9IGZyb20gXCIuL0FyZWFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcm91bmRBcmVhIGV4dGVuZHMgQXJlYXtcclxuICAgIGNhbk1vdmUgPSB0cnVlO1xyXG4gICAgaW1hZ2UgPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2dyb3VuZC5wbmcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc194OiBudW1iZXIsIHBvc195OiBudW1iZXIpe1xyXG4gICAgICAgIHN1cGVyKHBvc194LCBwb3NfeSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJleHBvcnQgY2xhc3MgTHZsMV90ZXh0dXJlIHtcclxuXHJcbiAgICBMdmwxX3RleHR1cmU6IG9iamVjdCA9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImFyZWFzXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJHcm5kXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJHcm5kXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJHcm5kXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJHcm5kXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJHcm5kXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJHcm5kXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJHcm5kXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJHcm5kXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbn0iLCJpbXBvcnQge0FyZWF9IGZyb20gXCIuL0FyZWFcIjtcclxuaW1wb3J0IHtHcm91bmRBcmVhfSBmcm9tIFwiLi9Hcm91bmRBcmVhXCI7XHJcbmltcG9ydCB7V2F0ZXJBcmVhfSBmcm9tIFwiLi9XYXRlckFyZWFcIjtcclxuaW1wb3J0IHtVbml0fSBmcm9tIFwiLi4vVW5pdHMvVW5pdFwiO1xyXG5pbXBvcnQge0FyY2hlcn0gZnJvbSBcIi4uL1VuaXRzL0FyY2hlclwiO1xyXG5pbXBvcnQge0hvcnNlbWFufSBmcm9tIFwiLi4vVW5pdHMvSG9yc2VtYW5cIjtcclxuaW1wb3J0IHtTd29yZHNtYW59IGZyb20gXCIuLi9Vbml0cy9Td29yZHNtYW5cIjtcclxuaW1wb3J0IHtDYXRhcHVsdH0gZnJvbSBcIi4uL1VuaXRzL0NhdGFwdWx0XCI7XHJcbi8vIGltcG9ydCB7bG9hZFJ1bGVzfSBmcm9tIFwidHNsaW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwIHtcclxuICAgIHJvd3M6IG51bWJlcjtcclxuICAgIGNvbHM6IG51bWJlcjtcclxuICAgIG1hcDogQXJyYXk8QXJyYXk8QXJlYT4+O1xyXG4gICAgdW5pdHM6IEFycmF5PFVuaXQ+O1xyXG4gICAgY3VycmVudFVuaXQ6IFVuaXQ7XHJcbiAgICBtYXlNb3ZlQ2VsbHM6IEFycmF5PEhUTUxFbGVtZW50PiA9IFtdOyAvL0RJVlNcclxuICAgIG1heUF0dGFja0NlbGxzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXTsgLy9ESVZTXHJcblxyXG4gICAgY29uc3RydWN0b3IoaTogbnVtYmVyLCBqOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMucm93cyA9IGk7XHJcbiAgICAgICAgdGhpcy5jb2xzID0gajtcclxuICAgIH1cclxuXHJcbiAgICBwcmludF9ncmlkKCl7XHJcbiAgICAgICAgbGV0IGNfY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldGthXCIpO1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gY19jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSA3MjA7IHggKz0gMzYpIHtcclxuICAgICAgICAgIGNvbnRleHQubW92ZVRvKHgsIDApO1xyXG4gICAgICAgICAgY29udGV4dC5saW5lVG8oeCwgNzIwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDw9IDcyMDsgeSArPSAzNikge1xyXG4gICAgICAgICAgY29udGV4dC5tb3ZlVG8oMCwgeSk7XHJcbiAgICAgICAgICBjb250ZXh0LmxpbmVUbyg3MjAsIHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiIzg4OFwiO1xyXG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gNDtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRfbWFwX3RleHR1cmVfbG9naWMob2JqOiBvYmplY3Qpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9iaik7XHJcbiAgICAgICAgbGV0IGFyZWFzID0gKG9iaiBhcyBhbnkpLmFyZWFzO1xyXG4gICAgICAgIGxldCByZXN1bHRfbWFwOiBBcnJheTxBcnJheTxBcmVhPj4gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgYXJlYXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGFycjogQXJyYXk8QXJlYT4gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJlYXNbaV0ubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYXJlYXNbaV1bal0pIHtcclxuICAgICAgICAgICAgICAgICAgIGNhc2UgXCJHcm5kXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG5ldyBHcm91bmRBcmVhKGosIGkgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGNhc2UgXCJXYXRlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChuZXcgV2F0ZXJBcmVhKGosIGkgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG5ldyBHcm91bmRBcmVhKGosIGkgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXJyKTtcclxuICAgICAgICAgICAgcmVzdWx0X21hcC5wdXNoKGFycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHRfbWFwKTtcclxuICAgICAgICB0aGlzLm1hcCA9IHJlc3VsdF9tYXA7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd19tYXBfdGV4dHVyZSgpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2X3Bvc2l0aW9uID0gKFwicG9zaXRpb246IGFic29sdXRlO1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXZfbGVmdCA9IFwibGVmdDogXCIgKyAoMzYgKiBqICsgMTApICsgXCJweDtcIjtcclxuICAgICAgICAgICAgICAgIGxldCBkaXZfdG9wID0gXCJ0b3A6IFwiICsgKDM2ICogaSArIDEwKSArIFwicHg7XCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2X3dpZHRoID0gXCJ3aWR0aDogXCIgKyAzMiArIFwicHg7XCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2X2hlaWdodCA9IFwiaGVpZ2h0OiBcIiArIDMyICsgXCJweDtcIjtcclxuICAgICAgICAgICAgICAgIGxldCB5b3VyVmFyID0gdGhpcy5tYXBbaV1bal0uaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2X2JhY2tncm91bmRfaW1hZ2UgPSAnYmFja2dyb3VuZC1pbWFnZTogdXJsKCcgKyB5b3VyVmFyICsgJyk7JztcclxuICAgICAgICAgICAgICAgIGxldCBhcmVhX3pfaW5kZXggPSAnei1pbmRleDogMTsnO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1N0eWxlID0gZGl2X3Bvc2l0aW9uICsgZGl2X2xlZnQgKyBkaXZfdG9wICsgZGl2X3dpZHRoICsgZGl2X2hlaWdodCArXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2X2JhY2tncm91bmRfaW1hZ2UgKyBhcmVhX3pfaW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIG5ld1N0eWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdF91bml0cygpIHtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcIi4uL3NyYy9TdHJhdGVneS9NYXAvdW5pdHMuanNvblwiLCBmYWxzZSk7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpO1xyXG4gICAgICAgIGxldCBteV9KU09OX29iamVjdCA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIGxldCB1bml0c19mcm9tX2pzb24gPSBteV9KU09OX29iamVjdC51bml0cztcclxuXHJcbiAgICAgICAgbGV0IHVuaXRzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bml0c19mcm9tX2pzb24ubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCh1bml0c19mcm9tX2pzb25baV0udHlwZSkge1xyXG4gICAgICAgICAgICAgICBjYXNlIFwiQXJjaGVyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgdW5pdHMucHVzaChuZXcgQXJjaGVyKHVuaXRzX2Zyb21fanNvbltpXS5wb3NfeCwgdW5pdHNfZnJvbV9qc29uW2ldLnBvc195LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5pdHNfZnJvbV9qc29uW2ldLnBsYXllcl9pZCkpO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBjYXNlIFwiSG9yc2VtYW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICB1bml0cy5wdXNoKG5ldyBIb3JzZW1hbih1bml0c19mcm9tX2pzb25baV0ucG9zX3gsIHVuaXRzX2Zyb21fanNvbltpXS5wb3NfeSxcclxuICAgICAgICAgICAgICAgICAgICAgIHVuaXRzX2Zyb21fanNvbltpXS5wbGF5ZXJfaWQpKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgY2FzZSBcIlN3b3Jkc21hblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIHVuaXRzLnB1c2gobmV3IFN3b3Jkc21hbih1bml0c19mcm9tX2pzb25baV0ucG9zX3gsIHVuaXRzX2Zyb21fanNvbltpXS5wb3NfeSxcclxuICAgICAgICAgICAgICAgICAgICAgIHVuaXRzX2Zyb21fanNvbltpXS5wbGF5ZXJfaWQpKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgY2FzZSBcIkNhdGFwdWx0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgdW5pdHMucHVzaChuZXcgQ2F0YXB1bHQodW5pdHNfZnJvbV9qc29uW2ldLnBvc194LCB1bml0c19mcm9tX2pzb25baV0ucG9zX3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bml0c19mcm9tX2pzb25baV0ucGxheWVyX2lkKSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVbnJlYWRhYmxlIFR5cGUgb2YgVW5pdCEgRXJyb3IhISFcIik7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudW5pdHMgPSB1bml0cztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3X21hcF91bml0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLnVuaXRzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdHNba10ucG9zaXRpb25feCA9PSBqICYmIHRoaXMudW5pdHNba10ucG9zaXRpb25feSA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2X3Bvc2l0aW9uID0gKFwicG9zaXRpb246IGFic29sdXRlO1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdl9sZWZ0ID0gXCJsZWZ0OiBcIiArICgzNiAqIGogKyAxMCkgKyBcInB4O1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2X3RvcCA9IFwidG9wOiBcIiArICgzNiAqIGkgKyAxMCkgKyBcInB4O1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2X3dpZHRoID0gXCJ3aWR0aDogXCIgKyAzMiArIFwicHg7XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXZfaGVpZ2h0ID0gXCJoZWlnaHQ6IFwiICsgMzIgKyBcInB4O1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeW91clZhcjogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqINCc0LXQvdGP0LXQvCDQuNC60L7QvdC60YMg0L3QsCDRgNCw0LfQstC10YDQvdGD0YLRg9GOINC10YHQu9C4INC40LPRgNC+0Log0YEg0LTRgNGD0LPQuNC8ICdwbGF5ZXJJZCcgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdHNba10ucGxheWVySWQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91clZhciA9IHRoaXMudW5pdHNba10uaWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXJWYXIgPSB0aGlzLnVuaXRzW2tdLmljb25fYWx0ZXJuYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdl9iYWNrZ3JvdW5kX2ltYWdlID0gJ2JhY2tncm91bmQtaW1hZ2U6IHVybCgnICsgeW91clZhciArICcpOyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiogJ1VuaXQnINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQv9C+0LLQtdGA0YUgJ0FyZWEnICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcmVhX3pfaW5kZXggPSAnei1pbmRleDogMjsnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U3R5bGUgPSBkaXZfcG9zaXRpb24gKyBkaXZfbGVmdCArIGRpdl90b3AgKyBkaXZfd2lkdGggKyBkaXZfaGVpZ2h0ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9iYWNrZ3JvdW5kX2ltYWdlICsgYXJlYV96X2luZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIG5ld1N0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGlja19sb2dpYygpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgLyoqINCY0Lcg0LLRgdC10YUg0Y3Qu9C10LzQtdC90YLQvtCyINCy0YvQsdC40YDQsNC10YIgZGl2cyAqL1xyXG4gICAgICAgIGxldCBnZXREaXZzID0gZnVuY3Rpb24gKGVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4pIHtcclxuICAgICAgICAgICAgbGV0IGRpdnMgPSBbXSBhcyBBcnJheTxIVE1MRWxlbWVudD47XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50c1tpXS50YWdOYW1lID09ICdESVYnKSBkaXZzLnB1c2goZWxlbWVudHNbaV0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRpdnM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqINCf0L4g0LvQvtCz0LjRh9C10YHQutC40Lwg0LrQvtC+0YDQtNC40L3QsNGC0LDQvCDQstC+0LfQstGA0LDRidCw0LXRgiBVbml0ICovXHJcbiAgICAgICAgbGV0IGdldFVuaXQgPSBmdW5jdGlvbiAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLnVuaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIChzZWxmLnVuaXRzW2ldLnBvc2l0aW9uX3ggPT0geCkgJiYgKHNlbGYudW5pdHNbaV0ucG9zaXRpb25feSA9PSB5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi51bml0c1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKiDQn9C+INC70L7Qs9C40YfQtdGB0LrQuNC8INC60L7QvtGA0LTQuNC90LDRgtCw0Lwg0LLQvtC30LLRgNCw0YnQsNC10YIgQXJlYSAqL1xyXG4gICAgICAgIGxldCBnZXRBcmVhID0gZnVuY3Rpb24gKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZi5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIChzZWxmLm1hcFtpXVtqXS5wb3NpdGlvbl94ID09IHgpICYmIChzZWxmLm1hcFtpXVtqXS5wb3NpdGlvbl95ID09IHkpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5tYXBbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqINCf0L7QtNGC0LjRgNCw0LXRgiDRgdGC0LDRgNGL0LUg0LTQuNCy0Ysg0Y7QvdC40YLQvtCyINC4INGA0LjRgdGD0LXRgiDQvdC+0LLRi9C1INC/0L4g0L7QsdC90L7QstC70LXQvdC90L7QuSDQu9C+0LPQuNGH0LXRgdC60L7QuSDQutCw0YDRgtC1ICovXHJcbiAgICAgICAgbGV0IGNsZWFyVW5pdCA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYudW5pdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXZzVW5pdCA9IGdldERpdnMoZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51bml0c1tpXS5wb3NpdGlvbl94ICogMzYgKyAxMCxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVuaXRzW2ldLnBvc2l0aW9uX3kgKiAzNiArIDEwKSBhcyBBcnJheTxIVE1MRWxlbWVudD4gKTtcclxuICAgICAgICAgICAgICAgIGRpdnNVbml0WzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2c1VuaXRbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqINCc0LDRgdGB0LjQstGDINGP0YfQtdC10Log0LzQtdC90Y/QtdGCIGJhY2tncm91bmQtaW1hZ2UgKi9cclxuICAgICAgICBsZXQgY2hhbmdlQmFja2dyb3VuZCA9IGZ1bmN0aW9uIChjZWxsczogQXJyYXk8SFRNTEVsZW1lbnQ+LCBiYWNrZ3JvdW5kVXJsOiBzdHJpbmcpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgY2VsbHNbaV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZFVybDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKiog0JvQvtCz0LjQutCwINC60LvQuNC60L7QsiAqL1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBmbGFnOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgLyoqINCS0YHQtSDRjdC70LXQvNC10L3RgtGLICdkaXYnINC40Lcg0LrQvtC+0YDQtNC40L3QsNGCINC60LvQuNC60LAg0L/QvtC80LXRidCw0LXQvCDQsiAnQXJyYXk8SFRNTEVsZW1lbnQ+JyAqL1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKSBhcyBBcnJheTxIVE1MRWxlbWVudD47XHJcbiAgICAgICAgICAgIGxldCBkaXZzID0gZ2V0RGl2cyhlbGVtZW50cyk7XHJcblxyXG4gICAgICAgICAgICAvKiogR2V0IGNvb3JkaW5hdGVzIExvZ2ljIGFuZCBQaHlzaWNhbCAqL1xyXG4gICAgICAgICAgICBsZXQgcGh5c2ljYWxYID0gZXZlbnQuY2xpZW50WCwgcGh5c2ljYWxZID0gZXZlbnQuY2xpZW50WTtcclxuICAgICAgICAgICAgbGV0IGxvZ2ljWCA9IE1hdGguZmxvb3IoIChwaHlzaWNhbFggLSAxMCkgLyAzNiApO1xyXG4gICAgICAgICAgICBsZXQgbG9naWNZID0gTWF0aC5mbG9vciggKHBoeXNpY2FsWSAtIDEwKSAvIDM2ICk7XHJcblxyXG4gICAgICAgICAgICAvKiog0J/QtdGA0LLRi9C5INC60LvQuNC6INC/0L4g0Y7QvdC40YLRgyAqL1xyXG4gICAgICAgICAgICBpZiAoIGRpdnMubGVuZ3RoID09IDIgJiYgc2VsZi5jdXJyZW50VW5pdCA9PSB1bmRlZmluZWQgKSB7ICAvLyBiZWZvcmUgaWYgT0tcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqINCe0LHRgNCw0LHQvtGC0LrQsCDQv9C10YDQstC+0LPQviDQutC70LjQutCwICjQstGL0LHQvtGAINGO0L3QuNGC0LAg0LTQu9GPINC00LXQudGB0YLQstC40Y8pXHJcbiAgICAgICAgICAgICAgICAgKiBkaXZzWzBdIC0tPiBVbml0OyBkaXZzWzFdIC0tPiBBcmVhXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGZsYWcgPSAxO1xyXG4gICAgICAgICAgICAgICAgLyoqINCf0L7QtNGB0LLQtdGC0LrQsCDQstGL0LHRgNCw0L3QvdC+0LPQviDRjtC90LjRgtCwINC60YDQsNGB0L3Ri9C8ICovXHJcbiAgICAgICAgICAgICAgICBkaXZzWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSggMjU1LCAxLCAwLCAwLjMpXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqINCX0LDQv9C+0LzQuNC90LDQtdC8INCu0L3QuNGC0LAsINC/0L4g0LrQvtGC0L7RgNC+0LzRgyDQutC70LjQutC90YPQu9C4ICovXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFVuaXQ6IFVuaXQ7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VW5pdCA9IGdldFVuaXQobG9naWNYLCBsb2dpY1kpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFVuaXQpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50VW5pdCA9IGN1cnJlbnRVbml0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKiDQn9C+0LvRg9GH0LDQtdC8IHNwZWVkIC0g0YHQutC+0YDQvtGB0YLRjCDRhdC+0LTRjNCx0Ysg0LggcmFuZ2UgLSDQtNCw0LvRjNC90L7RgdGC0Ywg0LDRgtCw0LrQuCAqL1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwZWVkID0gY3VycmVudFVuaXQubW92ZUJlaGF2aW9yLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlID0gY3VycmVudFVuaXQuYXR0YWNrQmVoYXZpb3IucmFuZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDQndCw0LnQtNGR0Lwg0LrQu9C10YLQutC4LCDQsiDQutC+0YLQvtGA0YvQtSDQvNC+0LbQvdC+INGF0L7QtNC40YLRjFxyXG4gICAgICAgICAgICAgICAgICogc3BlZWQgPj0gciA9IHNxcnQoIHNxcih4MS14MikgKyBzcXIoeTEteTIpIClcclxuICAgICAgICAgICAgICAgICAqINGE0LjQt9C40YfQtdGB0LrQuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINC6INC70L7Qs9C40YfQtdGB0LrQuNC8INC+0YLQvdC+0YHRj9GC0YHRjyDRgtCw0Lo6XHJcbiAgICAgICAgICAgICAgICAgKiAoaSwgaikgPT0+IChYLCBZKSA9IChqICogMzYgKyAxMCBweDsgaSAqIDM2ICsgMTApXHJcbiAgICAgICAgICAgICAgICAgKiDQotCw0Log0LbQtSDQvtGC0LHQtdGA0LXQvCDQutC70LXRgtC60Lgg0YLQtdGFINGO0L3QuNGC0L7Qsiwg0LTQviDQutC+0YLQvtGA0YvRhSDQvNC+0LbQvdC+INC00L7RgtGP0L3Rg9GC0YzRgdGPXHJcbiAgICAgICAgICAgICAgICAgKiByYW5nZSA+PSByID0gc3FydCggc3FyKHgxLXgyKSArIHNxcih5MS15MikgKVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWxmLmNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHNNYXAgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqICogMzYgKyAxMCwgaSAqIDM2ICsgMTApIGFzIEFycmF5PEhUTUxFbGVtZW50PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdnNNYXAgPSBnZXREaXZzKGVsZW1lbnRzTWFwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCj0YHQu9C+0LLQuNC1INC00LvRjyDRhdC+0LTRjNCx0YtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzcGVlZCA+PSBNYXRoLnNxcnQoIE1hdGgucG93KCAoaiAtIGN1cnJlbnRVbml0LnBvc2l0aW9uX3gpLCAyKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyggKGkgLSBjdXJyZW50VW5pdC5wb3NpdGlvbl95KSwgMiApICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiDQldGB0LvQuCAnZGl2JyDQvtC00LjQvSDQsiDQutC+0L7RgNC00LjQvdCw0YLQtSDQuCBBcmVhLmNhbk1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqINGC0L4g0LrQu9Cw0LTRkdC8INCyINC60LvQtdGC0LrQuCwg0LIg0LrQvtGC0L7RgNGL0LUg0LzQvtC20L3QviDRhdC+0LTQuNGC0YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpdnNNYXAubGVuZ3RoID09IDEgJiYgc2VsZi5tYXBbaV1bal0uY2FuTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubWF5TW92ZUNlbGxzLnB1c2goZGl2c01hcFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQo9GB0LvQvtCy0LjQtSDQtNC70Y8g0LDRgtCw0LrQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJhbmdlID49IE1hdGguc3FydCggTWF0aC5wb3coIChqIC0gY3VycmVudFVuaXQucG9zaXRpb25feCksIDIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucG93KCAoaSAtIGN1cnJlbnRVbml0LnBvc2l0aW9uX3kpLCAyICkgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICog0JXRgdC70LggZGl2LdCwINC00LLQsCDQsiDQutC+0L7RgNC00LjQvdCw0YLQtSDQuCAncGxheWVySWQnINGDIHRhcmdldFVuaXQg0LggY3VycmVudFVuaXQg0L7RgtC70LjRh9Cw0Y7RgtGB0Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqINGC0L4g0LrQu9Cw0LTRkdC8INCyINC60LvQtdGC0LrQuCwg0Y7QvdC40YLQvtCyINC40Lcg0LrQvtGC0L7RgNGL0YUg0LzQvtC20L3QviDQsNGC0LDQutC+0LLQsNGC0YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpdnNNYXAubGVuZ3RoID09IDIgJiYgKCBnZXRVbml0KGosIGkpLnBsYXllcklkICE9IGN1cnJlbnRVbml0LnBsYXllcklkICkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRVbml0KGosIGkpLmlzQWxpdmUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXlBdHRhY2tDZWxscy5wdXNoKGRpdnNNYXBbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLyoqINCf0L7QtNGB0LLQtdGC0LjQvCBtYXlNb3ZlQ2VsbHMg0LggbWF5QXR0YWNrQ2VsbHMgKi9cclxuICAgICAgICAgICAgICAgIGNoYW5nZUJhY2tncm91bmQoc2VsZi5tYXlNb3ZlQ2VsbHMsIFwidXJsKCcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvZ3JvdW5kX3NlbGVjdC5qcGcnKVwiKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZUJhY2tncm91bmQoc2VsZi5tYXlBdHRhY2tDZWxscywgXCJ1cmwoJy4uL3NyYy9TdHJhdGVneS9JY29ucy9ncm91bmRfc2VsZWN0LmpwZycpXCIpO1xyXG4gICAgICAgICAgICAgICAgLyoqINCe0LHRgNCw0LHQvtGC0LrQsCDQv9C10YDQstC+0LPQviDQutC70LjQutCwINC30LDQstC10YDRiNC10L3QsCwg0LjQtNGR0Lwg0LbQtNCw0YLRjCDQstGC0L7RgNC+0LPQviDQutC70LjQutCwICovXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnQgVW5pdCBkZWZpbmVkXHJcbiAgICAgICAgICAgIGlmICggc2VsZi5jdXJyZW50VW5pdCAhPSB1bmRlZmluZWQgJiYgZmxhZyA9PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKiDQndCw0YfQsNC70L4g0L7QsdGA0LDQsdC+0YLQutC4INCy0YLQvtGA0L7Qs9C+INC60LvQuNC60LAgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqINCb0LjQsdC+IGRpdiDQstGC0L7RgNC+0LPQviDQutC70LjQutCwIC0g0LfQtdC80LvRjywg0LvQuNCx0L4g0LLRgNCw0LbQtdGB0LrQuNC5INGO0L3QuNGCXHJcbiAgICAgICAgICAgICAgICAgKiDQldGB0LvQuCDQsiBEaXZzIDEg0Y3Qu9C10LzQtdC90YIg0YLQviDRjdGC0L4g0L7QsdC70LDRgdGC0Ywg0L3QsCDQutC+0YLQvtGA0YPRjiDRhdC+0YfQtdGCINC/0LXRgNC10LnRgtC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAoZGl2cy5sZW5ndGggPT0gMSAmJiBzZWxmLm1heU1vdmVDZWxscy5pbmNsdWRlcyhkaXZzWzBdKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqINCX0LDQv9C+0LzQuNC90LDQtdC8INCe0LHQu9Cw0YHRgtGMLCDQv9C+INC60L7RgtC+0YDQvtC5INC60LvQuNC60L3Rg9C70LggKi9cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEFyZWE6IEFyZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZWEgPSBnZXRBcmVhKGxvZ2ljWCwgbG9naWNZKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50QXJlYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKiDQodC+0LHRgdGC0LLQtdC90L3QviDQuNC00ZHQvCDQsiBBcmVhICovXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJVbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50VW5pdC5tb3ZlKHNlbGYuY3VycmVudFVuaXQsY3VycmVudEFyZWEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd19tYXBfdW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qKiDQldGB0LvQuCDQstGC0L7RgNC+0LPQviDQutC70LjQuiDQv9C+INCy0YDQsNC20LXRgdC60L7QvNGDINGO0L3QuNGC0YMgKi9cclxuICAgICAgICAgICAgICAgIGlmICggZGl2cy5sZW5ndGggPT0gMiAmJiBzZWxmLm1heUF0dGFja0NlbGxzLmluY2x1ZGVzKGRpdnNbMV0pICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiog0JfQsNC/0L7QvNC40L3QsNC10Lwg0K7QvdC40YLQsCwg0L/QviDQutC+0YLQvtGA0L7QuSDQutC70LjQutC90YPQu9C4ICovXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldFVuaXQ6IFVuaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VW5pdCA9IGdldFVuaXQobG9naWNYLCBsb2dpY1kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldFVuaXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiog0KHQvtCx0YHRgtCy0LXQvdC90L4g0LHRjNGR0Lwg0L/QviBUYXJnZXRVbml0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJVbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50VW5pdC5hdHRhY2sodGFyZ2V0VW5pdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3X21hcF91bml0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqINCa0L7QvdC10YYg0L7QsdGA0LDQsdC+0YLQutC4INCy0YLQvtGA0L7Qs9C+INC60LvQuNC60LAgLSDQv9C+0LTRgtC40YDQsNC10Lwg0LLRgdGRINC00LXQu9C+ICovXHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRVbml0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKiDQn9C+0LTRgdCy0LXRgtC60YMg0YPQsdC10YDRkdC8OiDQv9C+0LzQtdC90Y/QtdC8IGJhY2tncm91bmQtaW1hZ2Ug0Lgg0L7Rh9C40YHRgtC40LwgbWF5TW92ZUNlbGxzINC4IG1heUF0dGFja0NlbGxzICovXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VCYWNrZ3JvdW5kKHNlbGYubWF5TW92ZUNlbGxzLCBcInVybCgnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2dyb3VuZC5wbmcnKVwiKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZUJhY2tncm91bmQoc2VsZi5tYXlBdHRhY2tDZWxscywgXCJ1cmwoJy4uL3NyYy9TdHJhdGVneS9JY29ucy9ncm91bmQucG5nJylcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm1heU1vdmVDZWxscyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5tYXlBdHRhY2tDZWxscyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QXJlYX0gZnJvbSBcIi4vQXJlYVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdhdGVyQXJlYSBleHRlbmRzIEFyZWF7XHJcbiAgICBjYW5Nb3ZlID0gZmFsc2U7XHJcbiAgICBpbWFnZTogc3RyaW5nID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy93YXRlci5wbmcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc194OiBudW1iZXIsIHBvc195OiBudW1iZXIpe1xyXG4gICAgICAgIHN1cGVyKHBvc194LCBwb3NfeSk7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtVbml0fSBmcm9tIFwiLi9Vbml0XCI7XHJcbmltcG9ydCB7Qm93fSBmcm9tIFwiLi4vQmVoYXZpb3JzL0F0dGFjay9Cb3dcIjtcclxuaW1wb3J0IHtNb3ZlQXJjaGVyfSBmcm9tIFwiLi4vQmVoYXZpb3JzL01vdmUvTW92ZUFyY2hlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFyY2hlciBleHRlbmRzIFVuaXQge1xyXG4gICAgY29uc3RydWN0b3IocG9zX3g6IG51bWJlciwgcG9zX3k6IG51bWJlciwgcGxheWVySWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHBvc194LCBwb3NfeSwgcGxheWVySWQpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrQmVoYXZpb3IgPSBuZXcgQm93KCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQmVoYXZpb3IgPSBuZXcgTW92ZUFyY2hlcigpO1xyXG4gICAgICAgIHRoaXMuaWNvbiA9ICcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvYXJjaGVyLnBuZyc7XHJcbiAgICAgICAgdGhpcy5pY29uX2FsdGVybmF0aXZlID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy9hcmNoZXJfYWx0ZXJuYXRpdmUucG5nJztcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDUwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtVbml0fSBmcm9tIFwiLi9Vbml0XCI7XHJcbmltcG9ydCB7Qm93fSBmcm9tIFwiLi4vQmVoYXZpb3JzL0F0dGFjay9Cb3dcIjtcclxuaW1wb3J0IHtNb3ZlQXJjaGVyfSBmcm9tIFwiLi4vQmVoYXZpb3JzL01vdmUvTW92ZUFyY2hlclwiO1xyXG5pbXBvcnQge1N0b25lQmFsbH0gZnJvbSBcIi4uL0JlaGF2aW9ycy9BdHRhY2svU3RvbmVCYWxsXCI7XHJcbmltcG9ydCB7TW92ZUNhdGFwdWx0fSBmcm9tIFwiLi4vQmVoYXZpb3JzL01vdmUvTW92ZUNhdGFwdWx0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2F0YXB1bHQgZXh0ZW5kcyBVbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc194OiBudW1iZXIsIHBvc195OiBudW1iZXIsIHBsYXllcklkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihwb3NfeCwgcG9zX3ksIHBsYXllcklkKTtcclxuICAgICAgICB0aGlzLmF0dGFja0JlaGF2aW9yID0gbmV3IFN0b25lQmFsbCgpO1xyXG4gICAgICAgIHRoaXMubW92ZUJlaGF2aW9yID0gbmV3IE1vdmVDYXRhcHVsdCgpO1xyXG4gICAgICAgIHRoaXMuaWNvbiA9ICcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvY2F0YXB1bHQucG5nJztcclxuICAgICAgICB0aGlzLmljb25fYWx0ZXJuYXRpdmUgPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2NhdGFwdWx0X2FsdGVybmF0aXZlLnBuZyc7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSA3NTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge1VuaXR9IGZyb20gXCIuL1VuaXRcIjtcclxuaW1wb3J0IHtCb3d9IGZyb20gXCIuLi9CZWhhdmlvcnMvQXR0YWNrL0Jvd1wiO1xyXG5pbXBvcnQge01vdmVBcmNoZXJ9IGZyb20gXCIuLi9CZWhhdmlvcnMvTW92ZS9Nb3ZlQXJjaGVyXCI7XHJcbmltcG9ydCB7U2FicmV9IGZyb20gXCIuLi9CZWhhdmlvcnMvQXR0YWNrL1NhYnJlXCI7XHJcbmltcG9ydCB7TW92ZUhvcnNlbWFufSBmcm9tIFwiLi4vQmVoYXZpb3JzL01vdmUvTW92ZUhvcnNlbWFuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9yc2VtYW4gZXh0ZW5kcyBVbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc194OiBudW1iZXIsIHBvc195OiBudW1iZXIsIHBsYXllcklkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihwb3NfeCwgcG9zX3ksIHBsYXllcklkKTtcclxuICAgICAgICB0aGlzLmF0dGFja0JlaGF2aW9yID0gbmV3IFNhYnJlKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQmVoYXZpb3IgPSBuZXcgTW92ZUhvcnNlbWFuKCk7XHJcbiAgICAgICAgdGhpcy5pY29uID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy9ob3JzZW1hbi5wbmcnO1xyXG4gICAgICAgIHRoaXMuaWNvbl9hbHRlcm5hdGl2ZSA9ICcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvaG9yc2VtYW5fYWx0ZXJuYXRpdmUucG5nJztcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDIwMDtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtVbml0fSBmcm9tIFwiLi9Vbml0XCI7XHJcbmltcG9ydCB7Qm93fSBmcm9tIFwiLi4vQmVoYXZpb3JzL0F0dGFjay9Cb3dcIjtcclxuaW1wb3J0IHtNb3ZlQXJjaGVyfSBmcm9tIFwiLi4vQmVoYXZpb3JzL01vdmUvTW92ZUFyY2hlclwiO1xyXG5pbXBvcnQge1N3b3JkfSBmcm9tIFwiLi4vQmVoYXZpb3JzL0F0dGFjay9Td29yZFwiO1xyXG5pbXBvcnQge01vdmVTd29yZHNtYW59IGZyb20gXCIuLi9CZWhhdmlvcnMvTW92ZS9Nb3ZlU3dvcmRzbWFuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3dvcmRzbWFuIGV4dGVuZHMgVW5pdHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc194OiBudW1iZXIsIHBvc195OiBudW1iZXIsIHBsYXllcklkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihwb3NfeCwgcG9zX3ksIHBsYXllcklkKTtcclxuICAgICAgICB0aGlzLmF0dGFja0JlaGF2aW9yID0gbmV3IFN3b3JkKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQmVoYXZpb3IgPSBuZXcgTW92ZVN3b3Jkc21hbigpO1xyXG4gICAgICAgIHRoaXMuaWNvbiA9ICcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvc3dvcmRzbWFuLnBuZyc7XHJcbiAgICAgICAgdGhpcy5pY29uX2FsdGVybmF0aXZlID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy9zd29yZHNtYW5fYWx0ZXJuYXRpdmUucG5nJztcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0F0dGFja0JlaGF2aW9yfSBmcm9tIFwiLi4vQmVoYXZpb3JzL0F0dGFjay9BdHRhY2tCZWhhdmlvclwiO1xyXG5pbXBvcnQge01vdmVCZWhhdmlvcn0gZnJvbSBcIi4uL0JlaGF2aW9ycy9Nb3ZlL01vdmVCZWhhdmlvclwiO1xyXG5pbXBvcnQge0FyZWF9IGZyb20gXCIuLi9NYXAvQXJlYVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVuaXQge1xyXG4gICAgcG9zaXRpb25feDogbnVtYmVyO1xyXG4gICAgcG9zaXRpb25feTogbnVtYmVyO1xyXG4gICAgcGxheWVySWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NfeDogbnVtYmVyLCBwb3NfeTogbnVtYmVyLCBwbGF5ZXJpZDogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uX3ggPSBwb3NfeDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uX3kgPSBwb3NfeTtcclxuICAgICAgICB0aGlzLnBsYXllcklkID0gcGxheWVyaWQ7XHJcbiAgICAgICAgdGhpcy5pc0FsaXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2tCZWhhdmlvcjogQXR0YWNrQmVoYXZpb3I7XHJcbiAgICBtb3ZlQmVoYXZpb3I6IE1vdmVCZWhhdmlvcjtcclxuICAgIGFyZWE6IEFyZWE7XHJcbiAgICBoZWFsdGg6IG51bWJlcjtcclxuICAgIGlzQWxpdmU6IGJvb2xlYW47XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBpY29uX2FsdGVybmF0aXZlOiBzdHJpbmc7XHJcblxyXG4gICAgYXR0YWNrKHRhcmdldFVuaXQ6IFVuaXQpe1xyXG4gICAgICAgIHRoaXMuYXR0YWNrQmVoYXZpb3IuYXR0YWNrKHRhcmdldFVuaXQpXHJcbiAgICB9O1xyXG5cclxuICAgIG1vdmUodW5pdDogVW5pdCwgdGFyZ2V0QXJlYTogQXJlYSl7XHJcbiAgICAgICAgdGhpcy5tb3ZlQmVoYXZpb3IubW92ZSh1bml0LHRhcmdldEFyZWEpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7TWFwfSBmcm9tIFwiLi9TdHJhdGVneS9NYXAvTWFwXCI7XHJcbmltcG9ydCB7THZsMV90ZXh0dXJlfSBmcm9tIFwiLi9TdHJhdGVneS9NYXAvTHZsMV90ZXh0dXJlXCI7XHJcblxyXG5cclxuLy8gbGV0IGR1Y2sgPSBuZXcgTWFsbGFyZER1Y2soXCJCbGFjayBjbG9ha1wiKTtcclxuLy8gZHVjay5kaXNwbGF5KCk7XHJcbi8vIGR1Y2sucGVyZm9ybUZseSgpO1xyXG4vLyBkdWNrLnBlcmZvcm1RdWFjaygpO1xyXG4vLyBkdWNrLnNldHF1YWNrQmVoYXZpb3IobmV3IE11dGVRdWFjaygpKTtcclxuLy8gZHVjay5wZXJmb3JtUXVhY2soKTtcclxuLy9cclxubGV0IG1hcCA9IG5ldyBNYXAoMjAsMjApO1xyXG5tYXAucHJpbnRfZ3JpZCgpO1xyXG5tYXAubG9hZF9tYXBfdGV4dHVyZV9sb2dpYyhuZXcgTHZsMV90ZXh0dXJlKCkuTHZsMV90ZXh0dXJlKTtcclxubWFwLmRyYXdfbWFwX3RleHR1cmUoKTtcclxubWFwLmluaXRfdW5pdHMoKTtcclxubWFwLmRyYXdfbWFwX3VuaXQoKTtcclxubWFwLmNsaWNrX2xvZ2ljKCk7XHJcblxyXG4iXX0=

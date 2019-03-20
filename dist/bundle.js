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
        let getDivs = function (elements) {
            let divs = [];
            for (let i = 0; i < elements.length; i++)
                if (elements[i].tagName == 'DIV')
                    divs.push(elements[i]);
            return divs;
        };
        let getUnit = function (x, y) {
            for (let i = 0; i < self.units.length; i++) {
                if ((self.units[i].position_x == x) && (self.units[i].position_y == y)) {
                    return self.units[i];
                }
            }
        };
        let getArea = function (x, y) {
            for (let i = 0; i < self.rows; i++) {
                for (let j = 0; j < self.cols; j++) {
                    if ((self.map[i][j].position_x == x) && (self.map[i][j].position_y == y)) {
                        return self.map[i][j];
                    }
                }
            }
        };
        // let upgradeMap = function (){
        //
        // };
        document.body.onclick = function (event) {
            let flag = 0;
            /** Все элементы 'div' из координат клика помещаем в 'Array<HTMLElement>' */
            let elements = document.elementsFromPoint(event.clientX, event.clientY);
            let divs = getDivs(elements);
            /** Первый клик по юниту */
            if (divs.length == 2 && self.currentUnit == undefined) { // before if OK
                /**
                 * Обработка первого клика (выбор юнита для действия)
                 * divs[0] --> Unit; divs[1] --> Area
                 */
                flag = 1;
                /** Подсветка выбранного юнита красным */
                divs[0].style.backgroundColor = "rgba( 255, 1, 0, 0.3)";
                /** Get logic coordinates = Unit ( PositionX ; PositionY ) range(20) */
                let clickX = event.clientX, clickY = event.clientY;
                let unitPositionX = Math.floor((clickX - 10) / 36);
                let unitPositionY = Math.floor((clickY - 10) / 36);
                /** Запоминаем Юнита, по которому кликнули */
                let currentUnit;
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
                        if (speed >= Math.sqrt(Math.pow((j - currentUnit.position_x), 2) +
                            Math.pow((i - currentUnit.position_y), 2))) {
                            /**
                             * Если 'div' один в координате и Area.canMove
                             * то кладём в клетки, в которые можно ходить
                             */
                            let elements = document.elementsFromPoint(j * 36 + 10, i * 36 + 10);
                            let divs = getDivs(elements);
                            if (divs.length == 1 && self.map[i][j].canMove) {
                                self.mayMoveCells.push(divs[0]);
                            }
                        }
                        // Условие для атаки
                        if (range >= Math.sqrt(Math.pow((j - currentUnit.position_x), 2) +
                            Math.pow((i - currentUnit.position_y), 2))) {
                            /**
                             * Если div-а два в координате и 'playerId' у targetUnit и currentUnit отличаются
                             * то кладём в клетки, юнитов из которых можно атаковать
                             */
                            let elements = document.elementsFromPoint(j * 36 + 10, i * 36 + 10);
                            let divs = getDivs(elements);
                            if (divs.length == 2 && (getUnit(j, i).playerId != currentUnit.playerId) &&
                                getUnit(j, i).isAlive) {
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
            // current Unit defined
            if (self.currentUnit != undefined && flag == 0) {
                /** Начало обработки второго клика */
                // alert('Start stage 2!');
                /** Get logic coordinates = Area ( PositionX ; PositionY ) range(20) */
                let clickX = event.clientX, clickY = event.clientY;
                let areaPositionX = Math.floor((clickX - 10) / 36);
                let areaPositionY = Math.floor((clickY - 10) / 36);
                /**
                 * Либо div второго клика - земля, либо вражеский юнит
                 * Если в Divs 1 элемент то это область на которую хочет перейти пользователь
                 */
                if (divs.length == 1 && self.mayMoveCells.includes(divs[0])) {
                    /** Запоминаем Область, по которой кликнули */
                    let currentArea;
                    currentArea = getArea(areaPositionX, areaPositionY);
                    console.log(currentArea);
                    /** Собственно идём в Area */
                    //сначала подтереть все старые иконки - вынести в функцию - повторение кода ниже
                    for (let i = 0; i < self.units.length; i++) {
                        let divsUnit = getDivs(document.elementsFromPoint(self.units[i].position_x * 36 + 10, self.units[i].position_y * 36 + 10));
                        divsUnit[0].parentNode.removeChild(divsUnit[0]);
                    }
                    self.currentUnit.move(self.currentUnit, currentArea);
                    // upgradeMap();
                    self.draw_map_unit();
                }
                /** Если второго клик по вражескому юниту */
                if (divs.length == 2 && self.mayAttackCells.includes(divs[1])) {
                    /** Запоминаем Юнита, по которой кликнули */
                    let targetUnit;
                    targetUnit = getUnit(areaPositionX, areaPositionY);
                    console.log(targetUnit);
                    /** Собственно бьём по TargetUnit */
                    self.currentUnit.attack(targetUnit);
                    // upgradeMap();
                    //сначала подтереть старую иконку
                    for (let i = 0; i < self.units.length; i++) {
                        let divsUnit = getDivs(document.elementsFromPoint(self.units[i].position_x * 36 + 10, self.units[i].position_y * 36 + 10));
                        divsUnit[0].parentNode.removeChild(divsUnit[0]);
                    }
                    self.draw_map_unit();
                }
                /** Конец обработки второго клика - подтираем всё дело */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvU3RyYXRlZ3kvQmVoYXZpb3JzL0F0dGFjay9Cb3cudHMiLCJzcmMvU3RyYXRlZ3kvQmVoYXZpb3JzL0F0dGFjay9TYWJyZS50cyIsInNyYy9TdHJhdGVneS9CZWhhdmlvcnMvQXR0YWNrL1N0b25lQmFsbC50cyIsInNyYy9TdHJhdGVneS9CZWhhdmlvcnMvQXR0YWNrL1N3b3JkLnRzIiwic3JjL1N0cmF0ZWd5L0JlaGF2aW9ycy9Nb3ZlL01vdmVBcmNoZXIudHMiLCJzcmMvU3RyYXRlZ3kvQmVoYXZpb3JzL01vdmUvTW92ZUNhdGFwdWx0LnRzIiwic3JjL1N0cmF0ZWd5L0JlaGF2aW9ycy9Nb3ZlL01vdmVIb3JzZW1hbi50cyIsInNyYy9TdHJhdGVneS9CZWhhdmlvcnMvTW92ZS9Nb3ZlU3dvcmRzbWFuLnRzIiwic3JjL1N0cmF0ZWd5L01hcC9BcmVhLnRzIiwic3JjL1N0cmF0ZWd5L01hcC9Hcm91bmRBcmVhLnRzIiwic3JjL1N0cmF0ZWd5L01hcC9MdmwxX3RleHR1cmUudHMiLCJzcmMvU3RyYXRlZ3kvTWFwL01hcC50cyIsInNyYy9TdHJhdGVneS9NYXAvV2F0ZXJBcmVhLnRzIiwic3JjL1N0cmF0ZWd5L1VuaXRzL0FyY2hlci50cyIsInNyYy9TdHJhdGVneS9Vbml0cy9DYXRhcHVsdC50cyIsInNyYy9TdHJhdGVneS9Vbml0cy9Ib3JzZW1hbi50cyIsInNyYy9TdHJhdGVneS9Vbml0cy9Td29yZHNtYW4udHMiLCJzcmMvU3RyYXRlZ3kvVW5pdHMvVW5pdC50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQSxNQUFhLEdBQUc7SUFBaEI7UUFDSSxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBVyxDQUFDLENBQUM7SUFnQnRCLENBQUM7SUFkRyxNQUFNLENBQUMsVUFBZ0I7UUFDbkIsVUFBVSxDQUFDLE1BQU0sSUFB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TSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO29CQUM5RyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQy9DO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO29CQUM5RyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQy9DO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO29CQUM5RyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQy9DO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO29CQUM5RyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQy9DO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07aUJBQ3ZEO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07b0JBQzFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07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dW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0F0dGFja0JlaGF2aW9yfSBmcm9tIFwiLi9BdHRhY2tCZWhhdmlvclwiO1xyXG5pbXBvcnQge1VuaXR9IGZyb20gXCIuLi8uLi9Vbml0cy9Vbml0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm93IGltcGxlbWVudHMgQXR0YWNrQmVoYXZpb3J7XHJcbiAgICBkYW1hZ2U6IG51bWJlciA9IDUwO1xyXG4gICAgcmFuZ2U6IG51bWJlciA9IDU7XHJcblxyXG4gICAgYXR0YWNrKHRhcmdldFVuaXQ6IFVuaXQpOiB2b2lkIHtcclxuICAgICAgICB0YXJnZXRVbml0LmhlYWx0aCAtPSB0aGlzLmRhbWFnZTtcclxuICAgICAgICBpZiAodGFyZ2V0VW5pdC5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXRVbml0LmlzQWxpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGFyZ2V0VW5pdC5pY29uID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy9ncmF2ZS5wbmcnO1xyXG4gICAgICAgICAgICB0YXJnZXRVbml0Lmljb25fYWx0ZXJuYXRpdmUgPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2dyYXZlLnBuZyc7XHJcbiAgICAgICAgICAgIHRhcmdldFVuaXQubW92ZUJlaGF2aW9yLnNwZWVkID0gMDtcclxuICAgICAgICAgICAgdGFyZ2V0VW5pdC5hdHRhY2tCZWhhdmlvci5kYW1hZ2UgPSAwO1xyXG4gICAgICAgICAgICB0YXJnZXRVbml0LmF0dGFja0JlaGF2aW9yLnJhbmdlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVbml0OiAnKyB0eXBlb2YodGFyZ2V0VW5pdCkgKyAnIFg6ICcgKyB0YXJnZXRVbml0LnBvc2l0aW9uX3ggK1xyXG4gICAgICAgICAgICAnIFk6ICcgKyB0YXJnZXRVbml0LnBvc2l0aW9uX3kgKyctJyArIHRoaXMuZGFtYWdlICsgJ2hwICcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBdHRhY2tCZWhhdmlvcn0gZnJvbSBcIi4vQXR0YWNrQmVoYXZpb3JcIjtcclxuaW1wb3J0IHtVbml0fSBmcm9tIFwiLi4vLi4vVW5pdHMvVW5pdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhYnJlIGltcGxlbWVudHMgQXR0YWNrQmVoYXZpb3J7XHJcbiAgICBkYW1hZ2U6IG51bWJlciA9IDc1O1xyXG4gICAgcmFuZ2U6IG51bWJlciA9IDE7XHJcblxyXG4gICAgYXR0YWNrKHRhcmdldFVuaXQ6IFVuaXQpOiB2b2lkIHtcclxuICAgICAgICB0YXJnZXRVbml0LmhlYWx0aCAtPSB0aGlzLmRhbWFnZTtcclxuICAgICAgICBpZiAodGFyZ2V0VW5pdC5oZWFsdGggPD0gMCkgdGFyZ2V0VW5pdC5pc0FsaXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVbml0OiAnKyB0eXBlb2YodGFyZ2V0VW5pdCkgKyAnIFg6ICcgKyB0YXJnZXRVbml0LnBvc2l0aW9uX3ggK1xyXG4gICAgICAgICAgICAnIFk6ICcgKyB0YXJnZXRVbml0LnBvc2l0aW9uX3kgKyctJyArIHRoaXMuZGFtYWdlICsgJ2hwICcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBdHRhY2tCZWhhdmlvcn0gZnJvbSBcIi4vQXR0YWNrQmVoYXZpb3JcIjtcclxuaW1wb3J0IHtVbml0fSBmcm9tIFwiLi4vLi4vVW5pdHMvVW5pdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0b25lQmFsbCBpbXBsZW1lbnRzIEF0dGFja0JlaGF2aW9ye1xyXG4gICAgZGFtYWdlOiBudW1iZXIgPSAxMDA7XHJcbiAgICByYW5nZTogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgYXR0YWNrKHRhcmdldFVuaXQ6IFVuaXQpOiB2b2lkIHtcclxuICAgICAgICB0YXJnZXRVbml0LmhlYWx0aCAtPSB0aGlzLmRhbWFnZTtcclxuICAgICAgICBpZiAodGFyZ2V0VW5pdC5oZWFsdGggPD0gMCkgdGFyZ2V0VW5pdC5pc0FsaXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVbml0OiAnKyB0eXBlb2YodGFyZ2V0VW5pdCkgKyAnIFg6ICcgKyB0YXJnZXRVbml0LnBvc2l0aW9uX3ggK1xyXG4gICAgICAgICAgICAnIFk6ICcgKyB0YXJnZXRVbml0LnBvc2l0aW9uX3kgKyctJyArIHRoaXMuZGFtYWdlICsgJ2hwICcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBdHRhY2tCZWhhdmlvcn0gZnJvbSBcIi4vQXR0YWNrQmVoYXZpb3JcIjtcclxuaW1wb3J0IHtVbml0fSBmcm9tIFwiLi4vLi4vVW5pdHMvVW5pdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN3b3JkIGltcGxlbWVudHMgQXR0YWNrQmVoYXZpb3J7XHJcbiAgICBkYW1hZ2U6IG51bWJlciA9IDUwO1xyXG4gICAgcmFuZ2U6IG51bWJlciA9IDE7XHJcblxyXG4gICAgYXR0YWNrKHRhcmdldFVuaXQ6IFVuaXQpOiB2b2lkIHtcclxuICAgICAgICB0YXJnZXRVbml0LmhlYWx0aCAtPSB0aGlzLmRhbWFnZTtcclxuICAgICAgICBpZiAodGFyZ2V0VW5pdC5oZWFsdGggPD0gMCkgdGFyZ2V0VW5pdC5pc0FsaXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVbml0OiAnKyB0eXBlb2YodGFyZ2V0VW5pdCkgKyAnIFg6ICcgKyB0YXJnZXRVbml0LnBvc2l0aW9uX3ggK1xyXG4gICAgICAgICAgICAnIFk6ICcgKyB0YXJnZXRVbml0LnBvc2l0aW9uX3kgKyctJyArIHRoaXMuZGFtYWdlICsgJ2hwICcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNb3ZlQmVoYXZpb3J9IGZyb20gXCIuL01vdmVCZWhhdmlvclwiO1xyXG5pbXBvcnQge0FyZWF9IGZyb20gXCIuLi8uLi9NYXAvQXJlYVwiO1xyXG5pbXBvcnQge1VuaXR9IGZyb20gXCIuLi8uLi9Vbml0cy9Vbml0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZUFyY2hlciBpbXBsZW1lbnRzIE1vdmVCZWhhdmlvcntcclxuICAgIHNwZWVkID0gMztcclxuXHJcbiAgICBtb3ZlKHVuaXQ6IFVuaXQsIHRhcmdldEFyZWE6IEFyZWEpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VuaXQ6ICcrIHR5cGVvZih1bml0KSArICcgWDogJyArIHVuaXQucG9zaXRpb25feCArXHJcbiAgICAgICAgICAgICcgWTogJyArIHVuaXQucG9zaXRpb25feSArJyBtb3ZlIHRvICcgKyAnIFg6ICcgKyB0YXJnZXRBcmVhLnBvc2l0aW9uX3ggK1xyXG4gICAgICAgICAgICAnIFk6ICcgKyB0YXJnZXRBcmVhLnBvc2l0aW9uX3kpO1xyXG5cclxuICAgICAgICB1bml0LnBvc2l0aW9uX3ggPSB0YXJnZXRBcmVhLnBvc2l0aW9uX3g7XHJcbiAgICAgICAgdW5pdC5wb3NpdGlvbl95ID0gdGFyZ2V0QXJlYS5wb3NpdGlvbl95O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNb3ZlQmVoYXZpb3J9IGZyb20gXCIuL01vdmVCZWhhdmlvclwiO1xyXG5pbXBvcnQge0FyZWF9IGZyb20gXCIuLi8uLi9NYXAvQXJlYVwiO1xyXG5pbXBvcnQge1VuaXR9IGZyb20gXCIuLi8uLi9Vbml0cy9Vbml0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZUNhdGFwdWx0IGltcGxlbWVudHMgTW92ZUJlaGF2aW9ye1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDE7XHJcblxyXG4gICAgbW92ZSh1bml0OiBVbml0LCB0YXJnZXRBcmVhOiBBcmVhKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VuaXQ6ICcrIHR5cGVvZih1bml0KSArICcgWDogJyArIHVuaXQucG9zaXRpb25feCArXHJcbiAgICAgICAgICAgICcgWTogJyArIHVuaXQucG9zaXRpb25feSArJyBtb3ZlIHRvICcgKyAnIFg6ICcgKyB0YXJnZXRBcmVhLnBvc2l0aW9uX3ggK1xyXG4gICAgICAgICAgICAnIFk6ICcgKyB0YXJnZXRBcmVhLnBvc2l0aW9uX3kpO1xyXG5cclxuICAgICAgICB1bml0LnBvc2l0aW9uX3ggPSB0YXJnZXRBcmVhLnBvc2l0aW9uX3g7XHJcbiAgICAgICAgdW5pdC5wb3NpdGlvbl95ID0gdGFyZ2V0QXJlYS5wb3NpdGlvbl95O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNb3ZlQmVoYXZpb3J9IGZyb20gXCIuL01vdmVCZWhhdmlvclwiO1xyXG5pbXBvcnQge0FyZWF9IGZyb20gXCIuLi8uLi9NYXAvQXJlYVwiO1xyXG5pbXBvcnQge1VuaXR9IGZyb20gXCIuLi8uLi9Vbml0cy9Vbml0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZUhvcnNlbWFuIGltcGxlbWVudHMgTW92ZUJlaGF2aW9ye1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIG1vdmUodW5pdDogVW5pdCwgdGFyZ2V0QXJlYTogQXJlYSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVbml0OiAnKyB0eXBlb2YodW5pdCkgKyAnIFg6ICcgKyB1bml0LnBvc2l0aW9uX3ggK1xyXG4gICAgICAgICAgICAnIFk6ICcgKyB1bml0LnBvc2l0aW9uX3kgKycgbW92ZSB0byAnICsgJyBYOiAnICsgdGFyZ2V0QXJlYS5wb3NpdGlvbl94ICtcclxuICAgICAgICAgICAgJyBZOiAnICsgdGFyZ2V0QXJlYS5wb3NpdGlvbl95KTtcclxuXHJcbiAgICAgICAgdW5pdC5wb3NpdGlvbl94ID0gdGFyZ2V0QXJlYS5wb3NpdGlvbl94O1xyXG4gICAgICAgIHVuaXQucG9zaXRpb25feSA9IHRhcmdldEFyZWEucG9zaXRpb25feTtcclxuICAgIH1cclxufSIsImltcG9ydCB7TW92ZUJlaGF2aW9yfSBmcm9tIFwiLi9Nb3ZlQmVoYXZpb3JcIjtcclxuaW1wb3J0IHtBcmVhfSBmcm9tIFwiLi4vLi4vTWFwL0FyZWFcIjtcclxuaW1wb3J0IHtVbml0fSBmcm9tIFwiLi4vLi4vVW5pdHMvVW5pdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVTd29yZHNtYW4gaW1wbGVtZW50cyBNb3ZlQmVoYXZpb3J7XHJcbiAgICBzcGVlZDogbnVtYmVyID0gNTtcclxuXHJcbiAgICBtb3ZlKHVuaXQ6IFVuaXQsIHRhcmdldEFyZWE6IEFyZWEpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVW5pdDogJysgdHlwZW9mKHVuaXQpICsgJyBYOiAnICsgdW5pdC5wb3NpdGlvbl94ICtcclxuICAgICAgICAgICAgJyBZOiAnICsgdW5pdC5wb3NpdGlvbl95ICsnIG1vdmUgdG8gJyArICcgWDogJyArIHRhcmdldEFyZWEucG9zaXRpb25feCArXHJcbiAgICAgICAgICAgICcgWTogJyArIHRhcmdldEFyZWEucG9zaXRpb25feSk7XHJcblxyXG4gICAgICAgIHVuaXQucG9zaXRpb25feCA9IHRhcmdldEFyZWEucG9zaXRpb25feDtcclxuICAgICAgICB1bml0LnBvc2l0aW9uX3kgPSB0YXJnZXRBcmVhLnBvc2l0aW9uX3k7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQXJlYSB7XHJcbiAgICBwb3NpdGlvbl94OiBudW1iZXI7XHJcbiAgICBwb3NpdGlvbl95OiBudW1iZXI7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG4gICAgY2FuTW92ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocG9zX3g6IG51bWJlciwgcG9zX3k6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbl94ID0gcG9zX3g7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbl95ID0gcG9zX3k7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtBcmVhfSBmcm9tIFwiLi9BcmVhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JvdW5kQXJlYSBleHRlbmRzIEFyZWF7XHJcbiAgICBjYW5Nb3ZlID0gdHJ1ZTtcclxuICAgIGltYWdlID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy9ncm91bmQucG5nJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NfeDogbnVtYmVyLCBwb3NfeTogbnVtYmVyKXtcclxuICAgICAgICBzdXBlcihwb3NfeCwgcG9zX3kpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIEx2bDFfdGV4dHVyZSB7XHJcblxyXG4gICAgTHZsMV90ZXh0dXJlOiBvYmplY3QgPVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJhcmVhc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG59IiwiaW1wb3J0IHtBcmVhfSBmcm9tIFwiLi9BcmVhXCI7XHJcbmltcG9ydCB7R3JvdW5kQXJlYX0gZnJvbSBcIi4vR3JvdW5kQXJlYVwiO1xyXG5pbXBvcnQge1dhdGVyQXJlYX0gZnJvbSBcIi4vV2F0ZXJBcmVhXCI7XHJcbmltcG9ydCB7VW5pdH0gZnJvbSBcIi4uL1VuaXRzL1VuaXRcIjtcclxuaW1wb3J0IHtBcmNoZXJ9IGZyb20gXCIuLi9Vbml0cy9BcmNoZXJcIjtcclxuaW1wb3J0IHtIb3JzZW1hbn0gZnJvbSBcIi4uL1VuaXRzL0hvcnNlbWFuXCI7XHJcbmltcG9ydCB7U3dvcmRzbWFufSBmcm9tIFwiLi4vVW5pdHMvU3dvcmRzbWFuXCI7XHJcbmltcG9ydCB7Q2F0YXB1bHR9IGZyb20gXCIuLi9Vbml0cy9DYXRhcHVsdFwiO1xyXG4vLyBpbXBvcnQge2xvYWRSdWxlc30gZnJvbSBcInRzbGludFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcCB7XHJcbiAgICByb3dzOiBudW1iZXI7XHJcbiAgICBjb2xzOiBudW1iZXI7XHJcbiAgICBtYXA6IEFycmF5PEFycmF5PEFyZWE+PjtcclxuICAgIHVuaXRzOiBBcnJheTxVbml0PjtcclxuICAgIGN1cnJlbnRVbml0OiBVbml0O1xyXG4gICAgbWF5TW92ZUNlbGxzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXTsgLy9ESVZTXHJcbiAgICBtYXlBdHRhY2tDZWxsczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW107IC8vRElWU1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGk6IG51bWJlciwgajogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnJvd3MgPSBpO1xyXG4gICAgICAgIHRoaXMuY29scyA9IGo7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRfZ3JpZCgpe1xyXG4gICAgICAgIGxldCBjX2NhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRrYVwiKTtcclxuICAgICAgICBsZXQgY29udGV4dCA9IGNfY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPD0gNzIwOyB4ICs9IDM2KSB7XHJcbiAgICAgICAgICBjb250ZXh0Lm1vdmVUbyh4LCAwKTtcclxuICAgICAgICAgIGNvbnRleHQubGluZVRvKHgsIDcyMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8PSA3MjA7IHkgKz0gMzYpIHtcclxuICAgICAgICAgIGNvbnRleHQubW92ZVRvKDAsIHkpO1xyXG4gICAgICAgICAgY29udGV4dC5saW5lVG8oNzIwLCB5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiM4ODhcIjtcclxuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDQ7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkX21hcF90ZXh0dXJlX2xvZ2ljKG9iajogb2JqZWN0KXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgICAgIGxldCBhcmVhcyA9IChvYmogYXMgYW55KS5hcmVhcztcclxuICAgICAgICBsZXQgcmVzdWx0X21hcDogQXJyYXk8QXJyYXk8QXJlYT4+ID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IGFyZWFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnI6IEFycmF5PEFyZWE+ID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyZWFzW2ldLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGFyZWFzW2ldW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICBjYXNlIFwiR3JuZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChuZXcgR3JvdW5kQXJlYShqLCBpICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBjYXNlIFwiV2F0ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gobmV3IFdhdGVyQXJlYShqLCBpICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChuZXcgR3JvdW5kQXJlYShqLCBpICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFycik7XHJcbiAgICAgICAgICAgIHJlc3VsdF9tYXAucHVzaChhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0X21hcCk7XHJcbiAgICAgICAgdGhpcy5tYXAgPSByZXN1bHRfbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdfbWFwX3RleHR1cmUoKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdl9wb3NpdGlvbiA9IChcInBvc2l0aW9uOiBhYnNvbHV0ZTtcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2X2xlZnQgPSBcImxlZnQ6IFwiICsgKDM2ICogaiArIDEwKSArIFwicHg7XCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2X3RvcCA9IFwidG9wOiBcIiArICgzNiAqIGkgKyAxMCkgKyBcInB4O1wiO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdl93aWR0aCA9IFwid2lkdGg6IFwiICsgMzIgKyBcInB4O1wiO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdl9oZWlnaHQgPSBcImhlaWdodDogXCIgKyAzMiArIFwicHg7XCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgeW91clZhciA9IHRoaXMubWFwW2ldW2pdLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdl9iYWNrZ3JvdW5kX2ltYWdlID0gJ2JhY2tncm91bmQtaW1hZ2U6IHVybCgnICsgeW91clZhciArICcpOyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJlYV96X2luZGV4ID0gJ3otaW5kZXg6IDE7JztcclxuICAgICAgICAgICAgICAgIGxldCBuZXdTdHlsZSA9IGRpdl9wb3NpdGlvbiArIGRpdl9sZWZ0ICsgZGl2X3RvcCArIGRpdl93aWR0aCArIGRpdl9oZWlnaHQgK1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdl9iYWNrZ3JvdW5kX2ltYWdlICsgYXJlYV96X2luZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBuZXdTdHlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRfdW5pdHMoKSB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCIuLi9zcmMvU3RyYXRlZ3kvTWFwL3VuaXRzLmpzb25cIiwgZmFsc2UpO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZChudWxsKTtcclxuICAgICAgICBsZXQgbXlfSlNPTl9vYmplY3QgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBsZXQgdW5pdHNfZnJvbV9qc29uID0gbXlfSlNPTl9vYmplY3QudW5pdHM7XHJcblxyXG4gICAgICAgIGxldCB1bml0cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pdHNfZnJvbV9qc29uLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2godW5pdHNfZnJvbV9qc29uW2ldLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgY2FzZSBcIkFyY2hlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIHVuaXRzLnB1c2gobmV3IEFyY2hlcih1bml0c19mcm9tX2pzb25baV0ucG9zX3gsIHVuaXRzX2Zyb21fanNvbltpXS5wb3NfeSxcclxuICAgICAgICAgICAgICAgICAgICAgIHVuaXRzX2Zyb21fanNvbltpXS5wbGF5ZXJfaWQpKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgY2FzZSBcIkhvcnNlbWFuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgdW5pdHMucHVzaChuZXcgSG9yc2VtYW4odW5pdHNfZnJvbV9qc29uW2ldLnBvc194LCB1bml0c19mcm9tX2pzb25baV0ucG9zX3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bml0c19mcm9tX2pzb25baV0ucGxheWVyX2lkKSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGNhc2UgXCJTd29yZHNtYW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICB1bml0cy5wdXNoKG5ldyBTd29yZHNtYW4odW5pdHNfZnJvbV9qc29uW2ldLnBvc194LCB1bml0c19mcm9tX2pzb25baV0ucG9zX3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bml0c19mcm9tX2pzb25baV0ucGxheWVyX2lkKSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGNhc2UgXCJDYXRhcHVsdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIHVuaXRzLnB1c2gobmV3IENhdGFwdWx0KHVuaXRzX2Zyb21fanNvbltpXS5wb3NfeCwgdW5pdHNfZnJvbV9qc29uW2ldLnBvc195LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5pdHNfZnJvbV9qc29uW2ldLnBsYXllcl9pZCkpO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5yZWFkYWJsZSBUeXBlIG9mIFVuaXQhIEVycm9yISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVuaXRzID0gdW5pdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd19tYXBfdW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy51bml0cy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXRzW2tdLnBvc2l0aW9uX3ggPT0gaiAmJiB0aGlzLnVuaXRzW2tdLnBvc2l0aW9uX3kgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdl9wb3NpdGlvbiA9IChcInBvc2l0aW9uOiBhYnNvbHV0ZTtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXZfbGVmdCA9IFwibGVmdDogXCIgKyAoMzYgKiBqICsgMTApICsgXCJweDtcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdl90b3AgPSBcInRvcDogXCIgKyAoMzYgKiBpICsgMTApICsgXCJweDtcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdl93aWR0aCA9IFwid2lkdGg6IFwiICsgMzIgKyBcInB4O1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2X2hlaWdodCA9IFwiaGVpZ2h0OiBcIiArIDMyICsgXCJweDtcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHlvdXJWYXI6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKiDQnNC10L3Rj9C10Lwg0LjQutC+0L3QutGDINC90LAg0YDQsNC30LLQtdGA0L3Rg9GC0YPRjiDQtdGB0LvQuCDQuNCz0YDQvtC6INGBINC00YDRg9Cz0LjQvCAncGxheWVySWQnICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXRzW2tdLnBsYXllcklkID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXJWYXIgPSB0aGlzLnVuaXRzW2tdLmljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3VyVmFyID0gdGhpcy51bml0c1trXS5pY29uX2FsdGVybmF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXZfYmFja2dyb3VuZF9pbWFnZSA9ICdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyArIHlvdXJWYXIgKyAnKTsnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqICdVbml0JyDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0L/QvtCy0LXRgNGFICdBcmVhJyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJlYV96X2luZGV4ID0gJ3otaW5kZXg6IDI7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1N0eWxlID0gZGl2X3Bvc2l0aW9uICsgZGl2X2xlZnQgKyBkaXZfdG9wICsgZGl2X3dpZHRoICsgZGl2X2hlaWdodCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZfYmFja2dyb3VuZF9pbWFnZSArIGFyZWFfel9pbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBuZXdTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfbG9naWMoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBnZXREaXZzID0gZnVuY3Rpb24gKGVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4pIHtcclxuICAgICAgICAgICAgbGV0IGRpdnMgPSBbXSBhcyBBcnJheTxIVE1MRWxlbWVudD47XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50c1tpXS50YWdOYW1lID09ICdESVYnKSBkaXZzLnB1c2goZWxlbWVudHNbaV0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRpdnM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGdldFVuaXQgPSBmdW5jdGlvbiAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLnVuaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIChzZWxmLnVuaXRzW2ldLnBvc2l0aW9uX3ggPT0geCkgJiYgKHNlbGYudW5pdHNbaV0ucG9zaXRpb25feSA9PSB5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi51bml0c1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBnZXRBcmVhID0gZnVuY3Rpb24gKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZi5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIChzZWxmLm1hcFtpXVtqXS5wb3NpdGlvbl94ID09IHgpICYmIChzZWxmLm1hcFtpXVtqXS5wb3NpdGlvbl95ID09IHkpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5tYXBbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHVwZ3JhZGVNYXAgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH07XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBmbGFnOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgLyoqINCS0YHQtSDRjdC70LXQvNC10L3RgtGLICdkaXYnINC40Lcg0LrQvtC+0YDQtNC40L3QsNGCINC60LvQuNC60LAg0L/QvtC80LXRidCw0LXQvCDQsiAnQXJyYXk8SFRNTEVsZW1lbnQ+JyAqL1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKSBhcyBBcnJheTxIVE1MRWxlbWVudD47XHJcbiAgICAgICAgICAgIGxldCBkaXZzID0gZ2V0RGl2cyhlbGVtZW50cyk7XHJcblxyXG5cclxuICAgICAgICAgICAgLyoqINCf0LXRgNCy0YvQuSDQutC70LjQuiDQv9C+INGO0L3QuNGC0YMgKi9cclxuICAgICAgICAgICAgaWYgKCBkaXZzLmxlbmd0aCA9PSAyICYmIHNlbGYuY3VycmVudFVuaXQgPT0gdW5kZWZpbmVkICkgeyAgLy8gYmVmb3JlIGlmIE9LXHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDQntCx0YDQsNCx0L7RgtC60LAg0L/QtdGA0LLQvtCz0L4g0LrQu9C40LrQsCAo0LLRi9Cx0L7RgCDRjtC90LjRgtCwINC00LvRjyDQtNC10LnRgdGC0LLQuNGPKVxyXG4gICAgICAgICAgICAgICAgICogZGl2c1swXSAtLT4gVW5pdDsgZGl2c1sxXSAtLT4gQXJlYVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmbGFnID0gMTtcclxuICAgICAgICAgICAgICAgIC8qKiDQn9C+0LTRgdCy0LXRgtC60LAg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0Y7QvdC40YLQsCDQutGA0LDRgdC90YvQvCAqL1xyXG4gICAgICAgICAgICAgICAgZGl2c1swXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoIDI1NSwgMSwgMCwgMC4zKVwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvKiogR2V0IGxvZ2ljIGNvb3JkaW5hdGVzID0gVW5pdCAoIFBvc2l0aW9uWCA7IFBvc2l0aW9uWSApIHJhbmdlKDIwKSAqL1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrWCA9IGV2ZW50LmNsaWVudFgsIGNsaWNrWSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uWCA9IE1hdGguZmxvb3IoIChjbGlja1ggLSAxMCkgLyAzNiApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvblkgPSBNYXRoLmZsb29yKCAoY2xpY2tZIC0gMTApIC8gMzYgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiog0JfQsNC/0L7QvNC40L3QsNC10Lwg0K7QvdC40YLQsCwg0L/QviDQutC+0YLQvtGA0L7QvNGDINC60LvQuNC60L3Rg9C70LggKi9cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VW5pdDogVW5pdDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRVbml0ID0gZ2V0VW5pdCh1bml0UG9zaXRpb25YLCB1bml0UG9zaXRpb25ZKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVbml0KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFVuaXQgPSBjdXJyZW50VW5pdDtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiog0J/QvtC70YPRh9Cw0LXQvCBzcGVlZCAtINGB0LrQvtGA0L7RgdGC0Ywg0YXQvtC00YzQsdGLINC4IHJhbmdlIC0g0LTQsNC70YzQvdC+0YHRgtGMINCw0YLQsNC60LggKi9cclxuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IGN1cnJlbnRVbml0Lm1vdmVCZWhhdmlvci5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGxldCByYW5nZSA9IGN1cnJlbnRVbml0LmF0dGFja0JlaGF2aW9yLnJhbmdlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICog0J3QsNC50LTRkdC8INC60LvQtdGC0LrQuCwg0LIg0LrQvtGC0L7RgNGL0LUg0LzQvtC20L3QviDRhdC+0LTQuNGC0YxcclxuICAgICAgICAgICAgICAgICAqIHNwZWVkID49IHIgPSBzcXJ0KCBzcXIoeDEteDIpICsgc3FyKHkxLXkyKSApXHJcbiAgICAgICAgICAgICAgICAgKiDRhNC40LfQuNGH0LXRgdC60LjQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQuiDQu9C+0LPQuNGH0LXRgdC60LjQvCDQvtGC0L3QvtGB0Y/RgtGB0Y8g0YLQsNC6OlxyXG4gICAgICAgICAgICAgICAgICogKGksIGopID09PiAoWCwgWSkgPSAoaiAqIDM2ICsgMTAgcHg7IGkgKiAzNiArIDEwKVxyXG4gICAgICAgICAgICAgICAgICog0KLQsNC6INC20LUg0L7RgtCx0LXRgNC10Lwg0LrQu9C10YLQutC4INGC0LXRhSDRjtC90LjRgtC+0LIsINC00L4g0LrQvtGC0L7RgNGL0YUg0LzQvtC20L3QviDQtNC+0YLRj9C90YPRgtGM0YHRj1xyXG4gICAgICAgICAgICAgICAgICogcmFuZ2UgPj0gciA9IHNxcnQoIHNxcih4MS14MikgKyBzcXIoeTEteTIpIClcclxuICAgICAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlbGYuY29sczsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQo9GB0LvQvtCy0LjQtSDQtNC70Y8g0YXQvtC00YzQsdGLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc3BlZWQgPj0gTWF0aC5zcXJ0KCBNYXRoLnBvdyggKGogLSBjdXJyZW50VW5pdC5wb3NpdGlvbl94KSwgMikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coIChpIC0gY3VycmVudFVuaXQucG9zaXRpb25feSksIDIgKSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICog0JXRgdC70LggJ2Rpdicg0L7QtNC40L0g0LIg0LrQvtC+0YDQtNC40L3QsNGC0LUg0LggQXJlYS5jYW5Nb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiDRgtC+INC60LvQsNC00ZHQvCDQsiDQutC70LXRgtC60LgsINCyINC60L7RgtC+0YDRi9C1INC80L7QttC90L4g0YXQvtC00LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogKiAzNiArIDEwLCBpICogMzYgKyAxMCkgYXMgQXJyYXk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdnMgPSBnZXREaXZzKGVsZW1lbnRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGl2cy5sZW5ndGggPT0gMSAmJiBzZWxmLm1hcFtpXVtqXS5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXlNb3ZlQ2VsbHMucHVzaChkaXZzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCj0YHQu9C+0LLQuNC1INC00LvRjyDQsNGC0LDQutC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmFuZ2UgPj0gTWF0aC5zcXJ0KCBNYXRoLnBvdyggKGogLSBjdXJyZW50VW5pdC5wb3NpdGlvbl94KSwgMikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coIChpIC0gY3VycmVudFVuaXQucG9zaXRpb25feSksIDIgKSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiDQldGB0LvQuCBkaXYt0LAg0LTQstCwINCyINC60L7QvtGA0LTQuNC90LDRgtC1INC4ICdwbGF5ZXJJZCcg0YMgdGFyZ2V0VW5pdCDQuCBjdXJyZW50VW5pdCDQvtGC0LvQuNGH0LDRjtGC0YHRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICog0YLQviDQutC70LDQtNGR0Lwg0LIg0LrQu9C10YLQutC4LCDRjtC90LjRgtC+0LIg0LjQtyDQutC+0YLQvtGA0YvRhSDQvNC+0LbQvdC+INCw0YLQsNC60L7QstCw0YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqICogMzYgKyAxMCwgaSAqIDM2ICsgMTApIGFzIEFycmF5PEhUTUxFbGVtZW50PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXZzID0gZ2V0RGl2cyhlbGVtZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGl2cy5sZW5ndGggPT0gMiAmJiAoIGdldFVuaXQoaiwgaSkucGxheWVySWQgIT0gY3VycmVudFVuaXQucGxheWVySWQgKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFVuaXQoaiwgaSkuaXNBbGl2ZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1heUF0dGFja0NlbGxzLnB1c2goZGl2c1sxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqINCf0L7QtNGB0LLQtdGC0LjQvCBtYXlNb3ZlQ2VsbHMg0LggbWF5QXR0YWNrQ2VsbHMgKi9cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5tYXlNb3ZlQ2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1heU1vdmVDZWxsc1tpXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2dyb3VuZF9zZWxlY3QuanBnJylcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5tYXlBdHRhY2tDZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWF5QXR0YWNrQ2VsbHNbaV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9TdHJhdGVneS9JY29ucy9ncm91bmRfc2VsZWN0LmpwZycpXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqINCe0LHRgNCw0LHQvtGC0LrQsCDQv9C10YDQstC+0LPQviDQutC70LjQutCwINC30LDQstC10YDRiNC10L3QsCwg0LjQtNGR0Lwg0LbQtNCw0YLRjCDQstGC0L7RgNC+0LPQviDQutC70LjQutCwICovXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnQgVW5pdCBkZWZpbmVkXHJcbiAgICAgICAgICAgIGlmICggc2VsZi5jdXJyZW50VW5pdCAhPSB1bmRlZmluZWQgJiYgZmxhZyA9PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKiDQndCw0YfQsNC70L4g0L7QsdGA0LDQsdC+0YLQutC4INCy0YLQvtGA0L7Qs9C+INC60LvQuNC60LAgKi9cclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCdTdGFydCBzdGFnZSAyIScpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqIEdldCBsb2dpYyBjb29yZGluYXRlcyA9IEFyZWEgKCBQb3NpdGlvblggOyBQb3NpdGlvblkgKSByYW5nZSgyMCkgKi9cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpY2tYID0gZXZlbnQuY2xpZW50WCwgY2xpY2tZID0gZXZlbnQuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXJlYVBvc2l0aW9uWCA9IE1hdGguZmxvb3IoIChjbGlja1ggLSAxMCkgLyAzNiApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhcmVhUG9zaXRpb25ZID0gTWF0aC5mbG9vciggKGNsaWNrWSAtIDEwKSAvIDM2ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDQm9C40LHQviBkaXYg0LLRgtC+0YDQvtCz0L4g0LrQu9C40LrQsCAtINC30LXQvNC70Y8sINC70LjQsdC+INCy0YDQsNC20LXRgdC60LjQuSDRjtC90LjRglxyXG4gICAgICAgICAgICAgICAgICog0JXRgdC70Lgg0LIgRGl2cyAxINGN0LvQtdC80LXQvdGCINGC0L4g0Y3RgtC+INC+0LHQu9Cw0YHRgtGMINC90LAg0LrQvtGC0L7RgNGD0Y4g0YXQvtGH0LXRgiDQv9C10YDQtdC50YLQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpdnMubGVuZ3RoID09IDEgJiYgc2VsZi5tYXlNb3ZlQ2VsbHMuaW5jbHVkZXMoZGl2c1swXSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKiDQl9Cw0L/QvtC80LjQvdCw0LXQvCDQntCx0LvQsNGB0YLRjCwg0L/QviDQutC+0YLQvtGA0L7QuSDQutC70LjQutC90YPQu9C4ICovXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBcmVhOiBBcmVhO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBcmVhID0gZ2V0QXJlYShhcmVhUG9zaXRpb25YLCBhcmVhUG9zaXRpb25ZKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50QXJlYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKiDQodC+0LHRgdGC0LLQtdC90L3QviDQuNC00ZHQvCDQsiBBcmVhICovXHJcbiAgICAgICAgICAgICAgICAgICAgLy/RgdC90LDRh9Cw0LvQsCDQv9C+0LTRgtC10YDQtdGC0Ywg0LLRgdC1INGB0YLQsNGA0YvQtSDQuNC60L7QvdC60LggLSDQstGL0L3QtdGB0YLQuCDQsiDRhNGD0L3QutGG0LjRjiAtINC/0L7QstGC0L7RgNC10L3QuNC1INC60L7QtNCwINC90LjQttC1XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLnVuaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXZzVW5pdCA9IGdldERpdnMoZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVuaXRzW2ldLnBvc2l0aW9uX3ggKiAzNiArIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51bml0c1tpXS5wb3NpdGlvbl95ICogMzYgKyAxMCkgYXMgQXJyYXk8SFRNTEVsZW1lbnQ+IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2c1VuaXRbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZzVW5pdFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFVuaXQubW92ZShzZWxmLmN1cnJlbnRVbml0LGN1cnJlbnRBcmVhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGdyYWRlTWFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3X21hcF91bml0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqINCV0YHQu9C4INCy0YLQvtGA0L7Qs9C+INC60LvQuNC6INC/0L4g0LLRgNCw0LbQtdGB0LrQvtC80YMg0Y7QvdC40YLRgyAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKCBkaXZzLmxlbmd0aCA9PSAyICYmIHNlbGYubWF5QXR0YWNrQ2VsbHMuaW5jbHVkZXMoZGl2c1sxXSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKiDQl9Cw0L/QvtC80LjQvdCw0LXQvCDQrtC90LjRgtCwLCDQv9C+INC60L7RgtC+0YDQvtC5INC60LvQuNC60L3Rg9C70LggKi9cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0VW5pdDogVW5pdDtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRVbml0ID0gZ2V0VW5pdChhcmVhUG9zaXRpb25YLCBhcmVhUG9zaXRpb25ZKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRVbml0KTtcclxuICAgICAgICAgICAgICAgICAgICAvKiog0KHQvtCx0YHRgtCy0LXQvdC90L4g0LHRjNGR0Lwg0L/QviBUYXJnZXRVbml0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50VW5pdC5hdHRhY2sodGFyZ2V0VW5pdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBncmFkZU1hcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v0YHQvdCw0YfQsNC70LAg0L/QvtC00YLQtdGA0LXRgtGMINGB0YLQsNGA0YPRjiDQuNC60L7QvdC60YNcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYudW5pdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdnNVbml0ID0gZ2V0RGl2cyhkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudW5pdHNbaV0ucG9zaXRpb25feCAqIDM2ICsgMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVuaXRzW2ldLnBvc2l0aW9uX3kgKiAzNiArIDEwKSBhcyBBcnJheTxIVE1MRWxlbWVudD4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZzVW5pdFswXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdnNVbml0WzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3X21hcF91bml0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqINCa0L7QvdC10YYg0L7QsdGA0LDQsdC+0YLQutC4INCy0YLQvtGA0L7Qs9C+INC60LvQuNC60LAgLSDQv9C+0LTRgtC40YDQsNC10Lwg0LLRgdGRINC00LXQu9C+ICovXHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRVbml0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKiDQn9C+0LTRgdCy0LXRgtC60YMg0YPQsdC10YDRkdC8OiDQv9C+0LzQtdC90Y/QtdC8IGJja2dybmQtaW1nINC4INC+0YfQuNGB0YLQuNC8IG1heU1vdmVDZWxscyDQuCBtYXlBdHRhY2tDZWxscyAqL1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLm1heU1vdmVDZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWF5TW92ZUNlbGxzW2ldLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvZ3JvdW5kLnBuZycpXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYubWF5QXR0YWNrQ2VsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1heUF0dGFja0NlbGxzW2ldLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvZ3JvdW5kLnBuZycpXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLm1heU1vdmVDZWxscyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5tYXlBdHRhY2tDZWxscyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0FyZWF9IGZyb20gXCIuL0FyZWFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXYXRlckFyZWEgZXh0ZW5kcyBBcmVhe1xyXG4gICAgY2FuTW92ZSA9IGZhbHNlO1xyXG4gICAgaW1hZ2U6IHN0cmluZyA9ICcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvd2F0ZXIucG5nJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NfeDogbnVtYmVyLCBwb3NfeTogbnVtYmVyKXtcclxuICAgICAgICBzdXBlcihwb3NfeCwgcG9zX3kpO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7VW5pdH0gZnJvbSBcIi4vVW5pdFwiO1xyXG5pbXBvcnQge0Jvd30gZnJvbSBcIi4uL0JlaGF2aW9ycy9BdHRhY2svQm93XCI7XHJcbmltcG9ydCB7TW92ZUFyY2hlcn0gZnJvbSBcIi4uL0JlaGF2aW9ycy9Nb3ZlL01vdmVBcmNoZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcmNoZXIgZXh0ZW5kcyBVbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc194OiBudW1iZXIsIHBvc195OiBudW1iZXIsIHBsYXllcklkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihwb3NfeCwgcG9zX3ksIHBsYXllcklkKTtcclxuICAgICAgICB0aGlzLmF0dGFja0JlaGF2aW9yID0gbmV3IEJvdygpO1xyXG4gICAgICAgIHRoaXMubW92ZUJlaGF2aW9yID0gbmV3IE1vdmVBcmNoZXIoKTtcclxuICAgICAgICB0aGlzLmljb24gPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2FyY2hlci5wbmcnO1xyXG4gICAgICAgIHRoaXMuaWNvbl9hbHRlcm5hdGl2ZSA9ICcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvYXJjaGVyX2FsdGVybmF0aXZlLnBuZyc7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSA1MDtcclxuICAgIH1cclxufSIsImltcG9ydCB7VW5pdH0gZnJvbSBcIi4vVW5pdFwiO1xyXG5pbXBvcnQge0Jvd30gZnJvbSBcIi4uL0JlaGF2aW9ycy9BdHRhY2svQm93XCI7XHJcbmltcG9ydCB7TW92ZUFyY2hlcn0gZnJvbSBcIi4uL0JlaGF2aW9ycy9Nb3ZlL01vdmVBcmNoZXJcIjtcclxuaW1wb3J0IHtTdG9uZUJhbGx9IGZyb20gXCIuLi9CZWhhdmlvcnMvQXR0YWNrL1N0b25lQmFsbFwiO1xyXG5pbXBvcnQge01vdmVDYXRhcHVsdH0gZnJvbSBcIi4uL0JlaGF2aW9ycy9Nb3ZlL01vdmVDYXRhcHVsdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhdGFwdWx0IGV4dGVuZHMgVW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NfeDogbnVtYmVyLCBwb3NfeTogbnVtYmVyLCBwbGF5ZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIocG9zX3gsIHBvc195LCBwbGF5ZXJJZCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tCZWhhdmlvciA9IG5ldyBTdG9uZUJhbGwoKTtcclxuICAgICAgICB0aGlzLm1vdmVCZWhhdmlvciA9IG5ldyBNb3ZlQ2F0YXB1bHQoKTtcclxuICAgICAgICB0aGlzLmljb24gPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2NhdGFwdWx0LnBuZyc7XHJcbiAgICAgICAgdGhpcy5pY29uX2FsdGVybmF0aXZlID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy9jYXRhcHVsdF9hbHRlcm5hdGl2ZS5wbmcnO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gNzU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtVbml0fSBmcm9tIFwiLi9Vbml0XCI7XHJcbmltcG9ydCB7Qm93fSBmcm9tIFwiLi4vQmVoYXZpb3JzL0F0dGFjay9Cb3dcIjtcclxuaW1wb3J0IHtNb3ZlQXJjaGVyfSBmcm9tIFwiLi4vQmVoYXZpb3JzL01vdmUvTW92ZUFyY2hlclwiO1xyXG5pbXBvcnQge1NhYnJlfSBmcm9tIFwiLi4vQmVoYXZpb3JzL0F0dGFjay9TYWJyZVwiO1xyXG5pbXBvcnQge01vdmVIb3JzZW1hbn0gZnJvbSBcIi4uL0JlaGF2aW9ycy9Nb3ZlL01vdmVIb3JzZW1hblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvcnNlbWFuIGV4dGVuZHMgVW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NfeDogbnVtYmVyLCBwb3NfeTogbnVtYmVyLCBwbGF5ZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIocG9zX3gsIHBvc195LCBwbGF5ZXJJZCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tCZWhhdmlvciA9IG5ldyBTYWJyZSgpO1xyXG4gICAgICAgIHRoaXMubW92ZUJlaGF2aW9yID0gbmV3IE1vdmVIb3JzZW1hbigpO1xyXG4gICAgICAgIHRoaXMuaWNvbiA9ICcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvaG9yc2VtYW4ucG5nJztcclxuICAgICAgICB0aGlzLmljb25fYWx0ZXJuYXRpdmUgPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2hvcnNlbWFuX2FsdGVybmF0aXZlLnBuZyc7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAyMDA7XHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7VW5pdH0gZnJvbSBcIi4vVW5pdFwiO1xyXG5pbXBvcnQge0Jvd30gZnJvbSBcIi4uL0JlaGF2aW9ycy9BdHRhY2svQm93XCI7XHJcbmltcG9ydCB7TW92ZUFyY2hlcn0gZnJvbSBcIi4uL0JlaGF2aW9ycy9Nb3ZlL01vdmVBcmNoZXJcIjtcclxuaW1wb3J0IHtTd29yZH0gZnJvbSBcIi4uL0JlaGF2aW9ycy9BdHRhY2svU3dvcmRcIjtcclxuaW1wb3J0IHtNb3ZlU3dvcmRzbWFufSBmcm9tIFwiLi4vQmVoYXZpb3JzL01vdmUvTW92ZVN3b3Jkc21hblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN3b3Jkc21hbiBleHRlbmRzIFVuaXR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NfeDogbnVtYmVyLCBwb3NfeTogbnVtYmVyLCBwbGF5ZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIocG9zX3gsIHBvc195LCBwbGF5ZXJJZCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tCZWhhdmlvciA9IG5ldyBTd29yZCgpO1xyXG4gICAgICAgIHRoaXMubW92ZUJlaGF2aW9yID0gbmV3IE1vdmVTd29yZHNtYW4oKTtcclxuICAgICAgICB0aGlzLmljb24gPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL3N3b3Jkc21hbi5wbmcnO1xyXG4gICAgICAgIHRoaXMuaWNvbl9hbHRlcm5hdGl2ZSA9ICcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvc3dvcmRzbWFuX2FsdGVybmF0aXZlLnBuZyc7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBdHRhY2tCZWhhdmlvcn0gZnJvbSBcIi4uL0JlaGF2aW9ycy9BdHRhY2svQXR0YWNrQmVoYXZpb3JcIjtcclxuaW1wb3J0IHtNb3ZlQmVoYXZpb3J9IGZyb20gXCIuLi9CZWhhdmlvcnMvTW92ZS9Nb3ZlQmVoYXZpb3JcIjtcclxuaW1wb3J0IHtBcmVhfSBmcm9tIFwiLi4vTWFwL0FyZWFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVbml0IHtcclxuICAgIHBvc2l0aW9uX3g6IG51bWJlcjtcclxuICAgIHBvc2l0aW9uX3k6IG51bWJlcjtcclxuICAgIHBsYXllcklkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zX3g6IG51bWJlciwgcG9zX3k6IG51bWJlciwgcGxheWVyaWQ6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbl94ID0gcG9zX3g7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbl95ID0gcG9zX3k7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcmlkO1xyXG4gICAgICAgIHRoaXMuaXNBbGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNrQmVoYXZpb3I6IEF0dGFja0JlaGF2aW9yO1xyXG4gICAgbW92ZUJlaGF2aW9yOiBNb3ZlQmVoYXZpb3I7XHJcbiAgICBhcmVhOiBBcmVhO1xyXG4gICAgaGVhbHRoOiBudW1iZXI7XHJcbiAgICBpc0FsaXZlOiBib29sZWFuO1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgaWNvbl9hbHRlcm5hdGl2ZTogc3RyaW5nO1xyXG5cclxuICAgIGF0dGFjayh0YXJnZXRVbml0OiBVbml0KXtcclxuICAgICAgICB0aGlzLmF0dGFja0JlaGF2aW9yLmF0dGFjayh0YXJnZXRVbml0KVxyXG4gICAgfTtcclxuXHJcbiAgICBtb3ZlKHVuaXQ6IFVuaXQsIHRhcmdldEFyZWE6IEFyZWEpe1xyXG4gICAgICAgIHRoaXMubW92ZUJlaGF2aW9yLm1vdmUodW5pdCx0YXJnZXRBcmVhKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQge01hcH0gZnJvbSBcIi4vU3RyYXRlZ3kvTWFwL01hcFwiO1xyXG5pbXBvcnQge0x2bDFfdGV4dHVyZX0gZnJvbSBcIi4vU3RyYXRlZ3kvTWFwL0x2bDFfdGV4dHVyZVwiO1xyXG5cclxuXHJcbi8vIGxldCBkdWNrID0gbmV3IE1hbGxhcmREdWNrKFwiQmxhY2sgY2xvYWtcIik7XHJcbi8vIGR1Y2suZGlzcGxheSgpO1xyXG4vLyBkdWNrLnBlcmZvcm1GbHkoKTtcclxuLy8gZHVjay5wZXJmb3JtUXVhY2soKTtcclxuLy8gZHVjay5zZXRxdWFja0JlaGF2aW9yKG5ldyBNdXRlUXVhY2soKSk7XHJcbi8vIGR1Y2sucGVyZm9ybVF1YWNrKCk7XHJcbi8vXHJcbmxldCBtYXAgPSBuZXcgTWFwKDIwLDIwKTtcclxubWFwLnByaW50X2dyaWQoKTtcclxubWFwLmxvYWRfbWFwX3RleHR1cmVfbG9naWMobmV3IEx2bDFfdGV4dHVyZSgpLkx2bDFfdGV4dHVyZSk7XHJcbm1hcC5kcmF3X21hcF90ZXh0dXJlKCk7XHJcbm1hcC5pbml0X3VuaXRzKCk7XHJcbm1hcC5kcmF3X21hcF91bml0KCk7XHJcbm1hcC5jbGlja19sb2dpYygpO1xyXG5cclxuIl19

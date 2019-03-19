(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bow {
    constructor() {
        this.damage = 50;
        this.range = 5;
    }
    attack(targetUnit) {
        console.log('shot an arrow to target' + this.damage + 'HP');
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
        console.log('shot an arrow to target' + this.damage + 'HP');
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
        console.log('shot an arrow to target' + this.damage + 'HP');
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
        console.log('shot an arrow to target' + this.damage + 'HP');
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
    move(targetArea) {
        console.log('Can move' + this.speed + ' steps.');
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
    move(targetArea) {
        console.log('Can move' + this.speed + ' steps.');
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
    move(targetArea) {
        console.log('Can move' + this.speed + ' steps.');
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
    move(targetArea) {
        console.log('Can move' + this.speed + ' steps.');
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
                        arr.push(new GroundArea_1.GroundArea(i, j));
                        break;
                    }
                    case "Water": {
                        arr.push(new WaterArea_1.WaterArea(i, j));
                        break;
                    }
                    default: {
                        arr.push(new GroundArea_1.GroundArea(i, j));
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
                    if ((self.map[i][j].position_x == x) && (self.map[i][j].position_y)) {
                        return self.map[i][j];
                    }
                }
            }
        };
        let upgradeMap = function () {
        };
        document.body.onclick = function (event) {
            /** Все элементы 'div' из координат клика помещаем в 'Array<HTMLElement>' */
            let elements = document.elementsFromPoint(event.clientX, event.clientY);
            let divs = getDivs(elements);
            /** Первый клик по юниту */
            if (divs.length == 2 && self.currentUnit == undefined) { // before if OK
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
                let unitPositionX = Math.floor((clickX - 10) / 36);
                let unitPositionY = Math.floor((clickY - 10) / 36);
                /** Запоминаем Юнита, по которому кликнули */
                let currentUnit;
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
                            if (divs.length == 2 && (getUnit(j, i).playerId != currentUnit.playerId)) {
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
            if (self.currentUnit != undefined) {
                /** Начало обработки второго клика */
                alert('Start stage 2!');
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
                    self.currentUnit.move(currentArea);
                    upgradeMap();
                }
                /** Если второго клик по вражескому юниту */
                if (divs.length == 2 && self.mayAttackCells.includes(divs[1])) {
                    /** Запоминаем Юнита, по которой кликнули */
                    let targetUnit;
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
    move(targetArea) {
        this.moveBehavior.move(targetArea);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvU3RyYXRlZ3kvQmVoYXZpb3JzL0F0dGFjay9Cb3cudHMiLCJzcmMvU3RyYXRlZ3kvQmVoYXZpb3JzL0F0dGFjay9TYWJyZS50cyIsInNyYy9TdHJhdGVneS9CZWhhdmlvcnMvQXR0YWNrL1N0b25lQmFsbC50cyIsInNyYy9TdHJhdGVneS9CZWhhdmlvcnMvQXR0YWNrL1N3b3JkLnRzIiwic3JjL1N0cmF0ZWd5L0JlaGF2aW9ycy9Nb3ZlL01vdmVBcmNoZXIudHMiLCJzcmMvU3RyYXRlZ3kvQmVoYXZpb3JzL01vdmUvTW92ZUNhdGFwdWx0LnRzIiwic3JjL1N0cmF0ZWd5L0JlaGF2aW9ycy9Nb3ZlL01vdmVIb3JzZW1hbi50cyIsInNyYy9TdHJhdGVneS9CZWhhdmlvcnMvTW92ZS9Nb3ZlU3dvcmRzbWFuLnRzIiwic3JjL1N0cmF0ZWd5L01hcC9BcmVhLnRzIiwic3JjL1N0cmF0ZWd5L01hcC9Hcm91bmRBcmVhLnRzIiwic3JjL1N0cmF0ZWd5L01hcC9MdmwxX3RleHR1cmUudHMiLCJzcmMvU3RyYXRlZ3kvTWFwL01hcC50cyIsInNyYy9TdHJhdGVneS9NYXAvV2F0ZXJBcmVhLnRzIiwic3JjL1N0cmF0ZWd5L1VuaXRzL0FyY2hlci50cyIsInNyYy9TdHJhdGVneS9Vbml0cy9DYXRhcHVsdC50cyIsInNyYy9TdHJhdGVneS9Vbml0cy9Ib3JzZW1hbi50cyIsInNyYy9TdHJhdGVneS9Vbml0cy9Td29yZHNtYW4udHMiLCJzcmMvU3RyYXRlZ3kvVW5pdHMvVW5pdC50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNHQSxNQUFhLEdBQUc7SUFBaEI7UUFDSSxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBVyxDQUFDLENBQUM7SUFLdEIsQ0FBQztJQUhHLE1BQU0sQ0FBQyxVQUFnQjtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFD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TDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtvQkFDOUcsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUMvQztnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtvQkFDOUcsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUMvQztnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtvQkFDOUcsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUMvQztnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtvQkFDOUcsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUMvQztnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2lCQUN2RDtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMxRyxNQUFN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LFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQVVELE1BQU0sQ0FBQyxVQUFnQjtRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBQUEsQ0FBQztJQUVGLElBQUksQ0FBQyxVQUFnQjtRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQUEsQ0FBQztDQUNMO0FBM0JELG9CQTJCQzs7OztBQy9CRCw0Q0FBdUM7QUFDdkMsOERBQXlEO0FBR3pELDZDQUE2QztBQUM3QyxrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QiwwQ0FBMEM7QUFDMUMsdUJBQXVCO0FBQ3ZCLEVBQUU7QUFDRixJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQUcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7QUFDekIsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLDJCQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM1RCxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUN2QixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDakIsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ3BCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7QXR0YWNrQmVoYXZpb3J9IGZyb20gXCIuL0F0dGFja0JlaGF2aW9yXCI7XHJcbmltcG9ydCB7VW5pdH0gZnJvbSBcIi4uLy4uL1VuaXRzL1VuaXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb3cgaW1wbGVtZW50cyBBdHRhY2tCZWhhdmlvcntcclxuICAgIGRhbWFnZTogbnVtYmVyID0gNTA7XHJcbiAgICByYW5nZTogbnVtYmVyID0gNTtcclxuXHJcbiAgICBhdHRhY2sodGFyZ2V0VW5pdDogVW5pdCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG90IGFuIGFycm93IHRvIHRhcmdldCcgKyB0aGlzLmRhbWFnZSArICdIUCcpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0F0dGFja0JlaGF2aW9yfSBmcm9tIFwiLi9BdHRhY2tCZWhhdmlvclwiO1xyXG5pbXBvcnQge1VuaXR9IGZyb20gXCIuLi8uLi9Vbml0cy9Vbml0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FicmUgaW1wbGVtZW50cyBBdHRhY2tCZWhhdmlvcntcclxuICAgIGRhbWFnZTogbnVtYmVyID0gNzU7XHJcbiAgICByYW5nZTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBhdHRhY2sodGFyZ2V0VW5pdDogVW5pdCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG90IGFuIGFycm93IHRvIHRhcmdldCcgKyB0aGlzLmRhbWFnZSsgJ0hQJylcclxuICAgIH1cclxufSIsImltcG9ydCB7QXR0YWNrQmVoYXZpb3J9IGZyb20gXCIuL0F0dGFja0JlaGF2aW9yXCI7XHJcbmltcG9ydCB7VW5pdH0gZnJvbSBcIi4uLy4uL1VuaXRzL1VuaXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9uZUJhbGwgaW1wbGVtZW50cyBBdHRhY2tCZWhhdmlvcntcclxuICAgIGRhbWFnZTogbnVtYmVyID0gMTAwO1xyXG4gICAgcmFuZ2U6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIGF0dGFjayh0YXJnZXRVbml0OiBVbml0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3QgYW4gYXJyb3cgdG8gdGFyZ2V0JyArIHRoaXMuZGFtYWdlICsgJ0hQJylcclxuICAgIH1cclxufSIsImltcG9ydCB7QXR0YWNrQmVoYXZpb3J9IGZyb20gXCIuL0F0dGFja0JlaGF2aW9yXCI7XHJcbmltcG9ydCB7VW5pdH0gZnJvbSBcIi4uLy4uL1VuaXRzL1VuaXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTd29yZCBpbXBsZW1lbnRzIEF0dGFja0JlaGF2aW9ye1xyXG4gICAgZGFtYWdlOiBudW1iZXIgPSA1MDtcclxuICAgIHJhbmdlOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGF0dGFjayh0YXJnZXRVbml0OiBVbml0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3QgYW4gYXJyb3cgdG8gdGFyZ2V0JyArIHRoaXMuZGFtYWdlICsgJ0hQJylcclxuICAgIH1cclxufSIsImltcG9ydCB7TW92ZUJlaGF2aW9yfSBmcm9tIFwiLi9Nb3ZlQmVoYXZpb3JcIjtcclxuaW1wb3J0IHtBcmVhfSBmcm9tIFwiLi4vLi4vTWFwL0FyZWFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlQXJjaGVyIGltcGxlbWVudHMgTW92ZUJlaGF2aW9ye1xyXG4gICAgc3BlZWQgPSAzO1xyXG5cclxuICAgIG1vdmUodGFyZ2V0QXJlYTogQXJlYSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDYW4gbW92ZScgKyB0aGlzLnNwZWVkICsgJyBzdGVwcy4nKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNb3ZlQmVoYXZpb3J9IGZyb20gXCIuL01vdmVCZWhhdmlvclwiO1xyXG5pbXBvcnQge0FyZWF9IGZyb20gXCIuLi8uLi9NYXAvQXJlYVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVDYXRhcHVsdCBpbXBsZW1lbnRzIE1vdmVCZWhhdmlvcntcclxuICAgIHNwZWVkOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIG1vdmUodGFyZ2V0QXJlYTogQXJlYSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDYW4gbW92ZScgKyB0aGlzLnNwZWVkICsgJyBzdGVwcy4nKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNb3ZlQmVoYXZpb3J9IGZyb20gXCIuL01vdmVCZWhhdmlvclwiO1xyXG5pbXBvcnQge0FyZWF9IGZyb20gXCIuLi8uLi9NYXAvQXJlYVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVIb3JzZW1hbiBpbXBsZW1lbnRzIE1vdmVCZWhhdmlvcntcclxuICAgIHNwZWVkOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBtb3ZlKHRhcmdldEFyZWE6IEFyZWEpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2FuIG1vdmUnICsgdGhpcy5zcGVlZCArICcgc3RlcHMuJylcclxuICAgIH1cclxufSIsImltcG9ydCB7TW92ZUJlaGF2aW9yfSBmcm9tIFwiLi9Nb3ZlQmVoYXZpb3JcIjtcclxuaW1wb3J0IHtBcmVhfSBmcm9tIFwiLi4vLi4vTWFwL0FyZWFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlU3dvcmRzbWFuIGltcGxlbWVudHMgTW92ZUJlaGF2aW9ye1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDU7XHJcblxyXG4gICAgbW92ZSh0YXJnZXRBcmVhOiBBcmVhKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NhbiBtb3ZlJyArIHRoaXMuc3BlZWQgKyAnIHN0ZXBzLicpXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQXJlYSB7XHJcbiAgICBwb3NpdGlvbl94OiBudW1iZXI7XHJcbiAgICBwb3NpdGlvbl95OiBudW1iZXI7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG4gICAgY2FuTW92ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocG9zX3g6IG51bWJlciwgcG9zX3k6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbl94ID0gcG9zX3g7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbl95ID0gcG9zX3k7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtBcmVhfSBmcm9tIFwiLi9BcmVhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JvdW5kQXJlYSBleHRlbmRzIEFyZWF7XHJcbiAgICBjYW5Nb3ZlID0gdHJ1ZTtcclxuICAgIGltYWdlID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy9ncm91bmQucG5nJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NfeDogbnVtYmVyLCBwb3NfeTogbnVtYmVyKXtcclxuICAgICAgICBzdXBlcihwb3NfeCwgcG9zX3kpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIEx2bDFfdGV4dHVyZSB7XHJcblxyXG4gICAgTHZsMV90ZXh0dXJlOiBvYmplY3QgPVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJhcmVhc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIixcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIldhdGVyXCIsIFwiV2F0ZXJcIiwgXCJXYXRlclwiLCBcIldhdGVyXCIsIFwiR3JuZFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIiwgXCJHcm5kXCIsIFwiR3JuZFwiLCBcIkdybmRcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG59IiwiaW1wb3J0IHtBcmVhfSBmcm9tIFwiLi9BcmVhXCI7XHJcbmltcG9ydCB7R3JvdW5kQXJlYX0gZnJvbSBcIi4vR3JvdW5kQXJlYVwiO1xyXG5pbXBvcnQge1dhdGVyQXJlYX0gZnJvbSBcIi4vV2F0ZXJBcmVhXCI7XHJcbmltcG9ydCB7VW5pdH0gZnJvbSBcIi4uL1VuaXRzL1VuaXRcIjtcclxuaW1wb3J0IHtBcmNoZXJ9IGZyb20gXCIuLi9Vbml0cy9BcmNoZXJcIjtcclxuaW1wb3J0IHtIb3JzZW1hbn0gZnJvbSBcIi4uL1VuaXRzL0hvcnNlbWFuXCI7XHJcbmltcG9ydCB7U3dvcmRzbWFufSBmcm9tIFwiLi4vVW5pdHMvU3dvcmRzbWFuXCI7XHJcbmltcG9ydCB7Q2F0YXB1bHR9IGZyb20gXCIuLi9Vbml0cy9DYXRhcHVsdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcCB7XHJcbiAgICByb3dzOiBudW1iZXI7XHJcbiAgICBjb2xzOiBudW1iZXI7XHJcbiAgICBtYXA6IEFycmF5PEFycmF5PEFyZWE+PjtcclxuICAgIHVuaXRzOiBBcnJheTxVbml0PjtcclxuICAgIGN1cnJlbnRVbml0OiBVbml0O1xyXG4gICAgbWF5TW92ZUNlbGxzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBbXTsgLy9ESVZTXHJcbiAgICBtYXlBdHRhY2tDZWxsczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gW107IC8vRElWU1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGk6IG51bWJlciwgajogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnJvd3MgPSBpO1xyXG4gICAgICAgIHRoaXMuY29scyA9IGo7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRfZ3JpZCgpe1xyXG4gICAgICAgIGxldCBjX2NhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRrYVwiKTtcclxuICAgICAgICBsZXQgY29udGV4dCA9IGNfY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPD0gNzIwOyB4ICs9IDM2KSB7XHJcbiAgICAgICAgICBjb250ZXh0Lm1vdmVUbyh4LCAwKTtcclxuICAgICAgICAgIGNvbnRleHQubGluZVRvKHgsIDcyMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8PSA3MjA7IHkgKz0gMzYpIHtcclxuICAgICAgICAgIGNvbnRleHQubW92ZVRvKDAsIHkpO1xyXG4gICAgICAgICAgY29udGV4dC5saW5lVG8oNzIwLCB5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiM4ODhcIjtcclxuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDQ7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkX21hcF90ZXh0dXJlX2xvZ2ljKG9iajogb2JqZWN0KXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgICAgIGxldCBhcmVhcyA9IChvYmogYXMgYW55KS5hcmVhcztcclxuICAgICAgICBsZXQgcmVzdWx0X21hcDogQXJyYXk8QXJyYXk8QXJlYT4+ID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IGFyZWFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnI6IEFycmF5PEFyZWE+ID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyZWFzW2ldLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGFyZWFzW2ldW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICBjYXNlIFwiR3JuZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChuZXcgR3JvdW5kQXJlYShpLCBqICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBjYXNlIFwiV2F0ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gobmV3IFdhdGVyQXJlYShpLCBqICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChuZXcgR3JvdW5kQXJlYShpLCBqICkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFycik7XHJcbiAgICAgICAgICAgIHJlc3VsdF9tYXAucHVzaChhcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0X21hcCk7XHJcbiAgICAgICAgdGhpcy5tYXAgPSByZXN1bHRfbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdfbWFwX3RleHR1cmUoKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdl9wb3NpdGlvbiA9IChcInBvc2l0aW9uOiBhYnNvbHV0ZTtcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2X2xlZnQgPSBcImxlZnQ6IFwiICsgKDM2ICogaiArIDEwKSArIFwicHg7XCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2X3RvcCA9IFwidG9wOiBcIiArICgzNiAqIGkgKyAxMCkgKyBcInB4O1wiO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdl93aWR0aCA9IFwid2lkdGg6IFwiICsgMzIgKyBcInB4O1wiO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdl9oZWlnaHQgPSBcImhlaWdodDogXCIgKyAzMiArIFwicHg7XCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgeW91clZhciA9IHRoaXMubWFwW2ldW2pdLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdl9iYWNrZ3JvdW5kX2ltYWdlID0gJ2JhY2tncm91bmQtaW1hZ2U6IHVybCgnICsgeW91clZhciArICcpOyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJlYV96X2luZGV4ID0gJ3otaW5kZXg6IDE7JztcclxuICAgICAgICAgICAgICAgIGxldCBuZXdTdHlsZSA9IGRpdl9wb3NpdGlvbiArIGRpdl9sZWZ0ICsgZGl2X3RvcCArIGRpdl93aWR0aCArIGRpdl9oZWlnaHQgK1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdl9iYWNrZ3JvdW5kX2ltYWdlICsgYXJlYV96X2luZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBuZXdTdHlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRfdW5pdHMoKSB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCIuLi9zcmMvU3RyYXRlZ3kvTWFwL3VuaXRzLmpzb25cIiwgZmFsc2UpO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZChudWxsKTtcclxuICAgICAgICBsZXQgbXlfSlNPTl9vYmplY3QgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBsZXQgdW5pdHNfZnJvbV9qc29uID0gbXlfSlNPTl9vYmplY3QudW5pdHM7XHJcblxyXG4gICAgICAgIGxldCB1bml0cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pdHNfZnJvbV9qc29uLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2godW5pdHNfZnJvbV9qc29uW2ldLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgY2FzZSBcIkFyY2hlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIHVuaXRzLnB1c2gobmV3IEFyY2hlcih1bml0c19mcm9tX2pzb25baV0ucG9zX3gsIHVuaXRzX2Zyb21fanNvbltpXS5wb3NfeSxcclxuICAgICAgICAgICAgICAgICAgICAgIHVuaXRzX2Zyb21fanNvbltpXS5wbGF5ZXJfaWQpKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgY2FzZSBcIkhvcnNlbWFuXCI6IHtcclxuICAgICAgICAgICAgICAgICAgdW5pdHMucHVzaChuZXcgSG9yc2VtYW4odW5pdHNfZnJvbV9qc29uW2ldLnBvc194LCB1bml0c19mcm9tX2pzb25baV0ucG9zX3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bml0c19mcm9tX2pzb25baV0ucGxheWVyX2lkKSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGNhc2UgXCJTd29yZHNtYW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICB1bml0cy5wdXNoKG5ldyBTd29yZHNtYW4odW5pdHNfZnJvbV9qc29uW2ldLnBvc194LCB1bml0c19mcm9tX2pzb25baV0ucG9zX3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bml0c19mcm9tX2pzb25baV0ucGxheWVyX2lkKSk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGNhc2UgXCJDYXRhcHVsdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIHVuaXRzLnB1c2gobmV3IENhdGFwdWx0KHVuaXRzX2Zyb21fanNvbltpXS5wb3NfeCwgdW5pdHNfZnJvbV9qc29uW2ldLnBvc195LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5pdHNfZnJvbV9qc29uW2ldLnBsYXllcl9pZCkpO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5yZWFkYWJsZSBUeXBlIG9mIFVuaXQhIEVycm9yISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVuaXRzID0gdW5pdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd19tYXBfdW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy51bml0cy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXRzW2tdLnBvc2l0aW9uX3ggPT0gaiAmJiB0aGlzLnVuaXRzW2tdLnBvc2l0aW9uX3kgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdl9wb3NpdGlvbiA9IChcInBvc2l0aW9uOiBhYnNvbHV0ZTtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXZfbGVmdCA9IFwibGVmdDogXCIgKyAoMzYgKiBqICsgMTApICsgXCJweDtcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdl90b3AgPSBcInRvcDogXCIgKyAoMzYgKiBpICsgMTApICsgXCJweDtcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdl93aWR0aCA9IFwid2lkdGg6IFwiICsgMzIgKyBcInB4O1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2X2hlaWdodCA9IFwiaGVpZ2h0OiBcIiArIDMyICsgXCJweDtcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHlvdXJWYXI6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKiDQnNC10L3Rj9C10Lwg0LjQutC+0L3QutGDINC90LAg0YDQsNC30LLQtdGA0L3Rg9GC0YPRjiDQtdGB0LvQuCDQuNCz0YDQvtC6INGBINC00YDRg9Cz0LjQvCAncGxheWVySWQnICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXRzW2tdLnBsYXllcklkID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXJWYXIgPSB0aGlzLnVuaXRzW2tdLmljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3VyVmFyID0gdGhpcy51bml0c1trXS5pY29uX2FsdGVybmF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXZfYmFja2dyb3VuZF9pbWFnZSA9ICdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyArIHlvdXJWYXIgKyAnKTsnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqICdVbml0JyDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0L/QvtCy0LXRgNGFICdBcmVhJyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJlYV96X2luZGV4ID0gJ3otaW5kZXg6IDI7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1N0eWxlID0gZGl2X3Bvc2l0aW9uICsgZGl2X2xlZnQgKyBkaXZfdG9wICsgZGl2X3dpZHRoICsgZGl2X2hlaWdodCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZfYmFja2dyb3VuZF9pbWFnZSArIGFyZWFfel9pbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBuZXdTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfbG9naWMoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBnZXREaXZzID0gZnVuY3Rpb24gKGVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4pIHtcclxuICAgICAgICAgICAgbGV0IGRpdnMgPSBbXSBhcyBBcnJheTxIVE1MRWxlbWVudD47XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50c1tpXS50YWdOYW1lID09ICdESVYnKSBkaXZzLnB1c2goZWxlbWVudHNbaV0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRpdnM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGdldFVuaXQgPSBmdW5jdGlvbiAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLnVuaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIChzZWxmLnVuaXRzW2ldLnBvc2l0aW9uX3ggPT0geCkgJiYgKHNlbGYudW5pdHNbaV0ucG9zaXRpb25feSA9PSB5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi51bml0c1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBnZXRBcmVhID0gZnVuY3Rpb24gKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZi5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIChzZWxmLm1hcFtpXVtqXS5wb3NpdGlvbl94ID09IHgpICYmIChzZWxmLm1hcFtpXVtqXS5wb3NpdGlvbl95KSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYubWFwW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgdXBncmFkZU1hcCA9IGZ1bmN0aW9uICgpe1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudDogTW91c2VFdmVudCkge1xyXG5cclxuICAgICAgICAgICAgLyoqINCS0YHQtSDRjdC70LXQvNC10L3RgtGLICdkaXYnINC40Lcg0LrQvtC+0YDQtNC40L3QsNGCINC60LvQuNC60LAg0L/QvtC80LXRidCw0LXQvCDQsiAnQXJyYXk8SFRNTEVsZW1lbnQ+JyAqL1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKSBhcyBBcnJheTxIVE1MRWxlbWVudD47XHJcbiAgICAgICAgICAgIGxldCBkaXZzID0gZ2V0RGl2cyhlbGVtZW50cyk7XHJcblxyXG5cclxuICAgICAgICAgICAgLyoqINCf0LXRgNCy0YvQuSDQutC70LjQuiDQv9C+INGO0L3QuNGC0YMgKi9cclxuICAgICAgICAgICAgaWYgKCBkaXZzLmxlbmd0aCA9PSAyICYmIHNlbGYuY3VycmVudFVuaXQgPT0gdW5kZWZpbmVkICkgeyAgLy8gYmVmb3JlIGlmIE9LXHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDQntCx0YDQsNCx0L7RgtC60LAg0L/QtdGA0LLQvtCz0L4g0LrQu9C40LrQsCAo0LLRi9Cx0L7RgCDRjtC90LjRgtCwINC00LvRjyDQtNC10LnRgdGC0LLQuNGPKVxyXG4gICAgICAgICAgICAgICAgICogZGl2c1swXSAtLT4gVW5pdDsgZGl2c1sxXSAtLT4gQXJlYVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZmxhZycsICcxJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKCBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZmxhZycpID09ICcxJyApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdTdGFydCBzdGFnZSAxIScpO1xyXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2ZsYWcnLCAnMScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKiDQn9C+0LTRgdCy0LXRgtC60LAg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0Y7QvdC40YLQsCDQutGA0LDRgdC90YvQvCAqL1xyXG4gICAgICAgICAgICAgICAgZGl2c1swXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoIDI1NSwgMSwgMCwgMC4zKVwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvKiogR2V0IGxvZ2ljIGNvb3JkaW5hdGVzID0gVW5pdCAoIFBvc2l0aW9uWCA7IFBvc2l0aW9uWSApIHJhbmdlKDIwKSAqL1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrWCA9IGV2ZW50LmNsaWVudFgsIGNsaWNrWSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uWCA9IE1hdGguZmxvb3IoIChjbGlja1ggLSAxMCkgLyAzNiApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvblkgPSBNYXRoLmZsb29yKCAoY2xpY2tZIC0gMTApIC8gMzYgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiog0JfQsNC/0L7QvNC40L3QsNC10Lwg0K7QvdC40YLQsCwg0L/QviDQutC+0YLQvtGA0L7QvNGDINC60LvQuNC60L3Rg9C70LggKi9cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VW5pdDogVW5pdDtcclxuICAgICAgICAgICAgICAgIC8vIGxldCB1bml0czogQXJyYXk8VW5pdD4gPSBzZWxmLnVuaXRzO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFVuaXQgPSBnZXRVbml0KHVuaXRQb3NpdGlvblgsIHVuaXRQb3NpdGlvblkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFVuaXQpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50VW5pdCA9IGN1cnJlbnRVbml0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKiDQn9C+0LvRg9GH0LDQtdC8IHNwZWVkIC0g0YHQutC+0YDQvtGB0YLRjCDRhdC+0LTRjNCx0Ysg0LggcmFuZ2UgLSDQtNCw0LvRjNC90L7RgdGC0Ywg0LDRgtCw0LrQuCAqL1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwZWVkID0gY3VycmVudFVuaXQubW92ZUJlaGF2aW9yLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlID0gY3VycmVudFVuaXQuYXR0YWNrQmVoYXZpb3IucmFuZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDQndCw0LnQtNGR0Lwg0LrQu9C10YLQutC4LCDQsiDQutC+0YLQvtGA0YvQtSDQvNC+0LbQvdC+INGF0L7QtNC40YLRjFxyXG4gICAgICAgICAgICAgICAgICogc3BlZWQgPj0gciA9IHNxcnQoIHNxcih4MS14MikgKyBzcXIoeTEteTIpIClcclxuICAgICAgICAgICAgICAgICAqINGE0LjQt9C40YfQtdGB0LrQuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINC6INC70L7Qs9C40YfQtdGB0LrQuNC8INC+0YLQvdC+0YHRj9GC0YHRjyDRgtCw0Lo6XHJcbiAgICAgICAgICAgICAgICAgKiAoaSwgaikgPT0+IChYLCBZKSA9IChqICogMzYgKyAxMCBweDsgaSAqIDM2ICsgMTApXHJcbiAgICAgICAgICAgICAgICAgKiDQotCw0Log0LbQtSDQvtGC0LHQtdGA0LXQvCDQutC70LXRgtC60Lgg0YLQtdGFINGO0L3QuNGC0L7Qsiwg0LTQviDQutC+0YLQvtGA0YvRhSDQvNC+0LbQvdC+INC00L7RgtGP0L3Rg9GC0YzRgdGPXHJcbiAgICAgICAgICAgICAgICAgKiByYW5nZSA+PSByID0gc3FydCggc3FyKHgxLXgyKSArIHNxcih5MS15MikgKVxyXG4gICAgICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLnJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZi5jb2xzOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCj0YHQu9C+0LLQuNC1INC00LvRjyDRhdC+0LTRjNCx0YtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzcGVlZCA+PSBNYXRoLnNxcnQoIE1hdGgucG93KCAoaiAtIGN1cnJlbnRVbml0LnBvc2l0aW9uX3gpLCAyKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyggKGkgLSBjdXJyZW50VW5pdC5wb3NpdGlvbl95KSwgMiApICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiDQldGB0LvQuCAnZGl2JyDQvtC00LjQvSDQsiDQutC+0L7RgNC00LjQvdCw0YLQtSDQuCBBcmVhLmNhbk1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqINGC0L4g0LrQu9Cw0LTRkdC8INCyINC60LvQtdGC0LrQuCwg0LIg0LrQvtGC0L7RgNGL0LUg0LzQvtC20L3QviDRhdC+0LTQuNGC0YxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiAqIDM2ICsgMTAsIGkgKiAzNiArIDEwKSBhcyBBcnJheTxIVE1MRWxlbWVudD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGl2cyA9IGdldERpdnMoZWxlbWVudHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXZzLmxlbmd0aCA9PSAxICYmIHNlbGYubWFwW2ldW2pdLmNhbk1vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1heU1vdmVDZWxscy5wdXNoKGRpdnNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0KPRgdC70L7QstC40LUg0LTQu9GPINCw0YLQsNC60LhcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByYW5nZSA+PSBNYXRoLnNxcnQoIE1hdGgucG93KCAoaiAtIGN1cnJlbnRVbml0LnBvc2l0aW9uX3gpLCAyKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyggKGkgLSBjdXJyZW50VW5pdC5wb3NpdGlvbl95KSwgMiApICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqINCV0YHQu9C4IGRpdi3QsCDQtNCy0LAg0LIg0LrQvtC+0YDQtNC40L3QsNGC0LUg0LggJ3BsYXllcklkJyDRgyB0YXJnZXRVbml0INC4IGN1cnJlbnRVbml0INC+0YLQu9C40YfQsNGO0YLRgdGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiDRgtC+INC60LvQsNC00ZHQvCDQsiDQutC70LXRgtC60LgsINGO0L3QuNGC0L7QsiDQuNC3INC60L7RgtC+0YDRi9GFINC80L7QttC90L4g0LDRgtCw0LrQvtCy0LDRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogKiAzNiArIDEwLCBpICogMzYgKyAxMCkgYXMgQXJyYXk8SFRNTEVsZW1lbnQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpdnMgPSBnZXREaXZzKGVsZW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXZzLmxlbmd0aCA9PSAyICYmICggZ2V0VW5pdChqLCBpKS5wbGF5ZXJJZCAhPSBjdXJyZW50VW5pdC5wbGF5ZXJJZCApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubWF5QXR0YWNrQ2VsbHMucHVzaChkaXZzWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKiog0J/QvtC00YHQstC10YLQuNC8IG1heU1vdmVDZWxscyDQuCBtYXlBdHRhY2tDZWxscyAqL1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLm1heU1vdmVDZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWF5TW92ZUNlbGxzW2ldLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvZ3JvdW5kX3NlbGVjdC5qcGcnKVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLm1heUF0dGFja0NlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXlBdHRhY2tDZWxsc1tpXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2dyb3VuZF9zZWxlY3QuanBnJylcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKiog0J7QsdGA0LDQsdC+0YLQutCwINC/0LXRgNCy0L7Qs9C+INC60LvQuNC60LAg0LfQsNCy0LXRgNGI0LXQvdCwLCDQuNC00ZHQvCDQttC00LDRgtGMINCy0YLQvtGA0L7Qs9C+INC60LvQuNC60LAgKi9cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGZsYWcgPT0gMSwgY3VycmVudCBVbml0IGRlZmluZWRcclxuICAgICAgICAgICAgaWYgKCBzZWxmLmN1cnJlbnRVbml0ICE9IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiog0J3QsNGH0LDQu9C+INC+0LHRgNCw0LHQvtGC0LrQuCDQstGC0L7RgNC+0LPQviDQutC70LjQutCwICovXHJcbiAgICAgICAgICAgICAgICBhbGVydCgnU3RhcnQgc3RhZ2UgMiEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiogR2V0IGxvZ2ljIGNvb3JkaW5hdGVzID0gQXJlYSAoIFBvc2l0aW9uWCA7IFBvc2l0aW9uWSApIHJhbmdlKDIwKSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGlja1ggPSBldmVudC5jbGllbnRYLCBjbGlja1kgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhcmVhUG9zaXRpb25YID0gTWF0aC5mbG9vciggKGNsaWNrWCAtIDEwKSAvIDM2ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyZWFQb3NpdGlvblkgPSBNYXRoLmZsb29yKCAoY2xpY2tZIC0gMTApIC8gMzYgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqINCb0LjQsdC+IGRpdiDQstGC0L7RgNC+0LPQviDQutC70LjQutCwIC0g0LfQtdC80LvRjywg0LvQuNCx0L4g0LLRgNCw0LbQtdGB0LrQuNC5INGO0L3QuNGCXHJcbiAgICAgICAgICAgICAgICAgKiDQldGB0LvQuCDQsiBEaXZzIDEg0Y3Qu9C10LzQtdC90YIg0YLQviDRjdGC0L4g0L7QsdC70LDRgdGC0Ywg0L3QsCDQutC+0YLQvtGA0YPRjiDRhdC+0YfQtdGCINC/0LXRgNC10LnRgtC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAoZGl2cy5sZW5ndGggPT0gMSAmJiBzZWxmLm1heU1vdmVDZWxscy5pbmNsdWRlcyhkaXZzWzBdKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqINCX0LDQv9C+0LzQuNC90LDQtdC8INCe0LHQu9Cw0YHRgtGMLCDQv9C+INC60L7RgtC+0YDQvtC5INC60LvQuNC60L3Rg9C70LggKi9cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEFyZWE6IEFyZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFyZWEgPSBnZXRBcmVhKGFyZWFQb3NpdGlvblgsIGFyZWFQb3NpdGlvblkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBcmVhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqINCh0L7QsdGB0YLQstC10L3QvdC+INC40LTRkdC8INCyIEFyZWEgKi9cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRVbml0Lm1vdmUoY3VycmVudEFyZWEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVNYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKiog0JXRgdC70Lgg0LLRgtC+0YDQvtCz0L4g0LrQu9C40Log0L/QviDQstGA0LDQttC10YHQutC+0LzRgyDRjtC90LjRgtGDICovXHJcbiAgICAgICAgICAgICAgICBpZiAoIGRpdnMubGVuZ3RoID09IDIgJiYgc2VsZi5tYXlBdHRhY2tDZWxscy5pbmNsdWRlcyhkaXZzWzFdKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqINCX0LDQv9C+0LzQuNC90LDQtdC8INCu0L3QuNGC0LAsINC/0L4g0LrQvtGC0L7RgNC+0Lkg0LrQu9C40LrQvdGD0LvQuCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRVbml0OiBVbml0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFVuaXQgPSBnZXRVbml0KGFyZWFQb3NpdGlvblgsIGFyZWFQb3NpdGlvblkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldFVuaXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiog0KHQvtCx0YHRgtCy0LXQvdC90L4g0LHRjNGR0Lwg0L/QviBUYXJnZXRVbml0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50VW5pdC5hdHRhY2sodGFyZ2V0VW5pdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBncmFkZU1hcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qKiDQmtC+0L3QtdGGINC+0LHRgNCw0LHQvtGC0LrQuCDQstGC0L7RgNC+0LPQviDQutC70LjQutCwIC0g0L/QvtC00YLQuNGA0LDQtdC8INCy0YHRkSDQtNC10LvQviAqL1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2ZsYWcnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFVuaXQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqINCf0L7QtNGB0LLQtdGC0LrRgyDRg9Cx0LXRgNGR0Lw6INC/0L7QvNC10L3Rj9C10LwgYmNrZ3JuZC1pbWcg0Lgg0L7Rh9C40YHRgtC40LwgbWF5TW92ZUNlbGxzINC4IG1heUF0dGFja0NlbGxzICovXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYubWF5TW92ZUNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXlNb3ZlQ2VsbHNbaV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9TdHJhdGVneS9JY29ucy9ncm91bmQucG5nJylcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5tYXlBdHRhY2tDZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWF5QXR0YWNrQ2VsbHNbaV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9TdHJhdGVneS9JY29ucy9ncm91bmQucG5nJylcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGYubWF5TW92ZUNlbGxzID0gW107XHJcbiAgICAgICAgICAgICAgICBzZWxmLm1heUF0dGFja0NlbGxzID0gW107XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBcmVhfSBmcm9tIFwiLi9BcmVhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2F0ZXJBcmVhIGV4dGVuZHMgQXJlYXtcclxuICAgIGNhbk1vdmUgPSBmYWxzZTtcclxuICAgIGltYWdlOiBzdHJpbmcgPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL3dhdGVyLnBuZyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zX3g6IG51bWJlciwgcG9zX3k6IG51bWJlcil7XHJcbiAgICAgICAgc3VwZXIocG9zX3gsIHBvc195KTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1VuaXR9IGZyb20gXCIuL1VuaXRcIjtcclxuaW1wb3J0IHtCb3d9IGZyb20gXCIuLi9CZWhhdmlvcnMvQXR0YWNrL0Jvd1wiO1xyXG5pbXBvcnQge01vdmVBcmNoZXJ9IGZyb20gXCIuLi9CZWhhdmlvcnMvTW92ZS9Nb3ZlQXJjaGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJjaGVyIGV4dGVuZHMgVW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NfeDogbnVtYmVyLCBwb3NfeTogbnVtYmVyLCBwbGF5ZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIocG9zX3gsIHBvc195LCBwbGF5ZXJJZCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tCZWhhdmlvciA9IG5ldyBCb3coKTtcclxuICAgICAgICB0aGlzLm1vdmVCZWhhdmlvciA9IG5ldyBNb3ZlQXJjaGVyKCk7XHJcbiAgICAgICAgdGhpcy5pY29uID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy9hcmNoZXIucG5nJztcclxuICAgICAgICB0aGlzLmljb25fYWx0ZXJuYXRpdmUgPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2FyY2hlcl9hbHRlcm5hdGl2ZS5wbmcnO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gNTA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1VuaXR9IGZyb20gXCIuL1VuaXRcIjtcclxuaW1wb3J0IHtCb3d9IGZyb20gXCIuLi9CZWhhdmlvcnMvQXR0YWNrL0Jvd1wiO1xyXG5pbXBvcnQge01vdmVBcmNoZXJ9IGZyb20gXCIuLi9CZWhhdmlvcnMvTW92ZS9Nb3ZlQXJjaGVyXCI7XHJcbmltcG9ydCB7U3RvbmVCYWxsfSBmcm9tIFwiLi4vQmVoYXZpb3JzL0F0dGFjay9TdG9uZUJhbGxcIjtcclxuaW1wb3J0IHtNb3ZlQ2F0YXB1bHR9IGZyb20gXCIuLi9CZWhhdmlvcnMvTW92ZS9Nb3ZlQ2F0YXB1bHRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXRhcHVsdCBleHRlbmRzIFVuaXQge1xyXG4gICAgY29uc3RydWN0b3IocG9zX3g6IG51bWJlciwgcG9zX3k6IG51bWJlciwgcGxheWVySWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHBvc194LCBwb3NfeSwgcGxheWVySWQpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrQmVoYXZpb3IgPSBuZXcgU3RvbmVCYWxsKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQmVoYXZpb3IgPSBuZXcgTW92ZUNhdGFwdWx0KCk7XHJcbiAgICAgICAgdGhpcy5pY29uID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy9jYXRhcHVsdC5wbmcnO1xyXG4gICAgICAgIHRoaXMuaWNvbl9hbHRlcm5hdGl2ZSA9ICcuLi9zcmMvU3RyYXRlZ3kvSWNvbnMvY2F0YXB1bHRfYWx0ZXJuYXRpdmUucG5nJztcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDc1O1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7VW5pdH0gZnJvbSBcIi4vVW5pdFwiO1xyXG5pbXBvcnQge0Jvd30gZnJvbSBcIi4uL0JlaGF2aW9ycy9BdHRhY2svQm93XCI7XHJcbmltcG9ydCB7TW92ZUFyY2hlcn0gZnJvbSBcIi4uL0JlaGF2aW9ycy9Nb3ZlL01vdmVBcmNoZXJcIjtcclxuaW1wb3J0IHtTYWJyZX0gZnJvbSBcIi4uL0JlaGF2aW9ycy9BdHRhY2svU2FicmVcIjtcclxuaW1wb3J0IHtNb3ZlSG9yc2VtYW59IGZyb20gXCIuLi9CZWhhdmlvcnMvTW92ZS9Nb3ZlSG9yc2VtYW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb3JzZW1hbiBleHRlbmRzIFVuaXQge1xyXG4gICAgY29uc3RydWN0b3IocG9zX3g6IG51bWJlciwgcG9zX3k6IG51bWJlciwgcGxheWVySWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHBvc194LCBwb3NfeSwgcGxheWVySWQpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrQmVoYXZpb3IgPSBuZXcgU2FicmUoKTtcclxuICAgICAgICB0aGlzLm1vdmVCZWhhdmlvciA9IG5ldyBNb3ZlSG9yc2VtYW4oKTtcclxuICAgICAgICB0aGlzLmljb24gPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL2hvcnNlbWFuLnBuZyc7XHJcbiAgICAgICAgdGhpcy5pY29uX2FsdGVybmF0aXZlID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy9ob3JzZW1hbl9hbHRlcm5hdGl2ZS5wbmcnO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMjAwO1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge1VuaXR9IGZyb20gXCIuL1VuaXRcIjtcclxuaW1wb3J0IHtCb3d9IGZyb20gXCIuLi9CZWhhdmlvcnMvQXR0YWNrL0Jvd1wiO1xyXG5pbXBvcnQge01vdmVBcmNoZXJ9IGZyb20gXCIuLi9CZWhhdmlvcnMvTW92ZS9Nb3ZlQXJjaGVyXCI7XHJcbmltcG9ydCB7U3dvcmR9IGZyb20gXCIuLi9CZWhhdmlvcnMvQXR0YWNrL1N3b3JkXCI7XHJcbmltcG9ydCB7TW92ZVN3b3Jkc21hbn0gZnJvbSBcIi4uL0JlaGF2aW9ycy9Nb3ZlL01vdmVTd29yZHNtYW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTd29yZHNtYW4gZXh0ZW5kcyBVbml0e1xyXG4gICAgY29uc3RydWN0b3IocG9zX3g6IG51bWJlciwgcG9zX3k6IG51bWJlciwgcGxheWVySWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHBvc194LCBwb3NfeSwgcGxheWVySWQpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrQmVoYXZpb3IgPSBuZXcgU3dvcmQoKTtcclxuICAgICAgICB0aGlzLm1vdmVCZWhhdmlvciA9IG5ldyBNb3ZlU3dvcmRzbWFuKCk7XHJcbiAgICAgICAgdGhpcy5pY29uID0gJy4uL3NyYy9TdHJhdGVneS9JY29ucy9zd29yZHNtYW4ucG5nJztcclxuICAgICAgICB0aGlzLmljb25fYWx0ZXJuYXRpdmUgPSAnLi4vc3JjL1N0cmF0ZWd5L0ljb25zL3N3b3Jkc21hbl9hbHRlcm5hdGl2ZS5wbmcnO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7QXR0YWNrQmVoYXZpb3J9IGZyb20gXCIuLi9CZWhhdmlvcnMvQXR0YWNrL0F0dGFja0JlaGF2aW9yXCI7XHJcbmltcG9ydCB7TW92ZUJlaGF2aW9yfSBmcm9tIFwiLi4vQmVoYXZpb3JzL01vdmUvTW92ZUJlaGF2aW9yXCI7XHJcbmltcG9ydCB7QXJlYX0gZnJvbSBcIi4uL01hcC9BcmVhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5pdCB7XHJcbiAgICBwb3NpdGlvbl94OiBudW1iZXI7XHJcbiAgICBwb3NpdGlvbl95OiBudW1iZXI7XHJcbiAgICBwbGF5ZXJJZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc194OiBudW1iZXIsIHBvc195OiBudW1iZXIsIHBsYXllcmlkOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25feCA9IHBvc194O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25feSA9IHBvc195O1xyXG4gICAgICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJpZDtcclxuICAgICAgICB0aGlzLmlzQWxpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFja0JlaGF2aW9yOiBBdHRhY2tCZWhhdmlvcjtcclxuICAgIG1vdmVCZWhhdmlvcjogTW92ZUJlaGF2aW9yO1xyXG4gICAgYXJlYTogQXJlYTtcclxuICAgIGhlYWx0aDogbnVtYmVyO1xyXG4gICAgaXNBbGl2ZTogYm9vbGVhbjtcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGljb25fYWx0ZXJuYXRpdmU6IHN0cmluZztcclxuXHJcbiAgICBhdHRhY2sodGFyZ2V0VW5pdDogVW5pdCl7XHJcbiAgICAgICAgdGhpcy5hdHRhY2tCZWhhdmlvci5hdHRhY2sodGFyZ2V0VW5pdClcclxuICAgIH07XHJcblxyXG4gICAgbW92ZSh0YXJnZXRBcmVhOiBBcmVhKXtcclxuICAgICAgICB0aGlzLm1vdmVCZWhhdmlvci5tb3ZlKHRhcmdldEFyZWEpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7TWFwfSBmcm9tIFwiLi9TdHJhdGVneS9NYXAvTWFwXCI7XHJcbmltcG9ydCB7THZsMV90ZXh0dXJlfSBmcm9tIFwiLi9TdHJhdGVneS9NYXAvTHZsMV90ZXh0dXJlXCI7XHJcblxyXG5cclxuLy8gbGV0IGR1Y2sgPSBuZXcgTWFsbGFyZER1Y2soXCJCbGFjayBjbG9ha1wiKTtcclxuLy8gZHVjay5kaXNwbGF5KCk7XHJcbi8vIGR1Y2sucGVyZm9ybUZseSgpO1xyXG4vLyBkdWNrLnBlcmZvcm1RdWFjaygpO1xyXG4vLyBkdWNrLnNldHF1YWNrQmVoYXZpb3IobmV3IE11dGVRdWFjaygpKTtcclxuLy8gZHVjay5wZXJmb3JtUXVhY2soKTtcclxuLy9cclxubGV0IG1hcCA9IG5ldyBNYXAoMjAsMjApO1xyXG5tYXAucHJpbnRfZ3JpZCgpO1xyXG5tYXAubG9hZF9tYXBfdGV4dHVyZV9sb2dpYyhuZXcgTHZsMV90ZXh0dXJlKCkuTHZsMV90ZXh0dXJlKTtcclxubWFwLmRyYXdfbWFwX3RleHR1cmUoKTtcclxubWFwLmluaXRfdW5pdHMoKTtcclxubWFwLmRyYXdfbWFwX3VuaXQoKTtcclxubWFwLmNsaWNrX2xvZ2ljKCk7XHJcblxyXG4iXX0=

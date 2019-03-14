(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
///<reference path="models/model.ts"/>
///<reference path="models/samsung.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
class RemoteControl {
    constructor(model) {
        switch (model) {
            case 'Samsung': {
                this.modelTV = new Samsung();
                break;
            }
            default: {
                this.modelTV = new Samsung();
                break;
            }
        }
        this._setCommand();
    }
    _setCommand() {
        this.keyCommands = this.modelTV.buttons;
    }
    onCodeWasPassed(slot) {
        console.log(this.keyCommands[slot]);
    }
}
exports.RemoteControl = RemoteControl;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const remote_control_1 = require("./Remote/remote.control");
/** Create 'Samsung' remote */
let remote = new remote_control_1.RemoteControl('Samsung');
let code = {
    "value": "56",
};
/** Если бы code был бы HTMLElement <input> с полем value */
// while (true) {
//     remote.onCodeWasPassed(code.value);
//     code.value = '';
// }
/** Code - object with 'value' field*/
remote.onCodeWasPassed(code.value);
// let duck = new MallardDuck("Black cloak");
// duck.display();
// duck.performFly();
// duck.performQuack();
// duck.setquackBehavior(new MuteQuack());
// duck.performQuack();
//
// let map = new Map(20,20);
// map.print_grid();
// map.load_map_texture_logic(new Lvl1_texture().Lvl1_texture);
// map.draw_map_texture();
// map.init_units();
// map.draw_map_unit();
// map.click_logic();
},{"./Remote/remote.control":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvUmVtb3RlL3JlbW90ZS5jb250cm9sLnRzIiwic3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUEsc0NBQXNDO0FBQ3RDLHdDQUF3Qzs7QUFFeEMsTUFBYSxhQUFhO0lBSXRCLFlBQVksS0FBYTtRQUNyQixRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssU0FBUyxDQUFDLENBQUM7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixNQUFNO2FBQ1Q7WUFDRCxPQUFPLENBQUMsQ0FBQztnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7Z0JBQzdCLE1BQU07YUFDVDtTQUNKO1FBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUM1QyxDQUFDO0lBRUQsZUFBZSxDQUFFLElBQVc7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7SUFDMUMsQ0FBQztDQUVKO0FBM0JELHNDQTJCQzs7OztBQzlCRCw0REFBdUQ7QUFPdkQsOEJBQThCO0FBQzlCLElBQUksTUFBTSxHQUFHLElBQUksOEJBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxQyxJQUFJLElBQUksR0FBRztJQUNQLE9BQU8sRUFBRSxJQUFJO0NBQ2hCLENBQUM7QUFFRiw0REFBNEQ7QUFDNUQsaUJBQWlCO0FBQ2pCLDBDQUEwQztBQUMxQyx1QkFBdUI7QUFDdkIsSUFBSTtBQUVKLHNDQUFzQztBQUN0QyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUduQyw2Q0FBNkM7QUFDN0Msa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIsMENBQTBDO0FBQzFDLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YsNEJBQTRCO0FBQzVCLG9CQUFvQjtBQUNwQiwrREFBK0Q7QUFDL0QsMEJBQTBCO0FBQzFCLG9CQUFvQjtBQUNwQix1QkFBdUI7QUFDdkIscUJBQXFCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwibW9kZWxzL21vZGVsLnRzXCIvPlxuLy8vPHJlZmVyZW5jZSBwYXRoPVwibW9kZWxzL3NhbXN1bmcudHNcIi8+XG5cbmV4cG9ydCBjbGFzcyBSZW1vdGVDb250cm9sIHtcbiAgICBrZXlDb21tYW5kczogb2JqZWN0O1xuICAgIG1vZGVsVFY6IE1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobW9kZWw6IHN0cmluZykge1xuICAgICAgICBzd2l0Y2ggKG1vZGVsKSB7XG4gICAgICAgICAgICBjYXNlICdTYW1zdW5nJzoge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWxUViA9IG5ldyBTYW1zdW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbFRWID0gbmV3IFNhbXN1bmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldENvbW1hbmQoKTtcbiAgICB9XG5cbiAgICBfc2V0Q29tbWFuZCgpIHtcbiAgICAgICAgdGhpcy5rZXlDb21tYW5kcyA9IHRoaXMubW9kZWxUVi5idXR0b25zO1xuICAgIH1cblxuICAgIG9uQ29kZVdhc1Bhc3NlZCggc2xvdDpzdHJpbmcgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLmtleUNvbW1hbmRzW3Nsb3RdICk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1JlbW90ZUNvbnRyb2x9IGZyb20gIFwiLi9SZW1vdGUvcmVtb3RlLmNvbnRyb2xcIjtcclxuaW1wb3J0IHtNYWxsYXJkRHVja30gZnJvbSBcIi4vRHVja3MvTWFsbGFyZER1Y2tcIjtcclxuaW1wb3J0IHtNdXRlUXVhY2t9IGZyb20gXCIuL0R1Y2tzL2JlaGF2aW9ycy9xdWFjay9NdXRlUXVhY2tcIjtcclxuaW1wb3J0IHtNYXB9IGZyb20gXCIuL1N0cmF0ZWd5L01hcC9NYXBcIjtcclxuaW1wb3J0IHtMdmwxX3RleHR1cmV9IGZyb20gXCIuL1N0cmF0ZWd5L01hcC9MdmwxX3RleHR1cmVcIjtcclxuXHJcblxyXG4vKiogQ3JlYXRlICdTYW1zdW5nJyByZW1vdGUgKi9cclxubGV0IHJlbW90ZSA9IG5ldyBSZW1vdGVDb250cm9sKCdTYW1zdW5nJyk7XHJcbmxldCBjb2RlID0ge1xyXG4gICAgXCJ2YWx1ZVwiOiBcIjU2XCIsXHJcbn07XHJcblxyXG4vKiog0JXRgdC70Lgg0LHRiyBjb2RlINCx0YvQuyDQsdGLIEhUTUxFbGVtZW50IDxpbnB1dD4g0YEg0L/QvtC70LXQvCB2YWx1ZSAqL1xyXG4vLyB3aGlsZSAodHJ1ZSkge1xyXG4vLyAgICAgcmVtb3RlLm9uQ29kZVdhc1Bhc3NlZChjb2RlLnZhbHVlKTtcclxuLy8gICAgIGNvZGUudmFsdWUgPSAnJztcclxuLy8gfVxyXG5cclxuLyoqIENvZGUgLSBvYmplY3Qgd2l0aCAndmFsdWUnIGZpZWxkKi9cclxucmVtb3RlLm9uQ29kZVdhc1Bhc3NlZChjb2RlLnZhbHVlKTtcclxuXHJcblxyXG4vLyBsZXQgZHVjayA9IG5ldyBNYWxsYXJkRHVjayhcIkJsYWNrIGNsb2FrXCIpO1xyXG4vLyBkdWNrLmRpc3BsYXkoKTtcclxuLy8gZHVjay5wZXJmb3JtRmx5KCk7XHJcbi8vIGR1Y2sucGVyZm9ybVF1YWNrKCk7XHJcbi8vIGR1Y2suc2V0cXVhY2tCZWhhdmlvcihuZXcgTXV0ZVF1YWNrKCkpO1xyXG4vLyBkdWNrLnBlcmZvcm1RdWFjaygpO1xyXG4vL1xyXG4vLyBsZXQgbWFwID0gbmV3IE1hcCgyMCwyMCk7XHJcbi8vIG1hcC5wcmludF9ncmlkKCk7XHJcbi8vIG1hcC5sb2FkX21hcF90ZXh0dXJlX2xvZ2ljKG5ldyBMdmwxX3RleHR1cmUoKS5MdmwxX3RleHR1cmUpO1xyXG4vLyBtYXAuZHJhd19tYXBfdGV4dHVyZSgpO1xyXG4vLyBtYXAuaW5pdF91bml0cygpO1xyXG4vLyBtYXAuZHJhd19tYXBfdW5pdCgpO1xyXG4vLyBtYXAuY2xpY2tfbG9naWMoKTtcclxuXHJcbiJdfQ==

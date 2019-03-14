import {Map} from "./Strategy/Map/Map";
import {Lvl1_texture} from "./Strategy/Map/Lvl1_texture";


// let duck = new MallardDuck("Black cloak");
// duck.display();
// duck.performFly();
// duck.performQuack();
// duck.setquackBehavior(new MuteQuack());
// duck.performQuack();
//
let map = new Map(20,20);
map.print_grid();
map.load_map_texture_logic(new Lvl1_texture().Lvl1_texture);
map.draw_map_texture();
map.init_units();
map.draw_map_unit();
map.click_logic();


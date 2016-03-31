var width = window.innerWidth, height = window.innerHeight;
var canvas = document.getElementById('canvas');
var renderer = PIXI.autoDetectRenderer(width, height, canvas, true, true);


var stage = new PIXI.Container();
var fixed_scene = new PIXI.Container();
var back2_scene = new PIXI.Container();
var back1_scene = new PIXI.Container();
var back05_scene = new PIXI.Container();
var main_scene = new PIXI.Container();
var front_scene = new PIXI.Container();
var light_scene = new PIXI.Container();
var hud_scene = new PIXI.Container();

stage.addChild(fixed_scene);
stage.addChild(back2_scene);
stage.addChild(back1_scene);
stage.addChild(back05_scene);
stage.addChild(main_scene);
stage.addChild(front_scene);
main_scene.addChild(light_scene);
stage.addChild(hud_scene);


var graphics_front = new PIXI.Graphics();
graphics_front.beginFill(0x111211);
// set the line style to have a width of 5 and set the color to red
// draw a rectangle
graphics_front.drawRect(0, 0, width, (height*0.10));
//graphics.drawRect(0, height*(1-0.1), width, (height*0.10));

stage.addChild(graphics_front);


var graphics_back = new PIXI.Graphics();
graphics_back.beginFill(0x111211);
// set the line style to have a width of 5 and set the color to red
// draw a rectangle
//graphics_back.drawRect(0, 0, width, (height*0.10));
graphics_back.drawRect(0, height*(1-0.1), width, (height*0.10));

hud_scene.addChild(graphics_back);



var mouseX, mouseY = 0;
var main_character;
var time = Date.now();
var start = Date.now();
var time_count = 0;
var time_step = 0;
var left, right, up, down = false; // Arrow Key controls
var first_press = true;
var turn_around_check = 0;
var in_jump = false;
var in_start_walk = true;
var in_walk = false;
var in_curbstomp = false;

var CHARACTER_MOTION = {
  'IDLE' : 0,
  'START_WALKING' : 1,
  'WALKING' : 2,
  'JUMP' : 3,
  'CURBSTOMP' : 4,
}

var parameters = {
  'dt' : 0.2,
  'g' : 13.82,
  'ground_boundary' : height*7/8,
  'left_boundary' : 300,
  'right_boundary' : 6700,

}

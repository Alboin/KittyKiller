var width = window.innerWidth, height = window.innerHeight;
var canvas = document.getElementById('canvas');
var renderer = PIXI.autoDetectRenderer(width, height, canvas, true, true);


var stage = new PIXI.Container();
var fixed_scene = new PIXI.Container();
var back2_scene = new PIXI.Container();
var back1_scene = new PIXI.Container();
var main_scene = new PIXI.Container();
var front_scene = new PIXI.Container();

stage.addChild(fixed_scene);
stage.addChild(back2_scene);
stage.addChild(back1_scene);
stage.addChild(main_scene);
stage.addChild(front_scene);


var graphics = new PIXI.Graphics();
graphics.beginFill(0x111211);
// set the line style to have a width of 5 and set the color to red
// draw a rectangle
graphics.drawRect(0, 0, width, (height*0.10));
//graphics.drawRect(0, height*(1-0.1), width, (height*0.10));

stage.addChild(graphics);


var mouseX, mouseY = 0;
var main_character;
var time = Date.now();
var start = Date.now();
var time_count = 0;
var time_step = 0;
var left, right, up, down = false; // Arrow Key controls
var turn_around_check = 0;
var in_jump = false;
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
  'ground_boundary' : 3*height/4,
  'left_boundary' : 0,
  'right_boundary' : 2780,

}

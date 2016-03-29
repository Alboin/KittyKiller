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

var mouseX, mouseY = 0;
var main_character;
var time = Date.now();
var start = Date.now();
var time_count = 0;
var time_step = 0;
var left, right, up, down = false; // Arrow Key controls
var turn_around_check = 0;

var CHARACTER_MOTION = {
  'IDLE' : 0,
  'START_WALKING' : 1,
  'WALKING' : 2,
}

var parameters = {
  'dt' : 0.2,
  'g' : 9.82,
  'ground_boundary' : 3*height/4,

}

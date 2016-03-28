var width = window.innerWidth, height = window.innerHeight;
var canvas = document.getElementById('canvas');
var renderer = PIXI.autoDetectRenderer(width, height, canvas, true, true);
var stage = new PIXI.Container();
var mouseX, mouseY = 0;
var sprite;
var time = Date.now();
var start = Date.now();
var time_count = 0;
var time_step = 0;
var CHARACTER_MOTION = {
  'STAND' : 0,
  'RUN' : 1,
  'STOP' : 2,
}

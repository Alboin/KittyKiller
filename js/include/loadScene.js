var percent_screen = 0.8;
var scene_scale = percent_screen*height/1000;

var fixed_texture = PIXI.Texture.fromImage('images/scene1/fixed.png');
var fixed_sprite = new PIXI.Sprite(fixed_texture);
fixed_sprite.scale.x = scene_scale;
fixed_sprite.scale.y = scene_scale;
fixed_sprite.anchor.x = 0.0;
fixed_sprite.anchor.y = 0.0;
fixed_sprite.position.x = 0;
fixed_sprite.position.y = height*(1-percent_screen)/2;
fixed_scene.addChild(fixed_sprite);

var back2_texture = PIXI.Texture.fromImage('images/scene1/back2.png');
var back2_sprite = new PIXI.Sprite(back2_texture);
back2_sprite.scale.x = scene_scale;
back2_sprite.scale.y = scene_scale;
back2_sprite.anchor.x = 0.0;
back2_sprite.anchor.y = 0.0;
back2_sprite.position.x = 0;
back2_sprite.position.y = height*(1-percent_screen)/2;
back2_scene.addChild(back2_sprite);

var back1_texture = PIXI.Texture.fromImage('images/scene1/back1.png');
var back1_sprite = new PIXI.Sprite(back1_texture);
back1_sprite.scale.x = scene_scale;
back1_sprite.scale.y = scene_scale;
back1_sprite.anchor.x = 0.0;
back1_sprite.anchor.y = 0.0;
back1_sprite.position.x = 0;
back1_sprite.position.y = height*(1-percent_screen)/2;
;
back1_scene.addChild(back1_sprite);

var main_texture = PIXI.Texture.fromImage('images/scene1/main.png');
var main_sprite = new PIXI.Sprite(main_texture);
main_sprite.scale.x = scene_scale;
main_sprite.scale.y = scene_scale;
main_sprite.anchor.x = 0.0;
main_sprite.anchor.y = 0.0;
main_sprite.position.x = 0;
main_sprite.position.y = height*(1-percent_screen)/2;
main_scene.addChild(main_sprite);

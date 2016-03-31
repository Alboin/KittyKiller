var texture = PIXI.Texture.fromImage('images/purple_sprite.png');

var textures_idle = [];
var textures_run = [];
var textures_start_walking = [];
var textures_walking = [];
var textures_jump = [];
var textures_curbstomp = [];

for(var texture_id = 1; texture_id < 46; texture_id++){
  if(texture_id > 9){
    textures_idle[texture_id] = PIXI.Texture.fromImage('images/animations/idle/idle_000' + texture_id + '.png');
  }else if(texture_id > 0){
    textures_idle[texture_id] = PIXI.Texture.fromImage('images/animations/idle/idle_0000' + texture_id + '.png');
  }else{
    textures_idle[texture_id] = PIXI.Texture.fromImage('images/animations/idle/idle_00000.png');
  }
}

for(var texture_id = 1; texture_id < 15; texture_id++){
  if(texture_id > 9){
    textures_start_walking[texture_id] = PIXI.Texture.fromImage('images/animations/start_walking/start_walking_000' + texture_id + '.png');
  }else if(texture_id > 0){
    textures_start_walking[texture_id] = PIXI.Texture.fromImage('images/animations/start_walking/start_walking_0000' + texture_id + '.png');
  }else{
    textures_start_walking[texture_id] = PIXI.Texture.fromImage('images/animations/start_walking/start_walking_00000.png');
  }
}

for(var texture_id = 1; texture_id < 30; texture_id++){
  if(texture_id > 9){
    textures_walking[texture_id] = PIXI.Texture.fromImage('images/animations/walking/walking_000' + texture_id + '.png');
  }else if(texture_id > 0){
    textures_walking[texture_id] = PIXI.Texture.fromImage('images/animations/walking/walking_0000' + texture_id + '.png');
  }else{
    textures_walking[texture_id] = PIXI.Texture.fromImage('images/animations/walking/walking_00000.png');
  }
}

for(var texture_id = 1; texture_id < 31; texture_id++){
  if(texture_id > 9){
    textures_jump[texture_id] = PIXI.Texture.fromImage('images/animations/jump/jump_000' + texture_id +'.png');
  }else if(texture_id > 0){
    textures_jump[texture_id] = PIXI.Texture.fromImage('images/animations/jump/jump_0000' + texture_id +'.png');
  }else{
    textures_jump[texture_id] = PIXI.Texture.fromImage('images/animations/jump/jump_00000.png');
  }
}

for(var texture_id = 1; texture_id < 28; texture_id++){
  if(texture_id > 9){
    textures_curbstomp[texture_id] = PIXI.Texture.fromImage('images/animations/curbstomp/curbstomp_000' + texture_id +'.png');
  }else if(texture_id > 0){
    textures_curbstomp[texture_id] = PIXI.Texture.fromImage('images/animations/curbstomp/curbstomp_0000' + texture_id +'.png');
  }else{
    textures_curbstomp[texture_id] = PIXI.Texture.fromImage('images/animations/curbstomp/curbstomp_00000.png');
  }
}

//var sceneGraph = new PIXI.DisplayObject();

main_character = new PIXI.Sprite(texture);
main_character.texture = textures_idle[2];
main_character.scale_factor = height/1000;
main_character.scale.x = main_character.scale_factor;
main_character.scale.y = main_character.scale_factor;

main_character.anchor.x = 0.5;
main_character.anchor.y = 1;

main_character.position.x = 800;
main_character.position.y = parameters.ground_boundary;

main_character.mass = 1;
main_character.velocity = new PIXI.Vector(0,0);
main_character.force = new PIXI.Vector(0,0);
main_character.attack_power = "BEAST";
main_character.max_speed = 200;
main_character.speed = 100;
main_character.tint = 9999999999999;

main_scene.addChild(main_character);

var front_texture = PIXI.Texture.fromImage('images/scene1/front.png');
var front_sprite = new PIXI.Sprite(front_texture);
front_sprite.scale.x = scene_scale;
front_sprite.scale.y = scene_scale;
front_sprite.anchor.x = 0.0;
front_sprite.anchor.y = 0.0;
front_sprite.position.x = 0;
front_sprite.position.y = height*(1-percent_screen)/2;
front_scene.addChild(front_sprite);

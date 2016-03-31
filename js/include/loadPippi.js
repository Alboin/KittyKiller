var textures_pippi = [];


for(var texture_id = 1; texture_id < 61; texture_id++){
  if(texture_id > 9){
    textures_pippi[texture_id] = PIXI.Texture.fromImage('images/animations/pippi/pippi_000' + texture_id + '.png');
  }else if(texture_id > 0){
    textures_pippi[texture_id] = PIXI.Texture.fromImage('images/animations/pippi/pippi_0000' + texture_id + '.png');
  }else{
    textures_pippi[texture_id] = PIXI.Texture.fromImage('images/animations/pippi/pippi_00000.png');
  }
}

var pippi = new PIXI.Sprite(textures_pippi[1]);
pippi.position.y = 370;
pippi.position.x = 940;
var pippi_scale = 0.6;
pippi.scale.x = pippi_scale;
pippi.scale.y = pippi_scale;

main_scene.addChild(pippi);

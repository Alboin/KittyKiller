var texture = PIXI.Texture.fromImage('images/purple_sprite.png');

var textures_run = [];
for(var texture_id = 1; texture_id < 5; texture_id++){
  textures_run[texture_id] = PIXI.Texture.fromImage('images/s' + texture_id + '.png');
}

sprite = new PIXI.Sprite(texture);
sprite.texture = textures_run[2];
sprite.scale.x = 0.83;
sprite.scale.y = 0.83;

sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

sprite.position.x = 200;
sprite.position.y = 200;

stage.addChild(sprite);

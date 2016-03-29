var all_leaves = [];
var leaf_texture = PIXI.Texture.fromImage('images/leaves/leaf1.png');

for(var leaf_id = 0; leaf_id < 32; leaf_id++){
  var leaf_sprite = new PIXI.Sprite(leaf_texture);
  var leaf_size = 0.2 + Math.random()*0.3;
  leaf_sprite.scale.x = leaf_size;
  leaf_sprite.scale.y = leaf_size;
  leaf_sprite.anchor.x = 0.5;
  leaf_sprite.anchor.y = 0.5;
  leaf_sprite.position.x = Math.random()*1500+1000;
  leaf_sprite.position.y = Math.random()*830-30;
  leaf_sprite.rotation = Math.random()*800;
  leaf_sprite.tint = 16776715 - Math.random()*100;
  leaf_sprite.alpha = 1;
  back1_scene.addChild(leaf_sprite);
  all_leaves.push(leaf_sprite);
}

for(var leaf_id = 0; leaf_id < 8; leaf_id++){
  var leaf_sprite = new PIXI.Sprite(leaf_texture);
  var leaf_size = 0.2 + Math.random()*0.3;
  leaf_sprite.scale.x = leaf_size;
  leaf_sprite.scale.y = leaf_size;
  leaf_sprite.anchor.x = 0.5;
  leaf_sprite.anchor.y = 0.5;
  leaf_sprite.position.x = Math.random()*1500+1000;
  leaf_sprite.position.y = Math.random()*830-30;
  leaf_sprite.rotation = Math.random()*800;
  leaf_sprite.tint = 16776915 - Math.random()*100;
  leaf_sprite.alpha = 1;
  main_scene.addChild(leaf_sprite);
  all_leaves.push(leaf_sprite);
}

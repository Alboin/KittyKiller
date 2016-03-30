var all_fireflies = [];
var firefly_texture = PIXI.Texture.fromImage('images/fireflies/firefly1.png');

for(var firefly_id = 0; firefly_id < 32; firefly_id++){
  var firefly_sprite = new PIXI.Sprite(firefly_texture);
  var firefly_size = 0.2 + Math.random()*0.3;
  firefly_sprite.scale.x = firefly_size;
  firefly_sprite.scale.y = firefly_size;
  firefly_sprite.anchor.x = 0.5;
  firefly_sprite.anchor.y = 0.5;

  firefly_sprite.desired_position_local = new PIXI.Vector((Math.random()-0.5)*150, Math.random()*330-400);
  firefly_sprite.desired_position = new PIXI.Vector((Math.random()-0.5)*150, Math.random()*330+150);
  firefly_sprite.velocity = new PIXI.Vector(0,0);

  firefly_sprite.position.x = main_character.position.x + firefly_sprite.desired_position.x;
  firefly_sprite.position.y = firefly_sprite.desired_position.y;
  firefly_sprite.tint = 16776695 - Math.random()*130.0;
  firefly_sprite.alpha = 0.9;


  if(firefly_id % 2 == 0)
    main_scene.addChild(firefly_sprite);
  else
    back05_scene.addChild(firefly_sprite);
  all_fireflies.push(firefly_sprite);
}

function animate_scene(){
  back2_scene.position.x = - 0.8*main_character.position.x + width/2;
  back1_scene.position.x = - 0.9*main_character.position.x + width/2;
  main_scene.position.x = - main_character.position.x + width/2;
  front_scene.position.x = - 1.5*main_character.position.x + width/2;

  //stage.position.x = - main_character.position.x + width/2;
}

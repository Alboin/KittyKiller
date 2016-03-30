function animate_scene(){
  if(main_character.position.x > width/2 && main_character.position.x < parameters.right_boundary - width){

    fixed_scene.position.x = - 0.1*main_character.position.x;

    back2_scene.position.x = - 0.8*main_character.position.x + width/2;
    back1_scene.position.x = - 0.9*main_character.position.x + width/2;
    back05_scene.position.x = - main_character.position.x + width/2;
    main_scene.position.x = - main_character.position.x + width/2;
    front_scene.position.x = - 1.5*main_character.position.x + width;
  }

  var size_displacement_fixed = 1.01+(Math.sin(time/1000))*0.001;
  var size_displacement_back2 = 1.01+(Math.sin(time/1000+1))*0.01;
  var size_displacement_back1 = 1.01+(Math.sin(time/1000+1))*0.003;
  fixed_scene.scale.x = size_displacement_fixed;
  fixed_scene.scale.y = size_displacement_fixed;
  back2_scene.scale.x = size_displacement_back2;
  back2_scene.scale.y = size_displacement_back2;
  back1_scene.scale.x = size_displacement_back1;
  back1_scene.scale.y = size_displacement_back1;
}

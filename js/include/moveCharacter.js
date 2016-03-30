function move_character(){

  if(right){
    main_character.force.x = main_character.speed;
  }else if(left){
    main_character.force.x = -main_character.speed;
  }else{ main_character.force.x = 0; }

  update_character_position();
}

function update_character_position(){

  //calculate force
  var gravity_force = new PIXI.Vector(0, parameters.g);
  main_character.force = main_character.force.add(gravity_force);
  // F = m * a --> a = F / m
  var a = main_character.force.divideScalar(main_character.mass);
  // v = v + a*dt
  main_character.velocity = main_character.velocity.add(a.multiplyScalar(parameters.dt));
  main_character.velocity.x *= 0.6;

  if(main_character.velocity.x > main_character.max_speed){
    main_character.velocity.x = main_character.max_speed;
  }

  if(main_character.velocity.x < -main_character.max_speed){
    main_character.velocity.x = -main_character.max_speed;
  }

  // s = s + v*dt
  main_character.position.x += main_character.velocity.x * parameters.dt;
  main_character.position.y += main_character.velocity.y * parameters.dt;

  

  checkBoundaries();

}

function checkBoundaries(){

  if(main_character.position.y > parameters.ground_boundary){
    main_character.position.y = parameters.ground_boundary;
      main_character.velocity.y = 0;
  }
  if(main_character.position.x < parameters.left_boundary){
    main_character.position.x = parameters.left_boundary;
      main_character.velocity.x = 0;
  }
  if(main_character.position.x > parameters.right_boundary-width/2){
    main_character.position.x = parameters.right_boundary-width/2;
      main_character.velocity.x = 0;
  }
}

function jump_character(){
  main_character.velocity.y = -70;
}

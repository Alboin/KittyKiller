function animate_character(time_count, motion){

  switch(motion) {
  case CHARACTER_MOTION.IDLE:
      animate_character_idle();
      break;
  case CHARACTER_MOTION.START_WALKING:
      animate_character_start_walking();
      break;
  case CHARACTER_MOTION.WALKING:
      animate_character_walking();
      break;
  case CHARACTER_MOTION.JUMP:
      animate_character_jump();
      break;
  case CHARACTER_MOTION.CURBSTOMP:
      animate_character_curbstomp();
      break;
  default:
       //hej
  }
}

function animate_character_idle(){
  time_step = 0.06;
  n_frames = textures_idle.length-1;
  full_time = time_step * n_frames;
  if(time_count > full_time){ restartTimer(); }
  for(var a = n_frames; a > 0; a--){
    if(time_count < time_step*a){ main_character.texture = textures_idle[a]; }
  }
}


function animate_character_start_walking(){
  time_step = 0.02;
  n_frames = textures_start_walking.length-1;
  full_time = time_step * n_frames;
  if(time_count > full_time){ in_start_walk = false; }
  for(var a = n_frames; a > 0; a--){
    if(time_count < time_step*a){ main_character.texture = textures_start_walking[a]; }
  }
}

function animate_character_walking(){
  time_step = 0.03;
  n_frames = textures_walking.length-1;
  full_time = time_step * n_frames;
  if(time_count > full_time || !in_walk){ restartTimer(); }
  for(var a = n_frames; a > 0; a--){
    if(time_count < time_step*a){ main_character.texture = textures_walking[a]; }
  }
}

function animate_character_jump(){
  time_step = 0.03;
  n_frames = textures_jump.length-1;
  full_time = time_step * n_frames;
  if(time_count > full_time){ in_jump = false; }
  for(var a = n_frames; a > 0; a--){
    if(time_count < time_step*a){ main_character.texture = textures_jump[a]; }
  }
}

function animate_character_curbstomp(){
  time_step = 0.03;
  n_frames = textures_curbstomp.length-1;
  full_time = time_step * n_frames;
  if(time_count > full_time){ in_curbstomp = false; }
  for(var a = n_frames; a > 0; a--){
    if(time_count < time_step*a){ main_character.texture = textures_curbstomp[a]; }
  }
}

function animate_character_turn_around(){
  main_character.scale.x *= -1;
  turn_around_check = 1;
}

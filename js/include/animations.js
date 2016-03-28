function animate_character(time_count, motion){

  switch(motion) {
  case CHARACTER_MOTION.STAND:
      console.log("STAND");
      break;
  case CHARACTER_MOTION.RUN:
      animate_character_run();
      break;
  default:
       //hej
  }
}

function animate_character_run(){
  time_step = 0.04;
  n_frames = textures_run.length-1;
  full_time = time_step * n_frames;
  if(time_count > full_time){ restartTimer(); }
  for(var a = n_frames; a > 0; a--){
    if(time_count < time_step*a){ sprite.texture = textures_run[a]; }
  }
}

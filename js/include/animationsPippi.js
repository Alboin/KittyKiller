

function animate_pippi_idle(){
  time_step = 0.06;
  n_frames = textures_pippi.length-1;
  full_time = time_step * n_frames;
  if(time_count_pippi > full_time){ restartPippiTimer(); }
  for(var a = n_frames; a > 0; a--){
    if(time_count_pippi < time_step*a){ pippi.texture = textures_pippi[a]; }
  }
}


document.addEventListener( 'mousedown', onDocumentMouseDown, false );
window.addEventListener( 'resize', onWindowResize, false );


document.onkeydown = onKeyDown;
document.onkeyup = onKeyUp;

function onKeyDown(e) {
    e = e || window.event;
		if (e.keyCode == '38') {up = true;}
    else if (e.keyCode == '40') {down = true;}
    else if (e.keyCode == '37') {left = true; if(turn_around_check){ animate_character_turn_around(); turn_around_check = 0;}}
		else if (e.keyCode == '39') {right = true; if(!turn_around_check){ animate_character_turn_around(); turn_around_check = 1;}}

    else if (e.keyCode == '32') { restartShakeTimer(); if(!in_jump){jump_character(); restartTimer();}  in_jump = true;}
    else if (e.keyCode == '67') { if(!in_curbstomp){ restartTimer();}  in_curbstomp = true;}
}

function onKeyUp(e) {
    e = e || window.event;
		if (e.keyCode == '38') {up = false;}
    else if (e.keyCode == '40') {down = false;}
    else if (e.keyCode == '37') {left = false;}
    else if (e.keyCode == '39') {right = false;}
}


function onDocumentMouseDown( event ) {
  mouseX = (event.clientX );
  mouseY = (event.clientY );
  var V = [mouseX,mouseY];
  console.log(V);
}

function onWindowResize( e ) {
  width = window.innerWidth, height = window.innerHeight;

  parameters.ground_boundary = 3*height/4;
  main_character.scale_factor = width/1100;
  main_character.position.y = parameters.ground_boundary;
  scene_scale = percent_screen*height/1000;

  fixed_sprite.scale.x = scene_scale;
  fixed_sprite.scale.y = scene_scale;
  fixed_sprite.position.y = height*(1-percent_screen)/2;

  back2_sprite.scale.x = scene_scale;
  back2_sprite.scale.y = scene_scale;
  back2_sprite.position.y = height*(1-percent_screen)/2;

  back1_sprite.scale.x = scene_scale;
  back1_sprite.scale.y = scene_scale;
  back1_sprite.position.y = height*(1-percent_screen)/2;

  back05_sprite.scale.x = scene_scale;
  back05_sprite.scale.y = scene_scale;
  back05_sprite.position.y = height*(1-percent_screen)/2;

  main_sprite.scale.x = scene_scale;
  main_sprite.scale.y = scene_scale;
  main_sprite.position.y = height*(1-percent_screen)/2;

  front_sprite.scale.x = scene_scale;
  front_sprite.scale.y = scene_scale;
  front_sprite.position.y = height*(1-percent_screen)/2;


  main_character.scale.x = main_character.scale_factor;
  main_character.scale.y = main_character.scale_factor;

  renderer.resize( width, height );
}

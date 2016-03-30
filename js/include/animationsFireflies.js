function animate_fireflies(all_fireflies, time){
  for(var firefly_id = 0; firefly_id < all_fireflies.length; firefly_id++){

    all_fireflies[firefly_id].desired_position.x = 20 * Math.sin(time/1000+firefly_id) + main_character.position.x + all_fireflies[firefly_id].desired_position_local.x;
    all_fireflies[firefly_id].desired_position.y = 5 * Math.sin(time/1000+firefly_id) + main_character.position.y + all_fireflies[firefly_id].desired_position_local.y;

    var force = new PIXI.Vector(0,0);
    var iff = 0.035 + (firefly_id+1)*0.004; // Individual force factor
    force.x = iff*(all_fireflies[firefly_id].desired_position.x - all_fireflies[firefly_id].position.x);
    force.y = iff*(all_fireflies[firefly_id].desired_position.y - all_fireflies[firefly_id].position.y);
    var a = force; // m = 1
    all_fireflies[firefly_id].velocity = all_fireflies[firefly_id].velocity.add(a.multiplyScalar(parameters.dt)).multiplyScalar(0.95);

    all_fireflies[firefly_id].position.x += all_fireflies[firefly_id].velocity.x * parameters.dt;
    all_fireflies[firefly_id].position.y += all_fireflies[firefly_id].velocity.y * parameters.dt;

    all_fireflies[firefly_id].alpha = (1+Math.sin(time/1000+firefly_id))*0.2+0.8;
  }
}

function animate_leaves(all_leaves, time){
  for(var leaf_id = 0; leaf_id < all_leaves.length; leaf_id++){
    all_leaves[leaf_id].position.y += 0.2;
    all_leaves[leaf_id].position.x += 0.2*Math.sin(time/1000 + leaf_id);
    all_leaves[leaf_id].rotation += 0.005*Math.sin(time/1000 + leaf_id);

    if(all_leaves[leaf_id].position.y > 800){
      all_leaves[leaf_id].position.y = -30;
    }
  }
}

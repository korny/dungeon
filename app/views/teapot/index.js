Jax.views.push('teapot/index', function() {
  this.glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
  this.world.render();
});

/**
 * class Teapot < Jax.Model
 * 
 **/
var Teapot = (function() {
  return Jax.Model.create({
    after_initialize: function() {
      this.mesh = new Jax.Mesh.Teapot({
        size: this.size,
        material: Material.find("teapot")
      });
    },
    
    update: function(timechange) {
      var rotation_axis = [0, 1, 0];
      this.camera.rotate(this.rotation_speed * timechange, rotation_axis);
    }
  });
})();

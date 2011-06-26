//= require "application_controller"

var TeapotController = (function() {
  return Jax.Controller.create("teapot", ApplicationController, {
    index: function() {
      this.world.addObject(Teapot.find("actual"));
      this.world.addLightSource(LightSource.find("sun"));
      this.world.addLightSource(LightSource.find("candle"));
      this.world.addLightSource(LightSource.find("searchlight"));
    },
    
    // Some special actions are fired whenever the corresponding input is
    // received from the user.
    mouse_clicked: function(event) {
      
    },
    
    helpers: function() {
      return [ UserInputHelper ];
    }
    
  });
})();

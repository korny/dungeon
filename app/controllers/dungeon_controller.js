//= require "application_controller"

var DungeonController = (function() {
  return Jax.Controller.create("dungeon", ApplicationController, {
    index: function() {
      var dungeon = Dungeon.find("first");
      this.world.addObject(dungeon);
      dungeon.addTorches(this.world);
      this.player.lantern = LightSource.find("lantern");
      this.world.addLightSource(this.player.lantern);
      this.player.camera.setPosition(dungeon.starting.position);
      this.player.camera.setDirection(dungeon.starting.direction);
    },
    
    helpers: function() { return [UserInputHelper]; },
    
    // Some special actions are fired whenever the corresponding input is
    // received from the user.
    mouse_clicked: function(event) {
      this.player.lantern.color.diffuse[1] = 0.1;
      this.player.lantern.color.diffuse[2] = 0.1;
    }
    
  });
})();

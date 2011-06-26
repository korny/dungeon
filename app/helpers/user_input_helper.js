var UserInputHelper = (function() {
  var movement = { forward: 0, backward: 0, left: 0, right: 0 };
  
  return Jax.Helper.create({
    mouse_dragged: function(event) {
      this.player.camera.rotate(0.01, [event.diffy, -event.diffx, 0]);
      this.player.camera.orient(this.player.camera.getViewVector(), [0,1,0]);
    },
    
    key_pressed: function(event) {
      switch(event.keyCode) {
        case KeyEvent.DOM_VK_W: movement.forward = 1; break;
        case KeyEvent.DOM_VK_S: movement.backward = -1; break;
        case KeyEvent.DOM_VK_A: movement.left = -1; break;
        case KeyEvent.DOM_VK_D: movement.right = 1; break;
      }
    },
    
    key_released: function(event) {
      switch(event.keyCode) {
        case KeyEvent.DOM_VK_W: movement.forward = 0; break;
        case KeyEvent.DOM_VK_S: movement.backward = 0; break;
        case KeyEvent.DOM_VK_A: movement.left = 0; break;
        case KeyEvent.DOM_VK_D: movement.right = 0; break;
      }
    },
    
    update: function(timechange) {
      var speed = 1.5 * timechange;
      
      this.player.camera.move((movement.forward + movement.backward) * speed);
      this.player.camera.strafe((movement.left + movement.right) * speed);
      
      if (this.player.lantern) {
        // reposition the lantern to the player's location
        this.player.lantern.camera.setPosition(this.player.camera.getPosition());
        
        // fade light
        if (this.player.lantern.color.diffuse[1] > 0.05) {
          this.player.lantern.color.diffuse[1] = this.player.lantern.color.diffuse[1] - timechange * 0.03;
        }
        if (this.player.lantern.color.diffuse[2] > 0.05) {
          this.player.lantern.color.diffuse[2] = this.player.lantern.color.diffuse[2] - timechange * 0.03;
        }
      }
    }
  });
})();

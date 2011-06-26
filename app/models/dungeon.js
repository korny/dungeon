/**
 * class Dungeon < Jax.Model
 * 
 **/
var Dungeon = (function() {
  function parse(str) {
    var vec = str.split(/,\s*/);
    return [parseFloat(vec[0]), 0.0, parseFloat(vec[1])];
  }
  
  return Jax.Model.create({
    after_initialize: function() {
      if (this.starting) {
        this.starting.position = parse(this.starting.position);
        this.starting.direction = parse(this.starting.direction);
      }
      if (this.map) {
        var map = this.map;
        this.mesh = new Jax.Mesh({
          init: function(vertices, colors, texcoords, normals, indices) {
            var ofs = 0.5; // offset from center of each grid node
            var row;
            
            function drawSideWall(x, z, side) {
              x += ofs*side;
              //             triangle 1                                  triangle 2
              vertices.push (x,-ofs,z-ofs,  x,-ofs,z+ofs,  x,ofs,z-ofs,  x,ofs,z-ofs,  x,-ofs,z+ofs,  x,ofs,z+ofs);
              colors.push   (1,1,1,1,       1,1,1,1,       1,1,1,1,      1,1,1,1,      1,1,1,1,       1,1,1,1);
              texcoords.push(0,0,           1,0,           0,1,          0,1,          1,0,           1,1);
              normals.push  (-side,0,0,     -side,0,0,     -side,0,0,    -side,0,0,    -side,0,0,     -side,0,0);
            }
            
            function drawFrontWall(x, z, side) {
              z -= ofs*side;
              //             triangle 1                                  triangle 2
              vertices.push (x-ofs,-ofs,z,  x+ofs,-ofs,z,  x-ofs,ofs,z,  x-ofs,ofs,z,  x+ofs,-ofs,z,  x+ofs,ofs,z);
              colors.push   (1,1,1,1,       1,1,1,1,       1,1,1,1,      1,1,1,1,      1,1,1,1,       1,1,1,1);
              texcoords.push(0,0,           1,0,           0,1,          0,1,          1,0,           1,1);
              normals.push  (0,0,side,      0,0,side,      0,0,side,     0,0,side,     0,0,side,      0,0,side);
            }
            
            for (var y = 0; y < map.length; y++) {
              row = map[y];
              for (var x = 0; x < row.length; x++) {
                var ch = row[x];
                if (ch == 'X') {
                }
                else {
                  /* walls */
                  if (x == 0            || row[x-1]    == 'X') drawSideWall(x, y, -1);   // left
                  if (y == 0            || map[y-1][x] == 'X') drawFrontWall(x, y, 1);   // front
                  if (x == row.length-1 || row[x+1]    == 'X') drawSideWall(x, y, 1);    // right
                  if (y == map.length-1 || map[y+1][x] == 'X') drawFrontWall(x, y, -1);  // back
                  
                  /* floor */
                  vertices.push(x-0.5,-0.5,y+0.5,  x-0.5,-0.5,y-0.5,  x+0.5,-0.5,y-0.5); // tri 1
                  vertices.push(x-0.5,-0.5,y+0.5,  x+0.5,-0.5,y-0.5,  x+0.5,-0.5,y+0.5); // tri 2
                  colors.push(1,1,1,1,  1,1,1,1,  1,1,1,1,  1,1,1,1,  1,1,1,1,  1,1,1,1);
                  texcoords.push(0,1,  0,0,  1,0,  0,1,  1,0,  1,1);
                  normals.push(0,1,0,  0,1,0,  0,1,0,  0,1,0,  0,1,0,  0,1,0);
                  
                  /* ceiling */
                  vertices.push(x-0.5, 0.5,y+0.5,  x-0.5, 0.5,y-0.5,  x+0.5, 0.5,y-0.5); // tri 1
                  vertices.push(x-0.5, 0.5,y+0.5,  x+0.5, 0.5,y-0.5,  x+0.5, 0.5,y+0.5); // tri 2
                  colors.push(1,1,1,1,  1,1,1,1,  1,1,1,1,  1,1,1,1,  1,1,1,1,  1,1,1,1);
                  texcoords.push(0,1,  0,0,  1,0,  0,1,  1,0,  1,1);
                  normals.push(0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0,  0,-1,0);
                }
              }
            }
          }
        });
        
        this.mesh.material = Material.find("dungeon");
      }
    },
    
    addTorches: function(world) {
      var map = this.map;
      if (map) {
        for (var z = 0; z < map.length; z++) {
          var row = map[z];
          for (var x = 0; x < row.length; x++) {
            // each apostrophe (') represents a light source
            if (row[x] == "'") {
              var torch = LightSource.find("torch");
              torch.camera.setPosition(x, 0, z);
              world.addLightSource(torch);
            }
          }
        }
      }
    }
  });
})();

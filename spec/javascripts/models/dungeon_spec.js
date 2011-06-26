describe("Dungeon", function() {
  var model;
  
  describe("'first' resource", function() {
    beforeEach(function() { model = Dungeon.find("first"); });
    
    it("should have a map, which should be a an array of strings", function() {
      var map = model.map;
      expect(map.length).toBeGreaterThan(0);
      for (var i = 0; i < map.length; i++)
        expect(typeof map[i]).toEqual('string');
    });
    
    it("should have a 3-element starting position", function() {
      expect(model.starting.position.length).toEqual(3);
    });
    
    it("should have a 3-element starting direction", function() {
      expect(model.starting.direction.length).toEqual(3);
    });
  });
  
  beforeEach(function() {
    model = new Dungeon();
  });
  
  it("does something", function() {
    expect(1).toEqual(1);
  });
});

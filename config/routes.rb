Dungeon.routes.map do
  map 'dungeon/index'
  map 'teapot/index'
  
  # If not given a root controller, no controller will be used when the page is initially loaded.
  # You'll have to load the controller manually, unless you map a root like so:
  root 'teapot'
end

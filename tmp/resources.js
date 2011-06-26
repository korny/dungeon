Teapot.addResources({"default":{"size":1.0,"rotation_speed":1.0},"actual":{"position":{"x":0,"y":0,"z":-5}}});
LightSource.addResources({"candle":{"position":{"x":-1.2,"y":-1.2,"z":-4.0},"attenuation":{"constant":0,"quadratic":0,"linear":1.0},"color":{"diffuse":{"blue":0.0,"green":1.0,"red":1.0,"alpha":1.0},"specular":{"blue":0.0,"green":0.2,"red":0.2,"alpha":1.0},"ambient":{"blue":0.0,"green":0.6,"red":0.6,"alpha":1.0}},"enabled":true,"shadowcaster":true,"type":"POINT_LIGHT"},"sun":{"attenuation":{"constant":0,"quadratic":0,"linear":1.0},"color":{"diffuse":{"blue":0.5,"green":0.5,"red":0.5,"alpha":1.0},"specular":{"blue":0.2,"green":0.2,"red":0.2,"alpha":1.0},"ambient":{"blue":0.2,"green":0.2,"red":0.2,"alpha":1}},"enabled":true,"shadowcaster":false,"type":"DIRECTIONAL_LIGHT","direction":{"x":-1,"y":-1,"z":1}},"searchlight":{"position":{"x":0,"y":0,"z":-3.25},"attenuation":{"constant":1.0,"quadratic":0,"linear":0},"angle":0.349,"color":{"diffuse":{"blue":1.0,"green":0,"red":0,"alpha":1.0},"specular":{"blue":0,"green":1,"red":0,"alpha":1.0},"ambient":{"blue":0.4,"green":0,"red":0,"alpha":1}},"spot_exponent":8,"enabled":true,"shadowcaster":true,"type":"SPOT_LIGHT","direction":{"x":0.05,"y":-0.025,"z":-1}},"lantern":{"position":{"x":-20,"y":0,"z":0},"attenuation":{"constant":0.0,"quadratic":0.0,"linear":0.2},"color":{"diffuse":{"blue":0.1,"green":0.1,"red":0.1,"alpha":1.0},"specular":{"blue":0.0,"green":0.0,"red":0.0,"alpha":1.0},"ambient":{"blue":0.0,"green":0.0,"red":0.0,"alpha":1}},"enabled":true,"shadowcaster":true,"type":"POINT_LIGHT"},"torch":{"position":{"x":-20,"y":0,"z":0},"attenuation":{"constant":0,"quadratic":0,"linear":1.0},"color":{"diffuse":{"blue":0.5,"green":0.5,"red":0.5,"alpha":1.0},"specular":{"blue":0.2,"green":0.2,"red":0.2,"alpha":1.0},"ambient":{"blue":0.2,"green":0.2,"red":0.2,"alpha":1}},"enabled":true,"shadowcaster":true,"type":"POINT_LIGHT"}});
Dungeon.addResources({"default":{},"first":{"starting":{"position":"1, 1","direction":"0, 1"},"map":["XXXXXXXXXXXXXXXXXXXX","X XXX   XX XXX     X","X     X XX     X   X","X XXXXX       XX   X","X XXX   XX XX  X   X","X     X XX     X   X","XXXXXXXXXXXXXXXXXXXX"]}});
Material.addResources({"teapot":{"layers":[{"type":"Lighting"}],"shininess":30,"diffuse":{"blue":1.0,"green":1.0,"red":1.0,"alpha":1.0},"specular":{"blue":1.0,"green":1.0,"red":1.0,"alpha":1.0},"ambient":{"blue":0.0,"green":0.0,"red":1.0,"alpha":1.0}},"dungeon":{"layers":[{"type":"Lighting"},{"colorspace_conversion":true,"wrap_t":"GL_REPEAT","generate_mipmap":true,"flip_y":false,"format":"GL_RGBA","data_type":"GL_UNSIGNED_BYTE","mag_filter":"GL_LINEAR","min_filter":"GL_LINEAR","scale_x":1.0,"type":"Texture","scale_y":1.0,"path":"/images/rock.png","premultiply_alpha":false,"wrap_s":"GL_REPEAT","mipmap_hint":"GL_DONT_CARE"},{"colorspace_conversion":true,"wrap_t":"GL_REPEAT","generate_mipmap":true,"flip_y":false,"format":"GL_RGBA","data_type":"GL_UNSIGNED_BYTE","mag_filter":"GL_LINEAR","min_filter":"GL_LINEAR","scale_x":1.0,"type":"NormalMap","scale_y":1.0,"path":"/images/rock_normal.png","premultiply_alpha":false,"wrap_s":"GL_REPEAT","mipmap_hint":"GL_DONT_CARE"}],"shininess":30,"diffuse":{"blue":1.0,"green":1.0,"red":1.0,"alpha":1.0},"specular":{"blue":1.0,"green":1.0,"red":1.0,"alpha":1.0},"ambient":{"blue":1.0,"green":1.0,"red":1.0,"alpha":1.0}}});
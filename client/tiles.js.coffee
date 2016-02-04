Game.tilesPerRow = 9
Game.tilesPerColumn = 62
Game.tileSize = 5

Game.tileDepthModifier = 3
Game.tileHeightModifier = 0.146
# Game.tileMargin = Game.tileSize / 10

Game.tileDistance = (Game.tilesPerColumn * Game.tileSize) / (2 * Math.PI)
Game.tileCount = Game.tilesPerRow * Game.tilesPerColumn

Game.waveDuration = 414

Template.game.helpers
  attributes: ->
    return {
      # position : "{{position}}"
      # rotation : "{{rotation}}"
    }
  tiles: ->
    tiles = []

    for row in [0..Game.tilesPerColumn-1]
      for column in [0..Game.tilesPerRow-1]
        tiles.push( {loc: [column,row], type: _.random(0, 1)} )

    return tiles

Template.tile.helpers
  attributes: ->
    # for (var i = 0; i < numChildren; i++) {
    #   var rad = i * (2 * Math.PI) / numChildren;
    #   positions.push([
    #     startPosition.x + data.radius * Math.cos(rad),
    #     startPosition.y,
    #     startPosition.z + data.radius * Math.sin(rad)
    #   ]);
    # }

    color = "white"
    zTranslate = 0
    metalness = 0
    roughness = 0.146

    switch @type
      when 0
        color = "#77C3F2"
      when 1
        color = "#4F7302"
        zTranslate = -Game.tileSize * Game.tileHeightModifier
        metalness = 0.236
        roughness = 1.0

    rad = @loc[1] * (2 * Math.PI) / Game.tilesPerColumn

    x = (@loc[0] * Game.tileSize) + (Game.tilesPerRow * Game.tileSize * -0.5) + (Game.tileSize * 0.5)
    y = Game.tileDistance * Math.cos(rad)
    z = Game.tileDistance * Math.sin(rad)

    angle = Game.rightAngle(z, y) * -1 + 90

    position = "#{x} #{y} #{z}"
    translate = "0 #{zTranslate} 0"
    rotation = "#{angle} 0 0"

    return {
      position  : position
      rotation  : rotation
      geometry  : "
        primitive : box;
        translate : #{translate};
        height    : #{Game.tileSize * Game.tileDepthModifier};
        width     : #{Game.tileSize};
        depth     : #{Game.tileSize};
      "
      material  : "
        metalness : #{metalness};
        color     : #{color};
        roughness : #{roughness}
      "
    }
  animationAttributes: ->
    return {
      attribute : "geometry.translate.z"
      to        : Game.tileSize
      begin     : "#{(@loc[1] + 1) * Game.waveDuration + (@loc[0] + 1) * Game.waveDuration/50}"
      dur       : "#{Game.waveDuration}"
      direction : "alternate"
      repeat    : "indefinite"
      easing    : "ease-sine"
    }

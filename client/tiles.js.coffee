Game.tilesPerRow = 9
Game.tilesPerColumn = 62
Game.tileSize = 5

Game.tileDepthModifier = 3
Game.tileHeightModifier = -0.146
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
    yTranslate = 0

    switch @type
      when 0
        color = "cyan"
      when 1
        color = "green"
        yTranslate = Game.tileSize * Game.tileHeightModifier

    rad = @loc[1] * (2 * Math.PI) / Game.tilesPerColumn

    x = (@loc[0] * Game.tileSize) + (Game.tilesPerRow * Game.tileSize * -0.5) + (Game.tileSize * 0.5)
    y = Game.tileDistance * Math.cos(rad)
    z = Game.tileDistance * Math.sin(rad)

    angle = Game.rightAngle(z, y) * -1

    position = "#{x} #{y} #{z}"
    translate = "0 0 #{yTranslate}"
    rotation = "#{angle} 0 0"

    return {
      position  : position
      translate : translate
      rotation  : rotation
      color     : color
      height    : Game.tileSize
      width     : Game.tileSize
      depth     : Game.tileSize * Game.tileDepthModifier
      shader    : "metalness: 0.0;"
    }
  animationAttributes: ->
    return {
      attribute : "geometry.translate"
      to        : "0 #{Game.tileSize / -10} 0"
      begin     : "#{(@loc[1] + 1) * Game.waveDuration + (@loc[0] + 1) * Game.waveDuration/50}"
      dur       : "#{Game.waveDuration}"
      direction : "alternate"
      repeat    : "indefinite"
      easing    : "ease-sine"
    }

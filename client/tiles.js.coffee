Game.tilesPerRow = 9
Game.tilesPerColumn = 100
Game.tileSize = 1000
Game.tileMargin = Game.tileSize / 10

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

    rad = @loc[1] * (2 * Math.PI) / Game.tilesPerColumn

    x = (@loc[0] * Game.tileSize) + (Game.tilesPerRow * Game.tileSize * -0.5)
    y = Game.tileDistance * Math.cos(rad)
    z = Game.tileDistance * Math.sin(rad)

    angle = Game.rightAngle(z, y) * -1

    position = "#{x} #{y} #{z}"
    translate = "#{Game.tileMargin * 0.5} #{Game.tileMargin * 0.5} #{Game.tileMargin * 0.5}"
    rotation = "#{angle} 0 0"

    return {
      position  : position
      translate : translate
      rotation  : rotation
      color     : "cyan"
      height    : Game.tileSize - Game.tileMargin
      width     : Game.tileSize - Game.tileMargin
      depth     : Game.tileSize - Game.tileMargin
      shader    : "metalness: 0.0;"
    }
  animationAttributes: ->
    return {
      attribute : "rotation"
      to        : "-4.73 0 0"
      begin     : "#{(@loc[1] + 1) * Game.waveDuration + (@loc[0] + 1) * Game.waveDuration/50}"
      dur       : "#{Game.waveDuration}"
      direction : "alternate"
      repeat    : "indefinite"
      easing    : "ease-sine"
      # fill      : "both"
    }

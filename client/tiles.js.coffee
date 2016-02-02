Game.tilesPerRow = 9
Game.tilesPerColumn = 6
Game.tileSize = 1000

Game.waveDuration = 414

Template.segment.helpers
  attributes: ->
    return {
      # position : "{{position}}"
      # rotation : "{{rotation}}"
    }
  tiles: ->
    return [
      {loc: [0,0], type: 0}
      {loc: [1,0], type: 0}
      {loc: [2,0], type: 0}
      {loc: [3,0], type: 0}
      {loc: [4,0], type: 0}
      {loc: [5,0], type: 0}
      {loc: [6,0], type: 0}
      {loc: [7,0], type: 0}
      {loc: [8,0], type: 0}
      {loc: [0,1], type: 0}
      {loc: [1,1], type: 0}
      {loc: [2,1], type: 0}
      {loc: [3,1], type: 0}
      {loc: [4,1], type: 0}
      {loc: [5,1], type: 0}
      {loc: [6,1], type: 0}
      {loc: [7,1], type: 0}
      {loc: [8,1], type: 0}
      {loc: [0,2], type: 0}
      {loc: [1,2], type: 0}
      {loc: [2,2], type: 0}
      {loc: [3,2], type: 0}
      {loc: [4,2], type: 0}
      {loc: [5,2], type: 0}
      {loc: [6,2], type: 0}
      {loc: [7,2], type: 0}
      {loc: [8,2], type: 0}
      {loc: [0,3], type: 0}
      {loc: [1,3], type: 0}
      {loc: [2,3], type: 0}
      {loc: [3,3], type: 0}
      {loc: [4,3], type: 0}
      {loc: [5,3], type: 0}
      {loc: [6,3], type: 0}
      {loc: [7,3], type: 0}
      {loc: [8,3], type: 0}
      {loc: [0,4], type: 0}
      {loc: [1,4], type: 0}
      {loc: [2,4], type: 0}
      {loc: [3,4], type: 0}
      {loc: [4,4], type: 0}
      {loc: [5,4], type: 0}
      {loc: [6,4], type: 0}
      {loc: [7,4], type: 0}
      {loc: [8,4], type: 0}
      {loc: [0,5], type: 0}
      {loc: [1,5], type: 0}
      {loc: [2,5], type: 0}
      {loc: [3,5], type: 0}
      {loc: [4,5], type: 0}
      {loc: [5,5], type: 0}
      {loc: [6,5], type: 0}
      {loc: [7,5], type: 0}
      {loc: [8,5], type: 0}
    ]

Template.tile.helpers
  attributes: ->
    return {
      position  : "#{@loc[0] * Game.tileSize + Game.tileSize*0.5} 0 #{@loc[1] * Game.tileSize + Game.tileSize*0.5}"
      color     : "cyan"
      height    : Game.tileSize
      width     : Game.tileSize
      depth     : Game.tileSize
      shader    : "metalness: 0.7;"
      translate : "#{Game.tilesPerRow * Game.tileSize * -0.5} 0 #{Game.tilesPerColumn * Game.tileSize * -0.5}"
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

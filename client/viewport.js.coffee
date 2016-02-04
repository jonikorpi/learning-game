Game.skyDistance = Game.tileDistance*1.5
Game.clippingDistance = Game.tileDistance*2

Template.viewport.helpers
  cameraAttributes: ->
    return {
      camera: "
        far: #{Game.clippingDistance};
      "
      "look-controls": "true"
      "wasd-controls": "true"
    }
    Game.tileDistance

Template.sky.helpers
  skyAttributes: ->
    return {
      radius: Game.skyDistance
      src: "/starfield.jpg"
    }

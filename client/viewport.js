Game.skyDistance = Game.tileDistance * 1.5;
Game.clippingDistance = Game.tileDistance * 2;

Template.viewport.helpers({
  cameraAttributes: function() {
    return {
      camera: "far: " + Game.clippingDistance + ";",
      "look-controls": "true",
      "wasd-controls": "true"
    };
  }
});

Template.sky.helpers({
  skyAttributes: function() {
    return {
      radius: Game.skyDistance,
      src: "/starfield.jpg"
    };
  }
});

Game.tilesPerRow = 9;
Game.tilesPerColumn = 62;
Game.tileSize = 1000;

Game.tileDepthModifier = 3;
Game.tileHeightModifier = 0.146;

Game.tileDistance = (Game.tilesPerColumn * Game.tileSize) / (2 * Math.PI);
Game.tileCount = Game.tilesPerRow * Game.tilesPerColumn;

Game.waveDuration = 414;

Template.game.helpers({
  tiles: function() {
    let column = 0;
    let row = 0;
    var tiles = [];

    while (row < Game.tilesPerColumn) {
      while (column < Game.tilesPerRow) {
        tiles.push(
          {
            loc: [column, row],
            type: _.random(0, 1)
          }
        );

        column++;
      }

      column = 0;
      row++;
    }

    return tiles;
  }
});

Template.tile.helpers({
  attributes: function() {
    let color = "white";
    let zTranslate = 0;
    let metalness = 0;
    let roughness = 0.146;

    switch (this.type) {
      case 0:
        color = "#77C3F2";
        break;
      case 1:
        color = "#4F7302";
        zTranslate = -Game.tileSize * Game.tileHeightModifier;
        metalness = 0.236;
        roughness = 1.0;
        break;
    }

    const rad = this.loc[1] * (2 * Math.PI) / Game.tilesPerColumn;

    const x = (this.loc[0] * Game.tileSize) + (Game.tilesPerRow * Game.tileSize * -0.5) + (Game.tileSize * 0.5);
    const y = Game.tileDistance * Math.cos(rad);
    const z = Game.tileDistance * Math.sin(rad);

    const angle = Game.rightAngle(z, y) * -1 + 90;

    const position = `${x} ${y} ${z}`;
    const translate = `0 ${zTranslate} 0`;
    const rotation = `${angle} 0 0`;

    return {
      position: position,
      rotation: rotation,
      geometry: `
        primitive : box;
        translate : ${translate};
        height    : ${Game.tileSize * Game.tileDepthModifier};
        width     : ${Game.tileSize};
        depth     : ${Game.tileSize};
      `,
      material: `
        metalness : ${metalness};
        color     : ${color};
        roughness : ${roughness};
      `,
    };
  },

  animationAttributes: function() {
    return {
      attribute: "geometry.translate.z",
      to: Game.tileSize,
      begin: ((this.loc[1] + 1) * Game.waveDuration + (this.loc[0] + 1) * Game.waveDuration / 50),
      dur: Game.waveDuration,
      direction: "alternate",
      repeat: "indefinite",
      easing: "ease-sine",
    };
  }
});

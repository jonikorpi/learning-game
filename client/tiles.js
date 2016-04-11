// Game.tileSize = 1;
//
// Game.rotationOffset = (Math.PI * 0.5);
// Game.tileHeightModifier = 3;
// Game.segmentHeightModifier = 1.236;
//
// Game.tileDistance = (Game.tilesPerColumn * Game.tileSize) / (2 * Math.PI);
// Game.tileCount = Game.tilesPerRow * Game.tilesPerColumn;
//
// Game.waveDuration = 414;
//
// Template.game.helpers({
//   tiles: function() {
//     let column = 0;
//     let row = 0;
//     let tiles = [];
//
//     while (row < Game.tilesPerColumn) {
//       while (column < Game.tilesPerRow) {
//         tiles.push(
//           {
//             loc: [column, row],
//             type: _.random(0, 3)
//           }
//         );
//
//         column++;
//       }
//
//       column = 0;
//       row++;
//     }
//
//     return tiles;
//   },
//
//   segments: function() {
//     let segment = 0
//     let segments = [];
//
//     while (segment < Game.segments) {
//       segments.push(
//         {
//           loc: segment
//         }
//       );
//
//       segment++;
//     }
//
//     return segments;
//   }
// });
//
// Template.tile.helpers({
//   attributes: function() {
//     let color = "white";
//     let metalness = 0;
//     let roughness = 0.146;
//     let height = Game.tileSize * Game.tileHeightModifier;
//     let yTranslate = Game.tileSize * Game.tileHeightModifier * 0.5;
//     let depth = Game.tileSize;
//
//     switch (this.type) {
//       case 0:
//       case 3:
//         color = "#77C3F2";
//         depth = depth * 1.236;
//         break;
//       case 1:
//         color = "#4F7302";
//         metalness = 0.236;
//         roughness = 1.0;
//         yTranslate = yTranslate * 0.764
//         break;
//       case 2:
//         color = "rgb(60, 37, 23)";
//         metalness = 0.0;
//         roughness = 1.0;
//         yTranslate = yTranslate * 0.764
//         break;
//     }
//
//     const rad = this.loc[1] * (2 * Math.PI) / Game.tilesPerColumn - Game.rotationOffset;
//
//     const x = (this.loc[0] * Game.tileSize) + (Game.tilesPerRow * Game.tileSize * -0.5) + (Game.tileSize * 0.5);
//     const y = Game.tileDistance * Math.cos(rad);
//     const z = Game.tileDistance * Math.sin(rad);
//
//     const angle = Game.rightAngle(z, y) * -1 + 90;
//
//     const position = `${x} ${y} ${z}`;
//     const translate = `0 ${yTranslate} 0`;
//     const rotation = `${angle} 0 0`;
//
//     return {
//       position: position,
//       rotation: rotation,
//       geometry: `
//         primitive : box;
//         translate : ${translate};
//         height    : ${height};
//         width     : ${Game.tileSize};
//         depth     : ${depth};
//       `,
//       material: `
//         metalness : ${metalness};
//         color     : ${color};
//         roughness : ${roughness};
//       `,
//     };
//   },
//
//   animationAttributes: function() {
//     return {
//       attribute: "geometry.translate.z",
//       to: Game.tileSize,
//       begin: ((this.loc[1] + 1) * Game.waveDuration + (this.loc[0] + 1) * Game.waveDuration / 50),
//       dur: Game.waveDuration,
//       direction: "alternate",
//       repeat: "indefinite",
//       easing: "ease-sine",
//     };
//   }
// });
//
// Template.segment.helpers({
//   attributes: function() {
//     let color = "white";
//     let metalness = 0.236;
//     let roughness = 0.618;
//     let yTranslate = Game.tileSize * Game.tileHeightModifier * Game.segmentHeightModifier * 0.5 * 0.618;
//
//     const rad = this.loc * (2 * Math.PI) / Game.segments - Game.rotationOffset;
//
//     const x = 0;
//     const y = Game.tileDistance * Math.cos(rad);
//     const z = Game.tileDistance * Math.sin(rad);
//
//     const angle = Game.rightAngle(z, y) * -1 + 90;
//
//     const position = `${x} ${y} ${z}`;
//     const translate = `0 ${yTranslate} ${Game.tileSize * 0.5}`;
//     const rotation = `${angle} 0 0`;
//
//     if (this.loc == 0)
//       color = "red"
//
//     return {
//       position: position,
//       rotation: rotation,
//       geometry: `
//         primitive : box;
//         translate : ${translate};
//         height    : ${Game.tileSize * Game.tileHeightModifier * Game.segmentHeightModifier};
//         width     : ${Game.tileSize * Game.tilesPerRow};
//         depth     : ${Game.tileSize / 15};
//       `,
//       material: `
//         metalness : ${metalness};
//         color     : ${color};
//         roughness : ${roughness};
//       `,
//     };
//   }
// });

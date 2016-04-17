// Variables.tileSize = 1;
//
// Variables.rotationOffset = (Math.PI * 0.5);
// Variables.tileHeightModifier = 3;
// Variables.segmentHeightModifier = 1.236;
//
// Variables.tileDistance = (Variables.tilesPerColumn * Variables.tileSize) / (2 * Math.PI);
// Variables.tileCount = Variables.tilesPerRow * Variables.tilesPerColumn;
//
// Variables.waveDuration = 414;
//
// Template.Variables.helpers({
//   tiles: function() {
//     let column = 0;
//     let row = 0;
//     let tiles = [];
//
//     while (row < Variables.tilesPerColumn) {
//       while (column < Variables.tilesPerRow) {
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
//     while (segment < Variables.segments) {
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
//     let height = Variables.tileSize * Variables.tileHeightModifier;
//     let yTranslate = Variables.tileSize * Variables.tileHeightModifier * 0.5;
//     let depth = Variables.tileSize;
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
//     const rad = this.loc[1] * (2 * Math.PI) / Variables.tilesPerColumn - Variables.rotationOffset;
//
//     const x = (this.loc[0] * Variables.tileSize) + (Variables.tilesPerRow * Variables.tileSize * -0.5) + (Variables.tileSize * 0.5);
//     const y = Variables.tileDistance * Math.cos(rad);
//     const z = Variables.tileDistance * Math.sin(rad);
//
//     const angle = Variables.rightAngle(z, y) * -1 + 90;
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
//         width     : ${Variables.tileSize};
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
//       to: Variables.tileSize,
//       begin: ((this.loc[1] + 1) * Variables.waveDuration + (this.loc[0] + 1) * Variables.waveDuration / 50),
//       dur: Variables.waveDuration,
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
//     let yTranslate = Variables.tileSize * Variables.tileHeightModifier * Variables.segmentHeightModifier * 0.5 * 0.618;
//
//     const rad = this.loc * (2 * Math.PI) / Variables.segments - Variables.rotationOffset;
//
//     const x = 0;
//     const y = Variables.tileDistance * Math.cos(rad);
//     const z = Variables.tileDistance * Math.sin(rad);
//
//     const angle = Variables.rightAngle(z, y) * -1 + 90;
//
//     const position = `${x} ${y} ${z}`;
//     const translate = `0 ${yTranslate} ${Variables.tileSize * 0.5}`;
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
//         height    : ${Variables.tileSize * Variables.tileHeightModifier * Variables.segmentHeightModifier};
//         width     : ${Variables.tileSize * Variables.tilesPerRow};
//         depth     : ${Variables.tileSize / 15};
//       `,
//       material: `
//         metalness : ${metalness};
//         color     : ${color};
//         roughness : ${roughness};
//       `,
//     };
//   }
// });

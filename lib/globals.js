//
// Variables

Game = {};

Game.segments = 13;
Game.tilesPerRow = 8;
Game.rowsPerSegment = 5;
Game.tilesPerColumn = Game.segments * Game.rowsPerSegment;

// if Meteor.isClient

//
// Functions

Game.sinToDegrees = function(sin) {
  return Math.asin(sin) * 180 / Math.PI;
};

Game.hypotenuse = function(a, b) {
  return Math.sqrt(a * a + b * b);
};

Game.rightAngle = function(a, b) {
  const c = Game.hypotenuse(a, b);
  const sin = b / c;
  let angle = Game.sinToDegrees(sin);

  if (a < 0 && b < 0) {
    angle = 180 - angle;
  } else if (a < 0 && b >= 0) {
    angle = 180 - angle;
  }

  return angle;
};

Game.romanize = function(num) {
  var digits, i, key, roman;
  if (!+num) {
    return false;
  }
  digits = String(+num).split('');
  key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  roman = '';
  i = 3;
  while (i--) {
    roman = (key[+digits.pop() + i * 10] || '') + roman;
  }
  return Array(+digits.join('') + 1).join('M') + roman;
};

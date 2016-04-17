//
// Variables

Variables = {};
export default Variables;

Variables.worldRadius = 62;
Variables.segmentsWidth = 128;
Variables.segmentsHeight = Variables.segmentsWidth;

Variables.cameraAltitude = 10;
Variables.cameraPositionAngle = (Math.atan(4/3) * 180 / Math.PI); // https://en.wikipedia.org/wiki/Pythagorean_triple#Examples
Variables.cameraPositionAngleOffset = 0;
Variables.clipRange = 10 * Variables.worldRadius;

Variables.orbitSpeed = 120 * 10000;
Variables.orbitAltitude = 2;

//
// Functions

Variables.sinToDegrees = function(sin) {
  return Math.asin(sin) * 180 / Math.PI;
};

Variables.hypotenuse = function(a, b) {
  return Math.sqrt(a * a + b * b);
};

Variables.rightAngle = function(a, b) {
  const c = Variables.hypotenuse(a, b);
  const sin = b / c;
  let angle = Variables.sinToDegrees(sin);

  if (a < 0 && b < 0) {
    angle = 180 - angle;
  } else if (a < 0 && b >= 0) {
    angle = 180 - angle;
  }

  return angle;
};

Variables.romanize = function(num) {
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

#
# Variables

@Game = {}

# if Meteor.isClient

#
# Functions

Game.sinToDegrees = (sin) ->
  return Math.asin(sin) * 180/Math.PI

Game.hypotenuse = (a, b) ->
  return Math.sqrt(a*a + b*b)

Game.rightAngle = (a, b) ->
  c = Game.hypotenuse(a, b)
  sin = b/c
  return Game.sinToDegrees(sin)

Game.romanize = (num) ->
  if ! +num
    return false
  digits = String(+num).split('')
  key = [
    ''
    'C'
    'CC'
    'CCC'
    'CD'
    'D'
    'DC'
    'DCC'
    'DCCC'
    'CM'
    ''
    'X'
    'XX'
    'XXX'
    'XL'
    'L'
    'LX'
    'LXX'
    'LXXX'
    'XC'
    ''
    'I'
    'II'
    'III'
    'IV'
    'V'
    'VI'
    'VII'
    'VIII'
    'IX'
  ]
  roman = ''
  i = 3
  while i--
    roman = (key[+digits.pop() + i * 10] or '') + roman
  Array(+digits.join('') + 1).join('M') + roman

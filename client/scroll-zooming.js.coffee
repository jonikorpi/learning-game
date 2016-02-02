browser = $(window)
scroller = $("#scroller")
cameraContainer = $("#camera-container")

cameraRotationBase = -67.5
cameraRotationFlex = (-90 - cameraRotationBase)

cameraPositionBaseY = 60
cameraPositionFlexY = 1.618 * cameraPositionBaseY

cameraPositionBaseZ = (90 + cameraRotationBase)
cameraPositionFlexZ = -1 * cameraPositionBaseZ

scrolledRatio = 0

Game.moveCamera = ->
  # TODO: improve performance
  scrollTop = browser.scrollTop()
  scrollerHeight = scroller.height()
  browserHeight = browser.height()

  scrolledRatio = scrollTop / (browserHeight - scrollerHeight)
  Session.set "cameraRotation",  scrolledRatio * cameraRotationFlex  + cameraRotationBase
  Session.set "cameraPositionY", scrolledRatio * cameraPositionFlexY + cameraPositionBaseY
  Session.set "cameraPositionZ", scrolledRatio * cameraPositionFlexZ + cameraPositionBaseZ

  console.log scrollTop

  if scrollTop == 0
    browser.scrollTop( scrollerHeight + browserHeight - 1 )
  else if scrollTop == scrollerHeight + browserHeight
    browser.scrollTop( 1 )

Template.game.onCreated ->
  Game.moveCamera()

  browser.on "scroll", (event) ->
    requestAnimationFrame(Game.moveCamera)

Template.game.helpers
  cameraRotation: ->
    return Session.get "cameraRotation"
  cameraPositionY: ->
    return Session.get "cameraPositionY"
  cameraPositionZ: ->
    return Session.get "cameraPositionZ"

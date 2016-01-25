browser = $(window)
scroller = $("#scroller")
cameraContainer = $("#camera-container")

cameraRotationBase = -90
cameraRotationFlex = 0 * cameraRotationBase

cameraPositionBaseY = 50
cameraPositionFlexY = 2 * cameraPositionBaseY

cameraPositionBaseZ = 5
cameraPositionFlexZ = -1 * cameraPositionBaseZ

scrolledRatio = 0

Game.moveCamera = ->
  # TODO: improve performance
  scrolledRatio = browser.scrollTop() / (browser.height() - scroller.height())
  Session.set "cameraRotation",  scrolledRatio * cameraRotationFlex  + cameraRotationBase
  Session.set "cameraPositionY", scrolledRatio * cameraPositionFlexY + cameraPositionBaseY
  Session.set "cameraPositionZ", scrolledRatio * cameraPositionFlexZ + cameraPositionBaseZ

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

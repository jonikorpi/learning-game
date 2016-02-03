browser = $(window)

# positionMultiplier = -35000 #
# defaultPosition = 0
# minPosition = 0
# maxPosition = 120

# Game.setPosition = ->
#   newPosition = positionMultiplier / browser.width()
#
#   if newPosition < minPosition
#     newPosition = minPosition
#   else if newPosition > maxPosition
#     newPosition = maxPosition
#
#   Session.set "cameraPosition", newPosition

Game.moveCamera = ->
  # TODO: improve performance

  scroller = $("#scroller")
  scrollTop = browser.scrollTop()
  scrollerHeight = scroller.height()
  browserHeight = browser.height()

  scrolledRatio = scrollTop / (scrollerHeight - browserHeight)
  Session.set "cameraRotation", scrolledRatio * -360

  if scrollTop == 0
    browser.scrollTop( scrollerHeight - browserHeight - 1 )
  else if scrollTop == scrollerHeight - browserHeight
    browser.scrollTop( 1 )

Template.viewport.onCreated ->
  Session.setDefault "cameraRotation", 0
  # Session.setDefault "cameraPosition", defaultPosition
  # Game.setPosition()

  browser.on "scroll", (event) ->
    requestAnimationFrame(Game.moveCamera)

  # browser.on "resize", (event) ->
  #   requestAnimationFrame(Game.setPosition)

Template.viewport.helpers
  cameraRotation: ->
    return Session.get "cameraRotation"
  # cameraPosition: ->
  #   return Session.get "cameraPosition"

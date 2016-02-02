browser = $(window)

fovMultiplier = 35000 # makes 9000m wide objects fit within 375px
minFov = 70
maxFov = 120

Game.setFov = ->
  newFov = fovMultiplier / browser.width()

  if newFov < minFov
    newFov = minFov
  else if newFov > maxFov
    newFov = maxFov

  Session.set "cameraFov", newFov

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
  Session.setDefault "cameraFov", 80
  Game.setFov()

  browser.on "scroll", (event) ->
    requestAnimationFrame(Game.moveCamera)

  browser.on "resize", (event) ->
    requestAnimationFrame(Game.setFov)

Template.viewport.helpers
  cameraRotation: ->
    return Session.get "cameraRotation"
  cameraFov: ->
    return Session.get "cameraFov"

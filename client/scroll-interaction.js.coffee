browser = $(window)

Game.moveCamera = ->
  # TODO: improve performance

  scroller = $("#scroller")
  scrollTop = browser.scrollTop()
  scrollerHeight = scroller.height()
  browserHeight = browser.height()

  scrolledRatio = scrollTop / (scrollerHeight - browserHeight)
  Session.set "cameraRotation", scrolledRatio * -360
  Session.set "cameraFov", 80

  if scrollTop == 0
    browser.scrollTop( scrollerHeight - browserHeight - 1 )
  else if scrollTop == scrollerHeight - browserHeight
    browser.scrollTop( 1 )

Template.viewport.onCreated ->
  Session.setDefault "cameraRotation", 0
  Session.setDefault "cameraFov", 80

  browser.on "scroll", (event) ->
    requestAnimationFrame(Game.moveCamera)

  browser.on "resize", (event) ->
    Session.set "cameraFov", 80

Template.viewport.helpers
  cameraRotation: ->
    return Session.get "cameraRotation"
  cameraFov: ->
    return Session.get "cameraFov"

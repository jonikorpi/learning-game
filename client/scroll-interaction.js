let browser = $(window);

// positionMultiplier = -35000;
// const defaultPosition = 0;
// const minPosition = 0;
// const maxPosition = 120;
//
// Game.setPosition = function() {
//   var newPosition;
//   newPosition = positionMultiplier / browser.width();
//   if (newPosition < minPosition) {
//     newPosition = minPosition;
//   } else if (newPosition > maxPosition) {
//     newPosition = maxPosition;
//   }
//   return Session.set("cameraPosition", newPosition);
// };

Game.moveCamera = function() {
  // TODO: improve(performance)
  let scroller = $("#scroller");
  let scrollTop = browser.scrollTop();
  let scrollerHeight = scroller.height();
  let browserHeight = browser.height();

  let scrolledRatio = scrollTop / (scrollerHeight - browserHeight);

  Session.set("cameraRotation", scrolledRatio * -360);

  if (scrollTop === 0) {
    browser.scrollTop(scrollerHeight - browserHeight - 1);
  } else if (scrollTop === scrollerHeight - browserHeight) {
    browser.scrollTop(1);
  }
};

Template.viewport.onCreated(function() {
  Session.setDefault("cameraRotation", 0);
  // Session.setDefault("cameraPosition", defaultPosition);
  // Game.setPosition();

  browser.on("scroll", function(event) {
    requestAnimationFrame(Game.moveCamera);
  });

  // browser.on("resize", function(event) {
  //   requestAnimationFrame(Game.setPosition);
  // });
});

Template.viewport.helpers({
  cameraRotation: function() {
    return Session.get("cameraRotation");
  },

  // cameraPosition: function() {
  //   return Session.get("cameraPosition");
  // }
});

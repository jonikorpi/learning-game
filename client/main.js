import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import World from "../imports/client/World.jsx";

Meteor.startup(() => {
  render( <World/>, document.getElementById("aframe") );
});

import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import Locator from "./Locator";

export default class Cloud extends Component {

  render() {
    return (
      <Locator
        loc={[
          _.random(-10, 10),
          _.random(-10, 10),
          Variables.orbitAltitude,
        ]}
      >
        <Entity
          class="cloud"
          geometry={{
            primitive: "box",
            depth: _.random(2, 5),
            height: _.random(0.1, 0.2),
            width: _.random(2, 5),
          }}
          material={{
            color: "#ffffff",
            transparent: true,
            opacity: 0.5,
            shader: "flat",
          }}
        >
        </Entity>
      </Locator>
    );
  }

}

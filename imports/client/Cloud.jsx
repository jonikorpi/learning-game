import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";
import _ from "lodash";

import Variables from "../Variables";

import Locator from "./Locator";

export default class Cloud extends Component {

  render() {
    return (
      <Locator
        loc={[
          _.random(-3, -15),
          _.random(-15, 15),
          Variables.orbitAltitude,
        ]}
      >
        <Entity
          class="cloud"
          geometry={{
            primitive: "box",
            depth: _.random(2, 3),
            height: _.random(0.1, 0.2),
            width: _.random(4, 6),
          }}
          material={{
            color: "#ffffff",
            // transparent: true,
            // opacity: 0.5,
            shader: "flat",
          }}
        >
        </Entity>
      </Locator>
    );
  }

}

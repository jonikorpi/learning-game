import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";
import _ from "lodash";

import Variables from "../Variables";

import Locator from "./Locator";

export default class Cloud extends Component {

  componentDidMount() {
    this.x = _.random(-3, -15);
    this.y = _.random(-15, 15);
    this.depth = _.random(2, 3);
    this.height = _.random(0.1, 0.2);
    this.width = _.random(4, 6);
  }

  render() {
    return (
      <Locator
        loc={[
          this.x,
          this.y,
          Variables.orbitAltitude,
        ]}
      >
        <Entity
          class="cloud"
          geometry={{
            primitive: "box",
            depth: this.depth,
            height: this.height,
            width: this.width,
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

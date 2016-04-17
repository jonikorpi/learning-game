import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import Locator from "./Locator";
import Camera from "./Camera";

export default class Player extends Component {

  render() {
    return (
      <Locator>

        <Entity
          id="player"
          class="player"
          geometry={{
            primitive: "box",
            depth: 0.236,
            height: 1.618,
            width: 0.414,
          }}
          material={{
            color: "#000000",
          }}
        >

          <Camera
            id="camera"
            far={Variables.clipRange * 2}
          />

        </Entity>

      </Locator>
    );
  }

}

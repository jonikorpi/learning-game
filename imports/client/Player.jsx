import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

import Locator from "./Locator";

export default class Player extends Component {

  render() {
    return (
      <Locator
        altitude={0}
        rotation={[
          Game.cameraPositionAngle - Game.cameraPositionAngleOffset,
          0,
          0,
        ]}
      >
        <Entity
          id="player"
          class="player"
          geometry={{
            primitive: "box",
            depth: 0.236,
            height: 1.764,
            width: 0.414,
          }}
          material={{
            color: "#000000",
          }}
        >
        </Entity>
      </Locator>
    );
  }

}

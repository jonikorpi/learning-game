import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

import Locator from "./Locator";

export default class Orbit extends Component {
  render() {
    return (
      <Entity
        id="surface"
      >

        <Locator
          altitude={0}
          rotation={[
            Game.cameraPositionAngle,
            0,
            0,
          ]}
        >
          <Entity
            class="test"
            geometry={{
              primitive: "box",
              depth: 1,
              height: 0.01,
              width: 1,
            }}
            material={{
              color: "#00ff00",
            }}
          />
        </Locator>

      </Entity>
    );
  }
}

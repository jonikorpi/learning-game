import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

import Locator from "./Locator";

export default class Camera extends Component {

  render() {
    return (
      <Locator
        altitude={Game.cameraAltitude}
        rotation={[
          Game.cameraPositionAngle,
          0,
          0,
        ]}
      >
        <Entity
          rotation={[
            -Game.cameraPositionAngle,
            0,
            0,
          ]}
        >
          <Entity
            camera={{
              far: this.props.far || 10000,
              near: this.props.near || 0.001,
            }}
            look-controls
            wasd-controls
          />
        </Entity>

      </Locator>
    );
  }

}

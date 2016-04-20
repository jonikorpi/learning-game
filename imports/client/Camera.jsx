import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";
import "aframe-mouse-cursor-component";

import Variables from "../Variables";

import Locator from "./Locator";
import Cursor from "./Cursor";

export default class Camera extends Component {

  calculateCameraAngle() {
    return 90 - Variables.cameraPositionAngle;
  }

  render() {
    return (
      <Entity
        rotation={[
          this.calculateCameraAngle(),
          0,
          0,
        ]}
      >

        <Entity
          position={[
            0,
            Variables.cameraAltitude,
            0,
          ]}
          rotation={[
            -1 * this.calculateCameraAngle() - (90 - this.calculateCameraAngle()),
            0,
            0,
          ]}
        >

          <Entity
            camera={{
              far: this.props.far || 10000,
              near: this.props.near || 0.001,
            }}
            look-controls={{ enabled: this.props.inVR || this.props.devMode }}
            wasd-controls={{ enabled: this.props.devMode }}
            mouse-cursor={ !this.props.inVR }
          >

            {/*<Cursor/>*/}

          </Entity>

        </Entity>

      </Entity>
    );
  }

}

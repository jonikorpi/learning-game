import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

export default class Locator extends Component {

  getRotation() {
    const loc = this.props.loc;
    const facingTowards = this.props.facingTowards || 0;

    if (loc) {
      return [
        (loc[0] * 180) / (Math.PI * Game.worldRadius),
        facingTowards,
        (loc[1] * 180) / (Math.PI * Game.worldRadius),
      ];
    }
    else {
      return this.props.rotation || [0,0,0];
    }
  }

  getAltitude() {
    let altitude = 0;
    const loc = this.props.loc;

    if (loc) {
      altitude = loc[2] || 0;
    }
    else {
      altitude = this.props.altitude || 0;
    }

    return Game.worldRadius + altitude;
  }

  render() {
    return (
      <Entity
        class="rotator"
        rotation={this.getRotation()}
      >

        <Entity
          class="locator"
          position={[
            0,
            this.getAltitude(),
            0,
          ]}
        >

          {this.props.children}

        </Entity>

      </Entity>
    );
  }

}

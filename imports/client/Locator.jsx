import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

export default class Locator extends Component {

  render() {
    return (
      <Entity
        class="rotator"
        rotation={this.props.rotation}
      >

        <Entity
          class="locator"
          position={[
            0,
            Game.worldRadius + this.props.altitude,
            0,
          ]}
        >

          {this.props.children}

        </Entity>

      </Entity>
    );
  }

}

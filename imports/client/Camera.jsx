import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

export default class Camera extends Component {
  render() {
    return (
      <Entity
        position={ this.props.position || [0,0,0] }
      >

        <Entity
          camera={{
            far: this.props.far || 10000,
            near: this.props.near || 0.001,
          }}
          look-controls
        />

      </Entity>
    );
  }
}

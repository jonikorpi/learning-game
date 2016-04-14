import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

export default class Sky extends Component {
  render() {
    return (
      <Entity
        id="sky"
        geometry={{
          primitive: "sphere",
          radius: Game.clipRange,
        }}
        material={{
          color: this.props.color || "#fff",
          side: "double",
          shader: "flat",
        }}
      />
    );
  }
}

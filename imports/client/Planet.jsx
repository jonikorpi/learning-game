import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

export default class Planet extends Component {

  render() {
    return (
      <Entity
        geometry={{
          primitive: "sphere",
          radius: Game.worldRadius,
          segmentsWidth: 64,
          segmentsHeight: 128,
        }}
        material={{
          color: "rgb(161,193,110)",
          roughness: 0.8,
        }}
        position="0 0 0"
      >

      {/*<Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>*/}

    </Entity>
    );
  }

}

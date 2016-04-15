import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

import Locator from "./Locator";

export default class Planet extends Component {

  getRotation() {
    playerLoc = this.props.playerLoc;
    return [
      (playerLoc[0] * 180) / (Math.PI * Game.worldRadius) + Game.cameraPositionAngle - Game.cameraPositionAngleOffset,
      this.props.spin || 0,
      (playerLoc[1] * 180) / (Math.PI * Game.worldRadius),
    ];
  }

  render() {
    return (
      <Entity
        id="planet"
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
        rotation={this.getRotation()}
      >

        <Locator>
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

        <Locator
          loc={[1,1,0]}
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
              color: "#ffff00",
            }}
          />
        </Locator>

      </Entity>
    );
  }

}

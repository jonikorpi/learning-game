import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

import Locator from "./Locator";

export default class Planet extends Component {

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
        rotation={[
          Game.cameraPositionAngle,
          0,
          0,
        ]}
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

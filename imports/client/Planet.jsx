import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import Locator from "./Locator";

export default class Planet extends Component {

  getRotation() {
    playerLoc = this.props.playerLoc;
    return [
      (playerLoc[0] * 180) / (Math.PI * Variables.worldRadius),
      this.props.spin || 0,
      (playerLoc[1] * 180) / (Math.PI * Variables.worldRadius),
    ];
  }

  render() {
    return (
      <Entity
        id="planet"
        geometry={{
          primitive: "sphere",
          radius: Variables.worldRadius,
          segmentsWidth: Variables.segmentsWidth,
          segmentsHeight: Variables.segmentsHeight,
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

        <Entity
          geometry={{
            primitive: "cylinder",
            openEnded: true,
            thetaLength: 360,
            radius: Variables.worldRadius + 0.05,
            segmentsRadial: Variables.segmentsHeight,
            height: 1,
          }}
          material={{
            color: "rgb(213,211,228)",
            roughness: 0.854,
            metalness: 0.382,
          }}
          rotation={[
            95,
            -95,
            0
          ]}
        />

        <Entity
          geometry={{
            primitive: "cylinder",
            openEnded: true,
            thetaLength: 360,
            radius: Variables.worldRadius + 0.05,
            segmentsRadial: Variables.segmentsWidth,
            height: 1,
          }}
          material={{
            color: "rgb(213,211,228)",
            roughness: 0.854,
            metalness: 0.382,
          }}
          rotation={[
            85,
            0,
            0
          ]}
        />

        {/*<Animation
          attribute="rotation"
          dur={1000}
          repeat="indefinite"
          direction="alternate"
          easing="ease"
          to={[
            this.getRotation()[0] + _.random(-3, 3),
            this.getRotation()[1],
            this.getRotation()[2] + _.random(-3, 3),
          ]}
        />*/}

      </Entity>
    );
  }

}

import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

// import PlayerData from "./PlayerData";
import Player from "./Player";

import EnvironmentContainer from "./EnvironmentContainer";

import Camera from "./Camera";
import Sky from "./Sky";
import Sea from "./Sea";
import AmbientLight from "./AmbientLight";
import StarLight from "./StarLight";

export default class World extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {

  }

  getCameraCenter(playerLocation) {
    const x =
      Variables.tilesPerRow * 0.5
      + Math.floor(playerLocation[0] / Variables.tilesPerRow)
      * Variables.tilesPerRow
    ;
    const y = 0;
    const z =
      Variables.tilesPerColumn * 0.5
      + Math.floor(playerLocation[2] / Variables.tilesPerColumn)
      * Variables.tilesPerColumn
      + Variables.cameraOffsetZ
    ;
    return [-x,-y,-z];
  }

  render() {
    return (
      <Scene
        id="world"
        vr-mode-ui={{
          enabled: true,
        }}
      >

        <Entity
          id="does-not-move-with-camera"
          position={this.getCameraCenter(this.props.playerLocation)}
        >

          <Player
            facingTowards={this.props.playerFacingTowards}
            position={this.props.playerLocation || [0, 0, 0]}
          />
          <EnvironmentContainer/>

        </Entity>

        <Entity
          id="moves-with-camera"
        >

          <Camera
            id="camera"
            far={Variables.clipRange * 1.5}
            devMode={this.props.devMode}
            inVR={this.props.inVR}
          />
          <Sky color="rgb(187,235,252)"/>
          <Sea color="rgb(187,235,252)"/>
          <AmbientLight/>
          <StarLight/>

        </Entity>

      </Scene>
    );
  }

}

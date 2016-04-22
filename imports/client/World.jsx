import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import AmbientLight from "./AmbientLight";
import StarLight from "./StarLight";
import Sky from "./Sky";

import Player from "./Player";
import Camera from "./Camera";
import Segment from "./Segment";
import Sea from "./Sea";

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

  getSegments() {
    const segments = [
      {
        loc: [0, 0],
        tiles: [
          [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
          [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,],
        ],
      },
      {
        loc: [0, 1],
        tiles: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        ],
      },
    ];

    return segments.map(
      function(data, i) {
        return <Segment data={data} key={i}/>;
      }
    );
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

          {this.getSegments()}

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

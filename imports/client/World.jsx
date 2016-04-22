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

        <Player
          devMode={this.props.devMode}
          facingTowards={this.props.playerFacingTowards}
          inVR={this.props.inVR}
          position={this.props.playerLocation || [0, 0, 0]}
        />

        {this.getSegments()}

        <AmbientLight/>
        <StarLight/>

        <Entity
          id="center-on-camera"
          position={[
            Variables.tilesPerRow * 0.5,
            0,
            Variables.tilesPerColumn * 0.666,
          ]}
        >

          <Camera
            id="camera"
            far={Variables.clipRange * 1.5}
            devMode={this.props.devMode}
            inVR={this.props.inVR}
          />
          <Sky color="rgb(187,235,252)"/>
          <Sea color="rgb(187,235,252)"/>

        </Entity>

      </Scene>
    );
  }

}

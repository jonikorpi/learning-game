import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";
import AmbientLight from "./AmbientLight";
import StarLight from "./StarLight";
import Camera from "./Camera";
import Sky from "./Sky";

export default class World extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  cameraPosition() {
    let x = 0;
    let y = (Math.sin(Game.cameraPositionAngle) * Game.worldRadius) + Game.cameraAltitude;
    let z = (Math.cos(Game.cameraPositionAngle) * Game.worldRadius) + Game.cameraAltitude;
    return [x,y,z];
  }

  render() {
    return (
      <Scene
        vr-mode-ui={{
          enabled: false,
        }}
      >

        <Camera
          far={Game.clipRange * 2}
          position={this.cameraPosition()}
        />

        <AmbientLight/>
        <StarLight/>
        <Sky color="rgb(187,235,252)"/>

        <Entity
          geometry={{
            primitive: "sphere",
            radius: Game.worldRadius,
            segmentsWidth: 64,
            segmentsHeight: 128,
          }}
          material={{
            color: "rgb(161,193,110)",
            roughness: 1,
          }}
          position="0 0 0"
        >

          {/*<Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>*/}

        </Entity>

      </Scene>
    );
  }
}

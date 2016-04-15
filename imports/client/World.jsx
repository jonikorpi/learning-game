import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

import Camera from "./Camera";

import AmbientLight from "./AmbientLight";
import StarLight from "./StarLight";
import Sky from "./Sky";

import Planet from "./Planet";
import Player from "./Player";
import Orbit from "./Orbit";

export default class World extends Component {

  // getTasks() {
  //   return [
  //     { _id: 1, text: 'This is task 1' },
  //     { _id: 2, text: 'This is task 2' },
  //     { _id: 3, text: 'This is task 3' },
  //   ];
  // }
  //
  // renderTasks() {
  //   return this.getTasks().map((task) => (
  //     <Task key={task._id} task={task} />
  //   ));
  // }

  getHomeLocation() {
    return [0, 10];
  }

  getPlayerLocation() {
    return [2, 1];
  }

  render() {
    return (
      <Scene
        id="world"
        canvas={{
          canvas: "#canvas"
        }}
        vr-mode-ui={{
          enabled: false,
        }}
      >

        <Camera
          id="camera"
          far={Game.clipRange * 2}
        />

        <AmbientLight/>
        <StarLight/>
        <Sky color="rgb(187,235,252)"/>

        <Planet
          playerLoc={this.getPlayerLocation()}
        />

        <Player/>

        <Orbit/>

      </Scene>
    );
  }

}

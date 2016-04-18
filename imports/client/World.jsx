import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import AmbientLight from "./AmbientLight";
import StarLight from "./StarLight";
import Sky from "./Sky";

import Planet from "./Planet";
import Player from "./Player";
import Orbit from "./Orbit";

export default class World extends Component {

  getHomeLocation() {
    return this.props.homeLocation || [0, 0];
    console.log(this.props);
  }

  getPlayerLocation() {
    return this.props.playerLocation || [0, 0];
  }

  render() {
    console.log("world:");
    console.log(this.props);
    return (
      <Scene
        id="world"
        vr-mode-ui={{
          enabled: true,
        }}
      >

        <Player
          devMode={this.props.devMode}
        />

        <AmbientLight/>
        <StarLight/>
        <Sky color="rgb(187,235,252)"/>

        <Planet
          playerLoc={this.getPlayerLocation()}
        />

        <Orbit/>

      </Scene>
    );
  }

}

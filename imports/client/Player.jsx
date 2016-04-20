import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import Locator from "./Locator";
import Camera from "./Camera";

export default class Player extends Component {

  onPlayerClick(event) {
    console.log("player clicked");
  }

  startPlayerHover(event) {
    // console.log(event);
  }

  endPlayerHover(event) {
    // console.log(event);
  }

  render() {
    return (
      <Locator>

        <Camera
          id="camera"
          far={Variables.clipRange * 1.5}
          devMode={this.props.devMode}
          inVR={this.props.inVR}
        />

        <Entity
          id="player"
          class="player"
          geometry={{
            primitive: "box",
            depth: 0.236,
            height: 1.618,
            width: 0.414,
          }}
          material={{
            color: "#000000",
          }}
          onClick={this.onPlayerClick}
          onMouseEnter={this.startPlayerHover}
          onMouseLeave={this.endPlayerHover}
          rotation={[0, this.props.facingTowards, 0]}
        >
        </Entity>

      </Locator>
    );
  }

}

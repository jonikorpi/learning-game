import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import Locator from "./Locator";
import Camera from "./Camera";

export default class Player extends Component {

  render() {
    return (
      <Locator>

        <Camera
          id="camera"
          far={Variables.clipRange * 1.5}
          devMode={this.props.devMode}
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
        >

          <Animation
            begin="click"
            easing="ease-in-out"
            attribute="scale"
            fill="forwards"
            to="2 2 2"
            from="1 1 1"
            dur={Variables.shortTime(3)}
          />

        </Entity>

      </Locator>
    );
  }

}

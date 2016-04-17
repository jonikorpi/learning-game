import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Game from "../Game";

import Cloud from "./Cloud";

export default class Surface extends Component {

  render() {
    return (
      <Entity
        id="orbit"
      >

        <Cloud/>
        <Cloud/>
        <Cloud/>
        <Cloud/>
        <Cloud/>
        <Cloud/>
        <Cloud/>

        <Animation
          attribute="rotation"
          dur={Game.orbitSpeed}
          repeat="indefinite"
          to="0 360 360"
          easing="linear"
        />

      </Entity>
    );
  }

}

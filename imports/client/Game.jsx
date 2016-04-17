import React, { Component } from "react";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import World from "./World";

export default class Game extends Component {

  getHomeLocation() {
    return [0, 10];
  }

  getPlayerLocation() {
    return [2, 1];
  }

  render() {
    return (
      <div id="react">

        <World
          homeLocation={this.props.getHomeLocation}
          playerLocation={this.props.getPlayerLocation}
        />

      </div>
    );
  }

}

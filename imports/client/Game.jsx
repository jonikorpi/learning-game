import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";
const Combokeys = require("combokeys");

import Variables from "../Variables";

import World from "./World";

export default class Game extends Component {

  constructor(props) {
    super();

    this.state = {
      devMode: false
    };
  }

  componentDidMount() {
    this.bindKeyboardShortcuts();
  }

  componentWillUnmount() {
    this.unbindKeyboardShortcuts();
  }

  bindKeyboardShortcuts() {
    let that = this;
    let combokeys = new Combokeys(document.documentElement);
    combokeys.bind("g", function() { that.toggleDevMode(); });
  }

  unbindKeyboardShortcuts() {
    combokeys.detach();
  }

  toggleDevMode() {
    let that = this;
    that.setState({
      devMode: !that.state.devMode,
    });
    console.log("Setting devMode to " + that.state.devMode);
  }

  getHomeLocation() {
    return [0, 10];
  }

  getPlayerLocation() {
    return [2, 1];
  }

  render() {
    return (
      <div
        id="react"
        className={
          classNames({
            "dev-mode": this.state.devMode,
          })
        }
      >

        <World
          homeLocation={this.props.getHomeLocation}
          playerLocation={this.props.getPlayerLocation}
          devMode={this.state.devMode}
        />

      </div>
    );
  }

}

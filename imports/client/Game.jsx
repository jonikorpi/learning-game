import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";
import Combokeys from "combokeys";

import Variables from "../Variables";

import World from "./World";

export default class Game extends Component {

  constructor(props) {
    super();

    this.handleResize          = this.handleResize.bind(this);
    this.bindKeyboardShortcuts = this.bindKeyboardShortcuts.bind(this);
    this.toggleDevMode         = this.toggleDevMode.bind(this);
    this.startMoving           = this.startMoving.bind(this);
    this.stopMoving            = this.stopMoving.bind(this);
    this.startTurning          = this.startTurning.bind(this);
    this.setMovementDirection  = this.setMovementDirection.bind(this);

    this.state = {
      devMode: false,
      width: 0,
      height: 0,
      moving: false,
      playerLocation: [0, 0],
      playerFacingTowards: 0,
    };
  }

  componentDidMount() {
    this.bindKeyboardShortcuts();
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    this.unbindKeyboardShortcuts();
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      width: this.react.getBoundingClientRect().width,
      height: this.react.getBoundingClientRect().height,
    });
  }

  bindKeyboardShortcuts() {
    let combokeys = new Combokeys(document.documentElement);
    combokeys.bind("g", function() { this.toggleDevMode(); });
  }

  unbindKeyboardShortcuts() {
    combokeys.detach();
  }

  toggleDevMode() {
    this.setState({
      devMode: !this.state.devMode,
    });
    console.log("Setting devMode to " + this.state.devMode);
  }

  isMouseOrTouchEvent(event) {
    return event instanceof MouseEvent || event instanceof TouchEvent;
  }

  startMoving(event) {
    if (this.isMouseOrTouchEvent(event.nativeEvent)) {
      console.log("starting moving");
      this.setState({
        moving: true,
      });
      event.persist(); // allows it to be passed on
      this.setMovementDirection(event);
    }
  }

  stopMoving(event) {
    if (this.isMouseOrTouchEvent(event.nativeEvent)) {
      console.log("stopping moving");
      this.setState({
        moving: false,
      });
    }
  }

  startTurning(event) {
    if (this.state.moving) {
      event.persist();
      this.setMovementDirection(event);
    }
  }

  setMovementDirection(event) {
    let facingTowards = this.state.playerFacingTowards;
    const width = this.state.width;
    const height = this.state.height;
    const deadZone = 0.09;
    const deltaX =  event.clientX - width  * 0.5;
    const deltaY = (event.clientY - height * 0.5) * -1;

    facingTowards = Variables.rightAngle(deltaX, deltaY);

    // console.log(deltaX + " X");
    // console.log(deltaY + " Y");
    // console.log(facingTowards + "°");

    this.setState({
      playerFacingTowards: facingTowards,
    })
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
        onMouseDown={this.startMoving}
        onMouseUp={this.stopMoving}
        onMouseMove={this.startTurning}
        onTouchStart={this.startMoving}
        onTouchEnd={this.stopMoving}
        onTouchMove={this.startTurning}
        ref={(ref) => this.react = ref}
      >

        <World
          homeLocation={this.props.getHomeLocation}
          playerLocation={this.state.playerLocation}
          playerFacingTowards={this.state.playerFacingTowards}
          devMode={this.state.devMode}
        />

      </div>
    );
  }

}

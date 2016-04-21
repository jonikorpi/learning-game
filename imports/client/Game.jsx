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
    // this.startMoving           = this.startMoving.bind(this);
    // this.stopMoving            = this.stopMoving.bind(this);
    this.move                  = this.move.bind(this);
    // this.startTurning          = this.startTurning.bind(this);
    // this.setMovementVectors    = this.setMovementVectors.bind(this);
    this.startVR               = this.startVR.bind(this);
    this.stopVR                = this.stopVR.bind(this);

    this.state = {
      inVR: false,
      devMode: false,
      width: 0,
      height: 0,
      moving: false,
      playerLocation: [0, 0, 0],
      playerSpeed: [0, 0, 0],
      playerFacingTowards: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("enter-vr", this.startVR);
    window.addEventListener("exit-vr", this.stopVR);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.bindKeyboardShortcuts();
  }

  componentWillUnmount() {
    this.unbindKeyboardShortcuts();
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener("enter-vr", this.startVR);
    window.removeEventListener("exit-vr", this.stopVR);
  }

  handleResize() {
    this.setState({
      width: this.react.getBoundingClientRect().width,
      height: this.react.getBoundingClientRect().height,
    });
  }

  bindKeyboardShortcuts() {
    const that = this;
    let combokeys = new Combokeys(document.documentElement);

    combokeys.bind("g", function() { that.toggleDevMode(); });
    combokeys.bind(["a", "left"], function() { that.move("left"); });
    combokeys.bind(["d", "right"], function() { that.move("right"); });
    combokeys.bind(["w", "up"], function() { that.move("up"); });
    combokeys.bind(["s", "down"], function() { that.move("down"); });
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

  move(direction) {
    let x = this.state.playerLocation[0];
    let y = this.state.playerLocation[1];
    let z = this.state.playerLocation[2];

    switch (direction) {
      case "left":
        x = x - 1;
        break;
      case "right":
        x = x + 1;
        break;
      case "up":
        z = z - 1;
        break;
      case "down":
        z = z + 1;
        break;
    }

    this.setState({
      playerLocation: [x, y, z],
    })
  }

  startVR() {
    this.setState({
      inVR: true,
    });
  }

  stopVR() {
    this.setState({
      inVR: false,
    });
  }

  // startMoving(event) {
  //   if (event.nativeEvent instanceof MouseEvent) {
  //     console.log("starting moving");
  //     this.setState({
  //       moving: true,
  //     });
  //     event.persist(); // allows it to be passed on
  //     this.setMovementVectors(event);
  //     window.requestAnimationFrame(this.move);
  //   }
  // }
  //
  // stopMoving(event) {
  //   if (event.nativeEvent instanceof MouseEvent) {
  //     console.log("stopping moving");
  //     this.setState({
  //       moving: false,
  //     });
  //   }
  // }
  //
  // move(timestamp) {
  //   let x, y;
  //   const speed = Variables.walkingSpeed;
  //   const xSpeed = this.state.playerSpeed[0];
  //   const ySpeed = this.state.playerSpeed[1];
  //   const zSpeed = this.state.playerSpeed[2];
  //
  //   x = this.state.playerLocation[0] + speed * xSpeed;
  //   y = this.state.playerLocation[1] + speed * ySpeed;
  //   z = this.state.playerLocation[2] + speed * zSpeed;
  //
  //   this.setState({
  //     playerLocation: [x, y, z],
  //   })
  //
  //   if (this.state.moving) {
  //     window.requestAnimationFrame(this.move);
  //   }
  // }
  //
  // startTurning(event) {
  //   if (this.state.moving) {
  //     event.persist();
  //     this.setMovementVectors(event);
  //   }
  // }
  //
  // setMovementVectors(event) {
  //   let facingTowards = this.state.playerFacingTowards;
  //   let xSpeed, ySpeed;
  //   const width = this.state.width;
  //   const height = this.state.height;
  //   const deadZone = 0.09;
  //   const deltaX =  event.clientX - width  * 0.5;
  //   const deltaY = (event.clientY - height * 0.5) * -1;
  //
  //   facingTowards = Variables.rightAngle(deltaX, deltaY);
  //
  //   // console.log(deltaX + " X");
  //   // console.log(deltaY + " Y");
  //   // console.log(facingTowards + "°");
  //
  //   this.setState({
  //     playerFacingTowards: facingTowards,
  //     playerSpeed: [Math.sign(deltaX), 0, Math.sign(deltaY)],
  //   })
  // }

  render() {
    return (
      <div
        id="react"
        className={
          classNames({
            "dev-mode": this.state.devMode,
          })
        }
        ref={(ref) => this.react = ref}
      >

        {/*onMouseDown={this.startMoving}
        onMouseUp={this.stopMoving}
        onMouseMove={this.startTurning}*/}

        <World
          homeLocation={this.props.getHomeLocation}
          playerLocation={[
            this.state.playerLocation[0],
            this.state.playerLocation[1],
            this.state.playerLocation[2],
          ]}
          playerFacingTowards={this.state.playerFacingTowards}
          devMode={this.state.devMode}
          inVR={this.state.inVR}
        />
      }

      </div>
    );
  }

}

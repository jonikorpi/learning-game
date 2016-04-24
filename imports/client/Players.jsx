import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import Player from "./Player";

export default class Environment extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {

  }

  getSegments(segments) {
    // return segments.map(
    //   function(data, i) {
    //     return <Segment data={data} key={i}/>;
    //   }
    // );
  }

  render() {
    return (
      <Entity id="players">

        {/*{this.getSegments(this.props.segments)}*/}

        <Player
          facingTowards={0}
          position={[0, 0, 0]}
        />

      </Entity>
    );
  }

}

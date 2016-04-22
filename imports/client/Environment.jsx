import React, { Component } from "react";
import classNames from "classnames";
import Aframe from "aframe";
import {Animation, Entity, Scene} from "aframe-react";

import Variables from "../Variables";

import Segment from "./Segment";

export default class Environment extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {

  }

  getSegments(segments) {
    return segments.map(
      function(data, i) {
        return <Segment data={data} key={i}/>;
      }
    );
  }

  render() {
    return (
      <Entity id="environment">

        {this.getSegments(this.props.segments)}

      </Entity>
    );
  }

}

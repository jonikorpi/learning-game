import React, { Component } from "react";

import Aframe from "aframe";
import {Animation, Entity, Scene} from 'aframe-react';

export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="">
        <h1>Hello world</h1>
        <Scene>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
        <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>

        <Entity geometry="primitive: box" material={{color: "#f0f0f0"}}
                position="0 0 -5">
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
        </Entity>

        </Scene>
      </div>
    );
  }
}

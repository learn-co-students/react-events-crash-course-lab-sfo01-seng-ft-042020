import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY);
  }
  
  checkKey = (event) => {
    switch (event.key) {
      case "a":
        resize('+');
        break;
      case "s":
        resize('-');
    }
  }
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.checkKey}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}

import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import  { Path, G, Svg, Rect } from 'react-native-svg'

const shapes = {
    pathOne: "M380.279 107.377C380.279 107.377 295.739 13.1031 187.625 107.25C79.5108 201.397 -1.97128 107.125 -1.97128 107.125L-1.89778 1.07516e-06L380.353 0.252415L380.279 107.377Z",
}


export class WaveShape extends Component {


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { width, height } = Dimensions.get("screen")
    const { style, ...props } = this.props

    return (
        <Svg style={[style]} {...props} width="500" height="400" viewBox="-1 -1 300 100">
            <Path fill="red" fillOpacity={0.5} d={shapes.pathOne}></Path>
        </Svg>
    );
  }
}
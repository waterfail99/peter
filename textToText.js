import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class App extends Component {
  state = {
    textValue: 'Hello World'
  }

  onPress = () => {
    this.setState({
      textValue: 'Lets Hello World'
    })
  }

  render() {
    return (
      <View style={{paddingTop: 50,paddingright:50}}>
        <Text onPress={this.onPress}>{this.state.textValue}</Text>
        
      </View>
    )
  }
}
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PropsChild extends Component {
  render() {
    return (
      <View>
        <Text onPress={this.props.changeState}>
          {this.props.sampleText}
        </Text>
      </View>
    )
  }
}

export default PropsChild;

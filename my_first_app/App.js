import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PropsChild from './propsChild';

class App extends Component {
  state = {
    sampleText: 'Hello World',
    sampleBoolean: false,
    sampleNum: 1,
  };

  inputText = () => (
    this.state.sampleBoolean
    ? <Text>is true</Text>
    : <Text>is false</Text>
  )

  changeState = () => {
    if(!this.state.sampleBoolean) {
      this.setState({
        sampleBoolean: true,
        sampleText: 'text changed!!!',
      });
    } else {
      this.setState({
        sampleBoolean: false,
        sampleText: 'Hello World',
      });
    }
  }

  onAdd = () => {
    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1,
      };
    });
  }

  render() {
    return (
      <View style={styles.background}>
        <PropsChild sampleText={this.state.sampleText} changeState={this.changeState} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;

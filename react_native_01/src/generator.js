import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

class Generator extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.generator}>
        <Button title="Add Number" onPress={() => this.props.add()}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  }
});

export default Generator;

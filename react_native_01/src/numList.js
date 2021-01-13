import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class NumList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      this.props.num.map((item, index) => (
        <TouchableOpacity 
          style={styles.numList} 
          key={index}
          onPress={() => this.props.delete(index)}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))
    )
  }
}

const styles = StyleSheet.create({
  numList: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  }
});

export default NumList;

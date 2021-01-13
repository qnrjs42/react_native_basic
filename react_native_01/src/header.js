import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.header} onLongPress={() => alert('hello world')}>
        <View>
          <Text>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  }
});

export default Header;

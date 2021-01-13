import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class UserScreen extends Component {
  constructor(props) {
    super(props);
  }

  headerStyle = () => {
    this.props.navigation.setOptions({
      title: 'Customizing',
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'yellow',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'green'
      },
      headerBackTitle: 'BACK',
      headerRight: () => (
        <Button
          title="go back"
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
          color="orange"
        />
      ),
    });
  }

  render() {
    this.headerStyle();
    const {params} = this.props.route;
    const userIdx = params ? params.userIdx : null;
    const userName = params ? params.userName : null;
    const userLastName = params ? params.userLastName : null;
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>User Screen</Text>
        <Button 
          title="To Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
        />

        <Text>User Idx: {JSON.stringify(userIdx)}</Text>
        <Text>User Name: {JSON.stringify(userName)}</Text>
        <Text>User LastName: {JSON.stringify(userLastName)}</Text>
      </View>
    )
  }
}


export default UserScreen;

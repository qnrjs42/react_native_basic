import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';

const Stack = createStackNavigator();

class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#a4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#f3d612',
            }
          }}
        >
        <Stack.Screen 
          name='Home' 
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerTitle: <LogoTitle />,
            headerRight: () => (
              <Button
                title="info"
                onPress={() => alert('I am a button')}
                color="orange"
              />
            )
          }}
        />
          <Stack.Screen 
            name='User' 
            component={UserScreen} 
            initialParams={{
              userIdx: 50,
              userName: 'Gildong',
              userLastName: 'Go',
            }}
            // options={{
            //   title: 'User Screen',
            //   headerStyle: {
            //     backgroundColor: 'pink',
            //   },
            //   headerTintColor: 'red',
            //   headerTitleStyle: {
            //     fontWeight: 'bold',
            //     color: 'purple',
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({});

export default App;

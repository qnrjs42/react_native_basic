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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabMessageScreen from './src/message_tab';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = (focuesd, name) => {
  let iconImagePath;
  let iconName, iconSize;

  if (name === 'Home') {
    iconName = 'home-outline';
    // iconImagePath = require('./src/assets/pics/home_icon.png');
  } else if (name === 'User') {
    iconName = 'people-outline';
    // iconImagePath = require('./src/assets/pics/user_icon.png');
  } else if (name === 'Message') {
    iconName = 'mail-outline';
    // iconImagePath = require('./src/assets/pics/message_icon.png');
  }

  iconSize = focuesd ? 30 : 20;

  return (
    <Ionicons
      name={iconName}
      size={iconSize}
    />
  )
}

class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeBackgroundColor: 'skyblue',
            activeTintColor: 'blue',
            inactiveTintColor: '#fff',
            style: {
              backgroundColor: '#c6cbef',
            },
            labelPosition: 'below-icon',
          }}
          screenOptions={({route}) => ({
            tabBarLabel: route.name,
            tabBarIcon: ({focused}) => (
              TabBarIcon(focused, route.name)
            )
          })}
        >
          <Tab.Screen name="Home" component={TabHomeScreen} />
          <Tab.Screen name="User" component={TabUserScreen} />
          <Tab.Screen name="Message" component={TabMessageScreen} />
        </Tab.Navigator>
      </NavigationContainer>

      // <NavigationContainer>
      //   <Stack.Navigator 
      //     initialRouteName="Home"
      //     screenOptions={{
      //       headerStyle: {
      //         backgroundColor: '#a4511e',
      //       },
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: '#f3d612',
      //       }
      //     }}
      //   >
      //   <Stack.Screen 
      //     name='Home' 
      //     component={HomeScreen}
      //     options={{
      //       title: 'Home Screen',
      //       headerTitle: <LogoTitle />,
      //       headerRight: () => (
      //         <Button
      //           title="info"
      //           onPress={() => alert('I am a button')}
      //           color="orange"
      //         />
      //       ),
      //     }}
      //   />
      //     <Stack.Screen 
      //       name='User' 
      //       component={UserScreen} 
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'Gildong',
      //         userLastName: 'Go',
      //       }}
      //       // options={{
      //       //   title: 'User Screen',
      //       //   headerStyle: {
      //       //     backgroundColor: 'pink',
      //       //   },
      //       //   headerTintColor: 'red',
      //       //   headerTitleStyle: {
      //       //     fontWeight: 'bold',
      //       //     color: 'purple',
      //       //   }
      //       // }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({});

export default App;

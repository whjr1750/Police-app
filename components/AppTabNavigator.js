import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteComplaint from '../screens/WriteComplaint'
import ReadComplaint from '../screens/ReadComplaint'




export const AppTabNavigator = createBottomTabNavigator({
  WriteComplaint : {
    screen:  WriteComplaint,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Write",
    }
  },
  ReadComplaint : {
    screen:  ReadComplaint,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Read",
    }
  },
 
 
});

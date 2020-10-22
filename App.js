import React,{Component} from "react";
import {View} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-native/stack"
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";


const Stack =createStackNavigator();
export default class App extends Component{
  render(){
    <View style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Login' component={Mainscreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  }
}
  
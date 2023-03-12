/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
false;
import Signup from "./src/screens/Signup";
import Login from "./src/screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideSplashScreen: true
    }
  }

  render() {
    return(
      <>
      <NavigationContainer>
        {this.state.hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
    )
  }
}
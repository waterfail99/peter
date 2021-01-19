import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Register } from '../containers/auth/Register';
import { Login } from '../containers/auth/Login';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
            {props => <Login {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="Register" component={Register} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
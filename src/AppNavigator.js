import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import PropsComponents from './PropsComponents';
import List from './List';
import ListDetails from './ListDetails';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
            {props => <Home {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="PropsComponents" component={PropsComponents} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ListDetails" component={ListDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
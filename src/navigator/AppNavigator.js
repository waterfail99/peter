import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  Register  from '../containers/auth/Register';
import  ForgotPassword  from '../containers/auth/ForgotPassword';
import  Login  from '../containers/auth/Login';
import  NewLogin  from '../containers/auth/NewLogin';
import  Market  from '../containers/auth/Market';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();


function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: true
        }}> 
       <Stack.Screen
        name="Login"
        component={NewLogin}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#132a3d',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            justifyContent:"center",
            textAlign:"center", 
            
            fontWeight: 'bold',
          },
        }}
      />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} 
          options={{
            title: 'Forgot Password',
            headerStyle: {
              backgroundColor: '#132a3d',
              
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              textAlign:"center", 
              fontWeight: 'bold',
              alignSelf: 'center',
              marginRight:32
            },
          }}
        />
      <Stack.Screen name="Market" component={Market} 
          options={{
            title: 'Market',
            headerStyle: {
              backgroundColor: '#132a3d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              textAlign:"center", 
              fontWeight: 'bold',
              alignSelf: 'center',
              marginRight:32
            },
          }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
  
}



export default AppNavigator;
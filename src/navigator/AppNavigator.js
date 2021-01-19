import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  Register  from '../containers/auth/Register';
import  Login  from '../containers/auth/Login';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();


function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false
        }}> 
       <Stack.Screen name="Login">
            {props => <Login {...props}/>}
        </Stack.Screen>
        
      
        <Stack.Screen name="Register" component={Register} 
          //  options={{
          //    headerTitle:() =>
          //    <Image style={styles.image} 
          //    source={require("../../assert/back.png")}
          //    />,
          //   headerRight:() => <TouchableOpacity
          //   onPress={() => {this.onGoRegisterPress()}}
          //   title="Sign in"
          //   color="black"
          // ><Text style={{marginRight:10}}>Sign in</Text></TouchableOpacity>,
          // }}
        />
      
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
  
}



export default AppNavigator;
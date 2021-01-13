import React from "react"
import { Button,StyleSheet, Text, View }from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

function HomeScreen({navigation}){
  return(
    <View>
      <Text>Home Screen</Text>
      <Button title="gogogo"
      onPress={()=> navigation.navigate('Details')}></Button>
    </View>
  )
}
function DetailScreen(){
  return(
    <View>
      <Text>Details Screen</Text>
    </View>
  )
}


const Stack = createStackNavigator()

export default function App(){
  
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component = {HomeScreen}/>
      <Stack.Screen name="Details" component = {DetailScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
  
}
const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent: "center",
  },
})



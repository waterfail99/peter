
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
 
 
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Log In</Text>
      <Image style={styles.image} source={require("./asseet/logo.png")} />
 
     
      
        <TextInput
          placeholder={'Email'}
          style={styles.inputStyle}
          
        />
     
 
      
        <TextInput
          
          placeholder={'Password'}
          style={styles.inputStyle}
          
         
        />
      
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 10,
  },
 
  image: {
    marginBottom: 40,
    width: 200,
    height:200

  },
 
  inputView: {
    width: '70%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
    borderRadius: 30,
    
  },
 
  inputStyle: {
    width: '70%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
    borderRadius: 30,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#009688",
    
  },
  loginText:{
    color:"white"
  }
});
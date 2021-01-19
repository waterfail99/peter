// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

class Login extends React.Component {

    render(){
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.heading}>
                        Create Your Account
                    </Text>
                    <Text style={styles.textStyle}>
                    
                    </Text>
                    {/*Input to get the value from the user*/}
                    <TextInput
                        onChangeText={(username) => setUserName(username)}
                        placeholder={'Your Name'}
                        style={styles.inputStyle}
                    />
                    <TextInput
                        placeholder={'Email'}
                        style={styles.inputStyle}
                    />
                    <TextInput
                        placeholder={'Password'}
                        style={styles.inputStyle}
                    />
                    {/* On click of the button we will send the data as a Json
                    From here to the Second Screen using navigation */}
                    <TouchableOpacity style={styles.button}>
                    <Text style={styles.RgsText}>Join Us</Text>
                </TouchableOpacity>
                    <Text style={styles.smallText}>
            
                    By pressing 'Join Us' you agree to 
                    {'\n'}
                    our tern and condition
                    </Text>
                </View>
              
            </SafeAreaView>
        );
    }
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    
    marginVertical: 10,
  },
  inputStyle: {
    width: '70%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
    borderRadius: 30,
  },
  button:{
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#009688",
  },
  smallText:{
    fontSize: 10,
    textAlign: 'center',
    marginVertical: 10,
  },
  RgsText:{
    color:"white",
  }
});
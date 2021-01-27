
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from "react-native";
import AppButton from '../../components/button/AppButton';
import TextButton from '../../components/button/TextButton';

import HeaderLabel from '../../components/header/HeaderLabel';
 
export default class ForgotPassword extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
        }
    }
    onForgotPasswordPress = () =>{
       this.props.navigation.navigate("ForgotPassword")
      }
    onLoginPress = () => {
        this.props.navigation.navigate("Login")
    }
    render (){
        return (
           
            <View style={styles.container}>
             
                <HeaderLabel
                    title={'Reset Password'}
                    subtitle={'Welcome Back!'}
                />
                <ResetPasswordView
                title={'Email'}
                />
                
                <Text style={[styles.textLabel, {marginLeft:28}]}>
                    Enter 4 digit Pin
                </Text>
                <DigitPasswordView
                    title={'Get Code'}
                />

                <ResetPasswordView
                title={'Password'}
                />

                <ResetPasswordView
                title={'Confirm Password'}
                />
                    
                <ResetPasswordButton 
                    onPress={this.onLoginPress}
                    title={'Submit'}
                />
                <View style={[styles.containerRow,{marginTop: 40,position: 'absolute', bottom: 2}]}>
                <Text >Already Registered?</Text>
                <TouchableOpacity><Text style={{fontWeight:"bold"}}> Log in</Text></TouchableOpacity>
                
                </View>
            </View>
          );
    }
}
const ResetPasswordView = (props) => {
    return (
        <View>
            <Text style={styles.textLabel}>{props.title}</Text>
            <TextInput style={styles.inputText}/>
        </View>
    )
}
const ResetPasswordButton = (props) => {
    return (
        <TouchableOpacity 
        onPress={props.onPress}
        style={styles.ContainerButton}>
        <Text style={styles.ButtonTitle}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const DigitPasswordView = (props) => {
    return (
         
            <View style={styles.containerRow}>
            <TextInput
                style={styles.input}
            />
            <TouchableOpacity style={styles.PinContainer}>
                <Text style={{color:'white'}}>{props.title}</Text>
            </TouchableOpacity>
            </View>
    )
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  containerRow:{
    flexDirection: 'row',
    justifyContent:"space-between"
  },
  PinContainer:{
    borderRadius: 4,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#132a3d',
    borderWidth: 0.5,
    width:"30%",
    borderColor: '#BDB7B7',
  },
  ContainerButton: {
    width: "85%",
    borderRadius: 4,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: '#36a4dc',
    marginTop: 40,
    position: 'absolute', 
    bottom: 24
    },
    ButtonTitle:{
        color:"white"
    },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: 'center',
    marginTop:50
  },
  input: {
    width: '50%',
    height: 38,
    padding: 10,
    borderRadius: 4,
    marginRight:12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BDB7B7',
},
inputText: {
    width:316,
    height: 38,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BDB7B7',
},
textLabel:{
    alignSelf:'flex-start',
    marginLeft:0,
    fontWeight: "bold",
    marginTop:20,
    marginBottom:5,
    opacity:0.6,
  },
});
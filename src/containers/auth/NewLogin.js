
import React, { useState } from 'react';
import TextBox from 'react-native-password-eye'; 
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Icon
} from "react-native";
import AppButton from '../../components/button/AppButton';
import TextButton from '../../components/button/TextButton';
import  responsiveFontSize  from "react-native-responsive-dimensions";
import  FontAwesomeIcon  from '@fortawesome/react-native-fontawesome';
import  {faEyeSlash, faEye}  from '@fortawesome/free-solid-svg-icons';
import InputLabel from '../../components/input/InputLabel';
import HeaderLabel from "../../components/header/HeaderLabel";
import Password from '../auth/Password';
import FormInput from '../auth/FormInput'


 
export default class ForgotPassword extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',   
        }
    }
    onForgotPasswordPress = () =>{
       this.props.navigation.navigate("Forgot Password")
      }
    onLoginPress = () => {
        this.props.navigation.navigate("Market")
    }
    render (){
        return (
            <View style={styles.container}>
             
                <HeaderLabel
                    title={'Log In'}
                    subtitle={'Welcome Back!'}
                />

                <LoginView 
                    title={'Email'}
                  
                    
                />

               
                <FormInput
                title={'Password'}
                secureTextEntry={true}
                />

                 <TouchableOpacity 
                onPress={this.onForgotPasswordPress}>
                   <Text style={{textAlign:"right",marginLeft:200,marginTop:16}}> Forgot Password?</Text>
                </TouchableOpacity>
               

                <LoginButton 
                    onPress={this.onLoginPress}
                    title={'Login'}
                    
                />
    




                
                <View style={[styles.containerRow,{marginTop: 40,position: 'absolute', bottom: 2}]}>
                <Text> Do not have account?</Text>
                <TouchableOpacity style={{fontWeight:"bold"}}>
                   <Text style={{fontWeight:"bold"}}> Register Now</Text>
                </TouchableOpacity>
                </View>
            </View>
          );
    }
}
const LoginView = (props) => {
    return (
        <View>
            <Text style={styles.textLabel}>{props.title}</Text>
            <TextInput style={styles.inputText}/>
        </View>
    )
}
const LoginButton = (props) => {
    return (
        <TouchableOpacity 
        onPress={props.onPress}
        style={styles.ContainerButton}>
        <Text style={styles.ButtonTitle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const PasswordInput = (props) => {
    const { title } = props;
    const [hidePassword, setHidePassword] = useState(true);
    const [isFocused, setIsFocus] = useState(false);

    let color = isFocused ? '#1F1F1F' : '#60595A';
    let borderColor = isFocused ? '#1F1F1F' : '#382024';
    let borderWidth = isFocused ? 1.2 : 1;
    return (
        <View style={{ ...props.containerStyle }}>
            <Text style={[styles.title, { color }]}>{title}</Text>
            <View style={[styles.inputContainer, { borderColor, borderWidth }]}>
                <TextInput
                    {...props}
                    placeholder={props.placeholder}
                    secureTextEntry={props.secureTextEntry && hidePassword}
                    style={styles.input}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
                {props.secureTextEntry &&
                    <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                        <FontAwesomeIcon
                            icon={hidePassword ? faEyeSlash : faEye}
                            size={20}
                        />
                    </TouchableOpacity>
                }
            </View>
            {props.hint &&
                <Text style={styles.hint}>{props.hint}</Text>
            }
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
    width:'30%',
    borderColor: '#BDB7B7',
  },
  input: {
    width: 316,
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
});
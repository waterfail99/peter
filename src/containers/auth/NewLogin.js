
import React from "react";
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
import FormInput from '../../components/input/FormInput';
 
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
             
                <Text style={styles.heading}>Log In</Text>
                <Text style={{opacity:0.5,margin:0}}>Welcome back!</Text>

                <Text style={styles.textLabel}>
                    Email
                </Text>
                <FormInput
                    placeholder={'Email'}
                    keyboardType='email-address'
                    onChangeText={(email) => this.setState({email})}
                />
                
                <Text style={styles.textLabel}>
                    Password
                </Text>
                <FormInput
                    placeholder={'Password'}
                    onChangeText={(email) => this.setState({email})}
                    secureTextEntry={true}
                />
                 <TouchableOpacity 
                onPress={this.onForgotPasswordPress}>
                   <Text style={{textAlign:"right",marginLeft:200}}> Forgot Password?</Text>
                </TouchableOpacity>

                <AppButton 
                    onPress={this.onLoginPress}
                    containerStyle={{marginTop: 40,position: 'absolute', bottom: 24}}
                    title={'Submit'}
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
  textLabel:{
    alignSelf:'flex-start',
    marginLeft:30,
    fontWeight: "bold",
    marginTop:20,
    marginBottom:5,
    opacity:0.6,
  },
});
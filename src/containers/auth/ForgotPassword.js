
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
       this.props.navigation.navigate("ForgotPassword")
      }
    onLoginPress = () => {
        this.props.navigation.navigate("Login")
    }
    render (){
        return (
           
            <View style={styles.container}>
             
                <Text style={styles.heading}>Reset Password</Text>
                <Text style={{opacity:0.5,margin:0}}>Welcome back!</Text>
                <Text style={styles.textLabel}>
                    Email
                </Text>
                <FormInput
                    keyboardType='email-address'
                    onChangeText={(email) => this.setState({email})}
                />

                <Text style={styles.textLabel}>
                    Enter 4 digit Pin
                </Text>
                <View style={styles.containerRow}>
                <TextInput
                    keyboardType='email-address'
                    onChangeText={(email) => this.setState({email})}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.PinContainer}>
                    <Text style={{color:'white'}}>Get Code</Text>
                </TouchableOpacity>
                </View>

                <Text style={styles.textLabel}>
                    Password
                </Text>
                <FormInput
                    onChangeText={(email) => this.setState({email})}
                    secureTextEntry={true}
                />

                <Text style={styles.textLabel}>
                    Confirm Password
                </Text>
                <FormInput
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    containerStyle={{marginTop: 8}}
                />
                    
                <AppButton 
                    onPress={this.onLoginPress}
                    containerStyle={{marginTop: 40,position: 'absolute', bottom: 24}}
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
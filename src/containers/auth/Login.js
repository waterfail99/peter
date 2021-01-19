
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
 
export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
        }
    }
 
    _renderHeader(){
        return (
            <View style={{flexDirection:'row',}}>
                <TouchableOpacity onPress={this.onGoRegisterPress}>
                <Text style={{textAlign:'right',marginLeft:300}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }

    // onLoginPress(){

    // }
    
    onGoRegisterPress = () =>{
       this.props.navigation.navigate("Register")
      }
    onLoginPress = () => {
        console.log("Here")
    }

    render (){
        return (
           
            <View style={styles.container}>
                {this._renderHeader()}
                <Text style={styles.heading}>Log in</Text>
                <Image style={styles.image} source={require("../../assert/logo.png")} />
                <FormInput
                    placeholder={'Email'}
                    keyboardType='email-address'
                    onChangeText={(email) => this.setState({email})}
                />

                <FormInput
                    placeholder={'Password'}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    
                    containerStyle={{marginTop: 8}}
                    title={"Forgot?"}
                    
                />
                
                    
                    
                
                <AppButton 
                    // onPress={() => this.onLoginPress()}
                    onPress={this.onLoginPress}
                    containerStyle={{marginTop: 40}}
                    title={'Log In'}
                />
            </View>
          );
    }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    marginBottom: 40,
    width: 200,
    height:200

  },
  inputViews: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  
  TextInputs: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  }
});
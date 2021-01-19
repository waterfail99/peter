// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';
import AppButton from '../../components/button/AppButton';
import TextButton from '../../components/button/TextButton';
import FormInput from '../../components/input/FormInput';



export default class Register extends React.Component {

  constructor(props){
    super(props);
    this.state={
        name:'',
        email: '',
        password: '',
    }
    
}

    _renderHeader(){
      return (
        <View style={{flexDirection:'row',}}>
          <TouchableOpacity onPress={this.onGoLoginPress}>
          <Image style={styles.image} source={require("../../assert/back.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onGoLoginPress}>
          <Text style={{textAlign:'right',}}>Sign In</Text>
          </TouchableOpacity>
          
        </View>
      )
    }
    onGoLoginPress = () =>{
      this.props.navigation.navigate("Login")
     }
    onRgsPress = () => {
      console.log("Here")
  }

    render(){
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                {this._renderHeader()}
                <Text style={styles.heading}>Create Your Account</Text>
                    {/*Input to get the value from the user*/}
                    <FormInput
                        onChangeText={(username) => setUserName(username)}
                        placeholder={'Your Name'}
                        onChangeText={(name) => console.log('Name:',name)}
                    />
                    <FormInput
                        placeholder={'Email'}
                        keyboardType='email-address'
                        onChangeText={(email) => this.setState({email})}
                    />
                    <FormInput
                        placeholder={'Password'}
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                    />
                    {/* On click of the button we will send the data as a Json
                    From here to the Second Screen using navigation */}
                    <AppButton
                       title={"Join Us"}
                       onPress={this.onRgsPress}
                    />
                    <Text style={styles.smallText}>
                    By pressing 'Join Us' you agree to 
                    {'\n'}
                    our tern and condition
                    </Text>
                </View>
              
            </View>
        );
    }
};

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
  smallText:{
    fontWeight: "bold",
    fontSize: 10,
    textAlign: 'center',
    marginVertical: 10,
    opacity:0.7
  },
  image: {
    marginTop: 0,
    marginRight:270,
    width: 50,
    height:50,
    

  },
  
});
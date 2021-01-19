
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import AppButton from '../../components/button/AppButton';
import TextButton from '../../components/button/TextButton';
import FormInput from '../../components/input/FormInput';
 
export default class Register extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
        }
    }
 
    _renderHeader(){
        return (
            <View>
                <Text style={styles.heading}>Log In</Text>
                <Image style={styles.image} source={require("../../assert/logo.png")} />
            </View>
        )
    }

    // onLoginPress(){

    // }

    onLoginPress = () => {
        console.log("Here")
    }

    render (){
        return (
            <View style={styles.container}>
                {this._renderHeader()}
        
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
         
                <TextButton
                    containerStyle={{marginTop: 8}}
                    title={"Forgot Password?"}
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
});
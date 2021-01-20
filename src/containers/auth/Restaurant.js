
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  StatusBar
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import AppButton from '../../components/button/AppButton';
import TextButton from '../../components/button/TextButton';
import FormInput from '../../components/input/FormInput';
 
export default class Restaurant extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
        }
    }
 
    _renderHeader(){
        return (
            
            <View style={styles.viewStyle}>
      <Text style={styles.textHeader}>Restaurant De Hunan</Text>
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
                
                <Image style={styles.image} source={require("../../assert/Restaurant.png")} />

                <Text style={styles.textLabel}>
                    Phone Number
                </Text>
                <FormInput
                    placeholder={'Phone Number'}
                    keyboardType='email-address'
                    onChangeText={(email) => this.setState({email})}
                />
                <Text style={styles.textLabel}>
                    Password
                </Text>
                <FormInput
                    placeholder={'Password'}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    
                    containerStyle={{marginTop: 8}}
                    
                    
                />
                
                <Text
                    style={styles.TextInputs}
                    
                >Forgot Password</Text>
                    
                
                <AppButton 
                    // onPress={() => this.onLoginPress()}
                    onPress={this.onLoginPress}
                    containerStyle={{marginTop: 25}}
                    title={'Log In'}
                />
                <AppButton 
                    // onPress={() => this.onLoginPress()}
                    onPress={this.onLoginPress}
                  
                    title={'Register'}
                />
            </View>
          );
    }
}
 
const styles = StyleSheet.create({
    viewStyle:{
    backgroundColor:'#941313',
    justifyContent:'center',
    alignItems:'center',
    height:70,
    width:400,
    elevation:2,
    position:'relative'
    },
  container: {
    flex: 1,
    backgroundColor: "#EBD5D5",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight:20,
    paddingTop:0
  },
  heading: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
      marginTop:10,
    marginBottom: 10,
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
  
    marginTop: 8,
    marginLeft:180,
    color:'red'
  },
  textLabel:{
    alignSelf:'flex-start',
    marginLeft:30,
    fontWeight: "bold",
    marginTop:20,
    marginBottom:5,
  },
  textHeader:{
      fontSize:20,
      color:'white',
      fontFamily:'Arial',
      fontWeight: "bold",
  }
  
  
});
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
} from 'react-native';
import AppButton from '../../components/button/AppButton';
import TextButton from '../../components/button/TextButton';
import FormInput from '../../components/input/FormInput';

export default class Login extends React.Component {

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
        <View>
         
          <Text style={styles.heading}>Create Your Account</Text>
        </View>
      )
    }

    onRgsPress = () => {
      console.log("Here")
  }

    render(){
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                {this._renderHeader()}
                    
                    {/*Input to get the value from the user*/}
                    <FormInput
                        onChangeText={(username) => setUserName(username)}
                        placeholder={'Your Name'}
                        onChangeText={(name) => this.setState({name})}
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
    fontSize: 10,
    textAlign: 'center',
    marginVertical: 10,
  },
  
});
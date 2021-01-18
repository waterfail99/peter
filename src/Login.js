
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Log In</Text>
      <Image style={styles.image} source={require("./asseet/logo.png")} />

      <TextInput
        placeholder={'Email'}
        style={styles.inputStyle}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />

      <View style={[styles.inputStyle, { justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }]}>
        <TextInput
          placeholder={'Password'}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot?</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }} />
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default (Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 42,
    paddingTop: 32,
  },
  topBar: {
    flexDirection: 'row',
    width: '100%',
    height: 46,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  heading: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 52,
    marginBottom: 24,
  },
  image: {
    marginBottom: 40,
    width: 200,
    height: 200
  },
  inputStyle: {
    width: '100%',
    height: 44,
    marginVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#DBDBD6',
    borderRadius: 30,
  },
  forgot_button: {
    color: 'rgb(57, 131, 250)'
  },
  loginBtn: {
    width: "100%",
    borderRadius: 25,
    backgroundColor: "#009688",
    justifyContent: 'center',
    padding: 10
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center'
  }
});
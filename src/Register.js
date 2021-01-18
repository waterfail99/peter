// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Register({ navigation }) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>Log in</Text>
        </TouchableOpacity>
      </View>


      <Text style={styles.heading}>Create your account</Text>

      <TextInput
        placeholder={'Your Name'}
        style={styles.inputStyle}
        value={username}
        onChangeText={(username) => setUserName(username)}
      />

      <TextInput
        placeholder={'Email'}
        style={styles.inputStyle}
        value={email}
        autoCapitalize={'none'}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder={'Password'}
        style={styles.inputStyle}
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      {/* On click of the button we will send the data as a Json
          From here to the Second Screen using navigation */}

      <View style={{ flex: 1 }} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.RgsText}>Join Us</Text>
      </TouchableOpacity>

      <Text style={styles.smallText}>
        By pressing 'Join Us' you agree to
          {'\n'}
          our terms and conditions
        </Text>

    </View>
  );
};

export default Register;

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
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  heading: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 52,
    marginBottom: 24,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,

    marginVertical: 10,
  },
  inputStyle: {
    width: '100%',
    height: 44,
    marginVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#DBDBD6',
    borderRadius: 30,
  },
  button: {
    width: "100%",
    borderRadius: 25,
    backgroundColor: "#009688",
    justifyContent: 'center',
    padding: 10
  },
  smallText: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 8,
  },
  RgsText: {
    color: "white",
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
  }
});
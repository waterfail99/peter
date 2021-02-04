import React, { setFocus } from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  FontAwesomeIcon  from '@fortawesome/react-native-fontawesome';
import  {faEyeSlash, faEye}  from '@fortawesome/free-solid-svg-icons';


export default function Password(props) {
    
    const [focus, setFocus] = React.useState(props.focus);
    const [secureText, setSecure] = React.useState(props.secureText);
    <TextInput
        setFocus={focus}
        onChangeText={text => props.onChangeText(text)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={secureText} //we just added this
        style=
        {styles.input}
        placeholder={props.placeholder} />
        
    {
    props.secureText &&
    <FontAwesomeIcon style={{ paddingRight: 15, }}
    name={secureText ? faEyeSlash : faEye}
    size={20} color='gray' 
    onPress={() => setSecure(!secureText)} />
    }{
     !props.secureText &&
     <View style={{ paddingRight: 15, width: 30, height: 10 }} />
     } 
        
        return(
            <View>
            <TextInput
            onChangeText={(value) => console.log(value)}
            placeholder="Passwords"
            secureText={true} //we pass secure component to identify its password
            style={styles.input} //give custom styles
            /></View>
            )
}


const styles = StyleSheet.create({
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
});

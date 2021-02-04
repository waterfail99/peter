import React from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';


export default class FormInput extends React.Component {
    render(){
        return (
            <TextInput
                {...this.props}
                style={styles.input}
               
            ></TextInput>         
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: '45%',
        height: 38,
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        
        borderWidth: 1,
        borderColor: '#BDB7B7',
        
        
    },
})
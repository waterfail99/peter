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
            />         
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 55,
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 30,
        elevation: 15,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        
    },
})
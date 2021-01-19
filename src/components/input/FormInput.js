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
        width: '70%',
        height: 44,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#DBDBD6',
        borderRadius: 30,
    },
})
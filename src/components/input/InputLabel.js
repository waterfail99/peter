import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';

export default class InputLabel extends React.Component {
    render(){
        
        return (
            <View style={[styles.container, {...this.props.containerStyle}]}>
            <Text style={styles.textLabel}>{this.props.title}</Text>
            <TextInput  {...this.props} style={styles.input}></TextInput>
             </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:30,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 10,
    },
    title: {
        fontSize: 24,
        justifyContent:'center',
        fontWeight: "bold",
    },
    input: {
        width: '85%',
        height: 38,
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#BDB7B7',
    },
    textLabel:{
        alignSelf:'flex-start',
        marginLeft:30,
        fontWeight: "bold",
        marginTop:20,
        marginBottom:5,
        opacity:0.6,
      },
})
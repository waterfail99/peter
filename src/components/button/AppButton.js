import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

export default class AppButton extends React.Component {
    render(){
        return (
            <TouchableOpacity 
                onPress={this.props.onPress}
                style={[styles.container, {...this.props.containerStyle}]}>
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        borderRadius: 25,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#35EDC5",
    },
    title:{
        color:"white"
    }
})
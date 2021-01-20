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
        width: "85%",
        borderRadius: 4,
        
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: '#C22121',
    },
    title:{
        color:"white"
    }
})
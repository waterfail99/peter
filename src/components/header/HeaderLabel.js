import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View
} from 'react-native';

export default class HeaderLabel extends React.Component {
    render(){
        return (
            <View style={[styles.container, {...this.props.containerStyle}]}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={{opacity:0.5,margin:0}}>{this.props.subtitle}</Text>
             </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:30,
        justifyContent:'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        justifyContent:'center',
        fontWeight: "bold",
        
    },
})
import React from'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class ListDetails extends React.Component {
    render(){
        const { text, body } = this.props.route.params;
        return(
            <View style={{padding: 20}}>
                <Text style={{fontSize: 16, fontWeight: '700'}}>{text}</Text>
                <Text style={{marginTop: 8}}>{body}</Text>
            </View>
        )
    }
}
import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class PropsComponents extends React.Component {
    constructor(props){
        super(props);
        const { name, job } = this.props.route.params;
        this.state = {
            name,
            job,
        }
    }

    render(){
        const { name, job } = this.props.route.params;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{this.state.name}</Text>
                <Text>{this.props.route.params.name}</Text>
                <Text>{name}</Text>
            </View>
        )
    }
}
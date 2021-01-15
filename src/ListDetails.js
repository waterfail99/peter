import React from'react';
import {StyleSheet,View,Text} from 'react-native';
import {globalStyles} from '../styles/global';

export default function ListDetails({navigation}){
    return(
        <View style={golbaleStyles.container}>
            <Text>asasa</Text>
            <Text>{ navigation.getParam('body')}</Text>
        </View>
    )
}
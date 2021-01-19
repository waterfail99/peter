import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

export default class TextButton extends React.Component {
    render(){
        return (
            <TouchableOpacity style={[styles.container, {...this.props.containerStyle}]}>
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

// style = {
//     backgroundColor: 'red',
//     margin: 20,
// }

// style = {
//     backgroundColor: 'red',
//     containerStyle:{
//         margin: 20,
//     }
// }

// let address = {
//     number: '1277',
//     stress: 'JLN R3/2',
//     address: 'TMN TECHTICS'
// }

// let user = {
//     name: "Peter",
//     age: "22"
// }

// let combine1 = {user, address};
// combine1 = {
//     "user": {
//         name: "Peter",
//         age: "22"
//     },
//     "address": {
//         number: '1277',
//         stress: 'JLN R3/2',
//         address: 'TMN TECHTICS'
//     }
// }

// let combine2 = {
//     ...user,
//     ...address
// }
// combine2 = {
//     name: "Peter",
//     age: "22",
//     number: '1277',
//     stress: 'JLN R3/2',
//     address: 'TMN TECHTICS'
// }

const styles = StyleSheet.create({
    container: {
    },
    title: {},
})
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet }from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default class MethodButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { Method } = this.props;
		const { value } = this.state;

		return (
			<View>
                <View style={styles.container}>
				{Method.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
							<Text style={styles.radioText}>{res.text}</Text>
						</View>
					);
				})}</View>
	  </View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
       
        flexDirection: 'row',
        marginBottom:8
		
	},
    radioText: {
		marginLeft: 8,
		marginRight: 12,
        fontSize: 12,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 18,
		width: 18,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#A6BFD1',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 12,
		height: 12,
		borderRadius: 50,
		backgroundColor: '#25A1F9',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
	},
	headerText: {
		fontSize: 20,
		fontWeight: "bold"
	  },
	  menuContent: {
		color: "#000",
		fontWeight: "bold",
		padding: 2,
		fontSize: 20
	  },
	  menuContainer:{
		width: 150,
        height: 38,
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
		borderWidth: 1,
      },
      headerText:{
        opacity:0.6
    }
});
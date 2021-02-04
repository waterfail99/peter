import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet }from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default class Remarks extends Component {
	state = {
		value: null,
	};

	render() {
		const { Remark } = this.props;
		const { value } = this.state;
		return (
			<View>
				{Remark.map(res => {
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
				})}
	  </View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
        marginBottom: 15,
        flexDirection: 'row',
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
});
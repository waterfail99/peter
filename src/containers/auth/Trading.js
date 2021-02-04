import React, { Component,useState } from 'react';
import { View, StyleSheet,Text , TouchableOpacity} from 'react-native';
import RadioButton from './RadioButton';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            DATA: [
                {id:'1', name:'USDT',selected:false},
                {id:'2', name:'BTC',selected:false},
                {id:'3', name:'ETH',selected:false},
               

            ]
        }
    }
render(){
    return(
        <View style={styles.container}>
            <View style ={styles.containerHeader}>
            <Text>Asset</Text>
            </View>
            {
                this.state.DATA.map((item,index)=>{
                    return(<View>
                        <TouchableOpacity onPress= {()=>{
                            const asset = this.state.DATA;
                            if(asset.some(item => {if (item.selected) return true}));
                                
                        }}/>
                    
                        
                    <TouchableOpacity key={item.id} style={styles.radioCircle}/>
                    <Text style={styles.radioText}>{item.name}</Text>
                    </View>
                    )
                })
            }
        </View>

    )
}
}


const styles = StyleSheet.create({
    containerHeader:{
        flex:1,

    },
	container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-around',
	},
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});
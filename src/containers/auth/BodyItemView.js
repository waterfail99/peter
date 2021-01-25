import React, { Component } from 'react';  
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    View
} from 'react-native';  

class BodyItemView extends Component {

    
    render(){
        let item = this.props.item;
        console.log("Props: ", this.props)    
        return (
            <View style={styles.container}
                onPress={() => this.props.onItemPress(item)}>
                    
                <Text style={{ fontSize:18, marginBottom: 4}}>{item.coin} / {item.base}</Text>

                <KeyValueView
                    titleColor={'#76D7C4'}
                    valueColor={'#76D7C4'}
                    title={'Last Price'}
                    value={`${item.last.toFixed(item.decimal)} USD`}
                />

                <KeyValueView
                    titleColor={'#76D7C4'}
                    valueColor={item.change > 0?'green':'red'}
                    title={'24h Change'}
                    value={`${item.change.toFixed(2)} %`}
                />

                <KeyValueView
                    title={'24h High'}
                    value={`${item.high.toFixed(item.decimal)} USD`}
                />

                <KeyValueView
                    title={'24h Low'}
                    value={`${item.low.toFixed(item.decimal)} USD`}
                />

                <KeyValueView
                    title={'24h Volume'}
                    value={`${item.volume.toFixed(item.decimal)} USD`}
                />
               
                <View style={{alignItems: 'flex-end', marginTop: 12}}>
                    <TouchableOpacity style={styles.tradeContainer}>
                        <Text style={styles.trade}>Trade</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const KeyValueView = (props) => {
    return (
        <View style={styles.keyValueContainer}>
            <Text style={[styles.keyTitle, {color: props.titleColor}]}>{props.title}</Text>
            <Text style={{color: props.valueColor}}>{props.value}</Text>
        </View>
    )
}
  
const styles = StyleSheet.create({  
    container: {  
        flex:1,
        padding:12,
        backgroundColor: '#F9F9F9',
        borderWidth: 0.8,
        borderColor: '#BDB7B7',
    }, 
    keyValueContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    keyTitle:{
        color:'#76D7C4',
        fontSize:15,
    },
    tradeContainer:{
        borderRadius: 4,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F9F9F9',
        marginTop:5,
        borderWidth: 0.5,
        borderColor: '#BDB7B7',
        
      },
      trade:{
        paddingHorizontal: 12,
        paddingVertical: 6,  
        color:"#85C1E9",
        fontSize: 16,
        fontWeight:'bold'
      },
})  
  
export default BodyItemView;
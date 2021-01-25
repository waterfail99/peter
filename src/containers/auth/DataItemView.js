import React, { Component } from 'react';  
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    View,
    NumberFormat 
} from 'react-native';  

class DataItemView extends Component {
    render(){
        let item = this.props.item
        
        console.log("Props: ", item)
        
        let changeColor = Number(item.change)>0 ? 'green' : 'red';
        
        // let decimalNum = TwoDecimalPlaces(item.volume).split(".").length>=2? : digit;
        // let decimalNum = decimalNum(item.volume.toFixed(2))
        // let ConTwoDecDigit=(item)=>{
        //     return item.volume.indexOf(".")>0?
        //             item.volume.split(".").length>=2?
        //              item.volume.split(".")[0]+"."+item.volume.split(".")[1].substring(-1,2)
        //             : item.volume
        //            : item.volume
        //   }

        return (
            
            <TouchableOpacity style={styles.item}
            
                onPress={() => this.props.onItemPress(item)}>
                    
                <Text style={styles.textStyle}>{item.coin}</Text>
                <View style={styles.textStyle}>
                <Text  style={{color: changeColor,fontSize:20} }>{this.props.item.price}</Text>
                {/* <NumberFormat renderText={text => <Text>{text}</Text>} value={item.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> */}
                <Text style={styles.textBlur}>  {this.props.item.price}</Text>
                </View>
                <View style={styles.textStyle}>
                <Text style={{color: changeColor}}>{item.change.toFixed(2)}%</Text>
                <Text style={styles.textBlur2}>{item.volume.toFixed(2)}</Text> 
                </View>
            </TouchableOpacity>
        )
    }
}
  
const styles = StyleSheet.create({  
    container: {  
      flex: 1,
    },  
    item: {  
      padding: 15,
      marginBottom: 5,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#BDB7B7',
      height:90,
    }, 
    textStyle:{
        flexDirection: 'row',
        
    },
    textRed:{
        color:'red',
        fontSize:20,
    },
    textBlue:{
        color:'skyblue',
        alignItems:'flex-start',
        
    },
    textBlur:{
        fontSize:15,
        color:'#ABB2B9',
        marginLeft:20
        
        
    },
    textBlur2:{
        fontSize:15,
        color:'#ABB2B9',
        marginLeft:40
        
    }
})  
  
export default DataItemView;
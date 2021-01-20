import React, { Component } from 'react';  
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    View
} from 'react-native';  

class DataItemView extends Component {
    render(){
        let item = this.props.item;
        console.log("Props: ", this.props)
        
        return (
            <TouchableOpacity style={styles.item}
                onPress={() => this.props.onItemPress(item)}>
                    
                <Text style={styles.textStyle}>{item.text}</Text>
                <View style={styles.textStyle}>
                <Text style={styles.textRed}>{this.props.item.body}</Text>
                <Text style={styles.textBlur}>     {this.props.item.ringgit}</Text>
                </View>
                <View style={styles.textStyle}>
                <Text style={styles.textBlue}>{this.props.item.percentage}</Text>
                <Text style={styles.textBlur}>    {this.props.item.Vol}</Text>
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
        color:'skyblue'
    },
    textBlur:{
        fontSize:15,
        color:'#ABB2B9',
        
    }
})  
  
export default DataItemView;
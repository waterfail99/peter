import React, { Component } from 'react';  
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity,
} from 'react-native';  

class DataItemView extends Component {
    render(){
        let item = this.props.item;
        console.log("Props: ", this.props)
        
        return (
            <TouchableOpacity 
                onPress={() => this.props.onItemPress(item)}>
                <Text style={styles.item}>{item.text}</Text>
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
      backgroundColor: 'skyblue'
    },  
})  
  
export default DataItemView;
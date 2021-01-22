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
            
            <View style={styles.item}

        
                onPress={() => this.props.onItemPress(item)}>
                    
                    
                <Text style={{fontSize:18}}>{item.body}</Text>
                <View style={styles.textStyle}>
               
                <Text style={styles.textLeftBlue}>{this.props.item.leftone}</Text>
               
                <Text style={styles.textBlur}> {this.props.item.rightone} {this.props.item.rightone2}</Text>
                
                </View>

                <View style={styles.textStyle}>
                <Text style={styles.textLeftBlue}>{this.props.item.lefttwo}</Text>
                
                <Text style={{fontSize:15,color:'#76D7C4',flex:1,  lineHeight: 30, textAlign:'right'}}>     {this.props.item.righttwo}</Text>
                </View>

                <View style={styles.textStyle}>
                <Text style={styles.textRed}>{this.props.item.leftthree}</Text>
                
                <Text style={styles.textBlack}>     {this.props.item.rightthree}</Text>
                </View>

                <View style={styles.textStyle}>
                <Text style={styles.textRed}>{this.props.item.leftfour}</Text>
                
                <Text style={styles.textBlack}>     {this.props.item.rightfour}</Text>
                </View>

                <View style={styles.textStyle}>
                <Text style={styles.textRed}>{this.props.item.leftfive}</Text>
                
                <Text style={styles.textBlack}>     {this.props.item.rightfive}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonClick} title="Button 2"
                    ><Text style={styles.buttonColor}>Trade</Text>
                    </TouchableOpacity>
                  </View>
            </View>
        )
    }
}
  
const styles = StyleSheet.create({  
    container: {  
      flex: 1,
    },  
    item: {  
        padding:15,
        flex:1,
        backgroundColor: '#F9F9F9',
        height:280,
        borderWidth: 0.8,
        borderColor: '#BDB7B7',
    }, 
    textStyle:{
        flexDirection: 'row',
    
    },
    textLeftBlue:{
        color:'#76D7C4',
        fontSize:15,
       
    },
    textBlue:{
        color:'skyblue',
        fontSize:15,
        
    },
    textBlur:{
        fontSize:15,
        color:'#ABB2B9',
        flex:1,  
        lineHeight: 30, 
        textAlign:'right'
       
    },
    textBlack:{
        fontSize:15,
        color:'black',
        flex:1,  
        lineHeight: 30, 
        textAlign:'right'
    },
    bodyContainer:{
        
      },
      buttonClick:{
        height:40,
        borderRadius: 4,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F9F9F9',
        width:120,
        marginTop:5,
        borderWidth: 0.5,
        borderColor: '#BDB7B7',
        
      },
      buttonColor:{
        color:"#85C1E9",
        fontSize:20,
        fontWeight:'bold'
      },
      buttonContainer:{
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
})  
  
export default BodyItemView;
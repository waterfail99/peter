import React, { Component } from 'react';  
import { StyleSheet, Text, SafeAreaView,View,Button, ScrollView ,FlatList, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DataItemView from './DataItemView';
import BodyItemView from './BodyItemView';

const DATA_LIST = [  
  { id: 0, text: 'BTC / USDT',body:"11,103.10",ringgit:"MYR 47,743.717",percentage:"+7.29%",Vol:"Vol 0.34 USDT" },
  { id: 1, text: 'BTC / USDT',body:"11,103.10",ringgit:"MYR 47,743.717",percentage:"+7.29%",Vol:"Vol 0.34 USDT"},
  { id: 2, text: 'BTC / USDT',body:"11,103.10",ringgit:"MYR 47,743.717",percentage:"+7.29%",Vol:"Vol 0.34 USDT"},
  { id: 3, text: 'BTC / USDT',body:"11,103.10",ringgit:"MYR 47,743.717",percentage:"+7.29%",Vol:"Vol 0.34 USDT" }
  
];
const Data_List_2 = [
  { id:0,
    body:'BTC / USDT',
    leftone:"Last Price", rightone:"11.105.83 ",rightone2:"/ 11,104.00 USD",
    lefttwo:"24h Change", righttwo:"-0.35%",
    leftthree:"24h High", rightthree:"11,180.00",
    leftfour:"24h Low",   rightfour:"10,812.00",
    leftfive:"24h Volume",rightfive:"125.0",
  },
  { id:1,
    body:'BTC / USDT',
    leftone:"Last Price", rightone:"11.105.83 / 11,104.00 USD",
    lefttwo:"24h Change", righttwo:"-0.35%",
    leftthree:"24h High", rightthree:"11,180.00",
    leftfour:"24h Low",   rightfour:"10,812.00",
    leftfive:"24h Volume",rightfive:"125.0",
  },
  { id:2,
    body:'BTC / USDT',
    leftone:"Last Price", rightone:"11.105.83 / 11,104.00 USD",
    lefttwo:"24h Change", righttwo:"-0.35%",
    leftthree:"24h High", rightthree:"11,180.00",
    leftfour:"24h Low",   rightfour:"10,812.00",
    leftfive:"24h Volume",rightfive:"125.0",
  },
];
class Scrolling extends Component  {
  onItemPress = (item) => {  
    // this.props.navigation.navigate("ListDetails", item)
    // Alert.alert(item.text, item.body);
}
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} >
          
          <View style={{marginHorizontal: 20,marginTop:10}}>
                  <FlatList  
                      data={DATA_LIST}  
                      renderItem={({item}) =>  
                          <DataItemView
                              item={item}
                              onItemPress={this.onItemPress}
                          />
                         
                      }  
                  />  
          </View>
                <ScrollView horizontal={true}>
                  <View style={styles.secondContainer}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                    style={styles.buttonHorizontal}
                    
                    >
                      <Text>Favourities</Text>
                    </TouchableOpacity>
                  
                  </View>
          
                  
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonHorizontal} title="Button 2"
                    ><Text>USDT Markets</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonHorizontal} title="Button 3"
                    ><Text>BTC Markets</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonHorizontal} title="Button 4"
                    ><Text>ETH Markets</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                </ScrollView>
              
              
              <View  style={styles.bodyContainer}>
                
              
              <FlatList  
                      data={Data_List_2}  
                      renderItem={({item}) =>  
                          <BodyItemView
                              item={item}
                              onItemPress={this.onItemPress}
                          />
                         
                      }  
                  />  
              </View>
              
        </ScrollView>
        
        
      </SafeAreaView>
    );
  }  
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEBEB',
    
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft:10
    
  },
  
  scrollView: {
    backgroundColor: '#ECEBEB'
    
  },
  text: {
    fontSize: 42,
  },
  buttonContainer: {
    flex: 1,
    
  },
  buttonHorizontal:{
    height:40,
    borderRadius: 4,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F9F9F9',
    width:120,
    margin:10,
    borderWidth: 0.5,
    borderColor: '#BDB7B7',
    
  }
});

export default Scrolling;
import React, { Component } from 'react';  
import { StyleSheet, Text, SafeAreaView,View,Button, ScrollView ,FlatList, Touchable, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DataItemView from './DataItemView';
import BodyItemView from './BodyItemView';

const DATA_LIST = [  
  { base: 'USDT', coin: 'BTC', price: 35083.62, change: 0.65, volume: 23728.33, high: 36360.16, low: 33410, last: 34941.11, decimal: 2, priority: 1, isFeature: true},
  { base: 'USDT', coin: 'EOS', price: 2.7460, change: 2.59, volume: 23597095, high: 2.8116, low: 2.656, last: 2.74, decimal: 4, priority: 5, isFeature: true},
  { base: 'USDT', coin: 'ETH', price: 1352.65, change: -3.16, volume: 668705.38, high: 1402.24, low: 1235.71, last: 1354, decimal: 2, priority: 3, isFeature: false},
  { base: 'USDT', coin: 'BNB', price: 42.0999, change: -0.76, volume: 591269.34, high: 42.6872, low: 40.2, last: 42.15, decimal: 4, priority: 2, isFeature: true},
  { base: 'USDT', coin: 'XRP', price: 0.29217, change: 2.2, volume: 833009945.7, high: 0.31184, low: 33410.00, last: 0.28, decimal: 5, priority: 4, isFeature: false},

]
DATA_LIST.sort((a, b) => (a.priority > b.priority) ? 1 : -1)






const Data_List_2 = [
  { id:0,
    body:'USDT',
    leftone:"BTC", rightone:"35083.62 ",
    lefttwo:"24h Change", righttwo:0.65,
    leftthree:"24h High", rightthree:"36360.16",
    leftfour:"24h Low",   rightfour:"33410",
    leftfive:"24h Volume",rightfive:"23728.33",
  },
  { id:1,
    body:'USDT',
    leftone:"EOS", rightone:"2.7460",
    lefttwo:"24h Change", righttwo:-2.59,
    leftthree:"24h High", rightthree:"2.8116",
    leftfour:"24h Low",   rightfour:"2.656",
    leftfive:"24h Volume",rightfive:"23597095",
  },
  { id:2,
    body:'USDT',
    leftone:"ETH", rightone:"1352.65",
    lefttwo:"24h Change", righttwo:-3.16,
    leftthree:"24h High", rightthree:"1402.24",
    leftfour:"24h Low",   rightfour:"1235.71",
    leftfive:"24h Volume",rightfive:"668705.38",
  },
  { id:3,
    body:'USDT',
    leftone:"BNB", rightone:"42.0999",
    lefttwo:"24h Change", righttwo:-0.76,
    leftthree:"24h High", rightthree:"42.6872",
    leftfour:"24h Low",   rightfour:"40.2",
    leftfive:"24h Volume",rightfive:"591269.34",
  },
  { id:4,
    body:'USDT',
    leftone:"XRP", rightone:"0.29217",
    lefttwo:"24h Change", righttwo:2.2,
    leftthree:"24h High", rightthree:"0.31184",
    leftfour:"24h Low",   rightfour:"33410.00",
    leftfive:"24h Volume",rightfive:"833009945.7",
  },
];
class Scrolling extends Component  {
  onItemPress = (item) => {  
    // this.props.navigation.navigate("ListDetails", item)
    // Alert.alert(item.text, item.body);
   
}

onFravouritePress=()=>{
Alert.alert('hello');
}

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} >
          
          <View style={{marginHorizontal: 20,marginTop:10}}>
            
                  <FlatList  
                      data={DATA_LIST.slice(0,5)}  
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
                    style={styles.buttonHorizontal} onFravouritePress={this.onFravouritePress()}>
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
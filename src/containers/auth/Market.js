import React, { Component } from 'react';  
import { 
    StyleSheet, 
    Text, 
    SafeAreaView,View,
    ScrollView,
    FlatList, 
    TouchableOpacity, 
} from 'react-native';
import DataItemView from './DataItemView';
import BodyItemView from './BodyItemView';
const DATA_LIST = [  
  { base: 'USDT', coin: 'BTC', price: 35083.62, change: 0.65, volume: 23728.33, high: 36360.16, low: 33410, last: 34941.11, decimal: 2, priority: 1, isFeature: true},
  { base: 'USDT', coin: 'EOS', price: 2.7460, change: 2.59, volume: 23597095, high: 2.8116, low: 2.656, last: 2.74, decimal: 4, priority: 5, isFeature: true},
  { base: 'USDT', coin: 'ETH', price: 1352.65, change: -3.16, volume: 668705.38, high: 1402.24, low: 1235.71, last: 1354, decimal: 2, priority: 3, isFeature: false},
  { base: 'USDT', coin: 'BNB', price: 42.0999, change: -0.76, volume: 591269.34, high: 42.6872, low: 40.2, last: 42.15, decimal: 4, priority: 2, isFeature: true},
  { base: 'USDT', coin: 'XRP', price: 0.29217, change: 2.2, volume: 833009945.7, high: 0.31184, low: 33410.00, last: 0.28, decimal: 5, priority: 4, isFeature: false},
]

const OPTIONS = [
    {
        symbol: '',
        title: "Favourites"
    },
    {
        symbol: 'USDT',
        title: "USDT Markets"
    },
    {
        symbol: 'BTC',
        title: "BTC Markets"
    },
    {
        symbol: 'ETH',
        title: "ETH Markets"
    }
]

class Market extends Component  {

    constructor(props){
        super(props);
        this.state={
            priorityPairList: [],
            filterOptions: [],

            originalPairList: [],
            filterPairList: [],

            selectedOption: null,
        }
    }

    componentDidMount(){
        let priorityPairList = [];
        priorityPairList = DATA_LIST.sort((a, b) => (a.priority > b.priority) ? 1 : -1);
        priorityPairList = priorityPairList.slice(0, 4);
        this.setState({priorityPairList});

        this.setState({filterOptions: OPTIONS});

        this.setState({
            originalPairList: DATA_LIST,
            filterPairList: DATA_LIST,
        })

        this.setState({selectedOption: OPTIONS[0]}, () => {
            this.filterPairList()
        });
        
        
    }

    componentDidUpdate(){
    }

    onItemPress = (item) => {  

    }

    onFilterPress(option){
        this.setState({selectedOption: option}, () => {
            this.filterPairList()
        });
    }

    filterPairList(){
        const { originalPairList, selectedOption } = this.state;
        let filterPairList = [];
        if(selectedOption.symbol.length === 0){
            filterPairList = originalPairList.filter((pair) => {
                return pair.isFeature
            });
        } else {
            filterPairList = originalPairList.filter((pair) => {
                return pair.base === selectedOption.symbol
            })
        }

        this.setState({filterPairList})
    }

    _renderHeader(){
        return(
            <View>
                {/* <FlatList  
                    data={this.state.priorityPairList}  
                    renderItem={({item}) =>
                        <DataItemView
                            item={item}
                            onItemPress={this.onItemPress}
                        />
                    }  
                />   */}
                <View style={{padding: 8}}>
                    {this.state.priorityPairList.map((pair, index) => {
                        return (
                            <DataItemView
                                item={pair}
                                index={index}
                                onItemPress={this.onItemPress}
                            />
                        )
                    })}
                </View>

                <ScrollView 
                    style={{paddingHorizontal: 8, paddingBottom: 8}}
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    <View style={styles.filterContainer}>
                        {this.state.filterOptions.map((option, index) => {
                            let isSelected = option === this.state.selectedOption;
                            let color = isSelected?'white':'black';
                            let backgroundColor = isSelected?'blue':'white';
                            return (
                                <TouchableOpacity 
                                    onPress={() => this.onFilterPress(option)}
                                    style={[styles.filter, {backgroundColor}]} 
                                    key={`${option}${index}`}>
                                    <Text style={{color}}>{option.title}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        )
    }

    render(){
        return (
        <SafeAreaView style={styles.container}>
             <FlatList  
                data={this.state.filterPairList}  
                ListHeaderComponent={this._renderHeader()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>  
                    <BodyItemView
                        item={item}
                        onItemPress={this.onItemPress}
                    />
                }  
                keyExtractor={(item, index) => {`${index}${item}`}}/>  
        </SafeAreaView>
        );
    }  
}
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECEBEB',
    },
    filterContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 4,
    },
    buttonContainer: {
        flex: 1,
    },
    filter:{
        height:40,
        borderRadius: 4,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F9F9F9',
        width: 120,
        marginRight: 8,
        borderWidth: 0.5,
        borderColor: '#BDB7B7',
    }
});

export default Market;
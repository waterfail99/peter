import React, { Component } from 'react';  
import { 
    AppRegistry, 
    FlatList,  
    StyleSheet, 
    Text, 
    TouchableOpacity,
    View,
    Alert 
} from 'react-native';  
import DataItemView from './DataItemView';
  
const DATA_LIST = [  
    { id: 0, text: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',body:'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' },
    { id: 1, text: 'qui est esse',body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui"},
    { id: 2, text: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},
    { id: 3, text: 'eum et est occaecati',body:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit" },
    { id: 4, text: 'nesciunt quas odio',body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}
  ];

// class DataItemView extends Component {
//     render(){
//         let item = this.props.item;
        
//         return (
//             <TouchableOpacity onPress={() => this.props.onItemPress(item)}>
//                 <Text style={styles.item}>{item.text}</Text>
//             </TouchableOpacity>
//         )
//     }
// }

class List extends Component {  

    onItemPress = (item) => {  
        this.props.navigation.navigate("ListDetails", item)
        // Alert.alert(item.text, item.body);
    }

    render() {  
        return (
            <View style={styles.container}>  
                <FlatList  
                    data={DATA_LIST}  
                    renderItem={({item}) =>  
                        <DataItemView
                            item={item}
                            onItemPress={this.onItemPress}
                        />
                        // <TouchableOpacity onPress={() => this.onItemPress(item)}>
                        //     <Text style={styles.item}>{item.text}</Text>
                        // </TouchableOpacity>
                    }  
                />  
            </View>  
        );  
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


  
export default List;
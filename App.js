// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     FlatList,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
//     Alert
// } from 'react-native';
// import AppNavigator from './src/AppNavigator';
// import Login from './src/Login';
// import Register from './src/Register';

// const DATA_LIST = [  
//     { id: 0, text: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',body:'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' },
//     { id: 1, text: 'qui est esse',body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui"},
//     { id: 2, text: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},
//     { id: 3, text: 'eum et est occaecati',body:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit" },
//     { id: 4, text: 'nesciunt quas odio',body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}
//   ];

// class DataItemView extends Component {
//     render(){
//         return (
//             <Text style={styles.item} onPress={this.props.onItemPress}>{this.props.item.text}</Text>
//         )
//     }
// }

// class CountDetails extends Component {
//     constructor(props){
//         super(props);
//         console.log("Props: ", this.props);
//     }
//     render(){
//         return (
//             <View>
//                 <Text></Text>
//             </View>
//         )
//     }
// }

// export default class FlatListBasics extends Component {  

//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0,
//         }
//     }

//     onItemPress = (item) => {  
//         Alert.alert(item.text,item.body);
//     }

//     render() {  
//         const { count } = this.state;
//         return (
//             <View style={styles.container}>  
//                 <TouchableOpacity onPress={() => this.setState({count: count+1})}>
//                     <Text>Touch Me</Text>
//                 </TouchableOpacity>
//                 <Text>Current Count: {count}</Text>

//                 <TouchableOpacity onPress={() => {console.log("Navigation: ", this.props)}}>
//                     <Text>Click me to pass the count</Text>
//                 </TouchableOpacity>
//                 {/* <FlatList  
//                     data={DATA_LIST}  
//                     renderItem={({item}) =>  {
//                         return <DataItemView/>
//                     }}  
//                 />   */}
//             </View>  
//         );  
//     }  
// }  

// const styles = StyleSheet.create({  
//     container: {  
//       marginTop: 20,
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },  
//     item: {  
//       padding: 15,
//       marginBottom: 5,
//       backgroundColor: 'skyblue'
//     },  
// })  


import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/Login';
import Register from './src/Register';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                {/* {props => <Login {...props} />}
                </Stack.Screen> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
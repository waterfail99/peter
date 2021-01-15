import * as React from 'react';
import { 
    Button, 
    View, 
    Text 
} from 'react-native';

function Home({navigation}) {
    let  user = {name: "Peter", job: "Programmer"};
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Go to Props"
        onPress={() => navigation.navigate('PropsComponents', user)}
      />

      <Button
        title="Go to List"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}

export default Home;
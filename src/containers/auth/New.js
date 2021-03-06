import React, { Component } from 'react';
import { View, StyleSheet,Text,Picker,ScrollView, TextInput} from 'react-native';
import RadioButton from './RadioButton';
import MethodButton from './MethodButton';
import FormInput from '../../components/input/FormInput'
import AppButton from '../../components/button/AppButton'
import Remarks from './Remarks'
// import Picker from '@react-native-community/picker'
import NumericInput from 'react-native-numeric-input'

const PROP = [
	{
		key: '1',text: 'USDT',
  },
  {
		key: '2',text: 'BTC',
  },
  {
		key: '3',	text: 'ETH',
	},
];

const Method = [
	{
		key: 'Bank Acc',text: 'Bank Account',
	},
	{
		key: 'WeChat Pay',text: 'WeChat Pay',
	},
	{
		key: 'Ali Pay',text: 'Ali PAy',
    },
];
    
const Remark = [
	{
		key: 'please',text: 'Please use instant Transfer',
	},
	{
		key: 'do not',text: 'Do not state BTC, ETH, USDT, Crypto in reference',
	},
];


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text:'',
          pickervalue:'',
          pickertime:'',
          volume:'',
          currency:'',
          radioValue:'',
          value:'',
          min:'',
          max:'',
          PROP:'',
          key:''
        };
      }
       onAllPress = () =>{
         const {currency,volume,value,pickervalue,radioValue,min,max,pickertime,text,PROP} = this.state;
        console.log(currency,volume,value,pickervalue,radioValue,min,max,pickertime,text,PROP)
      }
  render() {
    console.log(this.state)
    return (
    <ScrollView style={styles.container}>
        <View style={styles.headerText}>
          <Text>Asset</Text>
        </View>

        <View style={styles.containerRadio}>
          <RadioButton PROP={PROP} 
            onPress={key => this.setState({key})}
          />
        </View>

        <View style={styles.input}>
        <Picker
            style={{width:150,borderWidth: 1,borderColor:'black'}}
            selectedValue={this.state.pickervalue}
            onValueChange={(itemValue,itemIndex) => this.setState({
              pickervalue:itemValue
          })}>
        <Picker.Item label="MYR" value="MYR"/>
        <Picker.Item label="USD" value="USD"/>
        </Picker>
        </View>

        <View style={styles.borderLine}/>

        <View style={styles.containerRow}>
          <LabelCurrency  
          title='Market Price'
          value='RM4.14'
          />
          <LabelCurrency  
          title='Apprioximate Price'
          value='RM4.22'
          /></View>

        <View style={styles.headerText}>
          <Text>Margin</Text>
        </View>

        <NumericInput onChange={value => this.setState({value})}/>
        
        <View style={styles.borderLine}/>

        <View style={styles.headerText}>
          <Text>Volume</Text>
        </View>

        <FormInput 
          onChangeText={(volume) => this.setState({volume})}
          ><Text style={{marginRight:40}}>0 </Text><Text editable={false} selectTextOnFocus={false}>USDT</Text>
        </FormInput>

        <View style={styles.headerText}>
          <Text>Order Limit</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <FormInput onChangeText={(min) => this.setState({min})}></FormInput>
          <Text style={{fontSize:24}}> ~ </Text>
          <FormInput><Text>MYR</Text><Text>100</Text></FormInput>
        </View>

        <View style={styles.borderLine}/>

        <View style={styles.headerText}>
          <Text>Payment Method</Text>
        </View>

        <View style={styles.containerRadio}>
          <MethodButton Method={Method} />
        </View>

        <View style={styles.headerText}>
          <Text>Minutes</Text>
        </View>
        <Picker
          style={{width:150,borderWidth: 1,borderColor:'black'}}
          selectedValue={this.state.pickertime}
          onValueChange={(itemValue,itemIndex) => this.setState({
              pickertime:itemValue
          })}>
        <Picker.Item label="20 min" value="20 min"/>
        <Picker.Item label="30 min" value="30 min"/>
        </Picker>

        <View style={styles.borderLine}/>

        <View style={styles.headerText}>
          <Text>Remarks</Text>
        </View>

        <View style={styles.containerRadio}>
          <Remarks Remark={Remark} />
        </View>

        <View style={styles.headerText}>
          <Text>Others</Text>
        </View>

        <TextInput
          style={styles.textField}
          onChangeText={(text) => this.setState({text})}
        />
        <AppButton
          style={{width:40}}
          title='Submit'
          onPress={()=>this.onAllPress()}
        />
        </ScrollView>
    );
  }
}
const LabelCurrency= (props) => {
  return (
      <View style={styles.containerColumn}>
          <Text>{props.title}</Text>
          <Text style={styles.largeText}>{props.value}</Text>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    marginBottom:12
  },
  containerRadio:{
    flexDirection:'row',
  },
  headerText:{
    opacity:0.6,
    marginBottom:12,
    marginTop:8
  },
  containerColumn:{
    flexDirection:'column',
    marginRight:40
  },
  containerRow:{
    flexDirection:'row',
    marginBottom:8
  },
  largeText:{
    fontSize:24,
    fontWeight:'bold'
  },
  input: {
    width: 150,
    borderWidth: 1,
    borderColor: '#BDB7B7',
  },
  borderLine:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    opacity:0.3, 
    marginBottom:8,
    marginTop:8
  },
  textField:{
    height: 100,
    width:280, 
    borderColor: 'gray',
    borderWidth: 1 
  },
});
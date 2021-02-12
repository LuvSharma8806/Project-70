import React from 'react';
import {Text,View,TextInput} from 'react-native';
import {Header} from 'react-native-elements';

export default class fb extends React.Component{
    constructor() {
        super();
        this.state = {
          text: '',
        };
      }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
          text: 'Monkey Chunky',
          style: { color: '#fff', fontSize: 20 },
          }}
        />

  <TextInput style={styles.inputBox}
  onChangeText={text => {
  this.setState({ text: text });
  }}
value={this.state.text}/>
  <View>
  <TextInput style={styles.inputBox}
  onChangeText={text => {
  this.setState({ text: text });
  }}
value={this.state.text}/>
      </View>
      <View>
      <TextInput style={styles.inputBox}
  onChangeText={text => {
  this.setState({ text: text });
  }}
value={this.state.text}/>
          </View>            
  </View>
    )
  }
}

const styles = StyleSheet.create({
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    }
})
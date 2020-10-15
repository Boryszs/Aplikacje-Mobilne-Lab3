/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { flag: false }
  }

  onPress = () => {
    this.setState({
      flag: this.state.flag===false ? this.state.flag=true:this.state.flag=false
    })
  }

 render() {
   return (
     <View style={styles.container}>
        <Text style={[styles.Text]}> Zadanie 2 </Text>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}> 
         <Text>  { this.state.flag === true ? 'Ukryj': 'Pokaz'} </Text>
       </TouchableOpacity>
       <View style={[styles.countContainer]}>
            { this.state.flag === true ?<Text> <Text style={[styles.Text]}>{'Nazywam sie'}</Text> 
            <Text style={[styles.TextB]}>{'\n Damian  Mierzynski'}</Text> </Text> : null}  
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    textAlign:'center',
    fontSize: 32
    
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  Text: {
    fontSize:22 ,
    textAlign:"center",
    color: '#000000'
  },
  TextB: {
    fontWeight:"bold",
    textAlign:"center",
    fontSize:16 ,
    color: '#000000'
  }
})
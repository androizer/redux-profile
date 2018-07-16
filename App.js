/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// UI elements
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name: 'Text'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={{width: '100%', height: '100%'}} source={{uri: 'https://images.unsplash.com/photo-1529405147636-6aaa3abe9536?ixlib=rb-0.3.5&s=773ad0b45eb480a9bd58fb783c59b412&auto=format&fit=crop&w=1866&q=80'}}>
        <View style={styles.view1}>
          <Text style={styles.fontStyle}>RUSSIA WORLD CUP</Text>
          <Text style={styles.numberFont}>2018</Text>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.touchable}>
          <View style={{width:'20%',flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:40,height:40,paddingRight: 30}} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/240px-F_icon.svg.png'}}/>
           </View>
           <View style={{width:'80%', borderLeftWidth:1,borderLeftColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <Text style={styles.text}>Connect to facebook!</Text>
           </View>
           
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  view1: {
    // borderColor:'red',
    // borderWidth:2,
    justifyContent:'center',
    alignItems:'center',
    flex: 0.8
  },
  view2: {
    // borderColor: 'orange',
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  fontStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color:"#fff",
    marginBottom: 0
  },
  numberFont: {
    fontSize: 64,
    marginTop: 0,
    fontWeight: '700',
    color:"#fff"
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#395A9A',
    width:'80%',
    borderRadius: 8,
    height:50
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  }
});

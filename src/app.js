import React, { Component } from 'react';

// UI elements
import {
    Platform,
    StyleSheet,
    View,
    Image,
    TextInput,
    FlatList,
    RefreshControl,
    Alert
  } from 'react-native';

  import UserInfo from './components/UserInfo';
  import Users from '../seed';
  import StackNaviagtor from '../src/components/stackNavigator';

export default class App extends Component {
    constructor(props){
        super();
        this.state = {
            users: [...Users],
            refreshing: false,
            searchText: '',
            refresh: false
        }

    }


renderUserInfo = ({item}) => (
    <UserInfo name={item.name} address={item.address} designation={item.designation} avatar={item.avatar}/>
)

onTextChange(text) {
    this.setState({searchText: text});
    if (text == '') {
        this.setState({
            users: [...Users],
            refresh: !this.state.refresh
        })
    } else {
        var arr = [];
        Users.forEach((element, index) => {
            if (this.includesExpression(element.name, text) || this.includesExpression(element.address, text) || this.includesExpression(element.designation, text)) {
                arr.push(element);
            }
        })
        this.setState({
            users: [...arr],
            refresh: !this.state.refresh
        })
    }
}

includesExpression(attribute, text) {
    if (attribute.toLowerCase().includes(text.toLowerCase())) {
        return true;
    }
    return false;
}


onRefresh() {
    this.setState({refreshing: true});
    setTimeout(() => {
        this.setState({
            users: this.state.users.splice()
        })
        setTimeout(() => {
            this.setState({
                users: [...Users],
                refreshing: false
            })
        }, 50);
    }, 1800);
}

renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

    render() {
        return(
            <StackNaviagtor/>
        );
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  childView1: {
    borderColor: 'orange',
    borderWidth: 0
  },
  childView2: {
    borderTopColor: 'grey',
    borderTopWidth: 1,
    flexDirection: 'column',
    borderColor:'red',
    borderWidth:0,
    flex:1,
    justifyContent: 'space-evenly'
  },
  avatar: {
      height: 100,
      width: 100,
      borderRadius: 50
  }
});

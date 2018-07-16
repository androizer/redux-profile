import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  import UserInfo from '../components/UserInfo';
  import Users from '../../seed';
  import { addUser, setSearchText } from '../store/actions/userActions';
  import configureStore from '../store/configStore';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[],
            refresh: false,
            refreshing: false
        }
    }

    componentWillMount() {
        this.props.onAddUser(Users);
        console.log(this.props.users);
        let {users} = this.props;
        console.log("cWM",users);
        this.setState({users});
    }

    componentDidMount(){
        let {users} = this.props;
        console.log("cDM",users);
        this.setState({users});
    }

    componentWillReceiveProps(nextProps){
        console.log("nextProps",nextProps);
        let {users} = nextProps;
        console.log("cWRP",users);
        this.setState({users});
    }


    renderUserInfo = ({item}) => (
        <UserInfo name={item.name} address={item.address} designation={item.designation} avatar={item.avatar} navigation={this.props.navigation}/>
    )

    onTextChange(text) {
        let {users} = this.props;
        // this.setState({searchText: text});
        if (text == '') {
            this.setState({
                users,
                refresh: !this.state.refresh
            })
        } else {
            var arr = [];
            users.forEach((element, index) => {
                if (this.includesExpression(element.name, text) || this.includesExpression(element.address, text) || this.includesExpression(element.designation, text)) {
                    arr.push(element);
                }
            })
            console.log("array",arr);
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
            // Parent View
            <View style={styles.container}>
                {/* childView1 */}
                <View style={styles.childView1}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', margin: 20, borderColor: '#D3D3D3', borderWidth: 1, borderRadius: 30}}>
                                <Image style={{height: 30, width: 30, alignSelf: 'center'}} source={require('../assets/search.png')}/>
                                <TextInput style={{width: '80%' }} placeholder={'Search your query.'} onChangeText= {(text) => this.onTextChange(text)}
                                />
                    </View>
                </View>
                <View style={styles.childView2}>
                   <FlatList
                        data = {this.state.users}
                        renderItem = {this.renderUserInfo}
                        ItemSeparatorComponent = {this.renderSeparator}
                        // let item of data
                        keyExtractor = {item => item.name}
                        // just to toggle re-renderness
                        extraData = {this.state.refresh}
                        refreshControl = {
                            <RefreshControl
                                refreshing = {this.state.refreshing}
                                onRefresh = {this.onRefresh.bind(this)}
                            />
                        }
                    />   
                </View>
            </View>
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

const mapStateToProps = state => {
    console.log("state",state);
    return {
        users: state.users.users,
        refreshing: state.users.refreshing,
        searchText: state.users.searchText,
        refresh: state.users.refresh
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddUser: (user) => dispatch(addUser(user)),
        onSetSearchText: (text) => dispatch(setSearchText(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from 'react';


// UI elements
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    TouchableNativeFeedback,
    StyleSheet
  } from 'react-native';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stared: true,
            starSource: require('../assets/star.png')
        };
    }

    starPressed = () => {
        if (this.state.stared) {
            this.setState({
                starSource: require('../assets/emptyStar.png'),
                stared: !this.state.stared
            });
        } else {
            this.setState({
                starSource: require('../assets/star.png'),
                stared: !this.state.stared
            });
        }
    }

    render() {
        return (
            // {/* Users Details */}
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('userProfile')}>
                <View style={styles.container}>
                    <Image style={styles.avatar} source={this.props.avatar}/>
                    <View style={{flexDirection: 'column', flexGrow: 1, paddingLeft: '2%'}}>
                        <Text>{this.props.name}</Text>
                        <Text>{this.props.address}</Text>
                        <Text>{this.props.designation}</Text>
                    </View>
                    <TouchableOpacity onPress={this.starPressed}>
                        <Image style={{height: 40, width: 40, flexGrow: 0}} source={this.state.starSource}/>
                    </TouchableOpacity>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingTop: 2,
        paddingBottom: '3%'
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 50,
        borderColor: 'blue',
        borderWidth: 0,
        flexGrow: 0
    }
})
import React, { Component } from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

export default class Profile extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>This is profile screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

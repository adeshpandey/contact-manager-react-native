import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class NavigationDrawerIcon extends Component {
    toggle = () => {
        this.props.navigationProps.toggleDrawer();
    } 
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.toggle}>
                    <Image
                        source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

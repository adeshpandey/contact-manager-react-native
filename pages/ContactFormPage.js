import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import ContactForm from '../components/ContactForm'
import NavigationDrawerIcon from '../components/NavigationDrawerIcon'

const Stack = createStackNavigator()

export default class ContactFormPage extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="ContactFormPage" component={ContactForm} options={
                    {
                        headerStyle: {
                            backgroundColor: "#8BC34A"
                        },
                        headerLeft: () => (<NavigationDrawerIcon navigationProps={this.props.navigation} />),
                        title: "Add Contact"
                    }
                }
                />
            </Stack.Navigator>
        )
    }
}

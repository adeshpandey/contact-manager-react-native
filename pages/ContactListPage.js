import React, { Component } from 'react'
import { Text, View, PermissionsAndroid } from 'react-native'

import { createStackNavigator} from '@react-navigation/stack'
import ContactList from '../components/ContactList'
import NavigationDrawerIcon from '../components/NavigationDrawerIcon'
import ContactDetail from '../components/ContactDetail'

const Stack = createStackNavigator()


export default class ContactListPage extends Component {

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="ContactListPage" component={ContactList}
                    options={{
                        headerStyle: {
                            backgroundColor: "#8BC34A",
                        },
                        headerLeft: () => (<NavigationDrawerIcon navigationProps={this.props.navigation} />),
                        title: "Contact Manager"
                    }} />
                <Stack.Screen name="ContactDetailPage" component={ContactDetail} options={{
                    title: "Contact Detail", headerStyle: {
                        backgroundColor: "#8BC34A",
                    },}} />
            </Stack.Navigator>
        )
    }
}

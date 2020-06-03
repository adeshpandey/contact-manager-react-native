import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Card, ListItem } from 'react-native-elements'

export default class ContactDetail extends Component {
    render() {
        const { contact } = this.props.route.params
        return (
            <Card
                title={contact.name}
                containerStyle={{ paddingBottom: 0 }}
                image={{ uri: (contact.image ? contact.image.uri : 'https://orthosera-dental.com/wp-content/uploads/2016/02/user-profile-placeholder.png') }}
                imageStyle={{ resizeMode: 'cover',height:300}}
            >
                {
                    contact.phoneNumbers?.map((v, i) => (
                        <ListItem key={i} title={v.number} leftIcon={{ name: "phone"}} bottomDivider/>
                    ) )
                }
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 10,
    },
    
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
})
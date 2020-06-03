import React, { Component } from 'react'
import { Text, View,PermissionsAndroid, StyleSheet } from 'react-native'
import * as Contacts from 'expo-contacts';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Card, ListItem } from 'react-native-elements';

export default class ContactList extends Component {
    state = {contacts:[]}
    componentDidMount() {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
                });

                if (data.length > 0) {
                    this.setState({contacts:data})
                }
            }
        })();
    }

    handleContact(item) {
        
        this.props.navigation.navigate('ContactDetailPage', { contact: item, detailParam:item.name})
    }

    render() {
        return (


            <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
                {this.state.contacts.filter((v, i) => (v.name !== 'null null' && v.phoneNumbers)).map((l, i) => (
                    <ListItem
                        roundAvatar
                        // avatar={{ uri: l.avatar_url }}
                        key={i}
                        title={l.name}
                        onPress={() => this.handleContact(l)}
                        bottomDivider
                        // subtitle={`Last Practiced: ${l.subtitle}`}
                    />
                ))}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

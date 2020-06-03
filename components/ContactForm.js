import React, { Component } from 'react'
import { Text, View, ToastAndroid, Image } from 'react-native'
import { Card, Input, Button } from 'react-native-elements'
import * as Contacts from 'expo-contacts';
import * as ImagePicker from 'expo-image-picker';

export default class ContactForm extends Component {

    state = {
        name: '',
        phone: '',
        image: { uri: 'https://orthosera-dental.com/wp-content/uploads/2016/02/user-profile-placeholder.png' }

    }

    saveContact() {

        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const contact = { name: this.state.name, [Contacts.Fields.PhoneNumbers]: [{label:"mobile", number: this.state.phone }] }
                const contactId = await Contacts.addContactAsync(contact);
                if (contactId) {
                    ToastAndroid.show("Contact saved successfully", ToastAndroid.SHORT);
                }
                else {
                    ToastAndroid.show("Contact save failed: ", ToastAndroid.SHORT);
                }
            }
        })();
        
    }

    pickImage() {
        (async () => { 
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status === 'granted') {
                let result = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: false,
                    aspect: [4, 3],
                    quality: 1,
                });
                console.log(result);

                if (!result.cancelled) {
                    this.setState({ image: result });
                }
            } 
            
        })();
    }

    render() {
        return (
                <Card
                image={{ uri: this.state.image?.uri }}>
                    <Button
                        title="Pick an image from camera roll"
                        onPress={() => { this.pickImage() }} />
                    <Input
                        placeholder='Full Name'
                        onChangeText={ e => { this.setState({ name: e }) } }
                    />
                    <Input
                        placeholder='Phone'
                        onChangeText={e => { this.setState({ phone: e }) }}
                    />
                    <Button
                        title="Add Contact"
                        onPress = { () => (this.saveContact()) }
                    />
                </Card>
        )
    }
}

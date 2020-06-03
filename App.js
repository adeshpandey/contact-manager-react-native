import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactDetail from './components/ContactDetail';
import ContactListPage from './pages/ContactListPage';
import ContactFormStack from './pages/ContactFormPage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#8BC34A',
        itemStyle: { marginVertical: 5 },
      }}>
        <Drawer.Screen
          name="Home"
          component={ContactListPage}
          options={{ title: "Contact manager" }}
        />
        <Drawer.Screen
          name="ContactForm"
          component={ContactFormStack}
          options={{ title: "Add Contact" }}
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

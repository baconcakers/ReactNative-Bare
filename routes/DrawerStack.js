import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../screens/Home";
import Settings from "../screens/Settings";

//This currently has no NavigationContainer as per the Auth Stack example, trying to insert this into a safe nested location
//... that allows for an Authenticated Drawer...


const Drawer = createDrawerNavigator();
const DrawerStack =() => {
return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
);
}

export default DrawerStack

const styles = StyleSheet.create({
    drawerContainer:{
        backgroundColor: 'red'
    }
})
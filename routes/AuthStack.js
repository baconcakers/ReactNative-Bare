import React from "react";
import {Text, StyleSheet} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import WorkItemDetails from "../screens/WorkItemDetails";

const Stack = createStackNavigator();
const AuthStack = () =>{
    return (
        <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{            
}}/>
        <Stack.Screen name="WorkItemDetails" component={WorkItemDetails}/>
        <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
    )
}
export default AuthStack

const styles = StyleSheet.create({
    header: {
        headerStyle:{
            backgroundColor:'red'
        },
        headerTintColor:'white',
        headerTitleStyle:{
        fontWeight:'bold'
    }}
});
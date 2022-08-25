import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const WorkItemDetails = ({navigation}) => {
const popHandler = () => {
    navigation.goBack
}
const pushHandler = () => {
    navigation.push("Settings")
}
return (
<View >
    <Text>Work Item Details</Text>
    <Button title="go to pop" onPress={popHandler}  />
    <Text></Text>
    <Button title="go to push" onPress={pushHandler}  />
</View>
)
}
export default WorkItemDetails;

const styles = StyleSheet.create({
    button: {
        
    }
});
import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { Tile } from '../components/molecules/Tile/Tile.component';

const Home = ({navigation}) => {
    const pressHandler = () => {
        navigation.push("WorkItemDetails")
    }

return (
<View style={styles.container} >
<Text>Home</Text>
<View style={styles.tileRow}>  
    <Tile/>
    <Tile/>
    <Tile/>
</View>
<View style={styles.tileRow}>  
    <Tile/>
    <Tile/>
    <Tile/>
</View>
<View style={styles.tileRow}>  
    <Tile/>
    <Tile/>
    <Tile/>
</View>
<View >
<Button title="go to WorkItem" onPress={pressHandler} />
</View>
</View>

)
};
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tileRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    }
})
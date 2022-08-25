import {View, Text, StyleSheet} from "react-native";

export function Tile() {
    return(
    <View style={styles.tileContainer} >
    <View style={styles.iconContainer}>
        <Text> Icon Here </Text>
    </View>
    <View style={styles.titleContainer}>
        <Text>Title </Text>
    </View>
    </View>
    
    );
}

const styles = StyleSheet.create({
//for the entire tile
    tileContainer: {
        width: 220,
        height: 175,
        borderRadius: 5,
        borderWidth: 2,
        margin: 15,
    }, 
//for the top area of the tile looking after inside the tile within the icon area
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '55%',
        backgroundColor: 'orange',
        
    },
//for the bottom area of the tile looking after inside the tile within the title area
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '45%',
        backgroundColor: 'pink',
        
    },
    
});
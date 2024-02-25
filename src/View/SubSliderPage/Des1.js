import React from "react";
import {View,Text, StyleSheet} from 'react-native';

const Des1 = () =>{

    return(
        <View style={styles.background}>
            <Text style={styles.title}>Unlock Exclusive Challenges</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000', // Darker background
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
      },
      content: {
        alignItems: 'center',
        marginTop: 20,
      },
      title: {
        fontSize: 36,
        color: '#ff1493', // Pink color
        marginBottom: 30,
      },
});
export default Des1;

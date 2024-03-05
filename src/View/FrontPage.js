import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const FrontPage = () => {
  const navigation = useNavigation();
  const [isMusicOn, setIsMusicOn] = useState(true);
  
  const handlePlayButtonClick = () => {
    navigation.navigate('SelectPlayers');
  };
  const handleSettingButtonClick = () => {
    navigation.navigate('SettingsPage');
  };
  return (
    <View style={styles.container}>
      <View style={styles.background} />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Truth</Text>
          <Text style={styles.emoji}>😂</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Or</Text>
        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.emoji}>😈</Text>
          <Text style={styles.title}>Dare</Text>
        </View>

        <View style={styles.buttonContainer}>
          {isMusicOn && (
            <TouchableOpacity style={styles.button} onPress={() => setIsMusicOn(!isMusicOn)}>
                <Text>Music</Text>
              {/* <MaterialCommunityIcons name="music-off" size={45} color="white"/> */}
              {/* <FontAwesomeIcon icon={ faMugSaucer } /> */}
              
            </TouchableOpacity>
          )}
          {!isMusicOn && (
          <TouchableOpacity style={styles.button} onPress={() => setIsMusicOn(!isMusicOn)}>
            {/* <MaterialCommunityIcons name="music" size={45} color="white"/> */}
          </TouchableOpacity>
          )}
          <View> 
          <TouchableOpacity style={styles.button} onPress={handlePlayButtonClick}>
            <Text>Play</Text>
            {/* <Ionicons name="md-play" size={45} color="white" /> */}
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSettingButtonClick}>
          <Text>Settings</Text>
            {/* <Ionicons name="md-settings" size={45} color="white" /> */}
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000', // Darker background
    opacity: 0.9,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 56,
    color: '#ff1493', // Pink color
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons horizontally
    marginTop: 90, // Add margin to separate from the title
  },
  button: {
    backgroundColor: '#ff1493', // Pink color
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
    marginHorizontal: 10,
  },
    titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,
    marginHorizontal: 10,
    transform: [{ rotate: '-15deg' }], // Slightly inclined emojis
  },
});

export default FrontPage;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Svg, {Use, Image} from 'react-native-svg'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo'

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
              <Icon1 name="music-off" size={45} color="white"/>
            </TouchableOpacity>
          )}
          {!isMusicOn && (
          <TouchableOpacity style={styles.button} onPress={() => setIsMusicOn(!isMusicOn)}>
            <Icon1 name="music" size={45} color="white"/>
          </TouchableOpacity>
          )}
          <View> 
          <TouchableOpacity style={styles.button} onPress={handlePlayButtonClick}>
            <Icon3 name="controller-play" size={45} color="white" />
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSettingButtonClick}>
            <Icon name="setting" size={45} color="white" />
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
    backgroundColor: '#ff1493', // Pink color ff1493
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
  frontPagebtnImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default FrontPage;

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
//import { Ionicons } from '@expo/vector-icons';

import Page1 from './Levels/light';
import Page2 from './Levels/spicy';
import Page3 from './Levels/crazy';
import Page4 from './Levels/extreme';
// ... (import statements)

const MainComponent = ({ navigation }) => {
  const handleSettingButtonClick = () => {
    // Navigate to the settings page or perform the desired action
    navigation.navigate('SettingsPage');
  };

  const handlePeopleButtonnClick = () => {
    navigation.navigate('selectPayers');
  };

  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={false}
        loop={false}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </Swiper>

      {/* Purple Button (left) */}
      <TouchableOpacity style={styles.peopleButton} onPress={handlePeopleButtonnClick}>
      <Text>person</Text>
        {/* <Ionicons name="md-person" size={24} color="white" /> */}
      </TouchableOpacity>

      {/* Settings Button (right) */}
      <TouchableOpacity style={styles.settingsButton} onPress={handleSettingButtonClick}>
      <Text>Settings</Text>
        {/* <Ionicons name="md-settings" size={24} color="white" /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  dotStyle: {
    backgroundColor: '#aaa',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDotStyle: {
    backgroundColor: '#ff1493',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  settingsButton: {
    position: 'absolute',
    top: 20,
    right: 10,
    backgroundColor: '#ff1493', // Pink color
    padding: 10,
    borderRadius: 20,
  },
  peopleButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: '#ff1493',
    padding: 10,
    borderRadius: 20,
  },
});

export default MainComponent;

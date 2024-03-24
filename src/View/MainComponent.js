import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
//import { Ionicons } from '@expo/vector-icons';

import Page1 from './Levels/light';
import Page2 from './Levels/spicy';
import Page3 from './Levels/crazy';
import Page4 from './Levels/extreme';
// ... (import statements)

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/Entypo'

const MainComponent = ({ navigation }) => {
  const handleSettingButtonClick = () => {
    // Navigate to the settings page or perform the desired action
    navigation.navigate('SettingsPage');
  };

  const handlePeopleButtonnClick = () => {
    navigation.navigate('selectPayers');
  };

  const NeuMorph = ({ children, size, style}) =>{
    return(
      <View style = {styles.topShadow}>
        <View style = {styles.bottomShadow}>
          <View 
            style={[
              styles.inner,
              {width: size || 40, height: size || 40, borderRadius: size/2 || 40/2},
              style
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    )
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
        <Icon name="user" size={24} color="white" />
      </TouchableOpacity>

      {/* Settings Button (right) */}
      <TouchableOpacity style={styles.settingsButton} onPress={handleSettingButtonClick}>
        <Icon name="setting" size={24} color="white" />
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
  inner: {
    backgroundColor: "#00235B",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#00235B",
    borderWidth: 1,
    elevation: 15, 
  },
  topShadow: {
    shadowOffset: {
      width: -12,
      height: -12
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowColor: "#211951",
  },
  bottomShadow: {
    shadowOffset:{
      width: 12,
      height: 12
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowColor: "#211951"
  },
});

export default MainComponent;

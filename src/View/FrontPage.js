import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Svg, {Use} from 'react-native-svg'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import feather from 'react-native-vector-icons/Feather';
import { color } from 'react-native-elements/dist/helpers';

const frontImage = require("./assets/Truth.png")

const FrontPage = () => {
  
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.8;
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

        <View style={styles.imageContainer}>
          <NeuMorph size={20}>
            <Image 
              source={frontImage}
              style={[styles.image,{width: imageWidth}]}
            />  
          </NeuMorph>
        </View>

        <View style={styles.buttonContainer}>
          {isMusicOn && (
            <TouchableOpacity style={styles.button} onPress={() => setIsMusicOn(!isMusicOn)}>
              <NeuMorph size={64}>
              <Icon1 name="music-off" size={24} color="#FFEDD8"/>
              </NeuMorph>
            </TouchableOpacity>
          )}
          {!isMusicOn && (
          <TouchableOpacity style={styles.button} onPress={() => setIsMusicOn(!isMusicOn)}>
            <NeuMorph size={64}>
            <Icon1 name="music" size={24} color="#FFEDD8"/>
            </NeuMorph>
          </TouchableOpacity>
          )}
          <View> 
          <TouchableOpacity style={styles.button}  onPress={handlePlayButtonClick}>
            <NeuMorph size={64}>
              <Icon3 name="controller-play" size={24} color="#FFEDD8" />
            </NeuMorph>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSettingButtonClick}>
            <NeuMorph size={64}>
            <Icon name="setting" size={24} color="#FFEDD8" />
            </NeuMorph>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00235B', // Darker background
    opacity: 0.9,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 56,
    // color: '#000', // Pink color
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons horizontally
    marginTop: 200, // Add margin to separate from the title
  },
  imageContainer: {
    marginBottom: 100,
    marginTop: 190, 
    alignItems: 'center',
  },
  button: {
    // backgroundColor: '#00235B',
    padding: 5,
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
  image: {
    resizeMode : 'contain',
  },
});

export default FrontPage;

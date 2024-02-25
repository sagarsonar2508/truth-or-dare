import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setSelectedLevel } from '../../Redux Store/store';

const Page5 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePlayButtonClick = (option) => {
    dispatch(setSelectedLevel(option));
    navigation.navigate('TruthDareGameWindow');
  };
  
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Page 5</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => handlePlayButtonClick({ level: 'page5', category: 'couple' })}>
          <Text style={styles.buttonText}>For Couple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePlayButtonClick({ level: 'page5', category: 'company' })}>
          <Text style={styles.buttonText}>For Company</Text>
        </TouchableOpacity>
      </View>
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
  button: {
    width: 200,
    height: 80,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ff1493', // Pink border
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ff1493', // Pink color
    fontSize: 18,
  },
});

export default Page5;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setSelectedLevel } from '../../Redux Store/store';
//import { MaterialCommunityIcons } from '@expo/vector-icons';


const Light = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePlayButtonClick = (option) => {
    dispatch(setSelectedLevel(option));
    navigation.navigate('TruthDareGameWindow');
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>Light</Text>
        {/* <MaterialCommunityIcons name="balloon" size={100} color="#ff1493"  style={styles.icon} /> */}
        <Text style={styles.dialogText}>
          Cheesy dialog for Truth and Dare in the Spicy category. Let the spicy adventures begin!
        </Text>
        <View style={styles.content}>
          <TouchableOpacity style={styles.button} onPress={() => handlePlayButtonClick({ level: 'light', category: 'couple' })}>
            <Text style={styles.buttonText}>For Couple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePlayButtonClick({ level: 'light', category: 'company' })}>
            <Text style={styles.buttonText}>For Company</Text>
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
    flex: 1,
    backgroundColor: '#000', // Darker background
    opacity: 0.9,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 43,
    color: '#FFFFFF', // Pink color
    position: 'absolute',
    top: 60, // Adjust as needed
  },
  content: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 120, // Adjust as needed
  },
  icon: {
    top:150,
    position: 'absolute',
  },
  dialogText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
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

export default Light;

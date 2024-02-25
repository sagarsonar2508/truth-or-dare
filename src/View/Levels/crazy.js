import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setSelectedLevel } from '../../Redux Store/store';
//import { FontAwesome } from '@expo/vector-icons';


const Crazy = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePlayButtonClick = (option) => {
    dispatch(setSelectedLevel(option));
    navigation.navigate('TruthDareGameWindow');
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>Crazy</Text>
        {/* <FontAwesome name="spinner" size={100} color="#ff1493" style={styles.icon} /> */}
        <Text style={styles.dialogText}>
          Cheesy dialog for Truth and Dare in the Spicy category. Let the spicy adventures begin!
        </Text>
        <View style={styles.content}>
          <TouchableOpacity style={styles.button} onPress={() => handlePlayButtonClick({ level: 'crazy', category: 'couple' })}>
            <View style={styles.inButton}>
              <Text style={styles.buttonText}>For Couple</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePlayButtonClick({ level: 'crazy', category: 'company' })}>
            <View style={styles.inButton}>
              <Text style={styles.buttonText}>For Company</Text>
            </View>
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
  content: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 120, 
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
  title: {
    fontSize: 43,
    color: '#FFFFFF', // Pink color
    position: 'absolute',
    top: 60, // Adjust as needed
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
  inButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Crazy;

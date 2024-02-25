import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setSelectedChoice } from '../Redux Store/store';
import { useSelector } from 'react-redux';

const TruthDareGameWindow = () => {
  const navigation = useNavigation();
  const currentPayerID = useSelector((state) => state.currentPayerID || 1 );
  const playerList = useSelector((state) => state.playerList);
  const name = playerList[(currentPayerID-1)].name;
  const dispatch = useDispatch();

  const handleSelectTruthDare = (option) => {
    dispatch(setSelectedChoice(option));
    navigation.navigate('QuestionPage');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: '#ff1493',
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Fixed Name text with a line */}
      <View style={styles.fixedTextContainer}>
        <Text style={styles.fixedText}>{name}</Text>
        <View style={styles.line} />
      </View>

      {/* Background */}
      <View style={styles.background} />

      {/* Truth Section */}
      <TouchableOpacity
        style={styles.truthSection}
        onPress={() => handleSelectTruthDare('truth')}
      >
        <Text style={styles.text}>Truth</Text>
      </TouchableOpacity>

      {/* Random Section */}
      <TouchableOpacity
        style={styles.randomSection}
        onPress={() => handleSelectTruthDare('random')}
      >
        <Text style={styles.random}>Random Chance</Text>
      </TouchableOpacity>

      {/* Dare Section */}
      <TouchableOpacity
        style={styles.dareSection}
        onPress={() => handleSelectTruthDare('dare')}
      >
        <Text style={styles.text}>Dare</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  fixedTextContainer: {
    alignItems: 'center',
  },
  fixedText: {
    textAlign: 'center',
    paddingTop: 10,
    color: '#ff1493',
    top:40,
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  line: {
    width: '30%', // Adjust the width of the line
    borderBottomWidth: 2, // Adjust the thickness of the line
    borderBottomColor: '#ff1493',
    marginTop: 46, // Adjust the distance between text and line
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1a1a1a', // Blackish background color
    zIndex: -1,
  },
  truthSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ff1493',
    // shadowColor: '#fff', // Whitish shadow color
  },
  randomSection: {
    flex: 0.3, // Adjust the size
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ff1493',
    // shadowColor: '#fff', // Whitish shadow color
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8, // Adjust shadow opacity
    // shadowRadius: 2,
    // elevation: 1,
  },
  dareSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#fff', // Whitish shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8, // Adjust shadow opacity
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    color: '#ff1493',
    fontSize: 40,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  random: {
    color: '#ff1493',
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});

export default TruthDareGameWindow;

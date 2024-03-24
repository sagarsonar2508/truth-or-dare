import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setPlayerList, setCurrentPayerID } from '../Redux Store/store';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/Entypo'

const SelectPlayers = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [players, setPlayers] = useState([{ id: 1, name: '', gender: 'male' },{ id: 2, name: '', gender: 'female' }]);
  const genders = ['male', 'female'];

  const handlePlayButtonClick = () => {
    const areAllNamesValid = players.every(player => player.name.trim() !== '');
    if(areAllNamesValid){
      dispatch(setPlayerList(players));
      dispatch(setCurrentPayerID(1));
      navigation.navigate('MainComponent');
    }
    else{
      alert('Not Valid Name');
    }
  };

  const addPlayer = () => {
    const newPlayer = { id: players.length + 1, name: '', gender: 'male' };
    setPlayers([...players, newPlayer]);
  };

  const removePlayer = (id) => {
    if(players.length > 2){
      setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== id))
    }
  };

  const handleNameChange = (id, newName) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => (player.id === id ? { ...player, name: newName } : player))
    );
  };

  const handleGenderChange = (id, newGender) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => (player.id === id ? { ...player, gender: newGender } : player))
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{players.length} Players</Text>
      <View style={styles.line} />
      <ScrollView contentContainerStyle={styles.playerList}>
      {players.map((player, index) => (
          <View key={index} style={styles.playerBlock}>
            <View style={styles.genderSelection}>
              {genders.map((gender) => (
                <TouchableOpacity
                  key={gender}
                  style={[
                    styles.genderIcon,
                    { backgroundColor: player.gender === gender ? '#ff1493' : 'transparent' },
                  ]}
                  onPress={() => handleGenderChange(player.id, gender)}
                >
                  <Text>{gender === 'male' ? (
                    <Icon2 name='male' size={22} color="white"/>
                  ) : (
                    <Icon2 name='female' size={22} color="white"/>
                  )}</Text>
                  {/* <Ionicons name={gender === 'male' ? 'md-man' : 'md-woman'} size={32} color="white" /> */}
                </TouchableOpacity>
              ))}
            </View>

            <TextInput
              style={styles.nameInput}
              placeholder="Enter name"
              value={player.name}
              onChangeText={(newName) => handleNameChange(player.id, newName)}
            />

            {/* Cancel Button */}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => removePlayer(player.id)}
            >
              <Icon name="close" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addPlayer}>
          <Icon name="adduser" size={42} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}  onPress={handlePlayButtonClick}>
          <Icon3 name="controller-play" size={42} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    opacity: 0.9,
  },
  header: {
    fontSize: 29,
    color: '#ff1493',
    marginBottom: 0,
    marginTop: 40,
  },
  playerList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%', 
  },
  playerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  genderSelection: {
    flexDirection: 'row',
    marginRight: 10,
  },
  genderIcon: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  nameInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff1493',
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 10,
    marginBottom: 10
  },
  line: {
    width: '30%', 
    borderBottomWidth: 3, 
    borderBottomColor: '#ff1493',
    marginTop: 5,
  },
  cancelButton: {
    borderRadius: 30,
    marginLeft: 10,
  },
});

export default SelectPlayers;

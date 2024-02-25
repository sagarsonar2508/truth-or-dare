import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { lightDareCouple } from '../TruthAndDareCouple/lightDare';
import { lightTruthCouple } from '../TruthAndDareCouple/lightTruth';
import { spicyDareCouple } from '../TruthAndDareCouple/spicyDare';
import { spicyTruthCouple } from '../TruthAndDareCouple/spicyTruth';
import { crazyDareCouple } from '../TruthAndDareCouple/crazyDare';
import { crazyTruthCouple } from '../TruthAndDareCouple/crazyTruth';
import { extremeDareCouple } from '../TruthAndDareCouple/extremeDare';
import { extremeTruthCouple } from '../TruthAndDareCouple/extremeTruth';
import { lightDareCompany } from '../TruthAndDareCompany/lightDare';
import { lightTruthCompany } from '../TruthAndDareCompany/lightTruth';
import { spicyDareCompany } from '../TruthAndDareCompany/spicyDare';
import { spicyTruthCompany } from '../TruthAndDareCompany/spicyTruth';
import { crazyDareCompany } from '../TruthAndDareCompany/crazyDare';
import { crazyTruthCompany } from '../TruthAndDareCompany/crazyTruth';
import { extremeDareCompany } from '../TruthAndDareCompany/extremeDare';
import { extremeTruthCompany } from '../TruthAndDareCompany/extremeTruth';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCurrentPayerID } from '../Redux Store/store';
//import { Ionicons } from '@expo/vector-icons';

const QuestionPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentPayerID = useSelector((state) => state.currentPayerID || 1 )
  const selectedLevel = useSelector((state) => state.selectedLevel || { level: 'Default', category: 'Default' });
  const selectedChoice = useSelector((state) => state.selectedChoice || 'truth')
  const playerList = useSelector((state) => state.playerList);
  let finalChoice;
  const { level, category } = selectedLevel;
  const gender = playerList[(currentPayerID-1)].gender;
  const name = playerList[(currentPayerID-1)].name;
  const [question, setQuestion] = useState(getRandomQuestion(selectedChoice, level, category, gender));

  function getRandomQuestion(selectedChoice, level, category, gender) {
    if(selectedChoice == "random"){
      const randomValue = Math.random();
      selectedChoice = randomValue < 0.5 ? "truth" : "dare";
      finalChoice = selectedChoice;
    }else{finalChoice = selectedChoice}
    finalChoice = finalChoice.charAt(0).toUpperCase() + finalChoice.slice(1)
    const variableName = level +
    selectedChoice.charAt(0).toUpperCase() + selectedChoice.slice(1)+
    category.charAt(0).toUpperCase() + category.slice(1);
    let questions;
    switch (variableName) {
      case 'lightDareCouple':
        questions = lightDareCouple
        break;

      case 'lightTruthCouple':
        questions = lightTruthCouple
        break;
        
      case 'spicyDareCouple':
        questions = spicyDareCouple
        break;

      case 'spicyTruthCouple':
        questions = spicyTruthCouple
        break;

      case 'crazyDareCouple':
        questions = crazyDareCouple
        break;
        
      case 'crazyTruthCouple':
        questions = crazyTruthCouple
        break;

      case 'extremeDareCouple':
        questions = extremeDareCouple
        break;

      case 'extremeTruthCouple':
        questions = extremeTruthCouple
        break;

      case 'lightDareCompany':
        questions = lightDareCompany
        break;

      case 'lightTruthCompany':
        questions = lightTruthCompany
        break;

      case 'spicyDareCompany':
        questions = spicyDareCompany
        break;

      case 'spicyTruthCompany':
        questions = spicyTruthCompany
        break;

      case 'crazyDareCompany':
        questions = crazyDareCompany
        break;

      case 'crazyTruthCompany':
        questions = crazyTruthCompany
        break;

      case 'extremeDareCompany':
        questions = extremeDareCompany
        break;

      case 'extremeTruthCompany':
        questions = extremeTruthCompany
        break;
    
      default:
        break;
    }
    const filteredQuestions = questions.filter(question => question.gender == gender || question.gender == 'both');
    if (filteredQuestions.length === 0) {
      return 'No questions available for the specified gender.';
  }
  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  const selectedQuestion = filteredQuestions[randomIndex].question;

  return selectedQuestion;
  }

  const handleRetry = (selectedChoice, level, category, gender) => {
    setQuestion(getRandomQuestion(selectedChoice, level, category, gender));
  };

  const handleContinue = () => {
    if (currentPayerID < playerList.length){
      dispatch(setCurrentPayerID(currentPayerID+1));
    }
    else{dispatch(setCurrentPayerID(1));}

    navigation.navigate('TruthDareGameWindow');
  };

  //return (
    // <View>
    //   <Text>Selected Level: {level}</Text>
    //   <Text>Selected Category: {category}</Text>
    //   <Text>Selected Choice: {selectedChoice}</Text>
    //   {playerList.map((player, index) => (
    //   <Text key={index}>name = {player.name} || gender = {player.gender} || id = {player.id}</Text>
    // ))}
    //   {/* Add the rest of your component code */}
    // </View>
    return (
      <View style={styles.container}>
        <View style={styles.background} />
        <View style={styles.topContent}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.line} />
          <Text style={styles.levelTitle}>{finalChoice}</Text>
        </View>
        <View style={styles.questionContainer}>
          <View style={styles.questionLine} />
          <Text style={styles.question}>{question}</Text>
          <View style={styles.questionLine} />
        </View>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => { handleRetry(selectedChoice, level, category, gender) }}>
            <Text>Refresh</Text>
              {/* <Ionicons name="md-refresh" size={45} color="white" /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text>Play</Text>
              {/* <Ionicons name="md-play" size={45} color="white" /> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'space-between', // Use space-between to position items at the top and bottom
        alignItems: 'center',
      },
      background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000',
        opacity: 0.9,
      },
      topContent: {
        alignItems: 'center',
        marginTop: 40,
      },
      content: {
        alignItems: 'center',
        marginBottom: 70, // Adjust marginBottom as needed
      },
      title: {
        fontSize: 40,
        color: '#ff1493',
        marginBottom: 0,
      },
      levelTitle: {
        fontSize: 25,
        color: '#ff1493',
        marginBottom: 0,
      },
      questionContainer: {
        alignItems: 'center',
        marginVertical: 20,
      },
      questionLine: {
        width: 180,
        borderBottomWidth: 2.5,
        borderBottomColor: '#ff1493',
        marginVertical: 5,
      },
      question: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30,
        marginTop: 30,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
      },
      button: {
        backgroundColor: '#ff1493',
        padding: 15,
        borderRadius: 50,
        marginHorizontal: 10,
      },
      line: {
        width: 150,
        borderBottomWidth: 2.5,
        borderBottomColor: '#ff1493',
        marginTop: 0,
      },
    });
    
    export default QuestionPage;
    
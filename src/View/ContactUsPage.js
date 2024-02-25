import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Animated, Easing, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { AntDesign } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';

const ContactUsPage = () => {
  const navigation = useNavigation();

  const [rotateValue] = useState(new Animated.Value(0));
  const [isCardFlipped, setIsCardFlipped] = useState(false);


  const [name, onChangeName] = useState('');
  const [emailadd, onChangeEmailadd ] = useState('');
  const [message, onChangeMessage] =useState('');

  const rotateCard = () => {
    Animated.timing(rotateValue, {
        toValue: isCardFlipped ? 0 : 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
    }).start(() => {
        // console.log(isCardFlipped);
        setIsCardFlipped(!isCardFlipped);
        // rotateValue.setValue(0);
    });
  };

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0,1],
    outputRange: ['0deg','180deg'],
  });

  const backInterpolate = rotateValue.interpolate({
    inputRange: [0,1],
    outputRange: ['180deg','0deg'],
  });

  const cardContianerStyle = {
    transform: [{ rotateY: rotateInterpolate}],
  };
  
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate}],
  };

  const [form, setForm] = useState({
    darkMode: true,
    showCollaborators: true,
  });

  const handleToggle = (id, value) => {
    setForm({ ...form, [id]: value });
  };

  const handlePress = (id) =>{
    if(id === 'contactUs'){
      navigation.navigate('ContactUsPage');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.background} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Get in Touch</Text>
        </View>

        {/* card */}
        
        <Animated.View style={[styles.cardContianer, cardContianerStyle]}>
           {!isCardFlipped && (
            // Card Front 
            <View style={styles.card}>
                {/* Name */}
                <View style={styles.cardBox}>
                    {/* Text */}
                    <Text style={styles.cardText}>Name</Text>
                    {/* Input */}
                    <TextInput
                        style = {styles.cardInput}
                        onChangeText = {onChangeName}
                        placeholder='Name'
                    />
                </View>
                {/* Email */}
                <View style={styles.cardBox}> 
                    {/* Text */}
                    <Text style={styles.cardText}>Email</Text>
                    {/* Input */}
                    <TextInput
                        style = {styles.cardInput}
                        onChangeText={onChangeEmailadd}
                        placeholder='emailAdress@example.com'
                    />
                </View>
                {/* Message */}
                <View style={styles.cardMessageBox}>
                    {/* Text */}
                    <Text style={styles.cardText}>Message</Text> 
                    {/* Input */}
                    <TextInput
                        style={styles.cardInput}
                        onChangeText={onChangeMessage}
                    />
                </View>
                
            
                
                {/* Send button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => {
                            rotateCard();
                        }}
                    >
                        <Text style={styles.buttonText}>Send</Text>
                        {/* <Entypo name="mail-with-circle" size={34} color="#ff1493" /> */}
                    </TouchableOpacity>
                </View>
            </View>
            )}
            {isCardFlipped &&(
                <View style={styles.cardBack}>
                    <Text style={styles.header1}>
                        Thank You.
                    </Text>
                    <Text style={styles.header2}>
                        We'll be in touch.
                        Shortly !
                    </Text>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => {
                            rotateCard();
                        }}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                        {/* <AntDesign name="arrowright" size={24} color="#ff1493" /> */}
                    </TouchableOpacity>
                </View>
                </View>
            )}
        </Animated.View>
        <View style={styles.buttonContainerSocial}>
            <TouchableOpacity style={styles.buttonSocial}>
                {/* <Entypo name="instagram-with-circle" size={54} color="black" /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSocial}>
                {/* <Entypo name="facebook-with-circle" size={54} color="black" /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSocial}>
                {/* <Entypo name="twitter-with-circle" size={54} color="black" /> */}
            </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background color
  },
  scrollViewContent: {
    paddingVertical: 20,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.9,
  },
  header1:{
    flex: 2,
    fontSize: 100,
    marginHorizontal : 20,
    color: 'white',
  },
  header2:{
    flex: 1,
    fontSize: 28,
    marginHorizontal: 20,
    color: 'white',
  },
  cardContianer: {
    backgroundColor: '#2D3250',
    borderRadius: 10,
    height: Dimensions.get('window').height*0.7, 
    marginLeft: Dimensions.get('window').width*0.05,
    marginTop: Dimensions.get('window').height*0.01,
    marginRight:  Dimensions.get('window').width*0.05,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: '#2D3250',
    borderRadius: 10,
    height: '100%', 
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
  cardText: {
    color: '#ff1493',
    marginLeft: 10,
    marginTop: 10,
  },
  cardBox: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
  },    
  cardMessageBox:{
    flex: 3,
    color: '#ff1493',
    // marginLeft: 10,
    // marginBottom: 10,
    // backgroundColor: 'skyblue',
  },
  cardInput: {
    flex: 2,
    backgroundColor: '#424769',
    marginHorizontal:  Dimensions.get('window').width*0.02,
    marginVertical:  Dimensions.get('window').height*0.001,
    borderRadius: 4,
    color: 'white',
  },
  cardBack: {
    // backgroundColor: 'blue',
    flex: 1,
    transform: [{rotateY: '180deg'}],
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    color: '#ff1493',
  },
  section: {
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  rowLabel: {
    flex: 1,
    fontSize: 17,
    color: '#333',
    marginLeft: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons horizontally
    marginTop:  Dimensions.get('window').height*0.02, // Add margin to separate from the title
    // backgroundColor: 'grey',
    justifyContent: 'flex-end',  
  },
  button: {
    flexDirection: 'row',
    // backgroundColor: '#ff1493', // Pink color
    paddingVertical: Dimensions.get('window').height*0.015,
    paddingHorizontal: Dimensions.get('window').width*0.030,
    borderRadius: Dimensions.get('window').height*0.030,
    marginTop: Dimensions.get('window').height*0.010,
    marginBottom: Dimensions.get('window').height*0.02,
    marginHorizontal: Dimensions.get('window').width*0.020,
    alignItems: 'center',
    borderBlockColor: 'white',
  },
  buttonText :{
    marginRight: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainerSocial: {
    flexDirection: 'row', // Arrange buttons horizontally
    marginTop:  Dimensions.get('window').height*0.02, // Add margin to separate from the title
    // backgroundColor: 'grey',
    marginLeft:  Dimensions.get('window').width*0.01,
    marginRight:  Dimensions.get('window').width*0.01,
    justifyContent: 'space-around',  
  },
  buttonSocial: {
    flexDirection: 'row',
    backgroundColor: '#ff1493', // Pink color
    paddingVertical: Dimensions.get('window').height*0.01,
    paddingHorizontal:  Dimensions.get('window').width*0.01,
    borderRadius: 40,
    marginVertical:  Dimensions.get('window').height*0.01,
    marginHorizontal:  Dimensions.get('window').width*0.02,
    alignItems: 'center',
  },
});

export default ContactUsPage;

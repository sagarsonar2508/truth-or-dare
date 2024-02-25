import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import PageSubDes1 from './SubSliderPage/Des1';
import PageSubDes2 from './SubSliderPage/Des2';
import PageSubDes3 from './SubSliderPage/Des3';

const SubPage = () => {

    return(
        <View style={styles.container}>
            {/* Backgorund */}
            <View style={styles.background}/>
            {/* Main Content */}
            <View style={styles.content}>
                <View style={styles.background}/>
                <Swiper
                  showsButtons={false}
                  loop={false}
                  dotStyle={styles.dotStyle}
                  activeDotStyle={styles.activeDotStyle}
                  autoplay={true}
                >
                  <PageSubDes1 />
                  <PageSubDes2 />
                  <PageSubDes3 />
                  </Swiper>  
                  
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>One payment</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity>
                    <Text style={{color : '#FFFFFF'}}>Terms & Conditions</Text>    
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{color:'#FFFFFF'}}>Privacy Policy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{color:'#FFFFFF'}}>Resume Purchase</Text>         
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
      },
      background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000', // Darker background
        opacity: 0.9,
      },
      content: {
        alignItems: 'center',
      },
      title: {
        fontSize: 36,
        color: '#ff1493', // Pink color
        marginBottom: 30,
      },
      buttonContainer: {
        flexDirection: 'column', // Arrange buttons vertically
      },
      button: {
        backgroundColor: '#ff1493', // Pink color
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        width: 250,
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
      },   
  buttonText: {
    color: '#FFFFFF', // Pink color
    fontSize: 18,
  },
});

export default SubPage;
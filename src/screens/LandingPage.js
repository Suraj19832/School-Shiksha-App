import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native' 
const LandingPage = () => {
  return (
    <View style={styles.container}>

  <Image style={styles.logo} source={require('/home/desunub7/School Shiksharthi/school-shiksha-app/assets/img/applogo.png')}/>
    
    </View>
   
  )
}

export default LandingPage
const styles = StyleSheet.create({
    container: {
     flex:0,
      backgroundColor: '#FFFCCE',
      alignItems:'center',
      justifyContent: 'center',
      height:'100%'
    },

  });
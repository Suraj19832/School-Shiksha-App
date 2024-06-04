import { View, Text ,StyleSheet } from 'react-native'
import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    AntDesign,
    Entypo,
    FontAwesome5,
    Feather,
    Octicons,
    EvilIcons,
  } from "@expo/vector-icons";
import React, { useContext, useEffect, useRef, useState } from 'react'
import { getrequestwithtoken } from '../../Helper/Helper';
import { AuthContext } from '../../Utils/context/AuthContext';
import { Image } from "react-native";
import Header from '../../components/Header';
import { Animated } from 'react-native';
const ID_card = ({navigation}) => {
    const [idfront, setidfront] = useState("")
    const [idback, setidback] = useState("")
    const [pageloading, setpageloading] = useState(true);
    const {
        userToken
       
      } = useContext(AuthContext);
    useEffect(() => {
        getrequestwithtoken("student/profile", userToken).then((res) => {
            if (res?.status) {
            console.log(res?.status)
            console.log(res?.data)
            setidfront(res?.data?.id_card_front)
            setidback(res?.data?.id_card_back)
            setpageloading(false)
            console.log(idback)

            }
          }) .catch((error) => {
            console.error("An error occurred:", error);
        });
    }, [userToken])
  

    const CardSkeleton = () => {
        const opacity = useRef(new Animated.Value(0.3)).current;
    
        useEffect(() => {
          Animated.loop(
            Animated.sequence([
              Animated.timing(opacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
              }),
              Animated.timing(opacity, {
                toValue: 0.3,
                duration: 800,
                useNativeDriver: true,
              }),
            ])
          ).start();
        }, [opacity]);
    
        return (
          <>
            <Header title="ID Card" navigateTo={navigation.goBack} />
            <View style={styles.container12}>
              {[...Array(2)].map((_, index) => (
                <Animated.View
                  key={index}
                  style={[styles.placeholder, { opacity }]}
                />
              ))}
            </View>
          </>
        );


      };


      if (pageloading) {
        return <CardSkeleton />;
      }
  return (
    <>
      <Header
    title="ID Card"
    navigateTo={() => navigation.goBack("Home")}
  />
    <View style={styles.container}>
        
      {/* <Text>ID_card</Text> */}
      {idfront && (
  <Image
  style={{width:'100%',height:'40%'}}
  source={{ uri: idfront }}
  resizeMode="contain"
/>
      )}

{idback && (
  <Image
  style={{width:'100%',height:'40%'}}
  source={{ uri: idback }}
  resizeMode="contain"
/>
      )}
    
    </View>
    </>
  
  )
}

export default ID_card
const styles = StyleSheet.create({
    container: {
      width:'100%',
      height:'100%',
    //   backgroundColor:'red',
      alignSelf:'center'
    },
    container12: {
        backgroundColor: "#F6F6F6",
        borderRadius: 13,
        // padding: 16,
        marginBottom: 16,
        height: "80%",
        gap:10,
        justifyContent:'center'
      },
      placeholder: {
        backgroundColor: "#ccc",
        height: "40%",
        borderRadius: 0,
      },
})
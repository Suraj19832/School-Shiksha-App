import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export const  BorderGradient = (props)=>
{

        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#00367E', '#0062E4']}
                    start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                    style={styles.grediant}
                >
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            {props.text}
                         </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        justifyContent: 'center',
        // backgroundColor:"red"
        
    },
    grediant: {
        height: 44,
        width: 150,
        justifyContent: 'center',
        borderRadius:12,
        paddingVertical:1,
        paddingHorizontal:1.5,
        alignSelf: 'center'
    },
    buttonContainer: {
        flex: 1.0,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

        width: '99%',
        height:"10%",
        margin: 1,
        borderRadius:10
    },
    buttonText: {
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight:"500",
        fontSize:18,
        color:"#00367E"
    }
});


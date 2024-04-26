import React, { useState, useRef } from 'react';
import { Image, View, Text, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const TitleDash = (props) => {
    return (

        <View style={[styles.bannerTitle, { backgroundColor: props.primaryColor, }]} >
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 500 }}>{props.title}</Text>
        </View>
    );
};

export default TitleDash;

const styles = StyleSheet.create({
    bannerTitle: {
        // flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginVertical: 20
    },

});

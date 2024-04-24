import React, { useState, useRef } from 'react';
import { Image, View, Text, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import TitleDash from '../../components/TitleDash';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

const Dashboard = () => {
    const [activeIndex, setActiveIndex] = useState(0);

 

    // Assuming `data` is the array you're rendering
    const images = [
        require("../../assets/img/slider1.png"),
        require("../../assets/img/slider3.png"),
        require("../../assets/img/slider2.png"),
    ];



    const flatListRef = useRef(null);

    const onViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems && viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
    };

    const lastIndex = images.length - 1;

    const setLoopedActiveIndex = (index) => {
        if (index < 0) {
            setActiveIndex(lastIndex);
        } else if (index > lastIndex) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    };

    const renderPagination = () => {
        return (
            <View style={styles.paginationContainer}>
                <View style={styles.pagination}>
                    {images.map((_, index) => (
                        <View key={index} style={[styles.paginationDot, index === activeIndex && styles.paginationDotActive]} />
                    ))}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.menubarDiv}>
                <Ionicons name="menu" size={35} color="#00367E" />
                <View style={{ flexDirection: "row", alignItems:"center", gap: 20 }}>
                    <Ionicons  name="notifications-outline" size={35} />
                    <Image
                        source={require("../../assets/img/girl-avatar.png")}
                        style={styles.avatarImg}
                    />
                </View>
            </View>
            <View style={styles.hairline} />
            <ScrollView>
                <View style={{ paddingTop: 25, position: 'relative' }}>
                    <FlatList
                        ref={flatListRef}
                        data={images}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <Image
                                style={styles.imgStyle}
                                source={item}
                                resizeMode="cover"
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        onViewableItemsChanged={onViewableItemsChanged}
                    />
                    {renderPagination()}
                </View>
                <View >

                    <Card />
                </View>
            <Footer />
            </ScrollView>
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    hairline: {
        backgroundColor: '#D9D9D9',
        height: 2,
        width: "100%",
        marginTop: 15
    },
    menubarDiv: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: 50,
        paddingHorizontal: 20,
        alignItems:"center"
    },
    imgStyle: {
        height: Dimensions.get('window').height * 0.290,
        width: Dimensions.get('window').width * 0.999,
        borderRadius: 10
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'white',
        marginHorizontal: 4,
    },
    paginationDotActive: {
        backgroundColor: '#00367E',
        width: 10,
        height: 10,
        borderRadius: 5
    },
    avatarImg:{
        width:40,
        height:40,
        
    }
});

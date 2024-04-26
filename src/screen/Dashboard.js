import React, { useState, useRef, useEffect } from 'react';
import { Image, View, Text, StyleSheet, Dimensions, FlatList, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import TitleDash from '../../components/TitleDash';
import Card from '../../components/Card';
import Footer from '../../components/Footer';


const Dashboard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuWidth = Dimensions.get('window').width * 0.8;

    const menuTranslateX = useRef(new Animated.Value(-menuWidth)).current;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        Animated.timing(menuTranslateX, {
            toValue: isMenuOpen ? -menuWidth : 0,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        Animated.timing(menuTranslateX, {
            toValue: -menuWidth,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    };

    const images = [
        require("../../assets/img/slider1.png"),
        require("../../assets/img/slider3.png"),
        require("../../assets/img/slider2.png"),
        require("../../assets/img/whatsapp.png")
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

    useEffect(() => {
        Animated.timing(menuTranslateX, {
            toValue: isMenuOpen ? 0 : -menuWidth,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    }, [isMenuOpen]);

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
                <TouchableOpacity onPress={toggleMenu}>
                    <Ionicons name="menu" size={35} color="#00367E" />
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <Image
                        source={images[3]}
                        style={{ width: 30, height: 30 }}
                    />
                    <Ionicons name="notifications-outline" size={35} />
                    <View style={{ backgroundColor: "#00367E", height: 35, width: 35, justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
                        <Image
                            source={require("../../assets/img/person.png")}
                            style={styles.avatarImg}
                        />
                    </View>
                </View>
            </View>

            {
                isMenuOpen &&

                <Animated.View style={[styles.menu, { transform: [{ translateX: menuTranslateX }] }]}>

                    <TouchableOpacity onPress={closeMenu} style={styles.closeIcon}>
                        <Ionicons name="close" size={35} color="white" />
                    </TouchableOpacity>
                    <View style={styles.menuOptionContainer}>
                        <View >

                            <Image style={{ width: 315, position: 'relative', resizeMode: "cover" }} source={require('../../assets/img/waves.png')} />
                            <View style={{ alignItems: "center", position: "absolute", top: "26%", left: "10%", flexDirection: 'row', gap: 20 }}>
                                <Image style={{ marginBottom: 12, width: 60, height: 60, resizeMode: "cover" }} source={require('../../assets/img/person1.png')} />
                                <View style={{ marginBottom: 15 }}>
                                    <Text style={{ color: "white", paddingBottom: 8, fontSize: 18, fontWeight: "700" }}>Chayanika Ghosh</Text>
                                    <Text style={{ color: "white", paddingBottom: 5, fontSize: 12, fontWeight: "500" }}>+91 987 654 3210</Text>
                                    <Image style={{ width: 82, height: 17, marginTop: 5, }} source={require('../../assets/img/premium1.png')} />
                                </View>

                            </View>
                        </View>
                        <View style={[{ flexDirection: "row", alignItems: "center", gap: 20 }, styles.menuItem]}>
                            <Image style={{ width: 25, height: 25    , tintColor:"#435354"}} source={require('../../assets/img/data-analytics.png')} />
                            <TouchableOpacity >
                                <Text style={styles.menuText}>Dashboard</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.hairlineMenu} />
                        <View style={[{ flexDirection: "row", alignItems: "center", gap: 20 }, styles.menuItem]}>
                            <Image style={{ width: 25, height: 25   , tintColor:"#435354"}} source={require('../../assets/img/user.png')} />
                            <TouchableOpacity >
                                <Text style={styles.menuText}>View Profile</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.hairlineMenu} />
         
                        <View style={styles.hairlineMenu} />
                        <View style={[{ flexDirection: "row", alignItems: "center", gap: 20 }, styles.menuItem]}>
                            <Image style={{ width: 25, height: 25   , tintColor:"#435354"}} source={require('../../assets/img/file.png')} />
                            <TouchableOpacity >
                                <Text style={styles.menuText}>Order History</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.hairlineMenu} />
                        <View style={[{ flexDirection: "row", alignItems: "center", gap: 20 }, styles.menuItem]}>
                            <Image style={{ width: 25, height: 25   , tintColor:"#435354"}} source={require('../../assets/img/writing.png')} />
                            <TouchableOpacity >
                                <Text style={styles.menuText}>How to apply</Text>
                               
                            </TouchableOpacity>

                        </View>
                        <View style={styles.hairlineMenu} />
                        <View style={[{ flexDirection: "row", alignItems: "center", gap: 20 }, styles.menuItem]}>
                            <Image style={{ width: 25, height: 25   , tintColor:"#435354"}} source={require('../../assets/img/question.png')} />
                            <TouchableOpacity >
                                <Text style={styles.menuText}>Query</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.hairlineMenu} />
                        <View style={[{ flexDirection: "row", alignItems: "center", gap: 20 }, styles.menuItem]}>
                            <Image style={{ width: 25, height: 25  , tintColor:"#435354" }} source={require('../../assets/img/refer.png')} />
                            <TouchableOpacity >
                            <Text style={styles.menuText}>Refer</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.hairlineMenu} />
                        <View style={[{ flexDirection: "row", alignItems: "center", gap: 20 }, styles.menuItem]}>
                            <Image style={{ width: 25, height: 25   , tintColor:"#435354"}} source={require('../../assets/img/contact-us.png')} />
                            <TouchableOpacity >
                                <Text style={styles.menuText}>Contact Us</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.hairlineMenu} />
                        <View style={[{ flexDirection: "row", alignItems: "center", gap: 20 }, styles.menuItem]}>
                            <Image style={{ width: 25, height: 25 ,tintColor:"#435354"}} source={require('../../assets/img/notification.png')} />
                            <TouchableOpacity >
                                <Text style={styles.menuText}>Notifications</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.hairlineMenu} />
                        <View style={[{ flexDirection: "row", alignItems: "center", gap: 20 }, styles.menuItem]}>
                            <Image style={{ width: 25, height: 25,tintColor:"#435354" }} source={require('../../assets/img/logout.png')} />
                            <TouchableOpacity >
                                <Text style={styles.menuText}>Logout</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.hairlineMenu} />
                    </View>

                </Animated.View>
            }
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
                <View>
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
        alignItems: "center"
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
    avatarImg: {
        width: 20,
        height: 28,
    },
    menu: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: Dimensions.get('window').width,
        backgroundColor: '#000000B2', // Set your desired background color
        zIndex: 1,
        elevation: 10, // For Android elevation effect
    },
    menuOptionContainer: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 1.04,
        backgroundColor: "#FFFCCE"
    },
    closeIcon: {
        alignSelf: 'flex-end',
        right: "6%",
        marginTop: 40,
        position: "absolute",


    },
    menuItem: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        // borderBottomWidth: 1,

        borderBottomColor: '#D9D9D9',
    },
    menuText: {
        fontSize: 18,
        color: '#435354',
        fontWeight: "500"
    },
    hairlineMenu: {
        backgroundColor: '#00367E33',
        height: 1,
        width: "85%",

        alignSelf: "center"
    },
});

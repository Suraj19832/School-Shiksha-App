import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import TitleDash from './TitleDash';


export default function Card() {
    const cards = [
        { title: "Computer Training", image: require('../assets/img/slider1.png'), status: "active" },
        { title: "ITI/Diplomatic Any Course", image: require('../assets/img/slider2.png'), status: "inActive" },
        { title: "Education Govt Scholarship", image: require('../assets/img/slider3.png'), status: "active" },
        { title: "Free College Admission", image: require('../assets/img/slider1.png'), status: "active" },
        { title: "Paid College Admission", image: require('../assets/img/slider1.png'), status: "inActive" },
        { title: "Free Govt Certificate Course", image: require('../assets/img/slider1.png'), status: "active" },
        { title: "College Admission for Higher Education", image: require('../assets/img/slider1.png'), status: "active" },
        { title: "Online Course", image: require('../assets/img/slider1.png'), status: "active" },
        { title: "Job Campusing", image: require('../assets/img/slider1.png'), status: "inActive" },
        { title: "Private Scholarship", image: require('../assets/img/slider1.png'), status: "active" },
        { title: "Entrance Scholarship", image: require('../assets/img/slider1.png'), status: "active" },
        { title: "Merit Scholarship", image: require('../assets/img/slider2.png'), status: "inActive" }
    ];

    return (
        <View>
            <TitleDash title="M.P Pass Student’s Benefits" primaryColor="#007B5E" />
            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: 'row', gap: 15, justifyContent: "center" }}>
                    <View style={styles.card}>

                        
                        {
                            cards[0].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[0].image} style={styles.image} />
                        <Text style={styles.textStyle} >{cards[0].title}</Text>
                    </View>
                    <View style={styles.card}>
                        {
                            cards[1].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[1].image} style={styles.image} />
                        <Text style={styles.textStyle}>{cards[1].title}</Text>
                    </View>
                    <View style={styles.card}>
                    {
                            cards[2].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[2].image} style={styles.image} />
                        <Text style={styles.textStyle} >{cards[2].title}</Text>
                    </View>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{'Show More >'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TitleDash title="H.S Pass Student’s Benefits" primaryColor="#2381FF" />
            <View style={{ alignItems: "center", }}>
                <View style={{ flexDirection: 'row', gap: 20, justifyContent: "center" }}>
                    <View style={styles.card}>
                    {
                            cards[3].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[3].image} style={styles.image} />
                        <Text style={styles.textStyle} >{cards[3].title}</Text>
                    </View>
                    <View style={styles.card}>
                    {
                            cards[4].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[4].image} style={styles.image} />
                        <Text style={styles.textStyle} >{cards[4].title}</Text>
                    </View>
                    <View style={styles.card}>
                    {
                            cards[5].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[5].image} style={styles.image} />
                        <Text style={styles.textStyle} >{cards[5].title}</Text>
                    </View>
                </View>



                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{'Show More >'}</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <TitleDash title="Graduate Pass Student’s Benefits" primaryColor="#792C01" />
            <View style={{ alignItems: "center", }}>
                <View style={{ flexDirection: 'row', gap: 20, justifyContent: "center" }}>
                    <View style={styles.card}>
                    {
                            cards[6].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[6].image} style={styles.image} />
                        <Text style={styles.textStyle} >{cards[6].title}</Text>
                    </View>
                    <View style={styles.card}>
                    {
                            cards[7].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[7].image} style={styles.image} />
                        <Text style={styles.textStyle} >{cards[7].title}</Text>
                    </View>
                    <View style={styles.card}>
                    {
                            cards[8].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[8].image} style={styles.image} />
                        <Text style={styles.textStyle} >{cards[8].title}</Text>
                    </View>
                </View>


                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{'Show More >'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TitleDash title="Others Benefits" primaryColor="#60317D" />
            <View style={{ alignItems: "center", }}>
                <View style={{ flexDirection: 'row', gap: 20, justifyContent: "center" }}>
                    <View style={styles.card}>
                    {
                            cards[9].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[9].image} style={styles.image} />
                        <Text style={styles.textStyle} >{cards[9].title}</Text>
                    </View>
                    <View style={styles.card}>
                    {
                            cards[10].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[10].image} style={styles.image} />
                        <Text style={styles.textStyle} >{cards[10].title}</Text>
                    </View>
                    <View style={styles.card}>
                    {
                            cards[11].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Image source={require('../assets/img/padlock.png')} style={styles.lockImage} />
                            </View>
                        }
                        <Image source={cards[11].image} style={styles.image} />
                        <Text style={styles.textStyle} >{cards[11].title}</Text>
                    </View>

                </View>

                <View style={{ paddingVertical: 20 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{'Show More >'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: "#F6B02E",
        width: 102,
        height: 160,
        borderRadius: 10,
        margin: 5,
        padding: 10,
        position: 'relative', // To allow absolute positioning of lock image
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center"
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    textStyle: {
        textAlign: "center",
        color:"#595959",
        fontSize:13,
        fontWeight:"500",
    },
    lockContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, // Ensure the lock image is above other content
        backgroundColor: "#03357D4D",
        borderRadius:10
    },
    lockImage: {
        width: 80,
        height: 80,
   


    },
    showMore: {
        backgroundColor: "#F6B02E",
        width: 200,
        height: 40,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // textStyle: {
    //     textAlign: "center",
    //     color: "#595959",
    //     fontSize: 13,
    //     fontWeight: "500",
    // },
    button: {
        backgroundColor: '#FFFAE7',
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1, // Specify border width
        borderColor: "#DDDDDD"
    }
    ,
    text: {
        color: 'black',
        fontSize: 16,
    },

});

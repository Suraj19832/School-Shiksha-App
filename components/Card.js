import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import TitleDash from './TitleDash';
import { Fontisto } from '@expo/vector-icons';

export default function Card() {
    const cards = [
        { title: "Computer Training", image: require('../assets/img/computer.png'), status: "active" },
        { title: "ITI /Diplomatic any Course", image: require('../assets/img/certification.png'), status: "inActive" },
        { title: "Education Govt Scholarship", image: require('../assets/img/degree.png'), status: "active" },
        { title: "Free College Admission", image: require('../assets/img/student.png'), status: "active" },
        { title: "Paid College Admission", image: require('../assets/img/admission.png'), status: "inActive" },
        { title: "Free Govt Certificate Course", image: require('../assets/img/online-certificate.png'), status: "active" },
        { title: "College Admission for Higher Education", image: require('../assets/img/tuition.png'), status: "active" },
        { title: "Online Course", image: require('../assets/img/webinar.png'), status: "active" },
        { title: "Job Campusing", image: require('../assets/img/campus.png'), status: "inActive" },
        { title: "Private Scholarship", image: require('../assets/img/scholarship.png'), status: "active" },
        { title: "Entrance Scholarship", image: require('../assets/img/loan.png'), status: "active" },
        { title: "Merit Scholarship", image: require('../assets/img/university.png'), status: "inActive" }
    ];

    return (
        <View>
            <TitleDash title="M.P Pass Student’s Benefits" primaryColor="#C83000" />
            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: 'row', gap: 15, justifyContent: "center" }}>
                    <View style={styles.card}>


                        {
                            cards[0].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Fontisto name="locked" />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[0].image} style={styles.image} /></View>
                        <Text style={styles.textStyle} >{cards[0].title}</Text>
                    </View>
                    <View style={styles.card}>
                        {
                            cards[1].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                <Fontisto name="locked" color="white" size={17} />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[1].image} style={styles.image} /></View>
                        <Text style={styles.textStyle}>{cards[1].title}</Text>
                    </View>
                    <View style={styles.card}>
                        {
                            cards[2].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                 <Fontisto name="locked" color="white" size={17} />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[2].image} style={styles.image} /></View>
                        <Text style={styles.textStyle} >{cards[2].title}</Text>
                    </View>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{'Show More >'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TitleDash title="H.S Pass Student’s Benefits" primaryColor="#004F3C" />
            <View style={{ alignItems: "center", }}>
                <View style={{ flexDirection: 'row', gap: 20, justifyContent: "center" }}>
                    <View style={styles.card}>
                        {
                            cards[3].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                 <Fontisto name="locked" color="white" size={17} />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[3].image} style={styles.image} /></View>
                        <Text style={styles.textStyle} >{cards[3].title}</Text>
                    </View>
                    <View style={styles.card}>
                        {
                            cards[4].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                 <Fontisto name="locked" color="white" size={17} />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[4].image} style={styles.image} /></View>
                        <Text style={styles.textStyle} >{cards[4].title}</Text>
                    </View>
                    <View style={styles.card}>
                        {
                            cards[5].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                 <Fontisto name="locked" color="white" size={17} />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[5].image} style={styles.image} /></View>
                        <Text style={styles.textStyle} >{cards[5].title}</Text>
                    </View>
                </View>



                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{'Show More >'}</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <TitleDash title="Graduate Pass Student’s Benefits" primaryColor="#951F1F" />
            <View style={{ alignItems: "center", }}>
                <View style={{ flexDirection: 'row', gap: 20, justifyContent: "center" }}>
                    <View style={styles.card}>
                        {
                            cards[6].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                 <Fontisto name="locked" color="white" size={17} />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[6].image} style={styles.image} /></View>
                        <Text style={styles.textStyle} >{cards[6].title}</Text>
                    </View>
                    <View style={styles.card}>
                        {
                            cards[7].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                 <Fontisto name="locked" color="white" size={17} />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[7].image} style={styles.image} /></View>
                        <Text style={styles.textStyle} >{cards[7].title}</Text>
                    </View>
                    <View style={styles.card}>
                        {
                            cards[8].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                 <Fontisto name="locked" color="white" size={17} />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[8].image} style={styles.image} /></View>
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
                            cards[9].status != 'inActive' &&
                            <View style={styles.lockContainer}>
                                 <Fontisto name="locked" color="white" size={17} />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[9].image} style={styles.image} /></View>
                        <Text style={styles.textStyle} >{cards[9].title}</Text>
                    </View>
                    <View style={styles.card}>
                        {
                            cards[10].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                 <Fontisto name="locked" color="white" size={17} />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[10].image} style={styles.image} /></View>
                        <Text style={styles.textStyle} >{cards[10].title}</Text>
                    </View>
                    <View style={styles.card}>
                        {
                            cards[11].status === 'inActive' &&
                            <View style={styles.lockContainer}>
                                 <Fontisto name="locked" color="white" size={17} />
                            </View>
                        }
                        <View style={styles.imgContainer}><Image source={cards[11].image} style={styles.image} /></View>
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
        backgroundColor: "#03357D",
        width: 102,
        height: 170,
        borderRadius: 10,
        margin: 5,
        padding: 10,
        position: 'relative', // To allow absolute positioning of lock image
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center"
    },
    imgContainer:
    {
        backgroundColor: "white",
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    textStyle: {
        textAlign: "center",
        color: "white",
        fontSize: 13,
        fontWeight: "500",
    },
    lockContainer: {
        position: 'absolute',
        top: 6,
        right: 6,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, // Ensure the lock image is above other content
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

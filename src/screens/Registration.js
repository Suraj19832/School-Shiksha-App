import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

import React, { useState } from "react";
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
} from "@expo/vector-icons";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "expo-checkbox";
// import { TouchableOpacity } from "react-native-web";
// const Checkbox =({checked , onPress}) =>{
//   return(
//     <TouchableOpacity onPress={onPress}>
//       <View style={[styles.checkbox ,checked && styles.checked]}>
//         {checked && <FontAwesome name ='check' size={12}}
//       </View>
//     </TouchableOpacity>
//   )
// }
const Registration = () => {
  const [isChecked, setChecked] = useState(false);
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');

  const validateFullName = () => {
    if (!fullName.trim()) {
      setFullNameError('Full Name is required');
    } else {
      setFullNameError('');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
          <View style={styles.innerView}>
            <MaterialIcons name="arrow-back" size={30} color={"#00367E"} />
            <View style={styles.ImageView}>
              <Image
                style={styles.image}
                source={require("/home/desunub7/School Shiksharthi/school-shiksha-app/assets/img/registration.png")}
              />
            </View>
            <View style={{ left: 0 }}>
              <View>
                <Text style={styles.CreateAccountText}>Create </Text>
              </View>
              <View>
                <Text style={styles.CreateAccountText}>your account</Text>
              </View>
            </View>

            {/* Input fields  */}
            <View style={{ left: 0, marginTop: 20 }}>


              {/* <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Full Name
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="user"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
              </View> */}

<View style={styles.inputbox_main_container}>
      <View>
        <Text style={{ color: "rgba(0, 54, 126, 1)", fontWeight: "500", fontSize: 18 }}>
          Full Name
        </Text>
      </View>
      <View style={styles.inputbox_container}>
        <Feather name="user" size={16} color="rgba(0, 54, 126, 1)" />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="rgba(166, 166, 166, 1)"
          value={fullName}
          onChangeText={setFullName}
          onBlur={validateFullName}
        />
      </View>
      {fullNameError ? <Text style={{ color: 'red' }}>{fullNameError}</Text> : null}
    </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Father's Name
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="user"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Father's name "
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Mobile Number
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="phone-call"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Enter your mobile number"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Whatsapp Number
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <FontAwesome5
                    name="whatsapp"
                    size={16}
                    color=" rgba(0, 54, 126, 1)"
                  />
                  {/* <MaterialIcons name='' size={16} color=" rgba(0, 54, 126, 1)" /> */}
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Phone "
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Email Id
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="mail"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    D.O.B
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="calendar"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Date of birth"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
              </View>

              {/* class  */}
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Class
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <Feather
                      name="book-open"
                      size={16}
                      color="
                rgba(0, 54, 126, 1)"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Date of birth"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                    />
                  </View>
                  <View>
                    <AntDesign
                      name="caretdown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Gender
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="gender-male-female-variant"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                    />
                  </View>
                  <View>
                    <AntDesign
                      name="caretdown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Full Address
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="map-pin"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full address"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    District
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="map"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full address"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Police Station
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="police-station"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Choose Option"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                    />
                  </View>
                  <View>
                    <AntDesign
                      name="caretdown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Pin
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <Feather
                    name="map-pin"
                    size={16}
                    color="
                rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter pin code"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Member Plan
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="crown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                    />
                  </View>
                  <View>
                    <AntDesign
                      name="caretdown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </View>
              </View>
              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Referral code
                  </Text>
                </View>
                <View style={styles.inputbox_container}>
                  <FontAwesome5
                    name="ticket-alt"
                    size={16}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Referral Code (Optional)"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                  />
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Payment/Free
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="crown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                    />
                  </View>
                  <View>
                    <AntDesign
                      name="caretdown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </View>
              </View>

              <View style={styles.inputbox_main_container}>
                <View>
                  <Text
                    style={{
                      color: "rgba(0, 54, 126, 1)",
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    Password
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputbox_container,
                    { justifyContent: "space-between" },
                  ]}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="lock"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                    />
                  </View>
                  <View>
                    <MaterialIcons
                      name="hide-source"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.section}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                />
                <Text style={{ fontSize: 14, fontWeight: "400" }}>
                  I agree with the
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "600" }}>
                  Terms & Conditions
                </Text>
              </View>

              {/* button  */}
            
              <View style={styles.inputbox_main_container}>
      
        <LinearGradient
          colors={['#03357D', '#0569FA']} // Define your gradient colors here
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={[styles.buttonbox ,{justifyContent:'center'}]}
        >
          <View style={{ justifyContent: 'center' ,alignItems :'center' ,display:'flex' }}>
            <Text style={{ fontSize: 16, fontWeight: '500' , alignItems:'center' ,display:'flex' ,justifyContent:'center' }}>Sign Up</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={{display:'flex ',flexDirection:'row' ,justifyContent:'center' ,alignItems:'center'}}>
      <Text style={{color:'#424242',fontWeight:'400' ,fontSize:16}}>Already have an account? </Text><Text style={{color:'#03357D' ,fontWeight:'700' ,fontSize:18}}>Sign in</Text>
      </View>
 
  
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
const styles = StyleSheet.create({
  mainView: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
    // backgroundColor: "red",
  },
  innerView: {
    width: "90%",
    height: "auto",
    // backgroundColor: "yellow",
    marginBottom: 20,
    marginTop: 50,
    // justifyContent:'center',
    // alignItems:'center'
  },
  ImageView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 220,
    width: 220,
  },

  CreateAccountText: {
    fontSize: 30,
    fontWeight: "600",
  },
  inputbox_container: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#03357D",
    padding: 12,
    paddingHorizontal: 20,
    backgroundColor: "#FDF1DD",
    borderRadius: 30,
    gap: 8,
  },

  buttonbox: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#03357D',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    gap: 8,
  },

  buttonbox1:{
    textAlign: 'center',
    alignItems: 'center',
  },
  inputbox_main_container: {
    gap: 12,
    marginBottom: 10,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  buttonboxWrapper: {
    borderRadius: 30, // Retain the border radius from the buttonbox style
    overflow: 'hidden', // Clip the linear gradient to the border radius
  },
});

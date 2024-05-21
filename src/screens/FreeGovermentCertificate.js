import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
  ScrollView,
  StatusBar,
  Modal,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
import Header from "../../components/Header";
import { useRoute } from "@react-navigation/native";
import { GetfetchDataWithParams } from "../../Helper/Helper";

const FreeGovermentCertificate = ({ navigation }) => {
  const name = "kcodkcodkc";
  const [isLoading, setisLoading] = useState(true)
  const [isDropdownOpenclass, setDropdownOpenclass] = useState(false);
  const [selectedOptionclass, setSelectedOptionclass] = useState(null);
  const [inputValueclass, setInputValueclass] = useState("");
  const [inputvlauesearch, setinputvlauesearch] = useState()
  const toggleDropdownclass = () => {
    setDropdownOpenclass(!isDropdownOpenclass);
    fetchDropDown("master/courses" ,id)
  };

  const handleSelectOptionclass = (option , courseid) => {
    setSelectedOptionclass(option);
    setInputValueclass(option);
    setDropdownOpenclass(false);
    fetchUserData("master/organization-course",id, courseid )
  };
  const handleinputtextfield=(text)=>{
    setinputvlauesearch(text)
    console.log(inputvlauesearch)
    fetchUserData("master/organization-course",id,null,text)
  }
  const handleInputChangeclass = (text) => {
    setInputValueclass(text);
    setDropdownOpenclass(null); // Clear selected option when user edits input
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const images = [
    require("../../assets/img/onlineLearning (1).png"),
    require("../../assets/img/slider3.png"),
    require("../../assets/img/slider2.png"),
  ];
  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  };
  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === activeIndex && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const route = useRoute();
  const { id } = route.params;
  console.log(id,"idiochdoshcsudivhiuf")

 const [freecertificate, setfreecertificate] = useState([])
  
  async function fetchUserData(endpoint,id ,course_idd =null ,search_value =null) {
    console.log(search_value,"********************************")
    try {
      // const endpoint = "master/organization-course";
      const params = {
        // page: 1,
        // limit: 3,
        // service_type: serviceType.short_name,
        service_id:id,
        // course_id:course_idd
      };
      if (course_idd) {
        params.course_id = course_idd;
      }
      if (search_value){
        params.search_value = search_value;
      }

      GetfetchDataWithParams(endpoint, params)
      .then((res)=>{
        if(res?.status){
          setisLoading(false)
        }
        console.log("free college list api hit status" ,res.status)
        setfreecertificate(res?.data)
        
        // setisLoading(false)
      })
   
      // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",userData,params); // Handle or process the fetched user data here
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  console.log("djjdjdojcsdcjsdlkc",freecertificate)
  useEffect(() => {
    fetchUserData("master/organization-course",id )
  }, [id])
  const [dropdownOption, setdropdownOption] = useState([])

  async function fetchDropDown(endpoint,id) {
    try {
      // const endpoint = "master/organization-course";
      const params = {
        // page: 1,
        // limit: 3,
        // service_type: serviceType.short_name,
        service_id:id
      };
      GetfetchDataWithParams(endpoint, params)
      .then((res)=>{
        console.log("free college dropdown" ,res.status)
        setdropdownOption(res?.data)
        setisLoading(false)
      })
    
      // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",userData,params); // Handle or process the fetched user data here
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Free Govt. Certificate List"
        navigateTo={navigation.goBack}
      />
      <ScrollView style={{ backgroundColor: "#FFFCCE" }}>
        <View style={{ position: "relative" }}>
          <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image style={styles.imgStyle} source={item} resizeMode="cover" />
            )}
            keyExtractor={(item, index) => index.toString()}
            onViewableItemsChanged={onViewableItemsChanged}
          />
          {renderPagination()}
        </View>
        <View style={styles.searchContainer}>
          <View style={{ gap: 15 }}>
            <Text
              style={{
                color: "#00367E",
                fontWeight: "600",
                fontSize: 20,
                alignSelf: "center",
                marginHorizontal: 10,
              }}
            >
              Free Govt. Course Admission{" "}
            </Text>
            <View style={styles.inputbox_main_container1}>
              <View style={styles.inputbox_container}>
                <TextInput
                  style={styles.input}
                  placeholder="Search"
                  placeholderTextColor="rgba(166, 166, 166, 1)"
                  value={inputvlauesearch}
                  onChangeText={handleinputtextfield}
                />

                <AntDesign name="search1" size={16} color="#A6A6A6" />
              </View>
            </View>

            <View style={styles.inputbox_main_container}>
              <View>
                <Text
                  style={{
                    color: "rgba(0, 54, 126, 1)",
                    fontWeight: "500",
                    fontSize: 18,
                    alignSelf: "flex-start",
                  }}
                >
                  Course Name
                </Text>
              </View>
              <View
                style={[
                  styles.inputbox_container,
                  { justifyContent: "space-between", width: "91%" },
                ]}
              >
                <TouchableOpacity onPress={toggleDropdownclass}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      style={{}}
                      source={require("../../assets/img/online-course.png")}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor="rgba(166, 166, 166, 1)"
                      value={inputValueclass}
                      onChangeText={handleInputChangeclass}
                      onBlur={() => handleSelectOptionclass(inputValueclass)}
                      editable={false} // Allow editing only when dropdown is closed
                    />
                    <AntDesign
                      name="caretdown"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </TouchableOpacity>
              </View>

              {isDropdownOpenclass && (
                <View style={styles.dropdownContainer}>

{dropdownOption.map((option)=>{
                      return(
                        <TouchableOpacity
                        style={styles.dropdownOption}
                        onPress={() => handleSelectOptionclass(option?.course_name ,option?.course_id)}
                      >
                        <View
                          style={{
                            width: Dimensions.get("window").width * 0.7,
                            alignItems: "center",
                          }}
                        >
                          <Text>{option.course_name}</Text>
                        </View>
                      </TouchableOpacity>
                      )
                    })}
                  {/* <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionclass("1")}
                  >
                    <View
                      style={{
                        width: Dimensions.get("window").width * 0.7,
                        alignItems: "center",
                      }}
                    >
                      <Text>1</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionclass("2")}
                  >
                    <View
                      style={{
                        width: Dimensions.get("window").width * 0.7,
                        alignItems: "center",
                      }}
                    >
                      <Text>2</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionclass("3")}
                  >
                    <View
                      style={{
                        width: Dimensions.get("window").width * 0.7,
                        alignItems: "center",
                      }}
                    >
                      <Text>3</Text>
                    </View>
                  </TouchableOpacity> */}
                </View>
              )}
            </View>

            {/* <Text
              style={{
                alignSelf: "flex-end",
                color: "#0567F5",
                fontWeight: "500",
                fontSize: 14,
                textDecorationLine: "underline",
              }}
            >
              Request Course
            </Text> */}
          </View>
        </View>


        <View style={styles.listContainer}>
          <View style={styles.listCart}>
            <Text
              style={{
                color: "#00367E",
                fontWeight: "600",
                fontSize: 20,
                lineHeight: 30,
                marginVertical: 20,
                alignSelf: "center",
              }}
            >
              Free Course with Updated Link
            </Text>

            <View
              style={{
                alignItems: "center",
                gap: 20,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  height: "auto",
                }}
              >
                <Image
                  style={styles.CardImage}
                  source={require("../../assets/img/pmkvy.png")}
                />

                <Image
                  style={{ height: 87, width: 102 }}
                  source={require("../../assets/img/NSDC.png")}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 20,
                  height: "auto",
                }}
              >
                <Image
                  style={{ height: 67, width: 94 }}
                  source={require("../../assets/img/SkillIndia.png")}
                />
                <Image
                  style={{ height: 41, width: 109 }}
                  source={require("../../assets/img/rol.png")}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  height: "auto",
                }}
              >
                <Image
                  style={{ height: 96, width: 96 }}
                  source={require("../../assets/img/surya.png")}
                />
                <Image
                  style={{ height: 49, width: 106 }}
                  source={require("../../assets/img/HargharSikcha.png")}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  height: "auto",
                }}
              >
                <Image
                  style={{ height: 102, width: 91 }}
                  source={require("../../assets/img/utkarshBangla.png")}
                />
                <Image
                  style={{ height: 117, width: 86 }}
                  source={require("../../assets/img/westBengal.png")}
                />
              </View>
            </View>
          </View>
          {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        freecertificate.map((value, index) => (
          <View style={styles.listCart} key={index}>
            <View style={styles.cardTop}>
              <View
                style={{
                  backgroundColor: "rgba(255, 199, 0, 0.5)",
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{}}
                  source={require("../../assets/img/college.png")}
                />
              </View>
              <Text
                style={{
                  color: "rgba(55, 55, 55, 1)",
                  fontWeight: "600",
                  fontSize: 18,
                }}
              >
                {value.organization_name}
              </Text>
            </View>
            <View style={styles.course}>
              <Text style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}>
                Course Name -
              </Text>
              <Text style={{ color: "#595959", fontWeight: "600", fontSize: 14 }}>
                {value.course_name}
              </Text>
            </View>

            <View style={styles.aboutCourse}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}>
                  Course Duration
                </Text>
                <Text style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}>
                  Course Fees
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}>
                  {value.course_duration} Months
                </Text>
                <Text style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}>
                  {value.course_fees}/-
                </Text>
              </View>
            </View>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.buttonbox}
                onPress={() =>
                  navigation.navigate("freeGovtDetails", {
                    collegename: value.organization_name,
                    courcename: value.course_name,
                    courseid:value?.organization_course_id
                  })
                }
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#0567F5",
                    fontWeight: "500",
                    fontSize: 14,
                    lineHeight: 16.41,
                  }}
                >
                  View All Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("freeGovAdmissionForm", {
                    collegename: value.organization_name,
                    courcename: value.course_name,
                  })
                }
              >
                <LinearGradient
                  colors={["#03357D", "#0569FA"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[
                    styles.buttonbox,
                    { justifyContent: "center", paddingHorizontal: 30 },
                  ]}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        lineHeight: 16.41,
                      }}
                    >
                      Apply Link
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}

          {/* dummy data  */}
          {/* <View style={styles.listCart}>
            <View style={styles.cardTop}>
              <View
                style={{
                  backgroundColor: "rgba(255, 199, 0, 0.5)",
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{}}
                  source={require("../../assets/img/college.png")}
                />
              </View>

              <Text
                style={{
                  color: "rgba(55, 55, 55, 1)",
                  fontWeight: "600",
                  fontSize: 18,
                }}
              >
                Calcutta University
              </Text>
            </View>
            <View style={styles.course}>
              <Text
                style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
              >
                Course Name -
              </Text>
              <Text
                style={{ color: "#595959", fontWeight: "600", fontSize: 14 }}
              >
                B.C.A
              </Text>
            </View>

            <View style={styles.aboutCourse}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Duration
                </Text>
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Fees{" "}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  4 Months
                </Text>
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  30000/-
                </Text>
              </View>
            </View>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.buttonbox}
                onPress={() =>
                  navigation.navigate("freeGovtDetails", {
                    collegename: "Calcutta University",
                    courcename: "B.C.A",
                  })
                }
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#0567F5",
                    fontWeight: "500",
                    fontSize: 14,
                    lineHeight: 16.41,
                  }}
                >
                  View All Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("freeGovAdmissionForm", {
                    collegename: "Calcutta University",
                    courcename: "B.C.A",
                  })
                }
              >
                <LinearGradient
                  colors={["#03357D", "#0569FA"]} // Define your gradient colors here
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[
                    styles.buttonbox,
                    { justifyContent: "center", paddingHorizontal: 30 },
                  ]}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        lineHeight: 16.41,
                      }}
                    >
                      Apply Link
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View> */}

          {/* <View style={styles.listCart}>
            <View style={styles.cardTop}>
              <View
                style={{
                  backgroundColor: "rgba(255, 199, 0, 0.5)",
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{}}
                  source={require("../../assets/img/college.png")}
                />
              </View>

              <Text
                style={{
                  color: "rgba(55, 55, 55, 1)",
                  fontWeight: "600",
                  fontSize: 18,
                }}
              >
                A.P.C College
              </Text>
            </View>
            <View style={styles.course}>
              <Text
                style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
              >
                Course Name -
              </Text>
              <Text
                style={{ color: "#595959", fontWeight: "600", fontSize: 14 }}
              >
                B.C.A
              </Text>
            </View>

            <View style={styles.aboutCourse}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Duration
                </Text>
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Fees{" "}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  4 Months
                </Text>
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  40000/-
                </Text>
              </View>
            </View>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.buttonbox}
                onPress={() =>
                  navigation.navigate("freeGovtDetails", {
                    collegename: "A.P.C College",
                    courcename: "B.C.A",
                  })
                }
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#0567F5",
                    fontWeight: "500",
                    fontSize: 14,
                    lineHeight: 16.41,
                  }}
                >
                  View All Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("freeGovAdmissionForm", {
                    collegename: "A.P.C College",
                    courcename: "B.C.A",
                  })
                }
              >
                <LinearGradient
                  colors={["#03357D", "#0569FA"]} // Define your gradient colors here
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[
                    styles.buttonbox,
                    { justifyContent: "center", paddingHorizontal: 30 },
                  ]}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        lineHeight: 16.41,
                      }}
                    >
                      Apply Link
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View> */}

          {/* <View style={styles.listCart}>
            <View style={styles.cardTop}>
              <View
                style={{
                  backgroundColor: "rgba(255, 199, 0, 0.5)",
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{}}
                  source={require("../../assets/img/college.png")}
                />
              </View>

              <Text
                style={{
                  color: "rgba(55, 55, 55, 1)",
                  fontWeight: "600",
                  fontSize: 18,
                }}
              >
                A.J.C College
              </Text>
            </View>
            <View style={styles.course}>
              <Text
                style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
              >
                Course Name -
              </Text>
              <Text
                style={{ color: "#595959", fontWeight: "600", fontSize: 14 }}
              >
                B.C.A
              </Text>
            </View>

            <View style={styles.aboutCourse}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Duration
                </Text>
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Fees{" "}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  4 Months
                </Text>
                <Text
                  style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                >
                  30000/-
                </Text>
              </View>
            </View>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.buttonbox}
                onPress={() =>
                  navigation.navigate("freeGovtDetails", {
                    collegename: "A.J.C College",
                    courcename: "B.C.A",
                  })
                }
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#0567F5",
                    fontWeight: "500",
                    fontSize: 14,
                    lineHeight: 16.41,
                  }}
                >
                  View All Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("freeGovAdmissionForm", {
                    collegename: "A.J.C College",
                    courcename: "B.C.A",
                  })
                }
              >
                <LinearGradient
                  colors={["#03357D", "#0569FA"]} // Define your gradient colors here
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={[
                    styles.buttonbox,
                    { justifyContent: "center", paddingHorizontal: 30 },
                  ]}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                        lineHeight: 16.41,
                      }}
                    >
                      Apply Link
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View> */}
          {/* dummy data end here  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              height: 27,
              backgroundColor: "#FFFFFF",
              marginBottom: 20,
              padding: 5,
            }}
          >
            <Text style={{ color: "#435354" }}>Load More</Text>
            <AntDesign name="down" size={15} color="#435354" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FreeGovermentCertificate;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#FFFCCE",
    // marginTop: 28,
    // top: 53,
    marginBottom: 48,
  },
  heading: {
    fontWeight: "500",
    fontSize: 16,
  },
  mainheadercontainer: {
    backgroundColor: "white",
    height: 50,
    justifyContent: "center",

    position: "relative",
  },
  headercontainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    left: 10,
    gap: 10,
  },
  image: {
    height: 220,
    width: "100%",
  },
  //   search
  searchContainer: {
    gap: 15,
    marginVertical: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  inputbox_main_container1: {
    gap: 12,
    alignItems: "center",
    width: "100%",
  },
  inputbox_container: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(3, 53, 125, 1)",
    backgroundColor: "white",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "89%",
    gap: 8,
    height: 52,
  },
  input: {
    width: "80%",
    // backgroundColor:'red',
    color: "black",
  },
  inputbox_main_container: {
    gap: 12,
    // alignItems: "center",
    width: "100%",
  },
  dropdownContainer: {
    position: "absolute",
    top: "100%",
    left: 0,

    // zIndex:1,
    backgroundColor: "yellow",
    marginTop: 10,
    width: "88%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    zIndex: 1,
    // left: 17,
    alignSelf: "center",
    // justifyContent:'center'
  },
  dropdownOption: {
    paddingVertical: 8,
    alignSelf: "center",
  },
  listContainer: {
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  listCart: {
    // flexDirection: "row",
    textAlign: "center",
    // alignItems: "center",
    // justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    // paddingVertical: 12,
    // paddingHorizontal: 20,
    borderRadius: 20,
    width: "89%",
    gap: 15,
    height: "auto",
    marginBottom: 20,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // padding: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  course: {
    flexDirection: "row",
    gap: 5,
    // padding: 12,
    paddingHorizontal: 20,
  },
  aboutCourse: {
    backgroundColor: "#E2FDFF",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 10,
    padding: 12,
    // position:'absolute'
  },
  cardButtons: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  buttonbox: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0567F5",
    padding: 14,
    paddingHorizontal: 15,
    borderRadius: 30,
    gap: 8,
    width: "auto",
    marginBottom: 10,
  },
  CardImage: {
    width: 110,
    height: 49,
    resizeMode: "cover",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: "#00367E",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  imgStyle: {
    // height: Dimensions.get("window").height * 0.29,
    // width: Dimensions.get("window").width * 0.999,
    // borderRadius: 10,
    height: 162,
    width: 360,
  },
});

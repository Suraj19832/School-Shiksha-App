import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Modal,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Linking,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
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
// import { ActivityIndicator } from "react-native-paper";
// import { FlatList } from "react-native-web";
const FreeCollegeList = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const items = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  const [isDropdownOpenclass, setDropdownOpenclass] = useState(false);
  const [selectedOptionclass, setSelectedOptionclass] = useState(null);
  const [inputValueclass, setInputValueclass] = useState("");
  const toggleDropdownclass = () => {
    setDropdownOpenclass(!isDropdownOpenclass);
    fetchDropDown("master/courses", id);
  };
  const [dropdownvalueid, setdropdownvalueid] = useState();
  const handleSelectOptionclass = (option, courseid) => {
    setSelectedOptionclass(option);
    setdropdownvalueid(courseid);
    setInputValueclass(option);
    setDropdownOpenclass(false);
    console.log("############################");
    fetchUserData("master/organization-course", id, courseid);
  };
  const handleInputChangeclass = (text) => {
    setInputValueclass(text);
    setDropdownOpenclass(null); // Clear selected option when user edits input
  };

  const route = useRoute();
  const { id, heading } = route.params;
  console.log(id, ":::::::::::::::::::::::::::::::::");
  // console.log("checking id is comig or not", id)
  const [FreeCollegeList, setFreeCollegeList] = useState([]);
  const [dropdownOption, setdropdownOption] = useState([]);
  async function fetchDropDown(endpoint, id) {
    try {
      // const endpoint = "master/organization-course";
      const params = {
        // page: 1,
        // limit: 3,
        // service_type: serviceType.short_name,
        service_id: id,
      };
      GetfetchDataWithParams(endpoint, params).then((res) => {
        console.log("free college dropdown", res.status);
        setdropdownOption(res?.data);
        setisLoading(false);
      });

      // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",userData,params); // Handle or process the fetched user data here
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  console.log("dropdown optionn--=-=-=-=-==-=-=-==-=-=-=-=---", dropdownOption);
  const [organizationId, setorganizationId] = useState(null);
  async function fetchUserData(
    endpoint,
    id,
    course_idd = null,
    search_value = null
  ) {
    console.log(search_value, "********************************");
    try {
      // const endpoint = "master/organization-course";
      const params = {
        // page: 1,
        // limit: 3,
        // service_type: serviceType.short_name,
        service_id: id,
        // course_id:course_idd
      };
      if (course_idd) {
        params.course_id = course_idd;
      }
      if (search_value) {
        params.search_value = search_value;
      }

      GetfetchDataWithParams(endpoint, params).then((res) => {
        console.log("free college list api hit status", res.status);
        setFreeCollegeList(res?.data);
        setorganizationId(res?.data?.organization_id);
        console.log(
          res?.data,
          "}}}}}}}}}}}}{{{{{{{{{{{{___________________________"
        );

        // const organizationIds = res.data.map((item) => item.organization_id); // Extract all organization_ids
        // setorganizationId(organizationIds);
        // console.log("shschcudhcuwshfciuwyhiufeiufyiufiui",organizationIds)
        setisLoading(false);
      });

      // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",userData,params); // Handle or process the fetched user data here
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    const params = {
      service_id: id,
    };
    GetfetchDataWithParams("master/service-banner", params)
      .then((res) => {
        setBannerData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const images = bannerData;

  const flatListRef = useRef(null);

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

  const renderItem = ({ item }) => (
    // console.log(item.banner_image, "helloooooooooo"),
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: item.banner_image }}
        style={styles.image}
        resizeMode="cover"
        // onError={(error) => console.log("Error loading image:", error)}
      />
    </View>
  );

  useEffect(() => {
    fetchUserData("master/organization-course", id);
  }, [id]);
  // console.log("00000000000000000000000000000000000000000000",FreeCollegeList)
  const [inputvlauesearch, setinputvlauesearch] = useState();
  const handleinputtextfield = (text) => {
    setinputvlauesearch(text);
    console.log(inputvlauesearch);
    fetchUserData("master/organization-course", id, null, text);
  };

  const whatsappclicked = (whatsappnumber) => {
    console.log(
      whatsappnumber,
      "yyyydyydydydydydydydydydyydcgsjadcchkgcjdbjckh;ghlaHKVCHDCGWJCBWHCIUGWAJXCBJSDBCXKWDGCJHBDSCJKGDCMSBGCKSDGCSDBCJHVNZVCJYSDDCMBJHLKGCKH"
    );
    const whatsappUrl = `whatsapp://send?phone=${whatsappnumber}`;
    console.log(
      "number where request is sent ",
      `whatsapp://send?phone=${whatsappnumber}`
    );
    Linking.openURL(whatsappUrl);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={`${heading} List`} navigateTo={navigation.goBack} />
      <ScrollView style={{ backgroundColor: "#FFFCCE", height: "100%" }}>
        <View style={{ position: "relative" }}>
          <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
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
              }}
            >
              Search Free College Admission{" "}
            </Text>
            <View style={styles.inputbox_main_container1}>
              <View style={styles.inputbox_container}>
                <TextInput
                  style={styles.input}
                  value={inputvlauesearch}
                  onChangeText={handleinputtextfield}
                  placeholder="Search"
                  placeholderTextColor="rgba(166, 166, 166, 1)"
                />

                <AntDesign name="search1" size={16} color="#A6A6A6" />
              </View>
            </View>

            <View style={{ gap: 15, alignSelf: "center" }}>
              <Text
                style={{
                  color: "#00367E",
                  fontWeight: "600",
                  fontSize: 20,
                }}
              >
                Course Name
              </Text>
              <View style={styles.inputbox_main_container1}>
                <TouchableOpacity onPress={toggleDropdownclass}>
                  <View
                    style={[
                      styles.inputbox_container,
                      { borderRadius: 30, backgroundColor: "#FDF1DD" },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 4,
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{}}
                        source={require("../../assets/img/online-course.png")}
                      />
                      <TextInput
                        style={
                          (styles.input, { paddingLeft: 5, color: "black" })
                        }
                        placeholder="Select"
                        placeholderTextColor="rgba(166, 166, 166, 1)"
                        value={inputValueclass}
                        onChangeText={handleInputChangeclass}
                        onBlur={() => handleSelectOptionclass(inputValueclass)}
                        editable={false} // Allow editing only when dropdown is closed
                      />
                    </View>

                    <AntDesign name="caretdown" size={16} color="#03357D" />
                  </View>
                </TouchableOpacity>
                {isDropdownOpenclass && (
                  <View style={styles.dropdownContainer}>
                    {dropdownOption.map((option) => {
                      return (
                        <TouchableOpacity
                          style={styles.dropdownOption}
                          onPress={() =>
                            handleSelectOptionclass(
                              option?.course_name,
                              option?.course_id
                            )
                          }
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
                      );
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

            {/* <View style={{ gap: 15, alignSelf: 'center' }}>
      <Text
        style={{
          color: '#00367E',
          fontWeight: '600',
          fontSize: 20,
        }}
      >
        Course Name
      </Text>
      <View style={styles.inputbox_main_container}>
        <DropDownPicker
          open={open}
          value={selectedValue}
          items={items}
          setOpen={setOpen}
          setValue={setSelectedValue}
          setItems={items}
          placeholder="Select"
          style={{ borderWidth: 0 }} // Optional: if you want to customize the dropdown style
        />
        <Text
          style={{
            alignSelf: 'flex-end',
            color: '#0567F5',
            fontWeight: '500',
            fontSize: 14,
            textDecorationLine: 'underline',
            marginTop: 10, // Adjust this value to your preference
          }}
        >
          Request Course
        </Text>
      </View>
    </View> */}
          </View>
        </View>

        <View style={styles.listContainer}>
          {/* data from api  */}

          {/* {   isLoading ? (   <ActivityIndicator size={"large"} color={"#ffffff"} />):(
            {FreeCollegeList.map((value)=>{
            return(
              <View style={styles.listCart}>
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
                    style={{height:55,width:55 ,borderRadius:50}}
                    // source={require("../../assets/img/college.png")}
                    source={{uri :value?.logo}}
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
                <Text
                  style={{ color: "#01265B", fontWeight: "600", fontSize: 14 }}
                >
                  Course Name -
                </Text>
                <Text
                  style={{ color: "#595959", fontWeight: "600", fontSize: 14 }}
                >
                  {value?.course_name}
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
                    Last Submission Date{" "}
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
                    {value.course_duration} Months
                  </Text>
                  <Text
                    style={{ color: "#595959", fontWeight: "700", fontSize: 12 }}
                  >
                    22.04.2024
                  </Text>
                </View>
              </View>
  
              <View style={styles.cardButtons}>
                <TouchableOpacity
                  style={styles.buttonbox}
                  onPress={() =>
                    navigation.navigate("details", {
                      collegeName: value?.organization_name,
                      courseName: value?.course_name,
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
                    navigation.navigate("freeAdmissionForm", {
                      collegeName: value?.organization_name,
                      courseName: value?.course_name,
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
            </View>
            )
          })}
          )} */}
          {isLoading ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            FreeCollegeList.map((value) => {
              console.log("@@2222222222222222222", value?.whatsapp_number);
              return (
                <View style={styles.listCart} key={value.id}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 20,
                    }}
                  >
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
                          style={{ height: 55, width: 55, borderRadius: 50 }}
                          source={{ uri: value?.logo }}
                          resizeMode="cover"
                        />
                      </View>
                      <View style={{ gap: 10 }}>
                        <Text
                          style={{
                            color: "rgba(55, 55, 55, 1)",
                            fontWeight: "600",
                            fontSize: 18,
                          }}
                        >
                          {value.organization_name}
                        </Text>
                        {/* Location here   */}
                        <View
                          style={{
                            flexDirection: "row",
                            gap: 4,
                            alignItems: "center",
                          }}
                        >
                          <Entypo name="location" size={12} color="#373737" />
                          <View style={{}}>
                            <Text
                              style={{
                                fontSize: 10,
                                color: "#373737",
                                fontWeight: "500",
                              }}
                            >
                              {value?.block_name}, {value?.district_name},
                              {value?.state_name}{" "}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    {/* <TouchableOpacity onPress={() => whatsappclicked()}>
                <Image
                  source={require("../../assets/icons/whatsapp.png")}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity> */}
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 20,
                      alignItems: "center",
                    }}
                  >
                    <View style={styles.course}>
                      <Text
                        style={{
                          color: "#01265B",
                          fontWeight: "600",
                          fontSize: 14,
                        }}
                      >
                        Course Name -
                      </Text>
                      <Text
                        style={{
                          color: "#595959",
                          fontWeight: "600",
                          fontSize: 14,
                        }}
                      >
                        {value?.course_name}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => whatsappclicked(value?.whatsapp_number)}
                    >
                      <Image
                        source={require("../../assets/icons/whatsapp.png")}
                        style={{ width: 30, height: 30 }}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.aboutCourse}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          color: "#01265B",
                          fontWeight: "600",
                          fontSize: 14,
                        }}
                      >
                        Course Duration
                      </Text>
                      <Text
                        style={{
                          color: "#01265B",
                          fontWeight: "600",
                          fontSize: 14,
                        }}
                      >
                        Last Submission Date{" "}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          color: "#595959",
                          fontWeight: "700",
                          fontSize: 12,
                        }}
                      >
                        {value.course_duration} Months
                      </Text>
                      <Text
                        style={{
                          color: "#595959",
                          fontWeight: "700",
                          fontSize: 12,
                        }}
                      >
                        22.04.2024
                      </Text>
                    </View>
                  </View>

                  <View style={styles.cardButtons}>
                    <TouchableOpacity
                      style={styles.buttonbox}
                      onPress={() =>
                        navigation.navigate("details", {
                          collegeName: value?.organization_name,
                          courseName: value?.course_name,
                          courseid: value?.organization_course_id,
                          id: id,
                          heading: heading,
                          organization_Id: value?.organization_id,

                          // organizationId
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
                        navigation.navigate("freeAdmissionForm", {
                          collegeName: value?.organization_name,
                          courseName: value?.course_name,
                          id: id,
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
                            Apply Now
                          </Text>
                        </View>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          )}

          {/* 1st college  */}
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
                Anandamohan College
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
                  Last Submission Date{" "}
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
                  22.04.2024
                </Text>
              </View>
            </View>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.buttonbox}
                onPress={() =>
                  navigation.navigate("details", {
                    collegeName: "Anandamohan College",
                    courseName: "B.C.A",
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
                  navigation.navigate("freeAdmissionForm", {
                    collegeName: "Anandamohan College",
                    courseName: "B.C.A",
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

          {/* second college   */}
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
                Bethun College
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
                  Last Submission Date{" "}
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
                  22.04.2024
                </Text>
              </View>
            </View>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.buttonbox}
                onPress={() =>
                  navigation.navigate("details", {
                    collegeName: "Bethun College",
                    courseName: "B.C.A",
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
                  navigation.navigate("freeAdmissionForm", {
                    collegeName: "Bethun College",
                    courseName: "B.C.A",
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

          {/* third college */}
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
                Chittaranjan College
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
                  Last Submission Date{" "}
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
                  22.04.2024
                </Text>
              </View>
            </View>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.buttonbox}
                onPress={() =>
                  navigation.navigate("details", {
                    collegeName: "Chittaranjan College",
                    courseName: "B.C.A",
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
                  navigation.navigate("freeAdmissionForm", {
                    collegeName: "Chittaranjan College",
                    courseName: "B.C.A",
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              height: 32,
              backgroundColor: "#FFFFFF",
              marginBottom: 80,
              paddingHorizontal: 10,
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

export default FreeCollegeList;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#FFFCCE",
    // top: 53,
  },
  heading: {
    fontWeight: "500",
    fontSize: 16,
  },
  mainheadercontainer: {
    // backgroundColor: "white",
    height: 50,
    justifyContent: "center",

    position: "relative",
  },
  headercontainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    left: 20,
    gap: 10,
  },
  image: {
    height: 220,
    width: "100%",
  },
  imageContainer: {
    width: 360,
    height: 162, // Adjust based on your requirement
    borderRadius: 10,
  },
  listContainer: {
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  searchContainer: {
    gap: 15,
    marginVertical: 25,
    alignItems: "center",
    justifyContent: "center",
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
    height: 43,
  },
  inputbox_main_container: {
    gap: 12,
    alignItems: "center",
    width: "89%",
  },
  inputbox_main_container1: {
    gap: 12,
    alignItems: "center",
    width: "100%",
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
    // paddingHorizontal: 20,
    marginTop: 10,
  },
  course: {
    flexDirection: "row",
    gap: 5,
    // padding: 12,
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
    marginVertical: 3,
  },
  buttonbox: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0567F5",
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    gap: 8,
    width: "auto",
    marginBottom: 10,
  },
  input: {
    width: "80%",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    maxHeight: 150,
    overflow: "auto",
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  optionText: {
    textAlign: "center",
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
    left: 0,
    alignSelf: "center",
    // justifyContent:'center'
  },
  dropdownOption: {
    paddingVertical: 8,
    alignSelf: "center",
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

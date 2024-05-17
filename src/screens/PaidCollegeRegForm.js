import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import {
  FontAwesome5,
  SimpleLineIcons,
  Fontisto,
  FontAwesome,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import Header from "../../components/Header";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
const PaidCollegeRegForm = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const route = useRoute();
  const { collegeName, courseName } = route.params;
  const [modalVisibleHSMarksheet, setModalVisibleHSMarksheet] = useState(false);
    // Passport
    const [capturedImagePassport, setCapturedImagePassport] = useState(null);
    const [modalVisiblePassport, setModalVisiblePassport] = useState(false);
    const [fileUriPassPortPhoto, setFileUriPassPortPhoto] = useState(null);
    const [errorMessagePassPortPhoto, setErrorMessagePassPortPhoto] =
      useState(null);
    const [isPickingFilePassPortPhoto, setIsPickingFilePassPortPhoto] =
      useState(false);
      const closeModal = () => {
        setModalVisible(false);
        setModalVisiblePassport(false);
        setModalVisibleHSMarksheet(false);
        setModalVisibleAddharBack(false);
        setModalVisibleAddharfront(false);
      };

      //For PassPort Photo function
  const pickFilePassPortPhoto = async () => {
    if (isPickingFilePassPortPhoto) {
      console.log("Document picking in progress");
      return;
    }

    setIsPickingFilePassPortPhoto(true);
    setErrorMessagePassPortPhoto(null);

    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      console.log("File picker result:", result);

      if (
        !result.canceled &&
        result.assets &&
        result.assets.length > 0 &&
        result.assets[0].uri
      ) {
        console.log("File picked:", result.assets[0].uri);
        setFileUriPassPortPhoto(result.assets[0].uri);
      } else if (result.canceled) {
        console.log("File picking cancelled");
      } else {
        console.log("File picking failed");
        setErrorMessagePassPortPhoto("File picking failed");
      }
    } catch (error) {
      console.error("Error picking file:", error);
      setErrorMessagePassPortPhoto("Error picking file");
    } finally {
      setIsPickingFilePassPortPhoto(false);
    }
    closeModal();
  };
  const takePicture = async (options) => {
    console.log(options);
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Camera permission is required to take photos.");
      return;
    }

    try {
      const imageResult = await ImagePicker.launchCameraAsync();
      console.log("sdkfpf", imageResult);
      if (imageResult.assets[0].uri !== null) {
        if (options === "income") {
          setCapturedImage(imageResult.assets[0].uri);
          console.log("ndhlslsjvjjv;", imageResult.assets[0].uri);
          setModalVisible(false);
        }
        if (options === "passport") {
          setCapturedImagePassport(imageResult.assets[0].uri);
          console.log("[][][]];", imageResult.assets[0].uri);
          setModalVisiblePassport(false);
        }
        if (options === "HSMarksheet") {
          setCapturedImageHSMarksheet(imageResult.assets[0].uri);
          console.log("[][][]];", imageResult.assets[0].uri);
          setModalVisibleHSMarksheet(false);
        }
        if (options === "AddharBack") {
          setCapturedImageAddharBack(imageResult.assets[0].uri);
          console.log("[][][]];", imageResult.assets[0].uri);
          setModalVisibleAddharBack(false);
        }
        if (options === "AddharFront") {
          setCapturedImageAddharfront(imageResult.assets[0].uri);
          console.log("[][][]];", imageResult.assets[0].uri);
          setModalVisibleAddharfront(false);
        }
      }
    } catch (error) {
      console.error("Error taking picture:", error);
      // Handle error
    }
  };

  const deleteDocuments = (options) => {
    if (options === "passport") {
      setCapturedImagePassport(null);
      setFileUriPassPortPhoto(null);
    }
    if (options === "HSMarksheet") {
      setCapturedImageHSMarksheet(null);
      setFileUriHSMarksheet(null);
    }
    if (options === "AddharBack") {
      setCapturedImageAddharBack(null);
      setFileUriAddharBack(null);
    }
    if (options === "AddharFront") {
      setCapturedImageAddharfront(null);
      setFileUri(null);
    }
  };
  const [modalVisible, setModalVisible] = useState(false);
  const deleteImagePassPortPhoto = () => {
    setFileUriPassPortPhoto(null);
    setCapturedImagePassport(null);
  };

  const [capturedImageHSMarksheet, setCapturedImageHSMarksheet] =
  useState(null);
// const [modalVisibleHSMarksheet, setModalVisibleHSMarksheet] = useState(false);


  // States For HS Marksheet
  const [fileUriHSMarksheet, setFileUriHSMarksheet] = useState(null);
  const [errorMessageHSMarksheet, setErrorMessageHSMarksheet] = useState(null);
  const [isPickingFileHSMarksheet, setIsPickingFileHSMarksheet] =
    useState(false);

    const pickFileHSMarksheet = async () => {
      if (isPickingFileHSMarksheet) {
        console.log("Document picking in progress");
        return;
      }
  
      setIsPickingFileHSMarksheet(true);
      setErrorMessageHSMarksheet(null);
  
      try {
        const result = await DocumentPicker.getDocumentAsync({
          type: "*/*",
        });
  
        console.log("File picker result:", result);
  
        if (
          !result.canceled &&
          result.assets &&
          result.assets.length > 0 &&
          result.assets[0].uri
        ) {
          console.log("File picked:", result.assets[0].uri);
          setFileUriHSMarksheet(result.assets[0].uri);
        } else if (result.canceled) {
          console.log("File picking cancelled");
        } else {
          console.log("File picking failed");
          setErrorMessageHSMarksheet("File picking failed");
        }
      } catch (error) {
        console.error("Error picking file:", error);
        setErrorMessageHSMarksheet("Error picking file");
      } finally {
        setIsPickingFileHSMarksheet(false);
      }
      closeModal();
    };
    const deleteImageHSMarksheet = () => {
      setFileUriHSMarksheet(null);
      setCapturedImageHSMarksheet(null);
    };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header
        title="Paid College Admission Form"
        navigateTo={navigation.goBack}
      />
      <ScrollView>
        <View style={styles.main_content}>
          <View style={styles.profile}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.img}
                source={require("../../assets/img/admission.png")}
              />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={styles.profileText}>
                Paid College Admission Form
              </Text>
            </View>
          </View>
          <View style={styles.college_details}>
            <View>
              <Text style={styles.college_details_text}>College name</Text>
              <TextInput
                style={styles.college_details_input}
                placeholder={collegeName}
                placeholderTextColor={"rgba(166, 166, 166, 1)"}
                value={collegeName}
                editable={false}
              />
            </View>
            <View>
              <Text style={styles.college_details_text}>Course name</Text>
              <TextInput
                style={styles.college_details_input}
                placeholder={courseName}
                placeholderTextColor={"rgba(166, 166, 166, 1)"}
                value={courseName}
                editable={false}
              />
            </View>
          </View>
          <View style={styles.personal_details}>
            <View style={styles.heading}>
              <Text style={styles.text}>Student Personal Details</Text>
            </View>
            <View style={styles.input_fields}>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Name</Text>
                <View style={styles.input_box}>
                  <FontAwesome5
                    name="user"
                    size={14}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Father's Name</Text>
                <View style={styles.input_box}>
                  <FontAwesome5
                    name="user"
                    size={14}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Father's name"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Date of Birth</Text>
                <View style={styles.input_box}>
                  <Image
                    style={styles.iconImage}
                    source={require("../../assets/icons/calendar.png")}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Date of Birth"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              {/* <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Aadhar Number</Text>
                <View style={styles.input_box}>
                  <FontAwesome
                    name="id-card-o"
                    size={14.5}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter aadhar number"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View> */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Gender</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/gender.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Email Id</Text>
                <View style={styles.input_box}>
                  <Fontisto
                    name="email"
                    size={14}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Mobile Number</Text>
                <View style={styles.input_box}>
                  <Feather
                    name="phone-call"
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your mobile number"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              {/* <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Nationality</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/united-nations.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
              </View> */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Religion</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/religion.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Full Address</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/home (1).png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full address"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Whatsapp Number</Text>
                <View style={styles.input_box}>
                  <FontAwesome5
                    name="whatsapp"
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>

              <View style={styles.headingg}>
                <Text style={styles.text}>Family Details</Text>
              </View>

              {/* <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Mother's Name</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/female-student.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Mother's name"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View> */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Guardian Name</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/user (1).png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Guardian's Name"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Guardian Mobile Number</Text>
                <View style={styles.input_box}>
                  <Feather
                    name="phone-call"
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter mobile number"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Guardian's Occupation</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/businessman.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
              </View>
              {/* <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Family Income</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/receive (1).png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Amount"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View> */}
              {/* <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Number of Member</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/team.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter the number of member"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View> */}
              <View style={styles.headingg}>
                <Text style={styles.text}>Education Details</Text>
              </View>
              {/* <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Last Qualification</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/qualification.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
              </View> */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>10+2 Pass Out Year</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/school.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Select"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                  <AntDesign
                    name="caretdown"
                    style={styles.arrowdown}
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                </View>
              </View>
              {/* <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>H.S Roll Number</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/number-blocks.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Roll Number"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View> */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Percentage</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/discount.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Percentage"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              {/* <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Total Number</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/exam-results.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Marks"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View> */}

              {/* hsmarksheet  */}
              <View>
                {!capturedImageHSMarksheet && !fileUriHSMarksheet && (
                  <View style={styles.fields_main}>
                    <Text style={styles.inputHeading}>H.S.Marksheet</Text>
                    <TouchableOpacity
                      style={styles.uploadBox}
                      onPress={() => setModalVisibleHSMarksheet(true)}
                    >
                      <View style={styles.uploadItems}>
                        <SimpleLineIcons
                          name="cloud-upload"
                          size={22}
                          color="rgba(166, 166, 166, 1)"
                        />
                        <Text style={styles.uploadtext}>Upload a File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                {fileUriHSMarksheet && (
                  <View>
                    <View
                      style={[
                        styles.titleContainer,
                        {
                          justifyContent: "space-between",
                          flexDirection: "row",
                          alignItems: "center",
                        },
                      ]}
                    >
                      <Text style={styles.inputHeading}>H.S.Marksheet</Text>
                      <TouchableOpacity
                        onPress={() => deleteDocuments("HSMarksheet")}
                      >
                        <AntDesign name="delete" size={20} color="#FF0000" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{ uri: fileUriHSMarksheet }}
                        style={styles.uploadedImage}
                      />
                    </View>
                  </View>
                )}
                {capturedImageHSMarksheet && (
                  <View>
                    <View
                      style={[
                        styles.titleContainer,
                        {
                          justifyContent: "space-between",
                          flexDirection: "row",
                          alignItems: "center",
                        },
                      ]}
                    >
                      <Text style={styles.inputHeading}>H.S.Marksheet</Text>
                      <TouchableOpacity onPress={deleteImageHSMarksheet}>
                        <AntDesign name="delete" size={20} color="#FF0000" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{ uri: capturedImageHSMarksheet }}
                        style={styles.uploadedImage}
                      />
                    </View>
                  </View>
                )}

                {errorMessageHSMarksheet && (
                  <Text style={styles.errorMessage}>
                    {errorMessageHSMarksheet}
                  </Text>
                )}
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisibleHSMarksheet}
                  onRequestClose={closeModal}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={() => {
                          takePicture("HSMarksheet");
                        }}
                      >
                        <Text style={styles.modalOptionText}>Take Photo</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={pickFileHSMarksheet}
                      >
                        <Text style={styles.modalOptionText}>
                          Choose from Library
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={closeModal}
                      >
                        <Text style={styles.modalOptionText}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>


              {/* passport  */}
                  <View>
                {!capturedImagePassport && !fileUriPassPortPhoto && (
                  <View style={styles.fields_main}>
                    <Text style={styles.inputHeading}>Passport Photo</Text>
                    <TouchableOpacity
                      style={styles.uploadBox}
                      onPress={() => setModalVisiblePassport(true)}
                    >
                      <View style={styles.uploadItems}>
                        <SimpleLineIcons
                          name="cloud-upload"
                          size={22}
                          color="rgba(166, 166, 166, 1)"
                        />
                        <Text style={styles.uploadtext}>Upload a File</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                {fileUriPassPortPhoto && (
                  <View>
                    <View
                      style={[
                        styles.titleContainer,
                        {
                          justifyContent: "space-between",
                          flexDirection: "row",
                          alignItems: "center",
                        },
                      ]}
                    >
                      <Text style={styles.inputHeading}>PassPort Photo</Text>
                      <TouchableOpacity
                        onPress={() => deleteDocuments("passport")}
                      >
                        <AntDesign name="delete" size={20} color="#FF0000" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{ uri: fileUriPassPortPhoto }}
                        style={styles.uploadedImage}
                      />
                    </View>
                  </View>
                )}
                {capturedImagePassport && (
                  <View>
                    <View
                      style={[
                        styles.titleContainer,
                        {
                          justifyContent: "space-between",
                          flexDirection: "row",
                          alignItems: "center",
                        },
                      ]}
                    >
                      <Text style={styles.inputHeading}>Passport Photo</Text>
                      <TouchableOpacity onPress={deleteImagePassPortPhoto}>
                        <AntDesign name="delete" size={20} color="#FF0000" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{ uri: capturedImagePassport }}
                        style={styles.uploadedImage}
                      />
                    </View>
                  </View>
                )}

                {errorMessagePassPortPhoto && (
                  <Text style={styles.errorMessage}>
                    {errorMessagePassPortPhoto}
                  </Text>
                )}
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisiblePassport}
                  onRequestClose={closeModal}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={() => {
                          takePicture("passport");
                        }}
                      >
                        <Text style={styles.modalOptionText}>Take Photo</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={pickFilePassPortPhoto}
                      >
                        <Text style={styles.modalOptionText}>
                          Choose from Library
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={closeModal}
                      >
                        <Text style={styles.modalOptionText}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>

              <View style={styles.condition_box_main}>
                <Text style={styles.discountText}>
                  Note: You will get up to 5% discount of course.
                </Text>
                <View style={styles.conditions_box}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? "rgba(0, 54, 126, 1)" : undefined}
                  />
                  <Text style={styles.text_condition}>
                    I agree with the{" "}
                    <Text style={styles.text_condition1}>
                      Terms & Conditions
                    </Text>
                  </Text>
                </View>
              </View>

              <View style={styles.submitButton}>
                <TouchableOpacity>
                  <LinearGradient
                    colors={["rgba(3, 53, 125, 1)", "rgba(5, 105, 250, 1)"]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.inputbox_submit}
                  >
                    <Text style={styles.submitText}>Submit</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PaidCollegeRegForm;

const styles = StyleSheet.create({
  container: {
    // top: 53,
  },
  main_content: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  profile: {
    height: 76,
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    gap: 20,
    marginTop: 12,
  },
  imageContainer: {
    height: 70,
    backgroundColor: "#FFE380",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  img: {
    height: 50,
    width: 50,
    margin: 10,
  },
  profileText: {
    fontSize: 25,
    lineHeight: 37.5,
    fontWeight: "600",
    color: "rgba(55, 55, 55, 1)",
  },
  college_details: {
    marginVertical: 20,
    gap: 15,
  },
  college_details_text: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "500",
    color: " rgba(166, 166, 166, 1)",
  },
  college_details_input: {
    borderWidth: 1,
    borderColor: "rgba(3, 53, 125, 1)",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  heading: {
    borderStyle: "dashed",
    borderBottomWidth: 0.5,
    borderColor: "rgba(67, 83, 84, 1)",
  },
  headingg: {
    marginTop: 20,
    borderStyle: "dashed",
    borderBottomWidth: 0.5,
    borderColor: "rgba(67, 83, 84, 1)",
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 27,
    color: "rgba(4, 106, 241, 1)",
    paddingBottom: 10,
  },
  fields_main: {
    marginTop: 17,
  },
  inputHeading: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 27,
    color: "rgba(0, 54, 126, 1)",
    paddingBottom: 10,
  },
  input: {
    paddingRight: "35%",
    position: "relative",
  },
  iconImage: {
    height: 17,
    width: 17,
    right: 3,
  },
  arrowdown: {
    position: "absolute",
    right: 22,
  },
  input_box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 199, 0, 0.2)",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 8,
    borderWidth: 0.5,
    borderColor: "rgba(3, 53, 125, 1)",
  },
  uploadBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(245, 245, 245, 1)",
    padding: 30,
    borderWidth: 0.5,
    borderColor: "rgba(217, 217, 217, 1)",
    borderRadius: 0.58,
    marginTop: 8,
  },
  uploadItems: {
    alignItems: "center",
    gap: 3,
  },
  uploadtext: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "rgba(55, 55, 55, 1)",
  },
  conditions: {
    marginTop: 40,
  },
  conditiontext: {
    fontSize: 13,
    lineHeight: 15.23,
    fontWeight: "400",
    color: "rgba(0, 0, 0, 1)",
  },
  condition_box_main: {
    marginTop: 30,
    gap: 20,
  },
  discountText: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15.23,
    color: "#1A1A1A",
  },
  conditions_box: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 15,
    borderColor: "rgba(0, 54, 126, 1)",
    borderWidth: 1,
  },
  text_condition: {
    fontSize: 14,
    lineHeight: 16.41,
    fontWeight: "400",
    color: "rgba(34, 34, 34, 1)",
  },
  text_condition1: {
    fontSize: 14,
    lineHeight: 16.41,
    fontWeight: "600",
    color: "rgba(34, 34, 34, 1)",
  },
  submitButton: {
    marginTop: 16,
    marginBottom: 90,
  },
  inputbox_submit: {
    marginTop: 10,
    borderColor: "rgba(3, 53, 125, 1)",
    padding: 18,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "rgba(3, 53, 125, 1)",
    shadowColor: "rgba(3, 53, 125, 0.25)",
  },
  submitText: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18.75,
  },
  uploadedImage: {
    width: 100,
    height: 100,
  },
  fields_main: {
    marginTop: 17,
  },
  inputHeading: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 27,
    color: "rgba(0, 54, 126, 1)",
    paddingBottom: 10,
  },
  uploadBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(245, 245, 245, 1)",
    padding: 30,
    borderWidth: 0.5,
    borderColor: "rgba(217, 217, 217, 1)",
    borderRadius: 0.58,
    marginTop: 8,
  },
  uploadItems: {
    alignItems: "center",
    gap: 3,
  },
  uploadtext: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "rgba(55, 55, 55, 1)",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  uploadedImage: {
    width: 100,
    height: 100,
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  modalOptionText: {
    fontSize: 18,
    textAlign: "center",
  },
});

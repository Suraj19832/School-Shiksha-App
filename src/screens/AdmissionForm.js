// import {
//   View,
//   Text,
//   StyleSheet,
//   KeyboardAvoidingView,
//   ScrollView,
//   Image,
//   Button,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import React, { useState } from "react";
// import {
//   FontAwesome5,
//   SimpleLineIcons,
//   Fontisto,
//   FontAwesome,
//   Feather,
//   AntDesign,
// } from "@expo/vector-icons";
// import Header from "../../components/Header";
// import Checkbox from "expo-checkbox";
// import { LinearGradient } from "expo-linear-gradient";
// import * as DocumentPicker from 'expo-document-picker';

// const AdmissionForm = ({navigation}) => {
//   const [isChecked, setChecked] = useState(false);

//   // users data
//   const [formErrors, setFormErrors] = useState({});

//   const [formData, setFormData] = useState({
//     name: "",
//     roll_number: "",
//     total_number: "",
//     percentage: "",
//     fatherName: "",
//     motherName: "",
//     mobile: "",
//     fatherMobile: "",
//     whatsapp_number: "",
//     address: "",
//     police_station: "",
//     pincode: "",
//     aadhar_number: "",
//     nationality: "",
//     religion: "",
//     district_id: "",
//     password: "",
//     referral_code: "",
//   });
//   const [fieldTouched, setFieldTouched] = useState({});

//   // email

//   const handleInputChange = (key, value) => {
//     setFormData({ ...formData, [key]: value });
//   };
//   const handleInputBlur = (key) => {
//     setFieldTouched({ ...fieldTouched, [key]: true });
//     console.log("first", key);
//     validateForm();
//   };
//   // email
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");

//   // for gender

//   const [isDropdownOpengender, setDropdownOpengender] = useState(false);
//   const [inputValuegender, setInputValuegender] = useState("");

//   // for last qualification
//   const [isDropdownOpenLastQuali, setDropdownOpenLastQuali] = useState(false);
//   const [inputValueLastQuali, setInputValueLastQuali] = useState("");

//   // for parent occupation

//   const [isDropdownOpenoccupation, setDropdownOpenoccupation] = useState(false);
//   const [inputValueoccupation, setInputValueoccupation] = useState("");

//   const [isDropdownOpenHs, setDropdownOpenHs] = useState(false);
//   const [inputValueHs, setInputValueHs] = useState("");

//   //handle togle for gender

//   const toggleDropdowngender = () => {
//     setDropdownOpengender(!isDropdownOpengender);
//   };

//   // toggle last qualifiCation

//   const toggleDropdownLastQuali = () => {
//     setDropdownOpenLastQuali(!isDropdownOpenLastQuali);
//   };

//   //handle togle for occupation

//   const toggleDropdownoccupation = () => {
//     setDropdownOpenoccupation(!isDropdownOpenoccupation);
//   };

//   // toogle hs
//   const toggleDropdownHs = () => {
//     setDropdownOpenHs(!isDropdownOpenHs);
//   };

//   // occupation
//   const [occupationData, setoccupationData] = useState("");
//   // Gender selection
//   const [genderData, setGenderData] = useState("");

//   const handleSelectOptiongender = (option) => {
//     setInputValuegender(option);
//     setGenderData(option);
//     setDropdownOpengender(false);
//   };

//   // Last Qualification

//   const [lastQualiData, setlastQualiData] = useState("");

//   const handleSelectOptionLastQuali = (option) => {
//     setInputValueLastQuali(option);
//     setlastQualiData(option);
//     setDropdownOpenLastQuali(false);
//   };
//   // parents occputation
//   const handleSelectOptionoccupation = (option) => {
//     setInputValueoccupation(option);
//     setoccupationData(option);
//     setDropdownOpenoccupation(false);
//   };

//   const handleSelectOptionHs = (option) => {
//     setInputValueHs(option);
//     // sethsData(option)
//     setDropdownOpenHs(false);
//   };

//   const validateEmail = () => {
//     // Regular expression pattern to validate email format
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email.trim()) {
//       setEmailError("Email is required");
//     } else if (!emailPattern.test(email)) {
//       setEmailError("Invalid email format");
//     } else {
//       setEmailError("");
//     }
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//     if (text.trim()) {
//       setEmailError("");
//     }
//   };
//   const handleSubmission = () => {
//     if (formData.name && formData.mobile) {
//     }
//     const formsData = new FormData();
//     if (
//       formData.name &&
//       formData.mobile &&
//       // formData.pincode &&
//       formData.police_station &&
//       formData.address &&
//       formData.whatsapp_number
//     ) {
//       // formsData.append("name", formData.name);
//       // formsData.append("email", email);
//       // formsData.append("mobile", formData.mobile);
//       // formsData.append("date_of_birth", userDetails.date_of_birth);
//       // formsData.append("aadhar_number", formData.aadhar_number);
//       // formsData.append("gender", genderData);
//       // formsData.append("pincode", formData.pincode);
//       // formsData.append("police_station", formData.police_station);
//       // formsData.append("district_id", districtId);
//       // formsData.append("address", formData.address);
//       // formsData.append("whatsapp_number", formData.whatsapp_number);
//       // formsData.append("password", password);
//       // formsData.append("referral_code", formData.referral_code);
//       // formsData.append("nationality", formData.nationality);
//       // formsData.append("religion", formData.religion);
//       // formsData.append("block", blockId);
//       // formsData.append("class", inputValueclass);
//       // console.log("6565655", formsData);
//       // sendPostData("register", formsData)
//       //   .then((res) => {
//       //     if (res?.status) {
//       //       showToast("Registration Successfull");
//       //       console.log("11111111", res?.status);
//       //       navigation.navigate("Dashboard");
//       //     } else {
//       //       console.log("00", res);
//       //       console.log("888", formsData);
//       //     }
//       //   })
//       //   .catch((err) => {
//       //     console.log(err, "--err");
//       //   });
//     } else {
//       // console.log("Registration failed: Required fields are missing");
//       Alert.alert("Alert","Please Fill up All Fields");
//     }
//   };
//   const validateForm = () => {
//     const errors = {};

//     // Validate each field
//     Object.keys(formData).forEach((key) => {
//       if (formData[key] && !formData[key].trim() && fieldTouched[key]) {
//         errors[key] = `${
//           key.charAt(0).toUpperCase() + key.slice(1)
//         } is required`;
//       }
//     });

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const isFormValid = () => {
//     // Check if any field has an error
//     for (const key in formErrors) {
//       if (formErrors[key]) {
//         return false;
//       }
//     }
//     // Check if all required fields are filled
//     for (const key in formData) {
//       if (!formData[key] && fieldTouched[key]) {
//         return false;
//       }
//     }
//     // Check if email and password are valid
//     if (emailError || passwordError) {
//       return false;
//     }
//     // Return true if the form is valid
//     return true;
//   };
//   console.log("[][]", formErrors, "<><>", formData, "{}{}", fieldTouched);
//   // States for addhar font

//   const [fileUri, setFileUri] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [isPickingFile, setIsPickingFile] = useState(false);
// // States For Addhar back
//   const [fileUriAddharBack, setFileUriAddharBack] = useState(null);
//   const [errorMessageAddharBack, setErrorMessageAddharBack] = useState(null);
//   const [isPickingFileAddharBack, setIsPickingFileAddharBack] = useState(false);

//   // States For HS Marksheet
//   const [fileUriHSMarksheet, setFileUriHSMarksheet] = useState(null);
//   const [errorMessageHSMarksheet, setErrorMessageHSMarksheet] = useState(null);
//   const [isPickingFileHSMarksheet, setIsPickingFileHSMarksheet] = useState(false);

//   //States for Passport Photo
//   const [fileUriPassPortPhoto, setFileUriPassPortPhoto] = useState(null);
//   const [errorMessagePassPortPhoto, setErrorMessagePassPortPhoto] = useState(null);
//   const [isPickingFilePassPortPhoto, setIsPickingFilePassPortPhoto] = useState(false);

//   //States for Upload Income Certificate
//   const [fileUriIncomeCertificate, setFileUriIncomeCertificate] = useState(null);
//   const [errorMessageIncomeCertificate, setErrorMessageIncomeCertificate] = useState(null);
//   const [isPickingFileIncomeCertificate, setIsPickingFileIncomeCertificate] = useState(false);

// //  for addhar front function
//   const pickFile = async () => {
//     if (isPickingFile) {
//       console.log('Document picking in progress');
//       return;
//     }

//     setIsPickingFile(true);
//     setErrorMessage(null);

//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: '*/*',
//       });

//       console.log('File picker result:', result);

//       if (!result.cancelled && result.assets && result.assets.length > 0 && result.assets[0].uri) {
//         console.log('File picked:', result.assets[0].uri);
//         setFileUri(result.assets[0].uri);
//       } else if (result.cancelled) {
//         console.log('File picking cancelled');
//       } else {
//         console.log('File picking failed');
//         setErrorMessage('File picking failed');
//       }
//     } catch (error) {
//       console.error('Error picking file:', error);
//       setErrorMessage('Error picking file');
//     } finally {
//       setIsPickingFile(false);
//     }
//   };

//   //For Addhar Back function
//   const pickFileAddharBack = async () => {
//     if (isPickingFileAddharBack) {
//       console.log('Document picking in progress');
//       return;
//     }

//     setIsPickingFileAddharBack(true);
//     setErrorMessageAddharBack(null);

//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: '*/*',
//       });

//       console.log('File picker result:', result);

//       if (!result.canceled && result.assets && result.assets.length > 0 && result.assets[0].uri) {
//         console.log('File picked:', result.assets[0].uri);
//         setFileUriAddharBack(result.assets[0].uri);
//       } else if (result.canceled) {
//         console.log('File picking cancelled');
//       } else {
//         console.log('File picking failed');
//         setErrorMessageAddharBack('File picking failed');
//       }
//     } catch (error) {
//       console.error('Error picking file:', error);
//       setErrorMessageAddharBack('Error picking file');
//     } finally {
//       setIsPickingFileAddharBack(false);
//     }
//   };

//     //For HSMarksheet function
//     const pickFileHSMarksheet = async () => {
//       if (isPickingFileHSMarksheet) {
//         console.log('Document picking in progress');
//         return;
//       }

//       setIsPickingFileHSMarksheet(true);
//       setErrorMessageHSMarksheet(null);

//       try {
//         const result = await DocumentPicker.getDocumentAsync({
//           type: '*/*',
//         });

//         console.log('File picker result:', result);

//         if (!result.canceled && result.assets && result.assets.length > 0 && result.assets[0].uri) {
//           console.log('File picked:', result.assets[0].uri);
//           setFileUriHSMarksheet(result.assets[0].uri);
//         } else if (result.canceled) {
//           console.log('File picking cancelled');
//         } else {
//           console.log('File picking failed');
//           setErrorMessageHSMarksheet('File picking failed');
//         }
//       } catch (error) {
//         console.error('Error picking file:', error);
//         setErrorMessageHSMarksheet('Error picking file');
//       } finally {
//         setIsPickingFileHSMarksheet(false);
//       }
//     };

//     //For PassPort Photo function
//     const pickFilePassPortPhoto = async () => {
//       if (isPickingFilePassPortPhoto) {
//         console.log('Document picking in progress');
//         return;
//       }

//       setIsPickingFilePassPortPhoto(true);
//       setErrorMessagePassPortPhoto(null);

//       try {
//         const result = await DocumentPicker.getDocumentAsync({
//           type: '*/*',
//         });

//         console.log('File picker result:', result);

//         if (!result.canceled && result.assets && result.assets.length > 0 && result.assets[0].uri) {
//           console.log('File picked:', result.assets[0].uri);
//           setFileUriPassPortPhoto(result.assets[0].uri);
//         } else if (result.canceled) {
//           console.log('File picking cancelled');
//         } else {
//           console.log('File picking failed');
//           setErrorMessagePassPortPhoto('File picking failed');
//         }
//       } catch (error) {
//         console.error('Error picking file:', error);
//         setErrorMessagePassPortPhoto('Error picking file');
//       } finally {
//         setIsPickingFilePassPortPhoto(false);
//       }
//     };

//         //For IncomeCertificate function
//         const pickFileIncomeCertificate = async () => {
//           if (isPickingFileIncomeCertificate) {
//             console.log('Document picking in progress');
//             return;
//           }

//           setIsPickingFileIncomeCertificate(true);
//           setErrorMessageIncomeCertificate(null);

//           try {
//             const result = await DocumentPicker.getDocumentAsync({
//               type: '*/*',
//             });

//             console.log('File picker result:', result);

//             if (!result.canceled && result.assets && result.assets.length > 0 && result.assets[0].uri) {
//               console.log('File picked:', result.assets[0].uri);
//               setFileUriIncomeCertificate(result.assets[0].uri);
//             } else if (result.canceled) {
//               console.log('File picking cancelled');
//             } else {
//               console.log('File picking failed');
//               setErrorMessageIncomeCertificate('File picking failed');
//             }
//           } catch (error) {
//             console.error('Error picking file:', error);
//             setErrorMessageIncomeCertificate('Error picking file');
//           } finally {
//             setIsPickingFileIncomeCertificate(false);
//           }
//         };

//   //Delete function for addhar front
//   const deleteImage = () => {
//     setFileUri(null);
//   };
// // Delete function for Addhar back
//   const deleteImageAddharBack = () => {
//     setFileUriAddharBack(null);
//   };
//   //For HSMarksheet
//   const deleteImageHSMarksheet= () => {
//     setFileUriHSMarksheet(null);
//   };

//    //For PassPort Photo
//    const deleteImagePassPortPhoto= () => {
//     setFileUriPassPortPhoto(null);
//   };

//   //For Income Certifiate
//      const deleteImageIncomeCertificate= () => {
//       setFileUriIncomeCertificate(null);
//     };
//   return (
//     <KeyboardAvoidingView style={styles.container} behavior="padding">
//       <Header
//         title="Free College Admission Form"
//         navigateTo={navigation?.goBack}
//       />
//       <ScrollView>
//         <View style={styles.main_content}>
//           <View style={styles.profile}>
//             <View style={styles.imageContainer}>
//               <Image
//                 style={styles.img}
//                 source={require("../../assets/img/student.png")}
//               />
//             </View>
//             <View style={{ width: "80%" }}>
//               <Text style={styles.profileText}>
//                 Free College Admission Form
//               </Text>
//             </View>
//           </View>
//           <View style={styles.college_details}>
//             <View>
//               <Text style={styles.college_details_text}>College name</Text>
//               <TextInput
//                 style={styles.college_details_input}
//                 placeholder="Anandamohan College"
//                 placeholderTextColor={"rgba(166, 166, 166, 1)"}
//               />
//             </View>
//             <View>
//               <Text style={styles.college_details_text}>Course name</Text>
//               <TextInput
//                 style={styles.college_details_input}
//                 placeholder="B.C.A"
//                 placeholderTextColor={"rgba(166, 166, 166, 1)"}
//               />
//             </View>
//           </View>
//           <View style={styles.personal_details}>
//             <View style={styles.heading}>
//               <Text style={styles.text}>Student Personal Details</Text>
//             </View>
//             <View style={styles.input_fields}>
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Name</Text>
//                 <View style={styles.input_box}>
//                   <FontAwesome5
//                     name="user"
//                     size={14}
//                     color="rgba(0, 54, 126, 1)"
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Name"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                     value={formData.name}
//                     onChangeText={(text) => handleInputChange("name", text)}
//                     onBlur={() => handleInputBlur("name")}
//                   />
//                 </View>
//                 {formErrors.name && fieldTouched.name && (
//                   <Text style={{ color: "red" }}>{formErrors.name}</Text>
//                 )}
//                 {!formErrors.name && !formData.name && fieldTouched.name && (
//                   <Text style={{ color: "red" }}>Full Name is required</Text>
//                 )}
//               </View>
//               {/* D.O.B */}
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Date of Birth</Text>
//                 <View style={styles.input_box}>
//                   <Fontisto name="date" size={14} color="rgba(0, 54, 126, 1)" />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Date of Birth"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                   />
//                 </View>
//               </View>
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Aadhar Number</Text>
//                 <View style={styles.input_box}>
//                   <FontAwesome
//                     name="id-card-o"
//                     size={14.5}
//                     color="rgba(0, 54, 126, 1)"
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter aadhar number"
//                     value={formData.aadhar_number}
//                     onChangeText={(text) =>
//                       handleInputChange("aadhar_number", text)
//                     }
//                     onBlur={() => handleInputBlur("aadhar_number")}
//                     maxLength={12}
//                     keyboardType="numeric"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                   />
//                 </View>
//                 {!formErrors.aadhar_number &&
//                   formData.aadhar_number &&
//                   formData.aadhar_number.trim().length !== 12 && (
//                     <Text style={{ color: "red" }}>
//                       Aadhar number must be 12 digits
//                     </Text>
//                   )}
//               </View>
//               {/* GENDER */}
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Gender</Text>
//                 <TouchableOpacity onPress={toggleDropdowngender}>
//                   <View style={styles.input_box}>
//                     <Image
//                       source={require("../../assets/icons/gender.png")}
//                       style={styles.iconImage}
//                     />
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Select"
//                       value={inputValuegender}
//                       onBlur={() => handleSelectOptiongender(inputValuegender)}
//                       editable={false} // Allow editing only when dropdown is closed
//                       placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                     />
//                     <AntDesign
//                       name="caretdown"
//                       style={styles.arrowdown}
//                       size={15}
//                       color="rgba(0, 54, 126, 1)"
//                     />
//                   </View>
//                 </TouchableOpacity>
//               </View>

//               {/* Dropdown of gender */}

//               {isDropdownOpengender && (
//                 <View style={styles.dropdownContainer}>
//                   <TouchableOpacity
//                     style={styles.dropdownOption}
//                     onPress={() => handleSelectOptiongender("male")}
//                   >
//                     <Text>Male</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={styles.dropdownOption}
//                     onPress={() => handleSelectOptiongender("female")}
//                   >
//                     <Text>Female</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}
//               {/* Email Id */}

//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Email Id</Text>
//                 <View style={styles.input_box}>
//                   <Fontisto
//                     name="email"
//                     size={14}
//                     color="rgba(0, 54, 126, 1)"
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter your email"
//                     value={email}
//                     onChangeText={handleEmailChange}
//                     onBlur={validateEmail}
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                   />
//                 </View>
//                 {emailError ? (
//                   <Text style={{ color: "red" }}>{emailError}</Text>
//                 ) : null}
//               </View>
//               {/* mobile */}
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Mobile Number</Text>
//                 <View style={styles.input_box}>
//                   <Feather
//                     name="phone-call"
//                     size={15}
//                     color="rgba(0, 54, 126, 1)"
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter your mobile number"
//                     keyboardType="numeric"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                     value={formData.mobile}
//                     onChangeText={(text) => handleInputChange("mobile", text)}
//                     onBlur={() => handleInputBlur("mobile")}
//                     maxLength={10}
//                   />
//                 </View>
//                 {formErrors.mobile && fieldTouched.mobile && (
//                   <Text style={{ color: "red" }}>Mobile Number required</Text>
//                 )}
//                 {!formErrors.mobile &&
//                   formData.mobile &&
//                   formData.mobile.trim().length !== 10 && (
//                     <Text style={{ color: "red" }}>
//                       Mobile number must be 10 digits
//                     </Text>
//                   )}
//               </View>
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Nationality</Text>
//                 <View style={styles.input_box}>
//                   <Image
//                     source={require("../../assets/icons/united-nations.png")}
//                     style={styles.iconImage}
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Select"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                     value={formData.nationality}
//                     onChangeText={(text) =>
//                       handleInputChange("nationality", text)
//                     }
//                     onBlur={() => handleInputBlur("nationality")}
//                   />
//                 </View>
//                 {!formErrors.nationality &&
//                   !formData.nationality &&
//                   fieldTouched.nationality && (
//                     <Text style={{ color: "red" }}>
//                       Please enter Nationality{" "}
//                     </Text>
//                   )}
//               </View>
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Religion</Text>
//                 <View style={styles.input_box}>
//                   <Image
//                     source={require("../../assets/icons/religion.png")}
//                     style={styles.iconImage}
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Select"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                     value={formData.religion}
//                     onChangeText={(text) => handleInputChange("religion", text)}
//                     onBlur={() => handleInputBlur("religion")}
//                   />
//                 </View>
//                 {!formErrors.religion &&
//                   !formData.religion &&
//                   fieldTouched.religion && (
//                     <Text style={{ color: "red" }}>
//                       Please enter Your Religion{" "}
//                     </Text>
//                   )}
//               </View>
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Full Address</Text>
//                 <View style={styles.input_box}>
//                   <Image
//                     source={require("../../assets/icons/home (1).png")}
//                     style={styles.iconImage}
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter your full address"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                     value={formData.address}
//                     onChangeText={(text) => handleInputChange("address", text)}
//                     onBlur={() => handleInputBlur("address")}
//                   />
//                 </View>
//                 {!formErrors.address &&
//                   !formData.address &&
//                   fieldTouched.address && (
//                     <Text style={{ color: "red" }}>
//                       Please enter Your Address{" "}
//                     </Text>
//                   )}
//               </View>
//               {/* whatsapp */}
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Whatsapp Number</Text>
//                 <View style={styles.input_box}>
//                   <FontAwesome5
//                     name="whatsapp"
//                     size={15}
//                     color="rgba(0, 54, 126, 1)"
//                   />
//                   <TextInput
//                     style={styles.input}
//                     keyboardType="numeric"
//                     placeholder="Enter your WhatsApp number"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                     value={formData.whatsapp_number}
//                     onChangeText={(text) =>
//                       handleInputChange("whatsapp_number", text)
//                     }
//                     onBlur={() => handleInputBlur("whatsapp_number")}
//                     maxLength={10}
//                   />
//                 </View>
//                 {formErrors.whatsapp_number && fieldTouched.whatsapp_number && (
//                   <Text style={{ color: "red" }}>Whatsapp number Required</Text>
//                 )}
//                 {!formErrors.whatsapp_number &&
//                   formData.whatsapp_number &&
//                   formData.whatsapp_number.trim().length !== 10 && (
//                     <Text style={{ color: "red" }}>
//                       Mobile number must be 10 digits
//                     </Text>
//                   )}
//               </View>

//               <View style={styles.headingg}>
//                 <Text style={styles.text}>Family Details</Text>
//               </View>

//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Mother's Name</Text>
//                 <View style={styles.input_box}>
//                   <Image
//                     source={require("../../assets/icons/female-student.png")}
//                     style={styles.iconImage}
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter Your Mother's name"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                     value={formData.motherName}
//                     onChangeText={(text) =>
//                       handleInputChange("motherName", text)
//                     }
//                     onBlur={() => handleInputBlur("motherName")}
//                   />
//                 </View>
//                 {!formErrors.motherName &&
//                   !formData.motherName &&
//                   fieldTouched.motherName && (
//                     <Text style={{ color: "red" }}>
//                       Mother name is required
//                     </Text>
//                   )}
//               </View>
//               {/* Father Name */}
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Father's Name</Text>
//                 <View style={styles.input_box}>
//                   <FontAwesome5
//                     name="user"
//                     size={14}
//                     color="rgba(0, 54, 126, 1)"
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter Your Father's name"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                     value={formData.name}
//                     onChangeText={(text) =>
//                       handleInputChange("fatherName", text)
//                     }
//                     onBlur={() => handleInputBlur("fatherName")}
//                   />
//                 </View>
//                 {!formErrors.fatherName &&
//                   !formData.fatherName &&
//                   fieldTouched.fatherName && (
//                     <Text style={{ color: "red" }}>
//                       Father name is required
//                     </Text>
//                   )}
//               </View>
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Father's Mobile Number</Text>
//                 <View style={styles.input_box}>
//                   <Feather
//                     name="phone-call"
//                     size={15}
//                     color="rgba(0, 54, 126, 1)"
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter mobile number"
//                     keyboardType="numeric"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                     value={formData.fatherMobile}
//                     onChangeText={(text) =>
//                       handleInputChange("fatherMobile", text)
//                     }
//                     onBlur={() => handleInputBlur("fatherMobile")}
//                     maxLength={10}
//                   />
//                 </View>
//                 {!formErrors.fatherMobile &&
//                   formData.fatherMobile &&
//                   formData.fatherMobile.trim().length !== 10 && (
//                     <Text style={{ color: "red" }}>
//                       Mobile number must be 10 digits
//                     </Text>
//                   )}
//               </View>
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Parents Occupation</Text>
//                 <TouchableOpacity onPress={toggleDropdownoccupation}>
//                   <View style={styles.input_box}>
//                     <Image
//                       source={require("../../assets/icons/businessman.png")}
//                       style={styles.iconImage}
//                     />
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Select"
//                       placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                       value={inputValueoccupation}
//                       onBlur={() =>
//                         handleSelectOptionoccupation(inputValueoccupation)
//                       }
//                       editable={false} // Allow editing only when dropdown is closed
//                     />
//                     <AntDesign
//                       name="caretdown"
//                       style={styles.arrowdown}
//                       size={15}
//                       color="rgba(0, 54, 126, 1)"
//                     />
//                   </View>
//                 </TouchableOpacity>
//               </View>
//               {isDropdownOpenoccupation && (
//                 <View style={styles.dropdownContainer}>
//                   <TouchableOpacity
//                     style={styles.dropdownOption}
//                     onPress={() => handleSelectOptionoccupation("Business")}
//                   >
//                     <Text>Business</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={styles.dropdownOption}
//                     onPress={() => handleSelectOptionoccupation("Employee")}
//                   >
//                     <Text>Employee</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}
//               {/* income */}
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Family Income</Text>
//                 <View style={styles.input_box}>
//                   <Image
//                     source={require("../../assets/icons/receive (1).png")}
//                     style={styles.iconImage}
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Amount"
//                     value={formData.income}
//                     onChangeText={(text) => handleInputChange("income", text)}
//                     onBlur={() => handleInputBlur("income")}
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                   />
//                 </View>
//                 {!formErrors.income &&
//                   !formData.income &&
//                   fieldTouched.income && (
//                     <Text style={{ color: "red" }}>Member is required</Text>
//                   )}
//               </View>
//               {/* Member */}
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Number of Member</Text>
//                 <View style={styles.input_box}>
//                   <Image
//                     source={require("../../assets/icons/team.png")}
//                     style={styles.iconImage}
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Enter the number of member"
//                     value={formData.member}
//                     onChangeText={(text) => handleInputChange("member", text)}
//                     onBlur={() => handleInputBlur("member")}
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                   />
//                 </View>
//                 {!formErrors.member &&
//                   !formData.member &&
//                   fieldTouched.member && (
//                     <Text style={{ color: "red" }}>
//                       Member number is required
//                     </Text>
//                   )}
//               </View>
//               <View style={styles.headingg}>
//                 <Text style={styles.text}>Education Details</Text>
//               </View>
//               {/* Last qualification */}
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Last Qualification</Text>
//                 <TouchableOpacity onPress={toggleDropdownLastQuali}>
//                   <View style={styles.input_box}>
//                     <Image
//                       source={require("../../assets/icons/qualification.png")}
//                       style={styles.iconImage}
//                     />
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Select"
//                       placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                       value={inputValueLastQuali}
//                       onBlur={() =>
//                         handleSelectOptionLastQuali(inputValueLastQuali)
//                       }
//                       editable={false} // Allow editing only when dropdown is closed
//                     />
//                     <AntDesign
//                       name="caretdown"
//                       style={styles.arrowdown}
//                       size={15}
//                       color="rgba(0, 54, 126, 1)"
//                     />
//                   </View>
//                 </TouchableOpacity>
//               </View>

//               {isDropdownOpenLastQuali && (
//                 <View style={styles.dropdownContainer}>
//                   <TouchableOpacity
//                     style={styles.dropdownOption}
//                     onPress={() => handleSelectOptionLastQuali("10")}
//                   >
//                     <Text>10</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={styles.dropdownOption}
//                     onPress={() => handleSelectOptionLastQuali("12")}
//                   >
//                     <Text>12</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}

//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>H.S Pass Out Year</Text>
//                 <TouchableOpacity onPress={toggleDropdownHs}>
//                   <View style={styles.input_box}>
//                     <Image
//                       source={require("../../assets/icons/school.png")}
//                       style={styles.iconImage}
//                     />
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Select"
//                       placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                       value={inputValueHs}
//                       onBlur={() => handleSelectOptionHs(inputValueHs)}
//                       editable={false} // Allow editing only when dropdown is closed
//                     />
//                     <AntDesign
//                       name="caretdown"
//                       style={styles.arrowdown}
//                       size={15}
//                       color="rgba(0, 54, 126, 1)"
//                     />
//                   </View>
//                 </TouchableOpacity>
//               </View>
//               {isDropdownOpenHs && (
//                 <View style={styles.dropdownContainer}>
//                   <TouchableOpacity
//                     style={styles.dropdownOption}
//                     onPress={() => handleSelectOptionHs("2024")}
//                   >
//                     <Text>2024</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={styles.dropdownOption}
//                     onPress={() => handleSelectOptionHs("2025")}
//                   >
//                     <Text>2025</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>H.S Roll Number</Text>
//                 <View style={styles.input_box}>
//                   <Image
//                     source={require("../../assets/icons/number-blocks.png")}
//                     style={styles.iconImage}
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Roll Number"
//                     value={formData.roll_number}
//                     onChangeText={(text) =>
//                       handleInputChange("roll_number", text)
//                     }
//                     onBlur={() => handleInputBlur("roll_number")}
//                     keyboardType="numeric"
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                   />
//                 </View>
//                 {!formErrors.roll_number &&
//                   !formData.roll_number &&
//                   fieldTouched.roll_number && (
//                     <Text style={{ color: "red" }}>Roll is required</Text>
//                   )}
//               </View>
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Percentage</Text>
//                 <View style={styles.input_box}>
//                   <Image
//                     source={require("../../assets/icons/discount.png")}
//                     style={styles.iconImage}
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Percentage"
//                     value={formData.percentage}
//                     onChangeText={(text) =>
//                       handleInputChange("percentage", text)
//                     }
//                     onBlur={() => handleInputBlur("percentage")}
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                   />
//                 </View>
//                 {!formErrors.percentage &&
//                   !formData.percentage &&
//                   fieldTouched.percentage && (
//                     <Text style={{ color: "red" }}>Percentage is required</Text>
//                   )}
//               </View>
//               <View style={styles.fields_main}>
//                 <Text style={styles.inputHeading}>Total Number</Text>
//                 <View style={styles.input_box}>
//                   <Image
//                     source={require("../../assets/icons/exam-results.png")}
//                     style={styles.iconImage}
//                   />
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Marks"
//                     value={formData.total_number}
//                     onChangeText={(text) =>
//                       handleInputChange("total_number", text)
//                     }
//                     onBlur={() => handleInputBlur("total_number")}
//                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
//                   />
//                 </View>
//                 {!formErrors.total_number &&
//                   !formData.total_number &&
//                   fieldTouched.total_number && (
//                     <Text style={{ color: "red" }}>
//                       Total Number is required
//                     </Text>
//                   )}
//               </View>
//               <View style={styles.headingg}>
//                 <Text style={styles.text}>Upload Documents</Text>
//               </View>

// {!fileUri && (
//         <View style={styles.fields_main}>
//           <Text style={styles.inputHeading}>Aadhar Front</Text>
//           <TouchableOpacity style={styles.uploadBox} onPress={pickFile} disabled={isPickingFile}>
//             <View style={styles.uploadItems}>
//               <SimpleLineIcons
//                 name="cloud-upload"
//                 size={22}
//                 color="rgba(166, 166, 166, 1)"
//               />
//               <Text style={styles.uploadtext}>Upload a File</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       )}
//       {fileUri && (
//         <View>
//           <View style={[styles.titleContainer ,{justifyContent:"space-between" ,flexDirection:'row' ,alignItems:'center'}]}>
//             <Text style={styles.inputHeading}>Aadhar Front</Text>
//             <TouchableOpacity onPress={deleteImage}>
//             <AntDesign name="delete" size={20} color="#FF0000" />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: fileUri }} style={styles.uploadedImage} />
//           </View>
//         </View>
//       )}
//       {errorMessage && (
//         <Text style={styles.errorMessage}>{errorMessage}</Text>
//       )}

// {!fileUriAddharBack && (
//         <View style={styles.fields_main}>
//           <Text style={styles.inputHeading}>Aadhar Back</Text>
//           <TouchableOpacity style={styles.uploadBox} onPress={pickFileAddharBack} disabled={isPickingFile}>
//             <View style={styles.uploadItems}>
//               <SimpleLineIcons
//                 name="cloud-upload"
//                 size={22}
//                 color="rgba(166, 166, 166, 1)"
//               />
//               <Text style={styles.uploadtext}>Upload a File</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       )}
//       {fileUriAddharBack && (
//         <View>
//           <View style={[styles.titleContainer ,{justifyContent:"space-between" ,flexDirection:'row' ,alignItems:'center'}]}>
//             <Text style={styles.inputHeading}>Aadhar Back</Text>
//             <TouchableOpacity onPress={deleteImageAddharBack}>
//             <AntDesign name="delete" size={20} color="#FF0000" />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: fileUriAddharBack }} style={styles.uploadedImage} />
//           </View>
//         </View>
//       )}
//       {errorMessageAddharBack && (
//         <Text style={styles.errorMessage}>{errorMessageAddharBack}</Text>
//       )}

// {/* H S Marksheet  */}

// {!fileUriHSMarksheet && (
//         <View style={styles.fields_main}>
//           <Text style={styles.inputHeading}>H.S Marksheet</Text>
//           <TouchableOpacity style={styles.uploadBox} onPress={pickFileHSMarksheet} disabled={isPickingFile}>
//             <View style={styles.uploadItems}>
//               <SimpleLineIcons
//                 name="cloud-upload"
//                 size={22}
//                 color="rgba(166, 166, 166, 1)"
//               />
//               <Text style={styles.uploadtext}>Upload a File</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       )}
//       {fileUriHSMarksheet && (
//         <View>
//           <View style={[styles.titleContainer ,{justifyContent:"space-between" ,flexDirection:'row' ,alignItems:'center'}]}>
//             <Text style={styles.inputHeading}>H.S Marksheet</Text>
//             <TouchableOpacity onPress={deleteImageHSMarksheet}>
//             <AntDesign name="delete" size={20} color="#FF0000" />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: fileUriHSMarksheet }} style={styles.uploadedImage} />
//           </View>
//         </View>
//       )}
//       {errorMessageHSMarksheet && (
//         <Text style={styles.errorMessage}>{errorMessageHSMarksheet}</Text>
//       )}

// {/* Pass Port Photo  */}
//       {!fileUriPassPortPhoto && (
//         <View style={styles.fields_main}>
//           <Text style={styles.inputHeading}>PassPort Photo</Text>
//           <TouchableOpacity style={styles.uploadBox} onPress={pickFilePassPortPhoto} disabled={isPickingFile}>
//             <View style={styles.uploadItems}>
//               <SimpleLineIcons
//                 name="cloud-upload"
//                 size={22}
//                 color="rgba(166, 166, 166, 1)"
//               />
//               <Text style={styles.uploadtext}>Upload a File</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       )}
//       {fileUriPassPortPhoto && (
//         <View>
//           <View style={[styles.titleContainer ,{justifyContent:"space-between" ,flexDirection:'row' ,alignItems:'center'}]}>
//             <Text style={styles.inputHeading}>PassPort Photo</Text>
//             <TouchableOpacity onPress={deleteImagePassPortPhoto}>
//             <AntDesign name="delete" size={20} color="#FF0000" />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: fileUriPassPortPhoto }} style={styles.uploadedImage} />
//           </View>
//         </View>
//       )}
//       {errorMessagePassPortPhoto && (
//         <Text style={styles.errorMessage}>{errorMessagePassPortPhoto}</Text>
//       )}

// {!fileUriIncomeCertificate && (
//         <View style={styles.fields_main}>
//           <Text style={styles.inputHeading}>Upload Income Certificate</Text>
//           <TouchableOpacity style={styles.uploadBox} onPress={pickFileIncomeCertificate} disabled={isPickingFile}>
//             <View style={styles.uploadItems}>
//               <SimpleLineIcons
//                 name="cloud-upload"
//                 size={22}
//                 color="rgba(166, 166, 166, 1)"
//               />
//               <Text style={styles.uploadtext}>Upload a File</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       )}
//       {fileUriIncomeCertificate && (
//         <View>
//           <View style={[styles.titleContainer ,{justifyContent:"space-between" ,flexDirection:'row' ,alignItems:'center'}]}>
//             <Text style={styles.inputHeading}>Upload Income Certificate</Text>
//             <TouchableOpacity onPress={deleteImageIncomeCertificate}>
//             <AntDesign name="delete" size={20} color="#FF0000" />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: fileUriIncomeCertificate }} style={styles.uploadedImage} />
//           </View>
//         </View>
//       )}
//       {errorMessageIncomeCertificate && (
//         <Text style={styles.errorMessage}>{errorMessageIncomeCertificate}</Text>
//       )}

//               <View style={styles.conditions}>
//                 <Text style={styles.conditiontext}>
//                   1. The annual income of the family should be below 2 lakh
//                   rupees.{"\n"}
//                   {"\n"}2. You have to give exam for this free seat if you can't
//                   pass the exam then you will not get free admission.{"\n"}
//                   {"\n"}3. After the exam there will be counseling and if you
//                   pass there then you can take admission. Must be accompanied by
//                   a parent.{"\n"}
//                   {"\n"}4. If you don't get the college of your choice or if we
//                   don't have contact with the college, we won't have anything to
//                   do , you have to take the college you get otherwise you can
//                   close the free admission.
//                 </Text>
//               </View>
//               <View style={styles.condition_box_main}>
//                 <View style={styles.conditions_box}>
//                   <Checkbox
//                     style={styles.checkbox}
//                     value={isChecked}
//                     onValueChange={setChecked}
//                     color={isChecked ? "rgba(0, 54, 126, 1)" : undefined}
//                   />
//                   <Text style={styles.text_condition}>
//                     I agree with the{" "}
//                     <Text style={styles.text_condition1}>
//                       Terms & Conditions
//                     </Text>
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.submitButton}>
//                 <TouchableOpacity onPress={handleSubmission}>
//                   <LinearGradient
//                     colors={["rgba(3, 53, 125, 1)", "rgba(5, 105, 250, 1)"]}
//                     start={{ x: 0, y: 0.5 }}
//                     end={{ x: 1, y: 0.5 }}
//                     style={styles.inputbox_submit}
//                   >
//                     <Text style={styles.submitText}>Submit</Text>
//                   </LinearGradient>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default AdmissionForm;

// // const styles = StyleSheet.create({
// //   container: {
// //     top: 53,
// //   },
// //   main_content: {
// //     marginHorizontal: 20,
// //     marginVertical: 10,
// //   },
// //   profile: {
// //     height: 76,
// //     flexDirection: "row",
// //     width: "90%",
// //     alignItems: "center",
// //     gap: 20,
// //     marginTop: 12,
// //   },
// //   imageContainer: {
// //     height: 70,
// //     backgroundColor: "rgba(3, 53, 125, 1)",
// //     borderRadius: 50,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     gap: 20,
// //   },
// //   img: {
// //     height: 50,
// //     width: 50,
// //     margin: 10,
// //   },
// //   profileText: {
// //     fontSize: 25,
// //     lineHeight: 37.5,
// //     fontWeight: "600",
// //     color: "rgba(55, 55, 55, 1)",
// //   },
// //   college_details: {
// //     marginVertical: 20,
// //     gap: 15,
// //   },
// //   college_details_text: {
// //     fontSize: 18,
// //     lineHeight: 27,
// //     fontWeight: "500",
// //     color: " rgba(166, 166, 166, 1)",
// //   },
// //   college_details_input: {
// //     borderWidth: 1,
// //     borderColor: "rgba(3, 53, 125, 1)",
// //     padding: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 10,
// //     marginTop: 10,
// //   },
// //   heading: {
// //     borderStyle: "dashed",
// //     borderBottomWidth: 0.5,
// //     borderColor: "rgba(67, 83, 84, 1)",
// //   },
// //   headingg: {
// //     marginTop: 20,
// //     borderStyle: "dashed",
// //     borderBottomWidth: 0.5,
// //     borderColor: "rgba(67, 83, 84, 1)",
// //   },
// //   text: {
// //     fontWeight: "500",
// //     fontSize: 18,
// //     lineHeight: 27,
// //     color: "rgba(4, 106, 241, 1)",
// //     paddingBottom: 10,
// //   },
// //   fields_main: {
// //     marginTop: 17,
// //   },
// //   inputHeading: {
// //     fontWeight: "500",
// //     fontSize: 18,
// //     lineHeight: 27,
// //     color: "rgba(0, 54, 126, 1)",
// //     paddingBottom: 10,
// //   },
// //   input: {
// //     paddingRight: "35%",
// //     position: "relative",
// //   },
// //   iconImage: {
// //     height: 17,
// //     width: 17,
// //     right: 3,
// //   },
// //   arrowdown: {
// //     position: "absolute",
// //     right: 22,
// //   },
// //   input_box: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     backgroundColor: "rgba(255, 199, 0, 0.2)",
// //     padding: 12,
// //     paddingHorizontal: 20,
// //     borderRadius: 10,
// //     gap: 8,
// //     borderWidth: 0.5,
// //     borderColor: "rgba(3, 53, 125, 1)",
// //   },
// //   uploadBox: {
// //     alignItems: "center",
// //     justifyContent: "center",
// //     backgroundColor: "rgba(245, 245, 245, 1)",
// //     padding: 30,
// //     borderWidth: 0.5,
// //     borderColor: "rgba(217, 217, 217, 1)",
// //     borderRadius: 0.58,
// //     marginTop: 8,
// //   },
// //   uploadItems: {
// //     alignItems: "center",
// //     gap: 3,
// //   },
// //   uploadtext: {
// //     fontWeight: "500",
// //     fontSize: 16,
// //     lineHeight: 24,
// //     color: "rgba(55, 55, 55, 1)",
// //   },
// //   conditions: {
// //     marginTop: 40,
// //   },
// //   conditiontext: {
// //     fontSize: 13,
// //     lineHeight: 15.23,
// //     fontWeight: "400",
// //     color: "rgba(0, 0, 0, 1)",
// //   },
// //   condition_box_main: {
// //     marginTop: 30,
// //   },
// //   conditions_box: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   checkbox: {
// //     marginRight: 15,
// //     borderColor: "rgba(0, 54, 126, 1)",
// //     borderWidth: 1,
// //   },
// //   text_condition: {
// //     fontSize: 14,
// //     lineHeight: 16.41,
// //     fontWeight: "400",
// //     color: "rgba(34, 34, 34, 1)",
// //   },
// //   text_condition1: {
// //     fontSize: 14,
// //     lineHeight: 16.41,
// //     fontWeight: "600",
// //     color: "rgba(34, 34, 34, 1)",
// //   },
// //   submitButton: {
// //     marginTop: 16,
// //     marginBottom: 110,
// //   },
// //   inputbox_submit: {
// //     marginTop: 10,
// //     borderColor: "rgba(3, 53, 125, 1)",
// //     padding: 18,
// //     paddingHorizontal: 20,
// //     borderRadius: 30,
// //     backgroundColor: "rgba(3, 53, 125, 1)",
// //     shadowColor: "rgba(3, 53, 125, 0.25)",
// //   },
// //   submitText: {
// //     textAlign: "center",
// //     color: "rgba(255, 255, 255, 1)",
// //     fontWeight: "500",
// //     fontSize: 16,
// //     lineHeight: 18.75,
// //   },

// //   imageContainer: {
// //     alignItems: 'center',
// //     marginTop: 10,
// //   },
// //   uploadedImage: {
// //     width: 100,
// //     height: 100,
// //   },

// //   errorMessage: {
// //     marginTop: 20,
// //     fontSize: 16,
// //     color: 'red',
// //   },
// // });

// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   KeyboardAvoidingView,
// //   ScrollView,
// //   Image,
// //   TextInput,
// //   TouchableOpacity,
// // } from "react-native";
// // import React, { useState } from "react";
// // import {
// //   FontAwesome5,
// //   SimpleLineIcons,
// //   Fontisto,
// //   FontAwesome,
// //   Feather,
// //   AntDesign,
// // } from "@expo/vector-icons";
// // import Header from "../../components/Header";
// // import Checkbox from "expo-checkbox";
// // import { LinearGradient } from "expo-linear-gradient";

// // const AdmissionForm = ({ navigation }) => {
// //   const [isChecked, setChecked] = useState(false);

// //   // users data
// //   const [formErrors, setFormErrors] = useState({});

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     roll_number: "",
// //     total_number: "",
// //     percentage: "",
// //     fatherName: "",
// //     motherName: "",
// //     mobile: "",
// //     fatherMobile: "",
// //     whatsapp_number: "",
// //     address: "",
// //     police_station: "",
// //     pincode: "",
// //     aadhar_number: "",
// //     nationality: "",
// //     religion: "",
// //     district_id: "",
// //     password: "",
// //     referral_code: "",
// //   });
// //   const [fieldTouched, setFieldTouched] = useState({});

// //   // email

// //   const handleInputChange = (key, value) => {
// //     setFormData({ ...formData, [key]: value });
// //   };
// //   const handleInputBlur = (key) => {
// //     setFieldTouched({ ...fieldTouched, [key]: true });
// //     console.log("first", key);
// //     validateForm();
// //   };
// //   // email
// //   const [email, setEmail] = useState("");
// //   const [emailError, setEmailError] = useState("");

// //   // for gender

// //   const [isDropdownOpengender, setDropdownOpengender] = useState(false);
// //   const [inputValuegender, setInputValuegender] = useState("");

// //   // for last qualification
// //   const [isDropdownOpenLastQuali, setDropdownOpenLastQuali] = useState(false);
// //   const [inputValueLastQuali, setInputValueLastQuali] = useState("");

// //   // for parent occupation

// //   const [isDropdownOpenoccupation, setDropdownOpenoccupation] = useState(false);
// //   const [inputValueoccupation, setInputValueoccupation] = useState("");

// //   const [isDropdownOpenHs, setDropdownOpenHs] = useState(false);
// //   const [inputValueHs, setInputValueHs] = useState("");

// //   //handle togle for gender

// //   const toggleDropdowngender = () => {
// //     setDropdownOpengender(!isDropdownOpengender);
// //   };

// //   // toggle last qualifiCation

// //   const toggleDropdownLastQuali = () => {
// //     setDropdownOpenLastQuali(!isDropdownOpenLastQuali);
// //   };

// //   //handle togle for occupation

// //   const toggleDropdownoccupation = () => {
// //     setDropdownOpenoccupation(!isDropdownOpenoccupation);
// //   };

// //   // toogle hs
// //   const toggleDropdownHs = () => {
// //     setDropdownOpenHs(!isDropdownOpenHs);
// //   };

// //   // occupation
// //   const [occupationData, setoccupationData] = useState("");
// //   // Gender selection
// //   const [genderData, setGenderData] = useState("");

// //   const handleSelectOptiongender = (option) => {
// //     setInputValuegender(option);
// //     setGenderData(option);
// //     setDropdownOpengender(false);
// //   };

// //   // Last Qualification

// //   const [lastQualiData, setlastQualiData] = useState("");

// //   const handleSelectOptionLastQuali = (option) => {
// //     setInputValueLastQuali(option);
// //     setlastQualiData(option);
// //     setDropdownOpenLastQuali(false);
// //   };
// //   // parents occputation
// //   const handleSelectOptionoccupation = (option) => {
// //     setInputValueoccupation(option);
// //     setoccupationData(option);
// //     setDropdownOpenoccupation(false);
// //   };

// //   const handleSelectOptionHs = (option) => {
// //     setInputValueHs(option);
// //     // sethsData(option)
// //     setDropdownOpenHs(false);
// //   };

// //   const validateEmail = () => {
// //     // Regular expression pattern to validate email format
// //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// //     if (!email.trim()) {
// //       setEmailError("Email is required");
// //     } else if (!emailPattern.test(email)) {
// //       setEmailError("Invalid email format");
// //     } else {
// //       setEmailError("");
// //     }
// //   };

// //   const handleEmailChange = (text) => {
// //     setEmail(text);
// //     if (text.trim()) {
// //       setEmailError("");
// //     }
// //   };
// //   const validateForm = () => {
// //     const errors = {};

// //     // Validate each field
// //     Object.keys(formData).forEach((key) => {
// //       if (formData[key] && !formData[key].trim() && fieldTouched[key]) {
// //         errors[key] = `${
// //           key.charAt(0).toUpperCase() + key.slice(1)
// //         } is required`;
// //       }
// //     });

// //     setFormErrors(errors);
// //     return Object.keys(errors).length === 0;
// //   };

// //   const isFormValid = () => {
// //     // Check if any field has an error
// //     for (const key in formErrors) {
// //       if (formErrors[key]) {
// //         return false;
// //       }
// //     }
// //     // Check if all required fields are filled
// //     for (const key in formData) {
// //       if (!formData[key] && fieldTouched[key]) {
// //         return false;
// //       }
// //     }
// //     // Check if email and password are valid
// //     if (emailError || passwordError) {
// //       return false;
// //     }
// //     // Return true if the form is valid
// //     return true;
// //   };
// //   console.log("[][]", formErrors, "<><>", formData, "{}{}", fieldTouched);
// //   return (
// //     <KeyboardAvoidingView style={styles.container} behavior="padding">
// //       <Header
// //         title="Free College Admission Form"
// //         navigateTo={navigation?.goBack}
// //       />
// //       <ScrollView>
// //         <View style={styles.main_content}>
// //           <View style={styles.profile}>
// //             <View style={styles.imageContainer}>
// //               <Image
// //                 style={styles.img}
// //                 source={require("../../assets/img/student.png")}
// //               />
// //             </View>
// //             <View style={{ width: "80%" }}>
// //               <Text style={styles.profileText}>
// //                 Free College Admission Form
// //               </Text>
// //             </View>
// //           </View>
// //           <View style={styles.college_details}>
// //             <View>
// //               <Text style={styles.college_details_text}>College name</Text>
// //               <TextInput
// //                 style={styles.college_details_input}
// //                 placeholder="Anandamohan College"
// //                 placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //               />
// //             </View>
// //             <View>
// //               <Text style={styles.college_details_text}>Course name</Text>
// //               <TextInput
// //                 style={styles.college_details_input}
// //                 placeholder="B.C.A"
// //                 placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //               />
// //             </View>
// //           </View>
// //           <View style={styles.personal_details}>
// //             <View style={styles.heading}>
// //               <Text style={styles.text}>Student Personal Details</Text>
// //             </View>
// //             <View style={styles.input_fields}>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Name</Text>
// //                 <View style={styles.input_box}>
// //                   <FontAwesome5
// //                     name="user"
// //                     size={14}
// //                     color="rgba(0, 54, 126, 1)"
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Name"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                     value={formData.name}
// //                     onChangeText={(text) => handleInputChange("name", text)}
// //                     onBlur={() => handleInputBlur("name")}
// //                   />
// //                 </View>
// //                 {formErrors.name && fieldTouched.name && (
// //                   <Text style={{ color: "red" }}>{formErrors.name}</Text>
// //                 )}
// //                 {!formErrors.name && !formData.name && fieldTouched.name && (
// //                   <Text style={{ color: "red" }}>Full Name is required</Text>
// //                 )}
// //               </View>
// //               {/* D.O.B */}
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Date of Birth</Text>
// //                 <View style={styles.input_box}>
// //                   <Fontisto name="date" size={14} color="rgba(0, 54, 126, 1)" />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Date of Birth"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                   />
// //                 </View>
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Aadhar Number</Text>
// //                 <View style={styles.input_box}>
// //                   <FontAwesome
// //                     name="id-card-o"
// //                     size={14.5}
// //                     color="rgba(0, 54, 126, 1)"
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Enter aadhar number"
// //                     value={formData.aadhar_number}
// //                     onChangeText={(text) =>
// //                       handleInputChange("aadhar_number", text)
// //                     }
// //                     onBlur={() => handleInputBlur("aadhar_number")}
// //                     maxLength={12}
// //                     keyboardType="numeric"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                   />
// //                 </View>
// //                 {!formErrors.aadhar_number &&
// //                   formData.aadhar_number &&
// //                   formData.aadhar_number.trim().length !== 12 && (
// //                     <Text style={{ color: "red" }}>
// //                       Aadhar number must be 12 digits
// //                     </Text>
// //                   )}
// //               </View>
// //               {/* GENDER */}
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Gender</Text>
// //                 <TouchableOpacity onPress={toggleDropdowngender}>
// //                   <View style={styles.input_box}>
// //                     <Image
// //                       source={require("../../assets/icons/gender.png")}
// //                       style={styles.iconImage}
// //                     />
// //                     <TextInput
// //                       style={styles.input}
// //                       placeholder="Select"
// //                       value={inputValuegender}
// //                       onBlur={() => handleSelectOptiongender(inputValuegender)}
// //                       editable={false} // Allow editing only when dropdown is closed
// //                       placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                     />
// //                     <AntDesign
// //                       name="caretdown"
// //                       style={styles.arrowdown}
// //                       size={15}
// //                       color="rgba(0, 54, 126, 1)"
// //                     />
// //                   </View>
// //                 </TouchableOpacity>
// //               </View>

// //               {/* Dropdown of gender */}

// //               {isDropdownOpengender && (
// //                 <View style={styles.dropdownContainer}>
// //                   <TouchableOpacity
// //                     style={styles.dropdownOption}
// //                     onPress={() => handleSelectOptiongender("male")}
// //                   >
// //                     <Text>Male</Text>
// //                   </TouchableOpacity>
// //                   <TouchableOpacity
// //                     style={styles.dropdownOption}
// //                     onPress={() => handleSelectOptiongender("female")}
// //                   >
// //                     <Text>Female</Text>
// //                   </TouchableOpacity>
// //                 </View>
// //               )}
// //               {/* Email Id */}

// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Email Id</Text>
// //                 <View style={styles.input_box}>
// //                   <Fontisto
// //                     name="email"
// //                     size={14}
// //                     color="rgba(0, 54, 126, 1)"
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Enter your email"
// //                     value={email}
// //                     onChangeText={handleEmailChange}
// //                     onBlur={validateEmail}
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                   />
// //                 </View>
// //                 {emailError ? (
// //                   <Text style={{ color: "red" }}>{emailError}</Text>
// //                 ) : null}
// //               </View>
// //               {/* mobile */}
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Mobile Number</Text>
// //                 <View style={styles.input_box}>
// //                   <Feather
// //                     name="phone-call"
// //                     size={15}
// //                     color="rgba(0, 54, 126, 1)"
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Enter your mobile number"
// //                     keyboardType="numeric"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                     value={formData.mobile}
// //                     onChangeText={(text) => handleInputChange("mobile", text)}
// //                     onBlur={() => handleInputBlur("mobile")}
// //                     maxLength={10}
// //                   />
// //                 </View>
// //                 {formErrors.mobile && fieldTouched.mobile && (
// //                   <Text style={{ color: "red" }}>Mobile Number required</Text>
// //                 )}
// //                 {!formErrors.mobile &&
// //                   formData.mobile &&
// //                   formData.mobile.trim().length !== 10 && (
// //                     <Text style={{ color: "red" }}>
// //                       Mobile number must be 10 digits
// //                     </Text>
// //                   )}
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Nationality</Text>
// //                 <View style={styles.input_box}>
// //                   <Image
// //                     source={require("../../assets/icons/united-nations.png")}
// //                     style={styles.iconImage}
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Select"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                     value={formData.nationality}
// //                     onChangeText={(text) =>
// //                       handleInputChange("nationality", text)
// //                     }
// //                     onBlur={() => handleInputBlur("nationality")}
// //                   />
// //                 </View>
// //                 {!formErrors.nationality &&
// //                   !formData.nationality &&
// //                   fieldTouched.nationality && (
// //                     <Text style={{ color: "red" }}>
// //                       Please enter Nationality{" "}
// //                     </Text>
// //                   )}
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Religion</Text>
// //                 <View style={styles.input_box}>
// //                   <Image
// //                     source={require("../../assets/icons/religion.png")}
// //                     style={styles.iconImage}
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Select"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                     value={formData.religion}
// //                     onChangeText={(text) => handleInputChange("religion", text)}
// //                     onBlur={() => handleInputBlur("religion")}
// //                   />
// //                 </View>
// //                 {!formErrors.religion &&
// //                   !formData.religion &&
// //                   fieldTouched.religion && (
// //                     <Text style={{ color: "red" }}>
// //                       Please enter Your Religion{" "}
// //                     </Text>
// //                   )}
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Full Address</Text>
// //                 <View style={styles.input_box}>
// //                   <Image
// //                     source={require("../../assets/icons/home (1).png")}
// //                     style={styles.iconImage}
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Enter your full address"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                     value={formData.address}
// //                     onChangeText={(text) => handleInputChange("address", text)}
// //                     onBlur={() => handleInputBlur("address")}
// //                   />
// //                 </View>
// //                 {!formErrors.address &&
// //                   !formData.address &&
// //                   fieldTouched.address && (
// //                     <Text style={{ color: "red" }}>
// //                       Please enter Your Address{" "}
// //                     </Text>
// //                   )}
// //               </View>
// //               {/* whatsapp */}
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Whatsapp Number</Text>
// //                 <View style={styles.input_box}>
// //                   <FontAwesome5
// //                     name="whatsapp"
// //                     size={15}
// //                     color="rgba(0, 54, 126, 1)"
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     keyboardType="numeric"
// //                     placeholder="Enter your WhatsApp number"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                     value={formData.whatsapp_number}
// //                     onChangeText={(text) =>
// //                       handleInputChange("whatsapp_number", text)
// //                     }
// //                     onBlur={() => handleInputBlur("whatsapp_number")}
// //                     maxLength={10}
// //                   />
// //                 </View>
// //                 {formErrors.whatsapp_number && fieldTouched.whatsapp_number && (
// //                   <Text style={{ color: "red" }}>Whatsapp number Required</Text>
// //                 )}
// //                 {!formErrors.whatsapp_number &&
// //                   formData.whatsapp_number &&
// //                   formData.whatsapp_number.trim().length !== 10 && (
// //                     <Text style={{ color: "red" }}>
// //                       Mobile number must be 10 digits
// //                     </Text>
// //                   )}
// //               </View>

// //               <View style={styles.headingg}>
// //                 <Text style={styles.text}>Family Details</Text>
// //               </View>

// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Mother's Name</Text>
// //                 <View style={styles.input_box}>
// //                   <Image
// //                     source={require("../../assets/icons/female-student.png")}
// //                     style={styles.iconImage}
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Enter Your Mother's name"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                     value={formData.motherName}
// //                     onChangeText={(text) =>
// //                       handleInputChange("motherName", text)
// //                     }
// //                     onBlur={() => handleInputBlur("motherName")}
// //                   />
// //                 </View>
// //                 {!formErrors.motherName &&
// //                   !formData.motherName &&
// //                   fieldTouched.motherName && (
// //                     <Text style={{ color: "red" }}>
// //                       Mother name is required
// //                     </Text>
// //                   )}
// //               </View>
// //               {/* Father Name */}
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Father's Name</Text>
// //                 <View style={styles.input_box}>
// //                   <FontAwesome5
// //                     name="user"
// //                     size={14}
// //                     color="rgba(0, 54, 126, 1)"
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Enter Your Father's name"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                     value={formData.name}
// //                     onChangeText={(text) =>
// //                       handleInputChange("fatherName", text)
// //                     }
// //                     onBlur={() => handleInputBlur("fatherName")}
// //                   />
// //                 </View>
// //                 {!formErrors.fatherName &&
// //                   !formData.fatherName &&
// //                   fieldTouched.fatherName && (
// //                     <Text style={{ color: "red" }}>
// //                       Father name is required
// //                     </Text>
// //                   )}
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Father's Mobile Number</Text>
// //                 <View style={styles.input_box}>
// //                   <Feather
// //                     name="phone-call"
// //                     size={15}
// //                     color="rgba(0, 54, 126, 1)"
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Enter mobile number"
// //                     keyboardType="numeric"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                     value={formData.fatherMobile}
// //                     onChangeText={(text) =>
// //                       handleInputChange("fatherMobile", text)
// //                     }
// //                     onBlur={() => handleInputBlur("fatherMobile")}
// //                     maxLength={10}
// //                   />
// //                 </View>
// //                 {!formErrors.fatherMobile &&
// //                   formData.fatherMobile &&
// //                   formData.fatherMobile.trim().length !== 10 && (
// //                     <Text style={{ color: "red" }}>
// //                       Mobile number must be 10 digits
// //                     </Text>
// //                   )}
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Parents Occupation</Text>
// //                 <TouchableOpacity onPress={toggleDropdownoccupation}>
// //                   <View style={styles.input_box}>
// //                     <Image
// //                       source={require("../../assets/icons/businessman.png")}
// //                       style={styles.iconImage}
// //                     />
// //                     <TextInput
// //                       style={styles.input}
// //                       placeholder="Select"
// //                       placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                       value={inputValueoccupation}
// //                       onBlur={() =>
// //                         handleSelectOptionoccupation(inputValueoccupation)
// //                       }
// //                       editable={false} // Allow editing only when dropdown is closed
// //                     />
// //                     <AntDesign
// //                       name="caretdown"
// //                       style={styles.arrowdown}
// //                       size={15}
// //                       color="rgba(0, 54, 126, 1)"
// //                     />
// //                   </View>
// //                 </TouchableOpacity>
// //               </View>
// //               {isDropdownOpenoccupation && (
// //                 <View style={styles.dropdownContainer}>
// //                   <TouchableOpacity
// //                     style={styles.dropdownOption}
// //                     onPress={() => handleSelectOptionoccupation("Business")}
// //                   >
// //                     <Text>Business</Text>
// //                   </TouchableOpacity>
// //                   <TouchableOpacity
// //                     style={styles.dropdownOption}
// //                     onPress={() => handleSelectOptionoccupation("Employee")}
// //                   >
// //                     <Text>Employee</Text>
// //                   </TouchableOpacity>
// //                 </View>
// //               )}
// //               {/* income */}
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Family Income</Text>
// //                 <View style={styles.input_box}>
// //                   <Image
// //                     source={require("../../assets/icons/receive (1).png")}
// //                     style={styles.iconImage}
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Amount"
// //                     value={formData.income}
// //                     onChangeText={(text) => handleInputChange("income", text)}
// //                     onBlur={() => handleInputBlur("income")}
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                   />
// //                 </View>
// //                 {!formErrors.income &&
// //                   !formData.income &&
// //                   fieldTouched.income && (
// //                     <Text style={{ color: "red" }}>Member is required</Text>
// //                   )}
// //               </View>
// //               {/* Member */}
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Number of Member</Text>
// //                 <View style={styles.input_box}>
// //                   <Image
// //                     source={require("../../assets/icons/team.png")}
// //                     style={styles.iconImage}
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Enter the number of member"
// //                     value={formData.member}
// //                     onChangeText={(text) => handleInputChange("member", text)}
// //                     onBlur={() => handleInputBlur("member")}
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                   />
// //                 </View>
// //                 {!formErrors.member &&
// //                   !formData.member &&
// //                   fieldTouched.member && (
// //                     <Text style={{ color: "red" }}>
// //                       Member number is required
// //                     </Text>
// //                   )}
// //               </View>
// //               <View style={styles.headingg}>
// //                 <Text style={styles.text}>Education Details</Text>
// //               </View>
// //               {/* Last qualification */}
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Last Qualification</Text>
// //                 <TouchableOpacity onPress={toggleDropdownLastQuali}>
// //                   <View style={styles.input_box}>
// //                     <Image
// //                       source={require("../../assets/icons/qualification.png")}
// //                       style={styles.iconImage}
// //                     />
// //                     <TextInput
// //                       style={styles.input}
// //                       placeholder="Select"
// //                       placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                       value={inputValueLastQuali}
// //                       onBlur={() =>
// //                         handleSelectOptionLastQuali(inputValueLastQuali)
// //                       }
// //                       editable={false} // Allow editing only when dropdown is closed
// //                     />
// //                     <AntDesign
// //                       name="caretdown"
// //                       style={styles.arrowdown}
// //                       size={15}
// //                       color="rgba(0, 54, 126, 1)"
// //                     />
// //                   </View>
// //                 </TouchableOpacity>
// //               </View>

// //               {isDropdownOpenLastQuali && (
// //                 <View style={styles.dropdownContainer}>
// //                   <TouchableOpacity
// //                     style={styles.dropdownOption}
// //                     onPress={() => handleSelectOptionLastQuali("10")}
// //                   >
// //                     <Text>10</Text>
// //                   </TouchableOpacity>
// //                   <TouchableOpacity
// //                     style={styles.dropdownOption}
// //                     onPress={() => handleSelectOptionLastQuali("12")}
// //                   >
// //                     <Text>12</Text>
// //                   </TouchableOpacity>
// //                 </View>
// //               )}

// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>H.S Pass Out Year</Text>
// //                 <TouchableOpacity onPress={toggleDropdownHs}>
// //                   <View style={styles.input_box}>
// //                     <Image
// //                       source={require("../../assets/icons/school.png")}
// //                       style={styles.iconImage}
// //                     />
// //                     <TextInput
// //                       style={styles.input}
// //                       placeholder="Select"
// //                       placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                       value={inputValueHs}
// //                       onBlur={() => handleSelectOptionHs(inputValueHs)}
// //                       editable={false} // Allow editing only when dropdown is closed
// //                     />
// //                     <AntDesign
// //                       name="caretdown"
// //                       style={styles.arrowdown}
// //                       size={15}
// //                       color="rgba(0, 54, 126, 1)"
// //                     />
// //                   </View>
// //                 </TouchableOpacity>
// //               </View>
// //               {isDropdownOpenHs && (
// //                 <View style={styles.dropdownContainer}>
// //                   <TouchableOpacity
// //                     style={styles.dropdownOption}
// //                     onPress={() => handleSelectOptionHs("2024")}
// //                   >
// //                     <Text>2024</Text>
// //                   </TouchableOpacity>
// //                   <TouchableOpacity
// //                     style={styles.dropdownOption}
// //                     onPress={() => handleSelectOptionHs("2025")}
// //                   >
// //                     <Text>2025</Text>
// //                   </TouchableOpacity>
// //                 </View>
// //               )}
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>H.S Roll Number</Text>
// //                 <View style={styles.input_box}>
// //                   <Image
// //                     source={require("../../assets/icons/number-blocks.png")}
// //                     style={styles.iconImage}
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Roll Number"
// //                     value={formData.roll_number}
// //                     onChangeText={(text) =>
// //                       handleInputChange("roll_number", text)
// //                     }
// //                     onBlur={() => handleInputBlur("roll_number")}
// //                     keyboardType="numeric"
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                   />
// //                 </View>
// //                 {!formErrors.roll_number &&
// //                   !formData.roll_number &&
// //                   fieldTouched.roll_number && (
// //                     <Text style={{ color: "red" }}>Roll is required</Text>
// //                   )}
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Percentage</Text>
// //                 <View style={styles.input_box}>
// //                   <Image
// //                     source={require("../../assets/icons/discount.png")}
// //                     style={styles.iconImage}
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Percentage"
// //                     value={formData.percentage}
// //                     onChangeText={(text) =>
// //                       handleInputChange("percentage", text)
// //                     }
// //                     onBlur={() => handleInputBlur("percentage")}
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                   />
// //                 </View>
// //                 {!formErrors.percentage &&
// //                   !formData.percentage &&
// //                   fieldTouched.percentage && (
// //                     <Text style={{ color: "red" }}>Percentage is required</Text>
// //                   )}
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Total Number</Text>
// //                 <View style={styles.input_box}>
// //                   <Image
// //                     source={require("../../assets/icons/exam-results.png")}
// //                     style={styles.iconImage}
// //                   />
// //                   <TextInput
// //                     style={styles.input}
// //                     placeholder="Marks"
// //                     value={formData.total_number}
// //                     onChangeText={(text) =>
// //                       handleInputChange("total_number", text)
// //                     }
// //                     onBlur={() => handleInputBlur("total_number")}
// //                     placeholderTextColor={"rgba(166, 166, 166, 1)"}
// //                   />
// //                 </View>
// //                 {!formErrors.total_number &&
// //                   !formData.total_number &&
// //                   fieldTouched.total_number && (
// //                     <Text style={{ color: "red" }}>
// //                       Total Number is required
// //                     </Text>
// //                   )}
// //               </View>
// //               <View style={styles.headingg}>
// //                 <Text style={styles.text}>Upload Documentts</Text>
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Aadhar Front</Text>
// //                 <View style={styles.uploadBox}>
// //                   <View style={styles.uploadItems}>
// //                     <SimpleLineIcons
// //                       name="cloud-upload"
// //                       size={22}
// //                       color="rgba(166, 166, 166, 1)"
// //                     />
// //                     <Text style={styles.uploadtext}>Upload a File</Text>
// //                   </View>
// //                 </View>
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Aadhar Back</Text>
// //                 <View style={styles.uploadBox}>
// //                   <View style={styles.uploadItems}>
// //                     <SimpleLineIcons
// //                       name="cloud-upload"
// //                       size={22}
// //                       color="rgba(166, 166, 166, 1)"
// //                     />
// //                     <Text style={styles.uploadtext}>Upload a File</Text>
// //                   </View>
// //                 </View>
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>H.S Marksheet</Text>
// //                 <View style={styles.uploadBox}>
// //                   <View style={styles.uploadItems}>
// //                     <SimpleLineIcons
// //                       name="cloud-upload"
// //                       size={22}
// //                       color="rgba(166, 166, 166, 1)"
// //                     />
// //                     <Text style={styles.uploadtext}>Upload a File</Text>
// //                   </View>
// //                 </View>
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>Passport Photo</Text>
// //                 <View style={styles.uploadBox}>
// //                   <View style={styles.uploadItems}>
// //                     <SimpleLineIcons
// //                       name="cloud-upload"
// //                       size={22}
// //                       color="rgba(166, 166, 166, 1)"
// //                     />
// //                     <Text style={styles.uploadtext}>Upload a File</Text>
// //                   </View>
// //                 </View>
// //               </View>
// //               <View style={styles.fields_main}>
// //                 <Text style={styles.inputHeading}>
// //                   Upload Income Certificate
// //                 </Text>
// //                 <View style={styles.uploadBox}>
// //                   <View style={styles.uploadItems}>
// //                     <SimpleLineIcons
// //                       name="cloud-upload"
// //                       size={22}
// //                       color="rgba(166, 166, 166, 1)"
// //                     />
// //                     <Text style={styles.uploadtext}>Upload a File</Text>
// //                   </View>
// //                 </View>
// //               </View>
// //               <View style={styles.conditions}>
// //                 <Text style={styles.conditiontext}>
// //                   1. The annual income of the family should be below 2 lakh
// //                   rupees.{"\n"}
// //                   {"\n"}2. You have to give exam for this free seat if you can't
// //                   pass the exam then you will not get free admission.{"\n"}
// //                   {"\n"}3. After the exam there will be counseling and if you
// //                   pass there then you can take admission. Must be accompanied by
// //                   a parent.{"\n"}
// //                   {"\n"}4. If you don't get the college of your choice or if we
// //                   don't have contact with the college, we won't have anything to
// //                   do , you have to take the college you get otherwise you can
// //                   close the free admission.
// //                 </Text>
// //               </View>
// //               <View style={styles.condition_box_main}>
// //                 <View style={styles.conditions_box}>
// //                   <Checkbox
// //                     style={styles.checkbox}
// //                     value={isChecked}
// //                     onValueChange={setChecked}
// //                     color={isChecked ? "rgba(0, 54, 126, 1)" : undefined}
// //                   />
// //                   <Text style={styles.text_condition}>
// //                     I agree with the{" "}
// //                     <Text style={styles.text_condition1}>
// //                       Terms & Conditions
// //                     </Text>
// //                   </Text>
// //                 </View>
// //               </View>

// //               <View style={styles.submitButton}>
// //                 <TouchableOpacity>
// //                   <LinearGradient
// //                     colors={["rgba(3, 53, 125, 1)", "rgba(5, 105, 250, 1)"]}
// //                     start={{ x: 0, y: 0.5 }}
// //                     end={{ x: 1, y: 0.5 }}
// //                     style={styles.inputbox_submit}
// //                   >
// //                     <Text style={styles.submitText}>Submit</Text>
// //                   </LinearGradient>
// //                 </TouchableOpacity>
// //               </View>
// //             </View>
// //           </View>
// //         </View>
// //       </ScrollView>
// //     </KeyboardAvoidingView>
// //   );
// // };

// // export default AdmissionForm;

// const styles = StyleSheet.create({
//   container: {
//     top: 53,
//   },
//   main_content: {
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   profile: {
//     height: 76,
//     flexDirection: "row",
//     width: "90%",
//     alignItems: "center",
//     gap: 20,
//     marginTop: 12,
//   },
//   imageContainer: {
//         alignItems: 'center',
//         marginTop: 10,
//       },
//       uploadedImage: {
//         width: 100,
//         height: 100,
//       },
//   img: {
//     height: 50,
//     width: 50,
//     margin: 10,
//   },
//   profileText: {
//     fontSize: 25,
//     lineHeight: 37.5,
//     fontWeight: "600",
//     color: "rgba(55, 55, 55, 1)",
//   },
//   college_details: {
//     marginVertical: 20,
//     gap: 15,
//   },
//   college_details_text: {
//     fontSize: 18,
//     lineHeight: 27,
//     fontWeight: "500",
//     color: " rgba(166, 166, 166, 1)",
//   },
//   college_details_input: {
//     borderWidth: 1,
//     borderColor: "rgba(3, 53, 125, 1)",
//     padding: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   heading: {
//     borderStyle: "dashed",
//     borderBottomWidth: 0.5,
//     borderColor: "rgba(67, 83, 84, 1)",
//   },
//   headingg: {
//     marginTop: 20,
//     borderStyle: "dashed",
//     borderBottomWidth: 0.5,
//     borderColor: "rgba(67, 83, 84, 1)",
//   },
//   text: {
//     fontWeight: "500",
//     fontSize: 18,
//     lineHeight: 27,
//     color: "rgba(4, 106, 241, 1)",
//     paddingBottom: 10,
//   },
//   fields_main: {
//     marginTop: 17,
//   },
//   inputHeading: {
//     fontWeight: "500",
//     fontSize: 18,
//     lineHeight: 27,
//     color: "rgba(0, 54, 126, 1)",
//     paddingBottom: 10,
//   },
//   input: {
//     paddingRight: "35%",
//     position: "relative",
//     color: "black",
//   },
//   iconImage: {
//     height: 17,
//     width: 17,
//     right: 3,
//   },
//   arrowdown: {
//     position: "absolute",
//     right: 22,
//   },
//   input_box: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "rgba(255, 199, 0, 0.2)",
//     padding: 12,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     gap: 8,
//     borderWidth: 0.5,
//     borderColor: "rgba(3, 53, 125, 1)",
//   },

//   conditions: {
//     marginTop: 40,
//   },
//   conditiontext: {
//     fontSize: 13,
//     lineHeight: 15.23,
//     fontWeight: "400",
//     color: "rgba(0, 0, 0, 1)",
//   },
//   condition_box_main: {
//     marginTop: 30,
//   },
//   conditions_box: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   checkbox: {
//     marginRight: 15,
//     borderColor: "rgba(0, 54, 126, 1)",
//     borderWidth: 1,
//   },
//   text_condition: {
//     fontSize: 14,
//     lineHeight: 16.41,
//     fontWeight: "400",
//     color: "rgba(34, 34, 34, 1)",
//   },
//   text_condition1: {
//     fontSize: 14,
//     lineHeight: 16.41,
//     fontWeight: "600",
//     color: "rgba(34, 34, 34, 1)",
//   },
//   submitButton: {
//     marginTop: 16,
//     marginBottom: 110,
//   },
//   inputbox_submit: {
//     marginTop: 10,
//     borderColor: "rgba(3, 53, 125, 1)",
//     padding: 18,
//     paddingHorizontal: 20,
//     borderRadius: 30,
//     backgroundColor: "rgba(3, 53, 125, 1)",
//     shadowColor: "rgba(3, 53, 125, 0.25)",
//   },
//   submitText: {
//     textAlign: "center",
//     color: "rgba(255, 255, 255, 1)",
//     fontWeight: "500",
//     fontSize: 16,
//     lineHeight: 18.75,
//   },
//   dropdownContainer: {
//     // // position: "absolute",
//     // top: "100%",
//     // // left: 0,
//     // marginTop: 10,
//     // width: "89%",
//     // backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 4,
//     // backgroundColor:"red"
//     padding: 8,
//     color: "black",
//     // zIndex: 1,
//     // left: 17,
//     // alignSelf: "center",
//     // justifyContent:'center'
//   },
//   dropdownOption: {
//     paddingVertical: 8,
//     alignSelf: "center",
//     // backgroundColor:"red",
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   uploadBox: {
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "rgba(245, 245, 245, 1)",
//         padding: 30,
//         borderWidth: 0.5,
//         borderColor: "rgba(217, 217, 217, 1)",
//         borderRadius: 0.58,
//         marginTop: 8,
//       },
//       uploadItems: {
//         alignItems: "center",
//         gap: 3,
//       },
//       uploadtext: {
//         fontWeight: "500",
//         fontSize: 16,
//         lineHeight: 24,
//         color: "rgba(55, 55, 55, 1)",
//       },
// });

import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
import * as DocumentPicker from "expo-document-picker";
import { Camera } from "expo-camera";
// import CameraAccess from "../../components/CamraAccess";
import * as ImagePicker from "expo-image-picker";
const AdmissionForm = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const showToast = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      alert(message);
    }
  };
  // users data
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    roll_number: "",
    total_number: "",
    percentage: "",
    fatherName: "",
    motherName: "",
    mobile: "",
    fatherMobile: "",
    whatsapp_number: "",
    address: "",
    police_station: "",
    pincode: "",
    aadhar_number: "",
    nationality: "",
    religion: "",
    district_id: "",
    password: "",
    referral_code: "",
  });
  const [fieldTouched, setFieldTouched] = useState({});

  // email

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const handleInputBlur = (key) => {
    setFieldTouched({ ...fieldTouched, [key]: true });
    console.log("first", key);
    validateForm();
  };
  // email
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // for gender

  const [isDropdownOpengender, setDropdownOpengender] = useState(false);
  const [inputValuegender, setInputValuegender] = useState("");

  // for last qualification
  const [isDropdownOpenLastQuali, setDropdownOpenLastQuali] = useState(false);
  const [inputValueLastQuali, setInputValueLastQuali] = useState("");

  // for parent occupation

  const [isDropdownOpenoccupation, setDropdownOpenoccupation] = useState(false);
  const [inputValueoccupation, setInputValueoccupation] = useState("");

  const [isDropdownOpenHs, setDropdownOpenHs] = useState(false);
  const [inputValueHs, setInputValueHs] = useState("");

  //handle togle for gender

  const toggleDropdowngender = () => {
    setDropdownOpengender(!isDropdownOpengender);
  };

  // toggle last qualifiCation

  const toggleDropdownLastQuali = () => {
    setDropdownOpenLastQuali(!isDropdownOpenLastQuali);
  };

  //handle togle for occupation

  const toggleDropdownoccupation = () => {
    setDropdownOpenoccupation(!isDropdownOpenoccupation);
  };

  // toogle hs
  const toggleDropdownHs = () => {
    setDropdownOpenHs(!isDropdownOpenHs);
  };

  // occupation
  const [occupationData, setoccupationData] = useState("");
  // Gender selection
  const [genderData, setGenderData] = useState("");

  const handleSelectOptiongender = (option) => {
    setInputValuegender(option);
    setGenderData(option);
    setDropdownOpengender(false);
  };

  // Last Qualification

  const [lastQualiData, setlastQualiData] = useState("");

  const handleSelectOptionLastQuali = (option) => {
    setInputValueLastQuali(option);
    setlastQualiData(option);
    setDropdownOpenLastQuali(false);
  };
  // parents occputation
  const handleSelectOptionoccupation = (option) => {
    setInputValueoccupation(option);
    setoccupationData(option);
    setDropdownOpenoccupation(false);
  };

  const handleSelectOptionHs = (option) => {
    setInputValueHs(option);
    // sethsData(option)
    setDropdownOpenHs(false);
  };

  const validateEmail = () => {
    // Regular expression pattern to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text.trim()) {
      setEmailError("");
    }
  };
  const handleSubmission = () => {
    if (formData.name && formData.mobile) {
    }
    const formsData = new FormData();
    if (
      formData.name &&
      formData.mobile &&
      // formData.pincode &&
      formData.police_station &&
      formData.address &&
      formData.whatsapp_number
    ) {
      // formsData.append("name", formData.name);
      // formsData.append("email", email);
      // formsData.append("mobile", formData.mobile);
      // formsData.append("date_of_birth", userDetails.date_of_birth);
      // formsData.append("aadhar_number", formData.aadhar_number);
      // formsData.append("gender", genderData);
      // formsData.append("pincode", formData.pincode);
      // formsData.append("police_station", formData.police_station);
      // formsData.append("district_id", districtId);
      // formsData.append("address", formData.address);
      // formsData.append("whatsapp_number", formData.whatsapp_number);
      // formsData.append("password", password);
      // formsData.append("referral_code", formData.referral_code);
      // formsData.append("nationality", formData.nationality);
      // formsData.append("religion", formData.religion);
      // formsData.append("block", blockId);
      // formsData.append("class", inputValueclass);
      // console.log("6565655", formsData);
      // sendPostData("register", formsData)
      //   .then((res) => {
      //     if (res?.status) {
      //       showToast("Registration Successfull");
      //       console.log("11111111", res?.status);
      //       navigation.navigate("Dashboard");
      //     } else {
      //       console.log("00", res);
      //       console.log("888", formsData);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err, "--err");
      //   });
      showToast("Subitted Successfully");
    } else {
      // console.log("Registration failed: Required fields are missing");
      Alert.alert("Alert", "Please Fill up All Fields");
    }
  };
  const validateForm = () => {
    const errors = {};

    // Validate each field
    Object.keys(formData).forEach((key) => {
      if (formData[key] && !formData[key].trim() && fieldTouched[key]) {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isFormValid = () => {
    // Check if any field has an error
    for (const key in formErrors) {
      if (formErrors[key]) {
        return false;
      }
    }
    // Check if all required fields are filled
    for (const key in formData) {
      if (!formData[key] && fieldTouched[key]) {
        return false;
      }
    }
    // Check if email and password are valid
    if (emailError || passwordError) {
      return false;
    }
    // Return true if the form is valid
    return true;
  };
  const [fileUri, setFileUri] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPickingFile, setIsPickingFile] = useState(false);
  // States For Addhar back
  const [fileUriAddharBack, setFileUriAddharBack] = useState(null);
  const [errorMessageAddharBack, setErrorMessageAddharBack] = useState(null);
  const [isPickingFileAddharBack, setIsPickingFileAddharBack] = useState(false);

  // States For HS Marksheet
  const [fileUriHSMarksheet, setFileUriHSMarksheet] = useState(null);
  const [errorMessageHSMarksheet, setErrorMessageHSMarksheet] = useState(null);
  const [isPickingFileHSMarksheet, setIsPickingFileHSMarksheet] =
    useState(false);

  //States for Passport Photo
  const [fileUriPassPortPhoto, setFileUriPassPortPhoto] = useState(null);
  const [errorMessagePassPortPhoto, setErrorMessagePassPortPhoto] =
    useState(null);
  const [isPickingFilePassPortPhoto, setIsPickingFilePassPortPhoto] =
    useState(false);

  //States for Upload Income Certificate
  const [fileUriIncomeCertificate, setFileUriIncomeCertificate] =
    useState(null);
  const [errorMessageIncomeCertificate, setErrorMessageIncomeCertificate] =
    useState(null);
  const [isPickingFileIncomeCertificate, setIsPickingFileIncomeCertificate] =
    useState(false);

  // Passport
  const [capturedImagePassport, setCapturedImagePassport] = useState(null);
  const [modalVisiblePassport, setModalVisiblePassport] = useState(false);

  //HS MAksheet
  const [capturedImageHSMarksheet, setCapturedImageHSMarksheet] =
    useState(null);
  const [modalVisibleHSMarksheet, setModalVisibleHSMarksheet] = useState(false);

  // Addahar Back
  const [capturedImageAddharBack, setCapturedImageAddharBack] = useState(null);
  const [modalVisibleAddharBack, setModalVisibleAddharBack] = useState(false);

  // Addahar Front
  const [capturedImageAddharfront, setCapturedImageAddharfront] =
    useState(null);
  const [modalVisibleAddharfront, setModalVisibleAddharfront] = useState(false);

  // Add camera functionaly for income certifucate
  const [hasPermission, setHasPermission] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const closeModal = () => {
    setModalVisible(false);
    setModalVisiblePassport(false);
    setModalVisibleHSMarksheet(false);
    setModalVisibleAddharBack(false);
    setModalVisibleAddharfront(false);
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

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // Camera end here

  // Camera funtionality for passport
  // const takePicturepassport = async () => {
  // const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  // if (permissionResult.granted === false) {
  // alert('Camera permission is required to take photos.');
  // return;
  // }

  // try {
  // const imageResult = await ImagePicker.launchCameraAsync();
  // console.log("sdkfpf",imageResult)
  // if (imageResult.assets[0].uri !== null) {
  // setCapturedImage(imageResult.assets[0].uri);
  // console.log("ndhlslsjvjjv;" , imageResult.assets[0].uri)
  // setModalVisible(false);
  // }
  // } catch (error) {
  // console.error('Error taking picture:', error);
  // // Handle error
  // }
  // };

  // end here

  // for addhar front function
  const pickFile = async () => {
    if (isPickingFile) {
      console.log("Document picking in progress");
      return;
    }

    setIsPickingFile(true);
    setErrorMessage(null);

    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      console.log("File picker result:", result);

      if (
        !result.cancelled &&
        result.assets &&
        result.assets.length > 0 &&
        result.assets[0].uri
      ) {
        console.log("File picked:", result.assets[0].uri);
        setFileUri(result.assets[0].uri);
      } else if (result.cancelled) {
        console.log("File picking cancelled");
      } else {
        console.log("File picking failed");
        setErrorMessage("File picking failed");
      }
    } catch (error) {
      console.error("Error picking file:", error);
      setErrorMessage("Error picking file");
    } finally {
      setIsPickingFile(false);
    }
    closeModal();
  };

  //For Addhar Back function
  const pickFileAddharBack = async () => {
    if (isPickingFileAddharBack) {
      console.log("Document picking in progress");
      return;
    }

    setIsPickingFileAddharBack(true);
    setErrorMessageAddharBack(null);

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
        setFileUriAddharBack(result.assets[0].uri);
      } else if (result.canceled) {
        console.log("File picking cancelled");
      } else {
        console.log("File picking failed");
        setErrorMessageAddharBack("File picking failed");
      }
    } catch (error) {
      console.error("Error picking file:", error);
      setErrorMessageAddharBack("Error picking file");
    } finally {
      setIsPickingFileAddharBack(false);
    }
    closeModal();
  };

  //For HSMarksheet function
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

  //For IncomeCertificate function
  const pickFileIncomeCertificate = async () => {
    if (isPickingFileIncomeCertificate) {
      console.log("Document picking in progress");
      return;
    }

    setIsPickingFileIncomeCertificate(true);
    setErrorMessageIncomeCertificate(null);

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
        setFileUriIncomeCertificate(result.assets[0].uri);
      } else if (result.canceled) {
        console.log("File picking cancelled");
      } else {
        console.log("File picking failed");
        setErrorMessageIncomeCertificate("File picking failed");
      }
    } catch (error) {
      console.error("Error picking file:", error);
      setErrorMessageIncomeCertificate("Error picking file");
    } finally {
      setIsPickingFileIncomeCertificate(false);
    }
    closeModal();
  };

  //Delete function for addhar front
  const deleteImage = () => {
    setFileUri(null);
    setCapturedImageAddharfront(null);
  };
  // Delete function for Addhar back
  const deleteImageAddharBack = () => {
    setFileUriAddharBack(null);
    setCapturedImageAddharBack(null);
  };
  //For HSMarksheet
  const deleteImageHSMarksheet = () => {
    setFileUriHSMarksheet(null);
    setCapturedImageHSMarksheet(null);
  };

  //For PassPort Photo
  const deleteImagePassPortPhoto = () => {
    setFileUriPassPortPhoto(null);
    setCapturedImagePassport(null);
  };

  //For Income Certifiate
  const deleteImageIncomeCertificate = () => {
    setFileUriIncomeCertificate(null);
    setCapturedImage(null);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header
        title="Free College Admission Form"
        navigateTo={navigation?.goBack}
      />
      <ScrollView>
        <View style={styles.main_content}>
          <View style={styles.profile}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.img}
                source={require("../../assets/img/student.png")}
              />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={styles.profileText}>
                Free College Admission Form
              </Text>
            </View>
          </View>
          <View style={styles.college_details}>
            <View>
              <Text style={styles.college_details_text}>College name</Text>
              <TextInput
                style={styles.college_details_input}
                placeholder="Anandamohan College"
                placeholderTextColor={"rgba(166, 166, 166, 1)"}
              />
            </View>
            <View>
              <Text style={styles.college_details_text}>Course name</Text>
              <TextInput
                style={styles.college_details_input}
                placeholder="B.C.A"
                placeholderTextColor={"rgba(166, 166, 166, 1)"}
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
                    value={formData.name}
                    onChangeText={(text) => handleInputChange("name", text)}
                    onBlur={() => handleInputBlur("name")}
                  />
                </View>
                {formErrors.name && fieldTouched.name && (
                  <Text style={{ color: "red" }}>{formErrors.name}</Text>
                )}
                {!formErrors.name && !formData.name && fieldTouched.name && (
                  <Text style={{ color: "red" }}>Full Name is required</Text>
                )}
              </View>
              {/* D.O.B */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Date of Birth</Text>
                <View style={styles.input_box}>
                  <Fontisto name="date" size={14} color="rgba(0, 54, 126, 1)" />
                  <TextInput
                    style={styles.input}
                    placeholder="Date of Birth"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View>
              <View style={styles.fields_main}>
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
                    value={formData.aadhar_number}
                    onChangeText={(text) =>
                      handleInputChange("aadhar_number", text)
                    }
                    onBlur={() => handleInputBlur("aadhar_number")}
                    maxLength={12}
                    keyboardType="numeric"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
                {!formErrors.aadhar_number &&
                  formData.aadhar_number &&
                  formData.aadhar_number.trim().length !== 12 && (
                    <Text style={{ color: "red" }}>
                      Aadhar number must be 12 digits
                    </Text>
                  )}
              </View>
              {/* GENDER */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Gender</Text>
                <TouchableOpacity onPress={toggleDropdowngender}>
                  <View style={styles.input_box}>
                    <Image
                      source={require("../../assets/icons/gender.png")}
                      style={styles.iconImage}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      value={inputValuegender}
                      onBlur={() => handleSelectOptiongender(inputValuegender)}
                      editable={false} // Allow editing only when dropdown is closed
                      placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    />
                    <AntDesign
                      name="caretdown"
                      style={styles.arrowdown}
                      size={15}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Dropdown of gender */}

              {isDropdownOpengender && (
                <View style={styles.dropdownContainer}>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptiongender("male")}
                  >
                    <Text>Male</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptiongender("female")}
                  >
                    <Text>Female</Text>
                  </TouchableOpacity>
                </View>
              )}
              {/* Email Id */}

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
                    value={email}
                    onChangeText={handleEmailChange}
                    onBlur={validateEmail}
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
                {emailError ? (
                  <Text style={{ color: "red" }}>{emailError}</Text>
                ) : null}
              </View>
              {/* mobile */}
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
                    keyboardType="numeric"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    value={formData.mobile}
                    onChangeText={(text) => handleInputChange("mobile", text)}
                    onBlur={() => handleInputBlur("mobile")}
                    maxLength={10}
                  />
                </View>
                {formErrors.mobile && fieldTouched.mobile && (
                  <Text style={{ color: "red" }}>Mobile Number required</Text>
                )}
                {!formErrors.mobile &&
                  formData.mobile &&
                  formData.mobile.trim().length !== 10 && (
                    <Text style={{ color: "red" }}>
                      Mobile number must be 10 digits
                    </Text>
                  )}
              </View>
              <View style={styles.fields_main}>
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
                    value={formData.nationality}
                    onChangeText={(text) =>
                      handleInputChange("nationality", text)
                    }
                    onBlur={() => handleInputBlur("nationality")}
                  />
                </View>
                {!formErrors.nationality &&
                  !formData.nationality &&
                  fieldTouched.nationality && (
                    <Text style={{ color: "red" }}>
                      Please enter Nationality{" "}
                    </Text>
                  )}
              </View>
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
                    value={formData.religion}
                    onChangeText={(text) => handleInputChange("religion", text)}
                    onBlur={() => handleInputBlur("religion")}
                  />
                </View>
                {!formErrors.religion &&
                  !formData.religion &&
                  fieldTouched.religion && (
                    <Text style={{ color: "red" }}>
                      Please enter Your Religion{" "}
                    </Text>
                  )}
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
                    value={formData.address}
                    onChangeText={(text) => handleInputChange("address", text)}
                    onBlur={() => handleInputBlur("address")}
                  />
                </View>
                {!formErrors.address &&
                  !formData.address &&
                  fieldTouched.address && (
                    <Text style={{ color: "red" }}>
                      Please enter Your Address{" "}
                    </Text>
                  )}
              </View>
              {/* whatsapp */}
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
                    keyboardType="numeric"
                    placeholder="Enter your WhatsApp number"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    value={formData.whatsapp_number}
                    onChangeText={(text) =>
                      handleInputChange("whatsapp_number", text)
                    }
                    onBlur={() => handleInputBlur("whatsapp_number")}
                    maxLength={10}
                  />
                </View>
                {formErrors.whatsapp_number && fieldTouched.whatsapp_number && (
                  <Text style={{ color: "red" }}>Whatsapp number Required</Text>
                )}
                {!formErrors.whatsapp_number &&
                  formData.whatsapp_number &&
                  formData.whatsapp_number.trim().length !== 10 && (
                    <Text style={{ color: "red" }}>
                      Mobile number must be 10 digits
                    </Text>
                  )}
              </View>

              <View style={styles.headingg}>
                <Text style={styles.text}>Family Details</Text>
              </View>

              <View style={styles.fields_main}>
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
                    value={formData.motherName}
                    onChangeText={(text) =>
                      handleInputChange("motherName", text)
                    }
                    onBlur={() => handleInputBlur("motherName")}
                  />
                </View>
                {!formErrors.motherName &&
                  !formData.motherName &&
                  fieldTouched.motherName && (
                    <Text style={{ color: "red" }}>
                      Mother name is required
                    </Text>
                  )}
              </View>
              {/* Father Name */}
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
                    value={formData.name}
                    onChangeText={(text) =>
                      handleInputChange("fatherName", text)
                    }
                    onBlur={() => handleInputBlur("fatherName")}
                  />
                </View>
                {!formErrors.fatherName &&
                  !formData.fatherName &&
                  fieldTouched.fatherName && (
                    <Text style={{ color: "red" }}>
                      Father name is required
                    </Text>
                  )}
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Father's Mobile Number</Text>
                <View style={styles.input_box}>
                  <Feather
                    name="phone-call"
                    size={15}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter mobile number"
                    keyboardType="numeric"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    value={formData.fatherMobile}
                    onChangeText={(text) =>
                      handleInputChange("fatherMobile", text)
                    }
                    onBlur={() => handleInputBlur("fatherMobile")}
                    maxLength={10}
                  />
                </View>
                {!formErrors.fatherMobile &&
                  formData.fatherMobile &&
                  formData.fatherMobile.trim().length !== 10 && (
                    <Text style={{ color: "red" }}>
                      Mobile number must be 10 digits
                    </Text>
                  )}
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Parents Occupation</Text>
                <TouchableOpacity onPress={toggleDropdownoccupation}>
                  <View style={styles.input_box}>
                    <Image
                      source={require("../../assets/icons/businessman.png")}
                      style={styles.iconImage}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor={"rgba(166, 166, 166, 1)"}
                      value={inputValueoccupation}
                      onBlur={() =>
                        handleSelectOptionoccupation(inputValueoccupation)
                      }
                      editable={false} // Allow editing only when dropdown is closed
                    />
                    <AntDesign
                      name="caretdown"
                      style={styles.arrowdown}
                      size={15}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </TouchableOpacity>
              </View>
              {isDropdownOpenoccupation && (
                <View style={styles.dropdownContainer}>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionoccupation("Business")}
                  >
                    <Text>Business</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionoccupation("Employee")}
                  >
                    <Text>Employee</Text>
                  </TouchableOpacity>
                </View>
              )}
              {/* income */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Family Income</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/receive (1).png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Amount"
                    value={formData.income}
                    onChangeText={(text) => handleInputChange("income", text)}
                    onBlur={() => handleInputBlur("income")}
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
                {!formErrors.income &&
                  !formData.income &&
                  fieldTouched.income && (
                    <Text style={{ color: "red" }}>Member is required</Text>
                  )}
              </View>
              {/* Member */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Number of Member</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/team.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter the number of member"
                    value={formData.member}
                    onChangeText={(text) => handleInputChange("member", text)}
                    onBlur={() => handleInputBlur("member")}
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
                {!formErrors.member &&
                  !formData.member &&
                  fieldTouched.member && (
                    <Text style={{ color: "red" }}>
                      Member number is required
                    </Text>
                  )}
              </View>
              <View style={styles.headingg}>
                <Text style={styles.text}>Education Details</Text>
              </View>
              {/* Last qualification */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Last Qualification</Text>
                <TouchableOpacity onPress={toggleDropdownLastQuali}>
                  <View style={styles.input_box}>
                    <Image
                      source={require("../../assets/icons/qualification.png")}
                      style={styles.iconImage}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor={"rgba(166, 166, 166, 1)"}
                      value={inputValueLastQuali}
                      onBlur={() =>
                        handleSelectOptionLastQuali(inputValueLastQuali)
                      }
                      editable={false} // Allow editing only when dropdown is closed
                    />
                    <AntDesign
                      name="caretdown"
                      style={styles.arrowdown}
                      size={15}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </TouchableOpacity>
              </View>

              {isDropdownOpenLastQuali && (
                <View style={styles.dropdownContainer}>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionLastQuali("10")}
                  >
                    <Text>10</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionLastQuali("12")}
                  >
                    <Text>12</Text>
                  </TouchableOpacity>
                </View>
              )}

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>H.S Pass Out Year</Text>
                <TouchableOpacity onPress={toggleDropdownHs}>
                  <View style={styles.input_box}>
                    <Image
                      source={require("../../assets/icons/school.png")}
                      style={styles.iconImage}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      placeholderTextColor={"rgba(166, 166, 166, 1)"}
                      value={inputValueHs}
                      onBlur={() => handleSelectOptionHs(inputValueHs)}
                      editable={false} // Allow editing only when dropdown is closed
                    />
                    <AntDesign
                      name="caretdown"
                      style={styles.arrowdown}
                      size={15}
                      color="rgba(0, 54, 126, 1)"
                    />
                  </View>
                </TouchableOpacity>
              </View>
              {isDropdownOpenHs && (
                <View style={styles.dropdownContainer}>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionHs("2024")}
                  >
                    <Text>2024</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionHs("2025")}
                  >
                    <Text>2025</Text>
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>H.S Roll Number</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/number-blocks.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Roll Number"
                    value={formData.roll_number}
                    onChangeText={(text) =>
                      handleInputChange("roll_number", text)
                    }
                    onBlur={() => handleInputBlur("roll_number")}
                    keyboardType="numeric"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
                {!formErrors.roll_number &&
                  !formData.roll_number &&
                  fieldTouched.roll_number && (
                    <Text style={{ color: "red" }}>Roll is required</Text>
                  )}
              </View>
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
                    value={formData.percentage}
                    onChangeText={(text) =>
                      handleInputChange("percentage", text)
                    }
                    onBlur={() => handleInputBlur("percentage")}
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
                {!formErrors.percentage &&
                  !formData.percentage &&
                  fieldTouched.percentage && (
                    <Text style={{ color: "red" }}>Percentage is required</Text>
                  )}
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Total Number</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/exam-results.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Marks"
                    value={formData.total_number}
                    onChangeText={(text) =>
                      handleInputChange("total_number", text)
                    }
                    onBlur={() => handleInputBlur("total_number")}
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
                {!formErrors.total_number &&
                  !formData.total_number &&
                  fieldTouched.total_number && (
                    <Text style={{ color: "red" }}>
                      Total Number is required
                    </Text>
                  )}
              </View>
              <View style={styles.headingg}>
                <Text style={styles.text}>Upload Documents</Text>
              </View>
              {/* {!fileUri && (
  <View style={styles.fields_main}>
  <Text style={styles.inputHeading}>Aadhar Front</Text>
  <TouchableOpacity
  style={styles.uploadBox}
  onPress={pickFile}
  disabled={isPickingFile}
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
  {fileUri && (
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
  <Text style={styles.inputHeading}>Aadhar Front</Text>
  <TouchableOpacity onPress={deleteImage}>
  <AntDesign name="delete" size={20} color="#FF0000" />
  </TouchableOpacity>
  </View>
  <View style={styles.imageContainer}>
  <Image
  source={{ uri: fileUri }}
  style={styles.uploadedImage}
  />
  </View>
  </View>
  )}
  {errorMessage && (
  <Text style={styles.errorMessage}>{errorMessage}</Text>
  )} */}

              {/* Addhar Front */}
              <View>
                {!capturedImageAddharfront && !fileUri && (
                  <View style={styles.fields_main}>
                    <Text style={styles.inputHeading}>Addhar Front</Text>
                    <TouchableOpacity
                      style={styles.uploadBox}
                      onPress={() => setModalVisibleAddharfront(true)}
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
                {fileUri && (
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
                      <Text style={styles.inputHeading}>Aadhar Front</Text>
                      <TouchableOpacity
                        onPress={() => deleteDocuments("AddharFront")}
                      >
                        <AntDesign name="delete" size={20} color="#FF0000" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{ uri: fileUri }}
                        style={styles.uploadedImage}
                      />
                    </View>
                  </View>
                )}
                {capturedImageAddharfront && (
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
                      <Text style={styles.inputHeading}>Addhar Front</Text>
                      <TouchableOpacity onPress={deleteImage}>
                        <AntDesign name="delete" size={20} color="#FF0000" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{ uri: capturedImageAddharfront }}
                        style={styles.uploadedImage}
                      />
                    </View>
                  </View>
                )}

                {errorMessage && (
                  <Text style={styles.errorMessage}>{errorMessage}</Text>
                )}
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisibleAddharfront}
                  onRequestClose={closeModal}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={() => {
                          takePicture("AddharFront");
                        }}
                      >
                        <Text style={styles.modalOptionText}>Take Photo</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={pickFile}
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
              {/* Addhar Back */}

              <View>
                {!capturedImageAddharBack && !fileUriAddharBack && (
                  <View style={styles.fields_main}>
                    <Text style={styles.inputHeading}>Addhar Back</Text>
                    <TouchableOpacity
                      style={styles.uploadBox}
                      onPress={() => setModalVisibleAddharBack(true)}
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
                {fileUriAddharBack && (
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
                      <Text style={styles.inputHeading}>Addahar Back</Text>
                      <TouchableOpacity
                        onPress={() => deleteDocuments("AddharBack")}
                      >
                        <AntDesign name="delete" size={20} color="#FF0000" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{ uri: fileUriAddharBack }}
                        style={styles.uploadedImage}
                      />
                    </View>
                  </View>
                )}
                {capturedImageAddharBack && (
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
                      <Text style={styles.inputHeading}>Addhar Back</Text>
                      <TouchableOpacity onPress={deleteImageAddharBack}>
                        <AntDesign name="delete" size={20} color="#FF0000" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{ uri: capturedImageAddharBack }}
                        style={styles.uploadedImage}
                      />
                    </View>
                  </View>
                )}

                {errorMessageAddharBack && (
                  <Text style={styles.errorMessage}>
                    {errorMessageAddharBack}
                  </Text>
                )}
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisibleAddharBack}
                  onRequestClose={closeModal}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={() => {
                          takePicture("AddharBack");
                        }}
                      >
                        <Text style={styles.modalOptionText}>Take Photo</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={pickFileAddharBack}
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
              {/* H.S.Marksheet */}
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

              {/* Passport photo */}
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
                          Choose from Librarys
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
              {/* with modal and upload income */}
              <View>
                {!capturedImage && !fileUriIncomeCertificate && (
                  <View style={styles.fields_main}>
                    <Text style={styles.inputHeading}>
                      Upload Income Certificate
                    </Text>
                    <TouchableOpacity
                      style={styles.uploadBox}
                      onPress={() => setModalVisible(true)}
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
                {fileUriIncomeCertificate && (
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
                      <Text style={styles.inputHeading}>
                        Upload Income Certificate
                      </Text>
                      <TouchableOpacity onPress={deleteImageIncomeCertificate}>
                        <AntDesign name="delete" size={20} color="#FF0000" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{ uri: fileUriIncomeCertificate }}
                        style={styles.uploadedImage}
                      />
                    </View>
                  </View>
                )}
                {capturedImage && (
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
                      <Text style={styles.inputHeading}>
                        Upload Income Certificate
                      </Text>
                      <TouchableOpacity onPress={deleteImageIncomeCertificate}>
                        <AntDesign name="delete" size={20} color="#FF0000" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{ uri: capturedImage }}
                        style={styles.uploadedImage}
                      />
                    </View>
                  </View>
                )}

                {errorMessageIncomeCertificate && (
                  <Text style={styles.errorMessage}>
                    {errorMessageIncomeCertificate}
                  </Text>
                )}
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={closeModal}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={() => {
                          takePicture("income");
                        }}
                      >
                        <Text style={styles.modalOptionText}>Take Photo</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.modalOption}
                        onPress={pickFileIncomeCertificate}
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

              <View style={styles.conditions}>
                <Text style={styles.conditiontext}>
                  1. The annual income of the family should be below 2 lakh
                  rupees.{"\n"}
                  {"\n"}2. You have to give exam for this free seat if you can't
                  pass the exam then you will not get free admission.{"\n"}
                  {"\n"}3. After the exam there will be counseling and if you
                  pass there then you can take admission. Must be accompanied by
                  a parent.{"\n"}
                  {"\n"}4. If you don't get the college of your choice or if we
                  don't have contact with the college, we won't have anything to
                  do , you have to take the college you get otherwise you can
                  close the free admission.
                </Text>
              </View>
              <View style={styles.condition_box_main}>
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
                <TouchableOpacity onPress={handleSubmission}>
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

export default AdmissionForm;

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
    alignItems: "center",
    marginTop: 10,
  },
  uploadedImage: {
    width: 100,
    height: 100,
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
    color: "black",
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
  dropdownContainer: {
    // // position: "absolute",
    // top: "100%",
    // // left: 0,
    // marginTop: 10,
    // width: "89%",
    // backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    // backgroundColor:"red"
    padding: 8,
    color: "black",
    // zIndex: 1,
    // left: 17,
    // alignSelf: "center",
    // justifyContent:'center'
  },
  dropdownOption: {
    paddingVertical: 8,
    alignSelf: "center",
    // backgroundColor:"red",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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

  // for camera
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
  camera: {
    height: 0, // Adjust the height as needed
    flex: 1,
  },

  errorMessage: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});

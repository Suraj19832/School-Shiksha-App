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
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  FontAwesome5,
  SimpleLineIcons,
  Fontisto,
  FontAwesome,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Header from "../../components/Header";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import * as DocumentPicker from "expo-document-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Camera } from "expo-camera";
// import CameraAccess from "../../components/CamraAccess";
import * as ImagePicker from "expo-image-picker";
import { useRoute } from "@react-navigation/native";
import {
  getFileData,
  getdata,
  getrequestwithtoken,
  objectToFormData,
  objectToFormDataMultipleObject,
  objectToFormDatawithnestedObject,
  postDataWithFormData,
  postDataWithFormDataWithBaseUrl,
  postDataWithFormDataWithToken,
} from "../../Helper/Helper";
import { AuthContext } from "../../Utils/context/AuthContext";
import { ActivityIndicator } from "react-native";
const AdmissionForm = ({ navigation }) => {
  // const [pageloading, setpageloading] = useState(true)
  // State for storeing upi link of al the picture
  const [AadharFrontUribyApi, setAadharFrontUribyApi] = useState();
  const [AadharBackUribyApi, setAadharBackUribyApi] = useState();
  const [HSmarksheetUribyApi, setHSmarksheetUribyApi] = useState();
  const [PassportUribyApi, setPassportUribyApi] = useState();
  const [IncomeCertificateUribyApi, setIncomeCertificateUribyApi] = useState();
  const [DistrictDataaa, setDistrictData] = useState();
  const [stateInfo, setStateInfo] = useState();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userToken } = useContext(AuthContext);

  // console.log(userToken, "hdhwedhwtoken in addmission form");
  // console.log("here is the uri come from the api af", AadharFrontUribyApi);
  // console.log("here is the uri come from the api ab", AadharBackUribyApi);
  // // console.log("here is the uri come from the api hsm",HSmarksheetUribyApi)
  // console.log("here is the uri come from the api pp", PassportUribyApi);
  // console.log(
  //   "here is the uri come from the api ic",
  //   IncomeCertificateUribyApi
  // );

  //States for sending the data in for file upload api
  const [aadharFrontForUpload, setaadharFrontForUpload] = useState();
  // const [aadharFrontForUploads, setaadharFrontForUploadss] = useState()
  const [aadharBackForUpload, setaadharBackForUpload] = useState();
  const [HSMarksheetForUpload, setHSMarksheetForUpload] = useState();
  const [PassportPhotoForUpload, setPassportPhotoForUpload] = useState();
  const [IncomeCertificateForUpload, setIncomeCertificateForUpload] =
    useState();
  const [userDetails, setUserDetails] = useState({
    date_of_birth: "",
  });
  const [isChecked, setChecked] = useState(false);
  const [isCheckedError, setisChckedError] = useState(false);
  const showToast = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      alert(message);
    }
  };

  const route = useRoute();
  const {
    collegeName,
    courseName,
    id,
    aadharRequired,
    IncomeCertificateRequired,
    logo,
    orgID,
    courseid,
    GuardiansDetailsRequired,
    PassportPhotoRequired,
    TermAndConditionRequird,
    EducationFieldRequired,
  } = route.params;
  console.log(
    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
    id,
    aadharRequired,
    IncomeCertificateRequired,
    orgID,
    courseid,
    GuardiansDetailsRequired
  );

  // users data
  const [formErrors, setFormErrors] = useState({});
  const [iswarning, setiswarning] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    roll_number: "",
    total_number: "",
    percentage: "",
    hs_percentage: "",
    grduate_percentage: "",
    fatherName: "",
    motherName: "",
    mobile: "",
    fatherMobile: "",
    whatsapp_number: "",
    address: "",
    police_station: "",
    post_office: "",
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

  const handleInputChangeNumber = (key, value) => {
    if (/^[0-9]*$/.test(value) || value === "") {
      setFormData({ ...formData, [key]: value });
    }
    // setFormData({ ...formData, [key]: value });
  };

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const handleInputBlur = (key) => {
    setFieldTouched({ ...fieldTouched, [key]: true });
    // console.log("first", key);
    validateForm();
  };
  // email
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  // for gender

  const [isDropdownOpengender, setDropdownOpengender] = useState(false);
  const [inputValuegender, setInputValuegender] = useState("");
  //for state
  const [isDropdownOpenstate, setDropdownOpenstate] = useState(false);
  const [inputValuestate, setInputValuestate] = useState("");

  //for district
  const [isDropdownOpendistrict, setDropdownOpendistict] = useState(false);
  const [inputValuedistrict, setInputValuedistrict] = useState("");
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

  //handle togle for state

  const toggleDropdownstate = () => {
    setDropdownOpenstate(!isDropdownOpenstate);
  };

  const toggleDropdowndistrict = () => {
    setDropdownOpendistict(!isDropdownOpendistrict);
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
  const [stateData, setstateData] = useState("");
  // const [DistrictData, setDistrict] = useState("");

  const handleSelectOptiongender = (option) => {
    setInputValuegender(option);
    setGenderData(option);
    setDropdownOpengender(false);
  };

  //state
  const handleSelectOptionstate = (option, id) => {
    setInputValuestate(option);
    setstateData(option);
    setDropdownOpenstate(false);
    getDistrictdata(id);
    // console.log(DistrictDataaa, "jdohcusdhcushohod");
  };
  const handleSelectOptiondistrict = (option) => {
    setInputValuedistrict(option);
    // setDistrict(option);
    setDropdownOpendistict(false);
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
      // setEmailError("");
      setEmailError(null);
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text.trim()) {
      // setEmailError("");
      setEmailError(null);
    }
  };
  const handleSubmission = () => {
    const title = "Admission Form";
    const message = "Form submitted Successfully";
    // setisChckedError(true);
    setIsLoading(true);
    if (
      formData.name &&
      userDetails.date_of_birth &&
      // formData.aadhar_number &&
      (aadharRequired === "no" || formData.aadhar_number) &&
      inputValuegender &&
      email &&
      formData.mobile &&
      formData.religion &&
      formData.address &&
      formData.police_station &&
      formData.post_office &&
      inputValuestate &&
      inputValuedistrict &&
      formData.pincode &&
      formData.whatsapp_number &&
      // (GuardiansDetailsRequired === "yes" || formData.fatherName) &&
      // // formData.fatherName &&
      // (GuardiansDetailsRequired === "yes" || formData.fatherMobile) &&
      // // formData.fatherMobile &&
      // (GuardiansDetailsRequired === "yes" || inputValueoccupation) &&
      // inputValueoccupation &&
      (GuardiansDetailsRequired === "no" ||
        (GuardiansDetailsRequired === "yes" &&
          formData.fatherName &&
          formData.fatherMobile &&
          inputValueoccupation)) &&
      (IncomeCertificateRequired === "no" || formData.income) &&
      // formData.income &&
      (EducationFieldRequired === "no" || inputValueHs) 
      
      // formData.percentage
    ) {
      if (
        (aadharRequired === "no" || AadharFrontUribyApi) &&
        // AadharFrontUribyApi &&
        (aadharRequired === "no" || AadharBackUribyApi) &&
        // AadharBackUribyApi &&
        (PassportPhotoRequired === "no" || PassportUribyApi) &&
        (IncomeCertificateRequired === "no" || IncomeCertificateUribyApi)
        // IncomeCertificateUribyApi
      ) {
        if (
          (!formErrors.mobile &&
            formData.mobile &&
            formData.mobile.trim().length !== 10) ||
          emailError !== null ||
          (!formErrors.whatsapp_number &&
            formData.whatsapp_number &&
            formData.whatsapp_number.trim().length !== 10) ||
          (!formErrors.fatherMobile &&
            formData.fatherMobile &&
            formData.fatherMobile.trim().length !== 10) ||
          (!formErrors.aadhar_number &&
            formData.aadhar_number &&
            formData.aadhar_number.trim().length !== 12)
        ) {
          showToast("Failed! Preview your Deatails");
          setIsLoading(false);
        } else {
          if (isChecked === false) {
            setisChckedError(true);
          }
          if (isChecked) {
            const enquiryDetails = {
              name: formData.name,
              Date_of_Birth: userDetails.date_of_birth,
              // ...(aadharRequired === "no" && {
              //   aadhar_number: formData.aadhar_number,
              // }),
              // aadhar_number: formData.aadhar_number,
              gender: inputValuegender,
              email: email,
              mobile: formData.mobile,
              religion: formData.religion,
              address: formData.address,
              policestation: formData.police_station,
              post_office: formData.post_office,
              state: inputValuestate,
              district: inputValuedistrict,
              pincode: formData.pincode,
              whatsapp_number: formData.whatsapp_number,
              // guardians_name: formData.fatherName,
              // guardian_number: formData.fatherMobile,
              // occupation: inputValueoccupation,
              // ...(IncomeCertificateRequired === "no" && {
              //   income: formData.income,
              // }),
              // income: formData.income,
              hs_Passout: inputValueHs,
            };

            if (IncomeCertificateRequired === "yes") {
              enquiryDetails.income = formData.income;
            }
            if (aadharRequired === "yes") {
              enquiryDetails.aadhar_number = formData.aadhar_number;
            }
            if (formData.percentage) {
              enquiryDetails.madhyamik_percentage = formData.percentage;
            }
            if (formData.hs_percentage) {
              enquiryDetails.hs_percentage = formData.hs_percentage;
            }
            if (formData.grduate_percentage) {
              enquiryDetails.graduate_percentage = formData.grduate_percentage;
            }
            if (GuardiansDetailsRequired === "yes") {
              enquiryDetails.guardians_name = formData.fatherName;
              enquiryDetails.guardian_number = formData.fatherMobile;
              enquiryDetails.occupation = inputValueoccupation;
            }
            let documents = [];

            if (aadharRequired === "yes") {
              documents.push({
                title: "Aadhar Front",
                image: AadharFrontUribyApi,
              });
              documents.push({
                title: "Aadhar Back",
                image: AadharBackUribyApi,
              });
            }
            if (PassportUribyApi === "yes") {
              documents.push({
                title: "PassPort Photo",
                image: PassportUribyApi,
              });
            }

            if (IncomeCertificateRequired === "yes") {
              documents.push({
                title: "Income Certificate",
                image: IncomeCertificateUribyApi,
              });
            }

            const postData = {
              service_id: id,
              organization_course_id: orgID ? orgID : courseid,
              // enquiry_details: {
              //   name: formData.name,
              //   Date_of_Birth: userDetails.date_of_birth,
              //   ...(aadharRequired === "no" && {
              //     aadhar_number: formData.aadhar_number,
              //   }),
              //   // aadhar_number: formData.aadhar_number,
              //   gender: inputValuegender,
              //   email: email,
              //   mobile: formData.mobile,
              //   religion: formData.religion,
              //   address: formData.address,
              //   policestation: formData.police_station,
              //   post_office: formData.post_office,
              //   state: inputValuestate,
              //   district: inputValuedistrict,
              //   pincode: formData.pincode,
              //   whatsapp_number: formData.whatsapp_number,
              //   guardians_name: formData.fatherName,
              //   guardian_number: formData.fatherMobile,
              //   occupation: inputValueoccupation,
              //   ...(IncomeCertificateRequired === "no" && {
              //     income: formData.income,
              //   }),
              //   // income: formData.income,
              //   hs_Passout: inputValueHs,
              //   percentage: formData.percentage,
              // },
              enquiry_details: enquiryDetails,
              // documents: [
              //   { title: "Aadhar Front", image: AadharFrontUribyApi },
              //   { title: "Aadhar Back", image: AadharBackUribyApi },
              //   { title: "PassPort Photo", image: PassportUribyApi },
              //   { title: "Income Certificate", image: IncomeCertificateUribyApi },
              // ],
              // documents: [
              //   ...(aadharRequired === "no"
              //     ? [{ title: "Aadhar Front", image: AadharFrontUribyApi }]
              //     : []),
              //   ...(aadharRequired === "no"
              //     ? [{ title: "Aadhar Back", image: AadharBackUribyApi }]
              //     : []),
              //   { title: "PassPort Photo", image: PassportUribyApi },
              //   ...(IncomeCertificateRequired === "no"
              //     ? [
              //         {
              //           title: "Income Certificate",
              //           image: IncomeCertificateUribyApi,
              //         },
              //       ]
              //     : []),
              //   // { title: "Income Certificate", image: IncomeCertificateUribyApi },
              // ],
              documents: documents,
            };
            // console.log("wwq______________________________________________");
            const formDatablock = objectToFormDatawithnestedObject(postData);
            // console.log("dskdjcjcjdcdjcjclejiejfpierpifp", formDatablock);
            postDataWithFormDataWithToken(
              "student/form-submit",
              formDatablock,
              userToken
            ).then((res) => {
              // console.log(
              //   res?.status,
              //   "staus is coming after submiison of form"
              // );
              // console.log(
              //   res?.message,
              //   "message is coming after submiison of formcvdfvfgghyttttttttttttttttttttttttybrgb"
              // );
              // console.log(res, "++++++++++++++++++++++++++++++++++++++");
              if (res?.status) {
                showToast("Form Submitted Successfully");
                setIsLoading(false);
                navigation.navigate("sucessfully", { title, message });
                setTimeout(() => {
                  navigation.navigate("Dashboard");
                }, 2000);
              } else {
                showToast("Internal Server Error");
                setIsLoading(false);
              }
            });
          } else {
            setIsLoading(false);
          }
        }
      } else {
        showToast("Please Upload all Picture");
        setIsLoading(false);
      }
    } else {
      showToast("Fill up all the fields");
      setIsLoading(false);
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
  const [stateDataapi, setStateDataapi] = useState();
  const getDropdownState = () => {
    const apiUrl = "master/state";

    // Call the getstatedata function with the API URL
    getdata(apiUrl)
      .then((res) => {
        // console.log("Response from API:", res.data);
        setStateDataapi(res?.data);
        // Do something with the response data, e.g., update component state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    getDropdownState();
  }, []);
  const updateFormData = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };
  const updateUserDetails = (field, value) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };
  useEffect(() => {
    getrequestwithtoken("student/profile", userToken).then((res) => {
      if (res?.status) {
        updateFormData("name", res?.data?.name);
        updateFormData("mobile", res?.data?.mobile);
        updateFormData("address", res?.data?.address);
        updateFormData("police_station", res?.data?.police_station);
        updateFormData("pincode", res?.data?.pincode);
        updateFormData("whatsapp_number", res?.data?.whatsapp_number);
        setInputValuegender(res?.data?.gender);
        setEmail(res?.data?.email);
        updateUserDetails("date_of_birth", res?.data?.date_of_birth);

        // name: "",
        // roll_number: "",
        // total_number: "",
        // percentage: "",
        // fatherName: "",
        // motherName: "",
        // mobile: "",
        // fatherMobile: "",
        // whatsapp_number: "",
        // address: "",
        // police_station: "",
        // post_office: "",
        // pincode: "",
        // aadhar_number: "",
        // nationality: "",
        // religion: "",
        // district_id: "",
        // password: "",
        // referral_code: "",
      }
    });
  }, [userToken]);

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
    console.log("console.log::::E::WED:W::WD::D:", permissionResult);
    if (permissionResult.granted === false) {
      alert("Camera permission is required to take photos.");
      return;
    }

    try {
      const imageResult = await ImagePicker.launchCameraAsync();
      console.log(
        imageResult,
        "fdefdefsdvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv1111"
      );

      // console.log("sdkfpf", imageResult);
      if (imageResult.assets[0].uri !== null) {
        if (options === "income") {
          setIncomeCertificateForUpload(imageResult);
          setCapturedImage(imageResult.assets[0].uri);
          console.log("ndhlslsjvjjv;", imageResult.assets[0].uri);
          setModalVisible(false);
          const newtry = getFileData(imageResult);
          console.log(newtry, "sdlkfjoijohguihgiuv");
          const postData = {
            image: newtry,
          };
          // console.log("++++++++++++++++postData",postData);

          const formDatablock = objectToFormData(postData);
          // console.log(formDatablock,"djeifjifgh")
          postDataWithFormDataWithBaseUrl(
            "https://dev.ehostingguru.com/school-shiksha/upload/index.php",
            formDatablock
          ).then((res) => {
            console.log(
              "-----------------res.status in upload----------",
              res.status
            );
            setIncomeCertificateUribyApi(res?.data?.file_name);
          });
        }
        if (options === "passport") {
          setPassportPhotoForUpload(imageResult);
          setCapturedImagePassport(imageResult.assets[0].uri);
          console.log("[][][]];", imageResult.assets[0].uri);
          setModalVisiblePassport(false);
          const newtry = getFileData(imageResult);
          console.log(newtry, "sdlkfjoijohguihgiuv");
          const postData = {
            image: newtry,
          };
          // console.log("++++++++++++++++postData",postData);

          const formDatablock = objectToFormData(postData);
          // console.log(formDatablock,"djeifjifgh")
          postDataWithFormDataWithBaseUrl(
            "https://dev.ehostingguru.com/school-shiksha/upload/index.php",
            formDatablock
          ).then((res) => {
            // console.log(
            //   "-----------------res.status in upload----------",
            //   res.status
            // );
            setPassportUribyApi(res?.data?.file_name);
          });
        }
        // if (options === "HSMarksheet") {
        //   setHSMarksheetForUpload(imageResult)
        //   setCapturedImageHSMarksheet(imageResult.assets[0].uri);
        //   console.log("[][][]];", imageResult.assets[0].uri);
        //   setModalVisibleHSMarksheet(false);
        //   const newtry=getFileData(HSMarksheetForUpload)
        //   console.log(newtry,"sdlkfjoijohguihgiuv")
        //   const postData = {
        //     image : newtry
        //   };
        // // console.log("++++++++++++++++postData",postData);

        //   const formDatablock = objectToFormData(postData);
        //   // console.log(formDatablock,"djeifjifgh")
        //   postDataWithFormDataWithBaseUrl('https://dev.ehostingguru.com/school-shiksha/upload/index.php' ,formDatablock)
        //   .then((res)=>{
        //     console.log("-----------------res.status in upload----------",res.status)
        //     setHSmarksheetUribyApi(res?.data?.file_name)
        //   })
        // }
        if (options === "AddharBack") {
          setaadharBackForUpload(imageResult);
          setCapturedImageAddharBack(imageResult.assets[0].uri);
          // console.log("[][][]];", imageResult.assets[0].uri);
          setModalVisibleAddharBack(false);

          const newtry = getFileData(imageResult);
          // console.log(newtry, "sdlkfjoijohguihgiuv");
          const postData = {
            image: newtry,
          };
          // console.log("++++++++++++++++postData",postData);

          const formDatablock = objectToFormData(postData);
          // console.log(formDatablock,"djeifjifgh")
          postDataWithFormDataWithBaseUrl(
            "https://dev.ehostingguru.com/school-shiksha/upload/index.php",
            formDatablock
          ).then((res) => {
            // console.log(
            //   "-----------------res.status in upload----------",
            //   res.status
            // );
            setAadharBackUribyApi(res?.data?.file_name);
          });
        }
        if (options === "AddharFront") {
          setaadharFrontForUpload(imageResult);
          setCapturedImageAddharfront(imageResult.assets[0].uri);
          // console.log("[][][]];", imageResult.assets[0].uri);
          setModalVisibleAddharfront(false);
          const newtry = getFileData(imageResult);
          // console.log(newtry, "sdlkfjoijohguihgiuv");
          const postData = {
            image: newtry,
          };
          // console.log("++++++++++++++++postData",postData);

          const formDatablock = objectToFormData(postData);
          // console.log(formDatablock,"djeifjifgh")
          postDataWithFormDataWithBaseUrl(
            "https://dev.ehostingguru.com/school-shiksha/upload/index.php",
            formDatablock
          ).then((res) => {
            // console.log(
            //   "-----------------res.status in upload----------",
            //   res.status
            // );
            // console.log(res?.data?.file_name, "kikiukuikmnghnghn");
            setAadharFrontUribyApi(res?.data?.file_name);
            // console.log("here is the uri come from the api af",AadharFrontUribyApi)
          });
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
      setPassportUribyApi();
    }
    if (options === "HSMarksheet") {
      setCapturedImageHSMarksheet(null);
      setFileUriHSMarksheet(null);
    }
    if (options === "AddharBack") {
      setCapturedImageAddharBack(null);
      setFileUriAddharBack(null);
      setAadharBackUribyApi();
    }
    if (options === "AddharFront") {
      setCapturedImageAddharfront(null);
      setFileUri(null);
      setAadharBackUribyApi();
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

      // console.log("File picker result:zxcvvfdfdbgb", result);
      setaadharFrontForUpload(result);

      if (
        !result.cancelled &&
        result.assets &&
        result.assets.length > 0 &&
        result.assets[0].uri
      ) {
        // console.log("File picked:", result.assets[0].uri);
        setFileUri(result.assets[0].uri);
        const newtry = getFileData(result);
        // console.log(newtry, "sdlkfjoijohguihgiuv");
        const postData = {
          image: newtry,
        };
        // console.log("++++++++++++++++postData", postData);

        // const formDatablock = objectToFormData(postData);
        // console.log(formDatablock,"djeifjifgh")
        postDataWithFormDataWithBaseUrl(
          "https://dev.ehostingguru.com/school-shiksha/upload/index.php",
          formDatablock
        ).then((res) => {
          // console.log(
          //   "-----------------res.status in upload----------",
          //   res.status
          // );
          setAadharFrontUribyApi(res?.data?.file_name);
        });
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
    console.log(aadharFrontForUpload);
  };
  // console.log("Addhar card front whole file for upload api  is in " , aadharFrontForUpload)
  //For Addhar Back function
  const pickFileAddharBack = async () => {
    if (isPickingFileAddharBack) {
      // console.log("Document picking in progress");
      return;
    }

    setIsPickingFileAddharBack(true);
    setErrorMessageAddharBack(null);

    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      // console.log("File picker result???????????:", result);
      setaadharBackForUpload(result);

      if (
        !result.canceled &&
        result.assets &&
        result.assets.length > 0 &&
        result.assets[0].uri
      ) {
        // console.log("File picked:", result.assets[0].uri);
        setFileUriAddharBack(result.assets[0].uri);
        const newtry = getFileData(result);
        // console.log(newtry, "sdlkfjoijohguihgiuv");
        const postData = {
          image: newtry,
        };
        // console.log("++++++++++++++++postData", postData);

        const formDatablock = objectToFormData(postData);
        // console.log(formDatablock,"djeifjifgh")
        postDataWithFormDataWithBaseUrl(
          "https://dev.ehostingguru.com/school-shiksha/upload/index.php",
          formDatablock
        ).then((res) => {
          console.log(
            "-----------------res.status in upload----------",
            res.status
          );
          setAadharBackUribyApi(res?.data?.file_name);
        });
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
  // const pickFileHSMarksheet = async () => {
  //   if (isPickingFileHSMarksheet) {
  //     console.log("Document picking in progress");
  //     return;
  //   }

  //   setIsPickingFileHSMarksheet(true);
  //   setErrorMessageHSMarksheet(null);

  //   try {
  //     const result = await DocumentPicker.getDocumentAsync({
  //       type: "*/*",
  //     });

  //     console.log("File picker result:", result);

  //     if (
  //       !result.canceled &&
  //       result.assets &&
  //       result.assets.length > 0 &&
  //       result.assets[0].uri
  //     ) {
  //       console.log("File picked:", result.assets[0].uri);
  //       setFileUriHSMarksheet(result.assets[0].uri);
  //     } else if (result.canceled) {
  //       console.log("File picking cancelled");
  //     } else {
  //       console.log("File picking failed");
  //       setErrorMessageHSMarksheet("File picking failed");
  //     }
  //   } catch (error) {
  //     console.error("Error picking file:", error);
  //     setErrorMessageHSMarksheet("Error picking file");
  //   } finally {
  //     setIsPickingFileHSMarksheet(false);
  //   }
  //   closeModal();
  //   const newtry=getFileData(PassportPhotoForUpload)
  //   console.log(newtry,"sdlkfjoijohguihgiuv")
  //   const postData = {
  //     image : newtry
  //   };
  // console.log("++++++++++++++++postData",postData);

  //   const formDatablock = objectToFormData(postData);
  //   // console.log(formDatablock,"djeifjifgh")
  //   postDataWithFormDataWithBaseUrl('https://dev.ehostingguru.com/school-shiksha/upload/index.php' ,formDatablock)
  //   .then((res)=>{
  //     console.log("-----------------res.status in upload----------",res.status)
  //     setPassportUribyApi(res?.data?.file_name)
  //   })
  // };
  // console.log(formData.name)
  //For PassPort Photo function
  const pickFilePassPortPhoto = async () => {
    if (isPickingFilePassPortPhoto) {
      // console.log("Document picking in progress");
      return;
    }

    setIsPickingFilePassPortPhoto(true);
    setErrorMessagePassPortPhoto(null);

    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });
      setPassportPhotoForUpload(result);
      // console.log("File picker result:", result);

      if (
        !result.canceled &&
        result.assets &&
        result.assets.length > 0 &&
        result.assets[0].uri
      ) {
        // console.log("File picked:", result.assets[0].uri);
        // showToast("Wait For Picture Upload");

        const newtry = getFileData(result);
        // console.log(newtry, "sdlkfjoijohguihgiuv");
        const postData = {
          image: newtry,
        };
        // console.log("++++++++++++++++postData++++++++++++++++++++++++++++++++++", postData);

        setFileUriPassPortPhoto(result.assets[0].uri);
        const formDatablock = objectToFormData(postData);
        console.log(
          "_____________________________________________________________________________________________________"
        );
        // console.log(formDatablock,"djeifjifgh")
        postDataWithFormDataWithBaseUrl(
          "https://dev.ehostingguru.com/school-shiksha/upload/index.php",
          formDatablock
        ).then((res) => {
          console.log(
            "-----------------res.status in upload----------",
            res.status
          );
          console.log(
            res?.data?.file_name,
            "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0"
          );
          setPassportUribyApi(res?.data?.file_name);
          // showToast("Picture Upload Successfully");
        });
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
      setIncomeCertificateForUpload(result);
      console.log("File picker result:", result);

      if (
        !result.canceled &&
        result.assets &&
        result.assets.length > 0 &&
        result.assets[0].uri
      ) {
        console.log("File picked:", result.assets[0].uri);
        setFileUriIncomeCertificate(result.assets[0].uri);
        const newtry = getFileData(result);
        console.log(newtry, "sdlkfjoijohguihgiuv");
        const postData = {
          image: newtry,
        };
        console.log("++++++++++++++++postData", postData);

        const formDatablock = objectToFormData(postData);
        // console.log(formDatablock,"djeifjifgh")
        postDataWithFormDataWithBaseUrl(
          "https://dev.ehostingguru.com/school-shiksha/upload/index.php",
          formDatablock
        ).then((res) => {
          console.log(
            "-----------------res.status in upload----------",
            res.status
          );
          setIncomeCertificateUribyApi(res?.data?.file_name);
        });
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
    setAadharFrontUribyApi();
  };
  // Delete function for Addhar back
  const deleteImageAddharBack = () => {
    setFileUriAddharBack(null);
    setCapturedImageAddharBack(null);
    setAadharBackUribyApi();
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
    setPassportUribyApi();
  };

  //For Income Certifiate
  const deleteImageIncomeCertificate = () => {
    setFileUriIncomeCertificate(null);
    setCapturedImage(null);
    setIncomeCertificateUribyApi();
  };

  //   const [statedata ,setStateData] =useState()
  // const getStateData =()=>{
  //   const apiUrl = "master/state";

  //     // Call the getstatedata function with the API URL
  //     getdata(apiUrl)
  //       .then((res) => {
  //         // console.log('Response from API:', res.data);
  //         setStateData(res?.data);
  //         // Do something with the response data, e.g., update component state
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  // }

  //   useEffect(() => {
  //     // Define the URL you want to fetch data from
  //   getStateData()
  //   }, []);

  const getDistrictdata = (id) => {
    const postData = {
      state_id: id,
    };

    // Convert object data to FormData
    const formData = objectToFormData(postData);

    // Call the postDataWithFormData function with the API URL and FormData
    postDataWithFormData("master/district", formData)
      .then((res) => {
        console.log(
          "Response from API for districtcsdvdfvdvgbfgbgjnyukuimmmu:",
          res?.data
        );
        setDistrictData(res?.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setUserDetails({
      ...userDetails,
      date_of_birth: date.toISOString().split("T")[0],
    });
    hideDatePicker();
  };
  const handleChecklist = () => {
    setChecked(!isChecked);
  };

  // if (pageloading) {
  //   return (
  //     <View>
  //       <Header
  //         title="Application History"
  //         navigateTo={() => navigation.goBack("Home")}
  //       />
  //       <View style={{justifyContent:'center' ,alignItems:'center'  ,height:'90%'}}>
  //       <ActivityIndicator
  //         size="large"
  //         color="#00367E"
  //         style={{justifyContent:'center',alignSelf:'center'}}
  //       />
  //       </View>

  //     </View>
  //   );
  // }
  const truncateMessage = (message, maxLength = 35) => {
    if (message?.length > maxLength) {
      return message?.substring(0, maxLength) + "...";
    }
    return message;
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header
        // title={`${collegeName} College Admission Form`}
        title={`Application Form`}
        navigateTo={navigation?.goBack}
      />
      <ScrollView>
        <View style={styles.main_content}>
          <View style={styles.profile}>
            <View
              style={{
                width: 70,
                height: 70,
                // backgroundColor: "#03357D",
                borderRadius: 50,
              }}
            >
              <Image
                style={{ height: 70, width: 70, borderRadius: 50 }}
                // source={require("../../assets/img/student.png")}
                source={{ uri: logo }}
                resizeMode="cover"
              />
            </View>
            <View style={{ width: "80%", height: "auto" }}>
              <Text style={styles.profileText}>
                {/* {collegeName}  */}
                {truncateMessage(collegeName)}
              </Text>
            </View>
          </View>
          <View style={styles.college_details}>
            <View>
              <Text style={styles.college_details_text}>College Name</Text>
              <TextInput
                style={styles.college_details_input}
                placeholder="Anandamohan College"
                placeholderTextColor={"rgba(166, 166, 166, 1)"}
                value={truncateMessage(collegeName, 40)}
                editable={false}
              />
            </View>
            <View>
              <Text style={styles.college_details_text}>Course Name</Text>
              <TextInput
                style={styles.college_details_input}
                placeholder="B.C.A"
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
                    placeholder="Enter your name"
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
              {/* <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Date of Birth</Text>
                <View style={styles.input_box}>
                  <Image
                    style={styles.iconImage}
                    source={require("../../assets/icons/calendar.png")}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="YYYY/MM/DD"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
              </View> */}

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Date of Birth</Text>

                <TouchableOpacity
                  style={styles.input_box}
                  onPress={showDatePicker}
                >
                  <View>
                    <Image
                      style={styles.iconImage}
                      source={require("../../assets/icons/calendar.png")}
                    />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="YYYY/MM/DD"
                    placeholderTextColor="rgba(166, 166, 166, 1)"
                    value={userDetails.date_of_birth}
                    onChangeText={(text) =>
                      setUserDetails({ ...userDetails, date_of_birth: text })
                    }
                    onFocus={showDatePicker} // Show date picker when input field is focused
                    editable={false} // Make the input field editable
                  />
                </TouchableOpacity>

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>

              {aadharRequired === "yes" && (
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
                      placeholder="Enter your Aadhar number"
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
              )}

              {/* GENDER */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Gender</Text>
                <TouchableOpacity onPress={toggleDropdowngender}>
                  <View style={styles.input_box}>
                    <Image
                      style={styles.iconImage}
                      source={require("../../assets/icons/gender (1).png")}
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
                    placeholder="Enter your Email id"
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
                    placeholder="Enter your Mobile number"
                    keyboardType="numeric"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    value={formData.mobile}
                    onChangeText={(text) =>
                      handleInputChangeNumber("mobile", text)
                    }
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
                    placeholder="Enter your Religion"
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
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Post Office</Text>
                <View style={styles.input_box}>
                  <MaterialCommunityIcons
                    name="police-station"
                    size={16}
                    color="rgba(0, 54, 126, 1)"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Post office"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    value={formData.post_office}
                    onChangeText={(text) =>
                      handleInputChange("post_office", text)
                    }
                    onBlur={() => handleInputBlur("address")}
                  />
                </View>
                {!formErrors.post_office &&
                  !formData.addrpost_officeess &&
                  fieldTouched.post_office && (
                    <Text style={{ color: "red" }}>
                      Please enter Your post office{" "}
                    </Text>
                  )}
              </View>
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Police Station</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/img/police.png")}
                    style={styles.iconImgStyle}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Police station"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    value={formData.police_station}
                    onChangeText={(text) =>
                      handleInputChange("police_station", text)
                    }
                    onBlur={() => handleInputBlur("address")}
                  />
                </View>
                {!formErrors.police_station &&
                  !formData.police_station &&
                  fieldTouched.police_station && (
                    <Text style={{ color: "red" }}>
                      Please enter Your police station{" "}
                    </Text>
                  )}
              </View>
              {/* <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>State</Text>
                <TouchableOpacity>
                  <View style={styles.input_box}>
                    <MaterialCommunityIcons
                      name="police-station"
                      size={16}
                      color="rgba(0, 54, 126, 1)"
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
              </View> */}

              {/* state  */}
              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>State</Text>
                <TouchableOpacity onPress={toggleDropdownstate}>
                  <View style={styles.input_box}>
                    <Image
                      style={styles.iconImage}
                      source={require("../../assets/icons/map.png")}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      value={inputValuestate}
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

              {/* Dropdown of state */}

              {isDropdownOpenstate && (
                <View style={styles.dropdownContainer}>
                  {stateDataapi.map((item) => (
                    <TouchableOpacity
                      style={styles.dropdownOption}
                      onPress={() =>
                        handleSelectOptionstate(item.name, item.id)
                      }
                    >
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
                  {/* <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionstate("1")}
                  >
                    <Text>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionstate("2")}
                  >
                    <Text>2</Text>
                  </TouchableOpacity> */}
                </View>
              )}

              {/* for district  */}

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>District</Text>
                <TouchableOpacity onPress={toggleDropdowndistrict}>
                  <View style={styles.input_box}>
                    <Image
                      style={styles.iconImage}
                      source={require("../../assets/icons/district (1).png")}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Select"
                      value={inputValuedistrict}
                      // onBlur={() => handleSelectOptiongender(inputValuegender)}
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

              {/* Dropdown of District */}

              {isDropdownOpendistrict && (
                <View style={styles.dropdownContainer}>
                  {DistrictDataaa?.length > 0 &&
                    DistrictDataaa?.map((item) => (
                      <TouchableOpacity
                        style={styles.dropdownOption}
                        onPress={() => handleSelectOptiondistrict(item.name)}
                      >
                        <Text>{item.name}</Text>
                      </TouchableOpacity>
                    ))}
                  {/* <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionstate("1")}
                  >
                    <Text>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.dropdownOption}
                    onPress={() => handleSelectOptionstate("2")}
                  >
                    <Text>2</Text>
                  </TouchableOpacity> */}
                </View>
              )}

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>Pin Code</Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/img/password.png")}
                    style={styles.iconImgStyle}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your pincode"
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                    value={formData.pincode}
                    keyboardType="numeric"
                    onChangeText={(text) => handleInputChange("pincode", text)}
                    onBlur={() => handleInputBlur("address")}
                  />
                </View>
                {!formErrors.pincode &&
                  !formData.pincode &&
                  fieldTouched.pincode && (
                    <Text style={{ color: "red" }}>
                      Please enter Your pincode{" "}
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
                      handleInputChangeNumber("whatsapp_number", text)
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
                      Whatsapp number must be 10 digits
                    </Text>
                  )}
              </View>
              {GuardiansDetailsRequired === "yes" && (
                <>
                  <View style={styles.headingg}>
                    <Text style={styles.text}>Family Details</Text>
                  </View>
                  <View style={styles.fields_main}>
                    <Text style={styles.inputHeading}>Guardian's Name</Text>
                    <View style={styles.input_box}>
                      <FontAwesome5
                        name="user"
                        size={14}
                        color="rgba(0, 54, 126, 1)"
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Enter your guardian's name"
                        placeholderTextColor={"rgba(166, 166, 166, 1)"}
                        value={formData.fatherName}
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
                          Guardian's name is required
                        </Text>
                      )}
                  </View>
                  <View style={styles.fields_main}>
                    <Text style={styles.inputHeading}>
                      Guardian's Mobile Number
                    </Text>
                    <View style={styles.input_box}>
                      <Feather
                        name="phone-call"
                        size={15}
                        color="rgba(0, 54, 126, 1)"
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Enter guardian mobile number"
                        keyboardType="numeric"
                        placeholderTextColor={"rgba(166, 166, 166, 1)"}
                        value={formData.fatherMobile}
                        onChangeText={(text) =>
                          handleInputChangeNumber("fatherMobile", text)
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
                    <Text style={styles.inputHeading}>
                      Guardian's Occupation
                    </Text>
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
                </>
              )}

              {/* Guardian Name */}

              {/* income */}
              {IncomeCertificateRequired === "yes" && (
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
                      <Text style={{ color: "red" }}>Income is required</Text>
                    )}
                </View>
              )}

              {/* Member */}
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
              </View> */}
              {EducationFieldRequired === 'yes' && (
                <>
    <View style={styles.headingg}>
                <Text style={styles.text}>Education Details</Text>
              </View>
              

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>10+2 Pass Out Year</Text>
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
                <Text style={styles.inputHeading}>
                  Madhamik Percentage (Optional)
                </Text>

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
             
              </View>

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>
                  HS Percentage (Optional)
                </Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/discount.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Percentage"
                    value={formData.hs_percentage}
                    onChangeText={(text) =>
                      handleInputChange("hs_percentage", text)
                    }
                    onBlur={() => handleInputBlur("percentage")}
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
      
              </View>

              <View style={styles.fields_main}>
                <Text style={styles.inputHeading}>
                  Graduate Percentage (Optional)
                </Text>
                <View style={styles.input_box}>
                  <Image
                    source={require("../../assets/icons/discount.png")}
                    style={styles.iconImage}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Percentage"
                    value={formData.grduate_percentage}
                    onChangeText={(text) =>
                      handleInputChange("grduate_percentage", text)
                    }
                    onBlur={() => handleInputBlur("grduate_percentage")}
                    placeholderTextColor={"rgba(166, 166, 166, 1)"}
                  />
                </View>
         
              </View>
                </>
              )}
          
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
              </View> */}
              {PassportPhotoRequired === "yes" || IncomeCertificateRequired === "yes" || aadharRequired === "yes" && (
   <View style={styles.headingg}>
   <Text style={styles.text}>Upload Documents</Text>
 </View>
              )}
           
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

              {aadharRequired === "yes" && (
                <View>
                  {!capturedImageAddharfront && !fileUri && (
                    <View style={styles.fields_main}>
                      <Text style={styles.inputHeading}>Aadhar Front</Text>
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
                        {AadharFrontUribyApi ? (
                          <Image
                            source={{ uri: fileUri }}
                            style={styles.uploadedImage}
                          />
                        ) : (
                          <View
                            style={[
                              styles.uploadedImage,
                              { justifyContent: "center" },
                            ]}
                          >
                            <ActivityIndicator
                              size="medium"
                              color="rgba(0, 54, 126, 1)"
                            />
                          </View>
                        )}
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
                        <Text style={styles.inputHeading}>Aadhar Front</Text>
                        <TouchableOpacity onPress={deleteImage}>
                          <AntDesign name="delete" size={20} color="#FF0000" />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.imageContainer}>
                        {AadharFrontUribyApi ? (
                          <Image
                            source={{ uri: capturedImageAddharfront }}
                            style={styles.uploadedImage}
                          />
                        ) : (
                          <View
                            style={[
                              styles.uploadedImage,
                              { justifyContent: "center" },
                            ]}
                          >
                            <ActivityIndicator
                              size="medium"
                              color="rgba(0, 54, 126, 1)"
                            />
                          </View>
                        )}
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
              )}

              {/* Addhar Back */}
              {aadharRequired === "yes" && (
                <View>
                  {!capturedImageAddharBack && !fileUriAddharBack && (
                    <View style={styles.fields_main}>
                      <Text style={styles.inputHeading}>Aadhar Back</Text>
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
                        <Text style={styles.inputHeading}>Aadhar Back</Text>
                        <TouchableOpacity
                          onPress={() => deleteDocuments("AddharBack")}
                        >
                          <AntDesign name="delete" size={20} color="#FF0000" />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.imageContainer}>
                        {AadharBackUribyApi ? (
                          <Image
                            source={{ uri: fileUriAddharBack }}
                            style={styles.uploadedImage}
                          />
                        ) : (
                          <View
                            style={[
                              styles.uploadedImage,
                              { justifyContent: "center" },
                            ]}
                          >
                            <ActivityIndicator
                              size="medium"
                              color="rgba(0, 54, 126, 1)"
                            />
                          </View>
                        )}
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
                        <Text style={styles.inputHeading}>Aadhar Back</Text>
                        <TouchableOpacity onPress={deleteImageAddharBack}>
                          <AntDesign name="delete" size={20} color="#FF0000" />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.imageContainer}>
                        {AadharBackUribyApi ? (
                          <Image
                            source={{ uri: capturedImageAddharBack }}
                            style={styles.uploadedImage}
                          />
                        ) : (
                          <View
                            style={[
                              styles.uploadedImage,
                              { justifyContent: "center" },
                            ]}
                          >
                            <ActivityIndicator
                              size="medium"
                              color="rgba(0, 54, 126, 1)"
                            />
                          </View>
                        )}
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
              )}

              {/* H.S.Marksheet */}
              {/* <View>
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
              </View> */}

              {/* Passport photo */}
{PassportPhotoRequired === 'yes' && (
    <View>
    {!capturedImagePassport && !fileUriPassPortPhoto && (
      <View style={styles.fields_main}>
        <Text style={styles.inputHeading}>Passport Size Photo</Text>
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
          <Text style={styles.inputHeading}>
            PassPort Size Photo
          </Text>
          <TouchableOpacity
            onPress={() => deleteDocuments("passport")}
          >
            <AntDesign name="delete" size={20} color="#FF0000" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          {PassportUribyApi ? (
            <Image
              source={{ uri: fileUriPassPortPhoto }}
              style={styles.uploadedImage}
            />
          ) : (
            <View
              style={[
                styles.uploadedImage,
                { justifyContent: "center" },
              ]}
            >
              <ActivityIndicator
                size="medium"
                color="rgba(0, 54, 126, 1)"
              />
            </View>
          )}
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
          <Text style={styles.inputHeading}>
            Passport Size Photo
          </Text>
          <TouchableOpacity onPress={deleteImagePassPortPhoto}>
            <AntDesign name="delete" size={20} color="#FF0000" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          {PassportUribyApi ? (
            <Image
              source={{ uri: capturedImagePassport }}
              style={styles.uploadedImage}
            />
          ) : (
            <View
              style={[
                styles.uploadedImage,
                { justifyContent: "center" },
              ]}
            >
              <ActivityIndicator
                size="medium"
                color="rgba(0, 54, 126, 1)"
              />
            </View>
          )}
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
)}
          
              {/* with modal and upload income */}
              {IncomeCertificateRequired === "yes" && (
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
                        <TouchableOpacity
                          onPress={deleteImageIncomeCertificate}
                        >
                          <AntDesign name="delete" size={20} color="#FF0000" />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.imageContainer}>
                        {IncomeCertificateUribyApi ? (
                          <Image
                            source={{ uri: fileUriIncomeCertificate }}
                            style={styles.uploadedImage}
                          />
                        ) : (
                          <View
                            style={[
                              styles.uploadedImage,
                              { justifyContent: "center" },
                            ]}
                          >
                            <ActivityIndicator
                              size="medium"
                              color="rgba(0, 54, 126, 1)"
                            />
                          </View>
                        )}
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
                        <TouchableOpacity
                          onPress={deleteImageIncomeCertificate}
                        >
                          <AntDesign name="delete" size={20} color="#FF0000" />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.imageContainer}>
                        {IncomeCertificateUribyApi ? (
                          <Image
                            source={{ uri: capturedImage }}
                            style={styles.uploadedImage}
                          />
                        ) : (
                          <View
                            style={[
                              styles.uploadedImage,
                              { justifyContent: "center" },
                            ]}
                          >
                            <ActivityIndicator
                              size="medium"
                              color="rgba(0, 54, 126, 1)"
                            />
                          </View>
                        )}
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
              )}
              {TermAndConditionRequird === "yes" && (
                <View style={styles.conditions}>
                  <Text style={styles.conditiontext}>
                    1. The annual income of the family should be below 2 lakh
                    rupees.{"\n"}
                    {"\n"}2. You have to give exam for this free seat if you
                    can't pass the exam then you will not get free admission.
                    {"\n"}
                    {"\n"}3. After the exam there will be counseling and if you
                    pass there then you can take admission. Must be accompanied
                    by a parent.{"\n"}
                    {"\n"}4. If you don't get the college of your choice or if
                    we don't have contact with the college, we won't have
                    anything to do , you have to take the college you get
                    otherwise you can close the free admission.
                  </Text>
                </View>
              )}

              <View style={[styles.condition_box_main, { gap: 6 }]}>
                <View style={styles.conditions_box}>
                  <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={handleChecklist}
                    color={isChecked ? "rgba(0, 54, 126, 1)" : undefined}
                  />
                  <Text style={styles.text_condition}>
                    I agree with the{" "}
                    <Text style={styles.text_condition1}>
                      Terms & Conditions
                    </Text>
                  </Text>
                </View>
                {isCheckedError && (
                  <Text style={{ color: "red", fontWeight: "600" }}>
                    Please Check The CheckBox
                  </Text>
                )}
              </View>

              <View style={styles.submitButton}>
                <TouchableOpacity onPress={handleSubmission}>
                  <LinearGradient
                    colors={["rgba(3, 53, 125, 1)", "rgba(5, 105, 250, 1)"]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.inputbox_submit}
                  >
                    {isLoading ? (
                      <ActivityIndicator size="small" color="#ffffff" />
                    ) : (
                      <Text style={styles.submitText}>Submit</Text>
                    )}
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
    height: "auto",
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
    borderRadius: 50,
  },
  profileText: {
    fontSize: 25,
    lineHeight: 37.5,
    fontWeight: "600",
    color: "rgba(55, 55, 55, 1)",
    height: "auto",
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
    position: "relative",
    color: "black",
    width: "90%",
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
  iconImgStyle: { height: 15, width: 15, tintColor: "#00367E" },
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
